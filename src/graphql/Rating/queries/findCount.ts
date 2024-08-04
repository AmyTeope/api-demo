import { queryField, nonNull, list } from 'nexus'

export const RatingFindCountQuery = queryField('findManyRatingCount', {
  type: nonNull('Int'),
  args: {
    where: 'RatingWhereInput',
    orderBy: list('RatingOrderByWithRelationInput'),
    cursor: 'RatingWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'RatingScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.rating.count(args as any)
  },
})
