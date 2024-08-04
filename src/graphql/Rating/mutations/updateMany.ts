import { mutationField, nonNull } from 'nexus'

export const RatingUpdateManyMutation = mutationField('updateManyRating', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('RatingUpdateManyMutationInput'),
    where: 'RatingWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.rating.updateMany(args as any)
  },
})
