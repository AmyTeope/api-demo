import { queryField, nonNull } from 'nexus'

export const RatingFindUniqueQuery = queryField('findUniqueRating', {
  type: 'Rating',
  args: {
    where: nonNull('RatingWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.rating.findUnique({
      where,
      ...select,
    })
  },
})
