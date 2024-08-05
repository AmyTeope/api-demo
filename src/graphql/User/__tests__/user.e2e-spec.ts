import { ApolloServer } from "apollo-server-express"
import express from "express"
import http from "http"
import concat from "lodash/concat"
import { getGraphQLContext } from "src/app/graphql/context"
import { schema } from "src/app/graphql/schema"
import request from "supertest"
import LinkHeader from "http-link-header"
import { getUserEvents } from "src/utils/github"
import { formatDateKey } from "src/utils/format"

describe("User - GraphQL based HTTP request", () => {
  let app: express.Application;
  let httpServer: http.Server;
  let server: ApolloServer;
  const username = 'daimajia'
  const userId = 5

  describe("getActivityFeed - POST /graphql", () => {
    beforeAll(async () => {
      app = express()
      httpServer = http.createServer(app)
      server = new ApolloServer({
        schema,
        context: getGraphQLContext,

      })
      await server.start()
      server.applyMiddleware({ app })
    })

    afterAll(async () => {
      await server.stop()
    })

    it("should return a successful response", async () => {
      //Get data from DB
      const commentsQuery = {
        query: `query FindManyComment($where: CommentWhereInput!){
              findManyComment(where: $where) {
                  id
                  message
                  userId
                  postId
                  commentedAt
                  createdAt
                  updatedAt
              }
          }
          `,
        variables: { where: { userId: { equals: userId } } }
      }
      const commentRep = await request(httpServer).post("/graphql").send(commentsQuery)
      const commentBody = await commentRep.body

      const ratingsQuery = {
        query: `query FindManyRating($where: RatingWhereInput!){
              findManyRating(where: $where) {
                  id
                  userId
                  rating
                  raterId
                  ratedAt
                  createdAt
                  updatedAt
              }
          }
          `,
        variables: { where: { raterId: { equals: userId }, rating: { gte: 4 } } }
      }
      const ratingRep = await request(httpServer).post("/graphql").send(ratingsQuery)
      const ratingBody = await ratingRep.body

      const postsQuery = {
        query: `query FindManyPost($where: PostWhereInput!){
              findManyPost(where: $where) {
                  id
                  title
                  body
                  userId
                  postedAt
                  createdAt
                  updatedAt
              }
          }
          `,
        variables: { where: { userId: { equals: userId } } }
      }
      const postRep = await request(httpServer).post("/graphql").send(postsQuery)
      const postBody = await postRep.body

      //Get data from GitHub
      const response = await getUserEvents(username, 1, 100)
      const link = LinkHeader.parse(response.headers.link)
      const lastLink = new URLSearchParams(link.get('rel', 'last')[0].uri.split('?')[1])
      const lastPage = Number(lastLink.get('page'))
      let ghEvents = response.data

      if (lastPage > 1) {
        for (let i = 2; i <= lastPage; i++) {
          const resp = await getUserEvents(username, i, 100)
          ghEvents = concat(ghEvents, resp.data)
        }
      }

      ghEvents = formatDateKey(ghEvents, 'created_at', 'createdAt', true)

      let data = concat(commentBody.data.findManyComment, ratingBody.data.findManyRating, postBody.data.findManyPost)
      data = formatDateKey(data, 'createdAt', 'createdAt', false)
      data = concat(data, ghEvents)
      data = data.sort((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf())

      //Start activityFeed
      const limit = 7
      let commentCursor: number | null = null
      let postCursor: number | null = null
      let ratingCursor: number | null = null
      let ghLastCount = 0
      let ghTotalCount = 0

      //Loop through 20 pages
      for (let i = 0; i <= 20; i++) {
        const sliceStart = i * limit
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const activityFeedQuery: any = {
          query: `query GetActivityFeed {
            getActivityFeed(
              userId: ${userId}
              limit: ${limit}
              ghLastCount: ${ghLastCount}
              ghTotalCount: ${ghTotalCount}
              ${commentCursor ? `commentCursor: ${commentCursor}` : ''}
              ${ratingCursor ? `ratingCursor: ${ratingCursor}` : ''}
              ${postCursor ? `postCursor: ${postCursor}` : ''}
            )
          }
        `
        }

        const feedRep = await request(httpServer).post("/graphql").send(activityFeedQuery)
        const feedBody = await feedRep.body
        const feedData = feedBody.data.getActivityFeed

        for (const feed of feedData) {
          const feedKeys = Object.keys(feed)
          if (feedKeys.includes('commentedAt')) {
            commentCursor = feed.id
          } else if (feedKeys.includes('ratedAt')) {
            ratingCursor = feed.id
          } else if (feedKeys.includes('postedAt')) {
            postCursor = feed.id
          } else {
            ghLastCount += 1
            ghTotalCount += 1
          }
        }

        const slicedData = data.slice(sliceStart, sliceStart + limit)

        expect(feedData[0].id).toBe(slicedData[0].id)
        expect(feedData[feedData.length - 1].id).toBe(slicedData[slicedData.length - 1].id)
      }

    })
  })
})


