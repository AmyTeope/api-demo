import { mutationField, nonNull } from 'nexus'

export const RatingDeleteManyMutation = mutationField('deleteManyRating', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'RatingWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.rating.deleteMany({ where } as any)
  },
})
