import { mutationField, nonNull } from 'nexus'

export const RatingDeleteOneMutation = mutationField('deleteOneRating', {
  type: 'Rating',
  args: {
    where: nonNull('RatingWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.rating.delete({
      where,
      ...select,
    })
  },
})
