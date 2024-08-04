import { mutationField, nonNull } from 'nexus'

export const RatingCreateOneMutation = mutationField('createOneRating', {
  type: nonNull('Rating'),
  args: {
    data: nonNull('RatingCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.rating.create({
      data,
      ...select,
    })
  },
})
