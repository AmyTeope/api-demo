import { objectType } from 'nexus'

export const Rating = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Rating',
  definition(t) {
    t.int('id')
    t.int('userId')
    t.int('rating')
    t.int('raterId')
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.field('rater', {
      type: 'User',
      resolve(root: any) {
        return root.rater
      },
    })
  },
})
