import { queryField, list } from 'nexus'

export const RatingAggregateQuery = queryField('aggregateRating', {
  type: 'AggregateRating',
  args: {
    where: 'RatingWhereInput',
    orderBy: list('RatingOrderByWithRelationInput'),
    cursor: 'RatingWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.rating.aggregate({ ...args, ...select }) as any
  },
})
