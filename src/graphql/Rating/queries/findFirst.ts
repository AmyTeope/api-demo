import { queryField, list } from 'nexus'

export const RatingFindFirstQuery = queryField('findFirstRating', {
  type: 'Rating',
  args: {
    where: 'RatingWhereInput',
    orderBy: list('RatingOrderByWithRelationInput'),
    cursor: 'RatingWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'RatingScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.rating.findFirst({
      ...args,
      ...select,
    })
  },
})
