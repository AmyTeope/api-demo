import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('email')
    t.string('name')
    t.nullable.string('githubUsername')
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('posts', {
      type: 'Post',
      args: {
        where: 'PostWhereInput',
        orderBy: 'PostOrderByWithRelationInput',
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PostScalarFieldEnum',
      },
      resolve(root: any) {
        return root.posts
      },
    })
    t.list.field('comments', {
      type: 'Comment',
      args: {
        where: 'CommentWhereInput',
        orderBy: 'CommentOrderByWithRelationInput',
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CommentScalarFieldEnum',
      },
      resolve(root: any) {
        return root.comments
      },
    })
    t.list.field('myRatings', {
      type: 'Rating',
      args: {
        where: 'RatingWhereInput',
        orderBy: 'RatingOrderByWithRelationInput',
        cursor: 'RatingWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'RatingScalarFieldEnum',
      },
      resolve(root: any) {
        return root.myRatings
      },
    })
    t.list.field('ratings', {
      type: 'Rating',
      args: {
        where: 'RatingWhereInput',
        orderBy: 'RatingOrderByWithRelationInput',
        cursor: 'RatingWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'RatingScalarFieldEnum',
      },
      resolve(root: any) {
        return root.ratings
      },
    })
    t.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
    t.field('avgRating', {
      type: 'Float',
      async resolve(root: any, _args, { prisma }) {
        const avg = await prisma.rating.aggregate({
          _avg: {
            rating: true,
          },
          where: {
            userId: root.id
          }
        })
        return avg._avg.rating.toFixed(2)
      },
    })
  },
})
