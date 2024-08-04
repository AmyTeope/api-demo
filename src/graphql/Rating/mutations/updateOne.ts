import { mutationField, nonNull } from 'nexus'

export const RatingUpdateOneMutation = mutationField('updateOneRating', {
  type: nonNull('Rating'),
  args: {
    data: nonNull('RatingUpdateInput'),
    where: nonNull('RatingWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.rating.update({
      where,
      data,
      ...select,
    })
  },
})
