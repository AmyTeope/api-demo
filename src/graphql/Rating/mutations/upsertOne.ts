import { mutationField, nonNull } from 'nexus'

export const RatingUpsertOneMutation = mutationField('upsertOneRating', {
  type: nonNull('Rating'),
  args: {
    where: nonNull('RatingWhereUniqueInput'),
    create: nonNull('RatingCreateInput'),
    update: nonNull('RatingUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.rating.upsert({
      ...args,
      ...select,
    })
  },
})
