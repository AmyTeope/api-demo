import { nonNull, nullable, queryField } from 'nexus'
import concat from 'lodash/concat'
import take from 'lodash/take'
import slice from 'lodash/slice'
import { getUserEvents } from 'src/utils/github'
import { formatDateKey } from 'src/utils/format'

export const GetActivityFeedQuery = queryField('getActivityFeed', {
  type: 'Json',
  args: {
    userId: nonNull('Int'),
    commentCursor: nullable('Int'),
    postCursor: nullable('Int'),
    ratingCursor: nullable('Int'),
    limit: nonNull('Int'),
    ghLastCount: nullable('Int'),
    ghTotalCount: nullable('Int'),
  },
  async resolve(_parent, { userId, commentCursor, postCursor, ratingCursor, limit, ghLastCount, ghTotalCount }, { prisma }) {
    const ghUsername = await (await prisma.user.findUnique({
      where: { id: userId },
      select: { githubUsername: true }
    })).githubUsername

    //Get comments by cursor pagination
    const comments = await prisma.comment.findMany({
      where: {
        userId,
        ...(commentCursor && { id: { lt: commentCursor } }),
      },
      orderBy: { createdAt: 'desc' },
      take: limit
    })

    //Get posts by cursor pagination
    const posts = await prisma.post.findMany({
      where: {
        userId,
        ...(postCursor && { id: { lt: postCursor } }),
      },
      orderBy: { createdAt: 'desc' },
      take: limit
    })

    //Get ratings by cursor pagination
    const ratings = await prisma.rating.findMany({
      where: {
        raterId: userId,
        rating: { gte: 4 },
        ...(ratingCursor && { id: { lt: ratingCursor } }),
      },
      orderBy: { createdAt: 'desc' },
      take: limit
    })

    //Combine table rows
    let data = concat(comments, posts, ratings)

    //Get github events for user
    if (ghUsername) {
      //Check if last ghCount was equal to the limit on the page
      const eqToLimit = limit === ghLastCount

      //If less than the limit where shown on the page then set the take to last size plus limit
      const ghTake = eqToLimit ? limit : (ghLastCount || 0) + limit

      //Determine which page to load based on how many it's already shown and
      //how many it needs per page
      const ghPage = Math.floor((ghTotalCount || 0) / ghTake) + 1

      //Get github events using github utils
      let ghEvents = (await getUserEvents(ghUsername, ghPage, ghTake)).data

      //Convert github key created_at to createdAt and value to new Date
      if (ghEvents) {
        //Remove the last events already shown
        if (ghTotalCount && ghTotalCount % ghTake !== 0) ghEvents = slice(ghEvents, (ghLastCount || 0))
        ghEvents = formatDateKey(ghEvents, 'created_at', 'createdAt', true)
      }

      data = concat(data, ghEvents)
    }

    //Sort event in desc & take by limit
    data = take(
      data.sort((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf()),
      limit
    )

    return data
  },
})
