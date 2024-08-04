import { queryField, nonNull, list } from 'nexus'

export const RatingFindManyQuery = queryField('findManyRating', {
  type: nonNull(list(nonNull('Rating'))),
  args: {
    where: 'RatingWhereInput',
    orderBy: list('RatingOrderByWithRelationInput'),
    cursor: 'RatingWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'RatingScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.rating.findMany({
      ...args,
      ...select,
    })
  },
})
