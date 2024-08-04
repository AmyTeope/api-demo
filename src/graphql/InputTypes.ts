import { enumType, inputObjectType, objectType } from 'nexus'

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: [
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
  ],
})

export const CommentScalarFieldEnum = enumType({
  name: 'CommentScalarFieldEnum',
  members: [
    'id',
    'message',
    'userId',
    'postId',
    'commentedAt',
    'createdAt',
    'updatedAt',
  ],
})

export const PostScalarFieldEnum = enumType({
  name: 'PostScalarFieldEnum',
  members: [
    'id',
    'title',
    'body',
    'userId',
    'postedAt',
    'createdAt',
    'updatedAt',
  ],
})

export const RatingScalarFieldEnum = enumType({
  name: 'RatingScalarFieldEnum',
  members: [
    'id',
    'userId',
    'rating',
    'raterId',
    'ratedAt',
    'createdAt',
    'updatedAt',
  ],
})

export const UserScalarFieldEnum = enumType({
  name: 'UserScalarFieldEnum',
  members: [
    'id',
    'email',
    'name',
    'githubUsername',
    'registeredAt',
    'createdAt',
    'updatedAt',
  ],
})

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
})

export const NullsOrder = enumType({
  name: 'NullsOrder',
  members: ['first', 'last'],
})

export const CommentWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CommentWhereInput' })
    t.list.field('OR', { type: 'CommentWhereInput' })
    t.list.field('NOT', { type: 'CommentWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('message', { type: 'StringFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('postId', { type: 'IntFilter' })
    t.field('commentedAt', { type: 'DateTimeFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('user', { type: 'UserWhereInput' })
    t.field('post', { type: 'PostWhereInput' })
  },
})

export const CommentOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('postId', { type: 'SortOrder' })
    t.field('commentedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('user', { type: 'UserOrderByWithRelationInput' })
    t.field('post', { type: 'PostOrderByWithRelationInput' })
  },
})

export const CommentWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const CommentOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('postId', { type: 'SortOrder' })
    t.field('commentedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'CommentCountOrderByAggregateInput' })
    t.field('_avg', { type: 'CommentAvgOrderByAggregateInput' })
    t.field('_max', { type: 'CommentMaxOrderByAggregateInput' })
    t.field('_min', { type: 'CommentMinOrderByAggregateInput' })
    t.field('_sum', { type: 'CommentSumOrderByAggregateInput' })
  },
})

export const CommentScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'CommentScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'CommentScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'CommentScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('message', { type: 'StringWithAggregatesFilter' })
    t.field('userId', { type: 'IntWithAggregatesFilter' })
    t.field('postId', { type: 'IntWithAggregatesFilter' })
    t.field('commentedAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const PostWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'PostWhereInput' })
    t.list.field('OR', { type: 'PostWhereInput' })
    t.list.field('NOT', { type: 'PostWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('body', { type: 'StringFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('postedAt', { type: 'DateTimeFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('user', { type: 'UserWhereInput' })
    t.field('comments', { type: 'CommentListRelationFilter' })
  },
})

export const PostOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('body', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('postedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('user', { type: 'UserOrderByWithRelationInput' })
    t.field('comments', { type: 'CommentOrderByRelationAggregateInput' })
  },
})

export const PostWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const PostOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('body', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('postedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'PostCountOrderByAggregateInput' })
    t.field('_avg', { type: 'PostAvgOrderByAggregateInput' })
    t.field('_max', { type: 'PostMaxOrderByAggregateInput' })
    t.field('_min', { type: 'PostMinOrderByAggregateInput' })
    t.field('_sum', { type: 'PostSumOrderByAggregateInput' })
  },
})

export const PostScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'PostScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'PostScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'PostScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('title', { type: 'StringWithAggregatesFilter' })
    t.field('body', { type: 'StringWithAggregatesFilter' })
    t.field('userId', { type: 'IntWithAggregatesFilter' })
    t.field('postedAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const RatingWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'RatingWhereInput' })
    t.list.field('OR', { type: 'RatingWhereInput' })
    t.list.field('NOT', { type: 'RatingWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('rating', { type: 'IntFilter' })
    t.field('raterId', { type: 'IntFilter' })
    t.field('ratedAt', { type: 'DateTimeFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('user', { type: 'UserWhereInput' })
    t.field('rater', { type: 'UserWhereInput' })
  },
})

export const RatingOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('raterId', { type: 'SortOrder' })
    t.field('ratedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('user', { type: 'UserOrderByWithRelationInput' })
    t.field('rater', { type: 'UserOrderByWithRelationInput' })
  },
})

export const RatingWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const RatingOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('raterId', { type: 'SortOrder' })
    t.field('ratedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'RatingCountOrderByAggregateInput' })
    t.field('_avg', { type: 'RatingAvgOrderByAggregateInput' })
    t.field('_max', { type: 'RatingMaxOrderByAggregateInput' })
    t.field('_min', { type: 'RatingMinOrderByAggregateInput' })
    t.field('_sum', { type: 'RatingSumOrderByAggregateInput' })
  },
})

export const RatingScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'RatingScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'RatingScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'RatingScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('userId', { type: 'IntWithAggregatesFilter' })
    t.field('rating', { type: 'IntWithAggregatesFilter' })
    t.field('raterId', { type: 'IntWithAggregatesFilter' })
    t.field('ratedAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const UserWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserWhereInput' })
    t.list.field('OR', { type: 'UserWhereInput' })
    t.list.field('NOT', { type: 'UserWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('githubUsername', { type: 'StringNullableFilter' })
    t.field('registeredAt', { type: 'DateTimeFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('posts', { type: 'PostListRelationFilter' })
    t.field('comments', { type: 'CommentListRelationFilter' })
    t.field('myRatings', { type: 'RatingListRelationFilter' })
    t.field('ratings', { type: 'RatingListRelationFilter' })
  },
})

export const UserOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('githubUsername', { type: 'SortOrderInput' })
    t.field('registeredAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('posts', { type: 'PostOrderByRelationAggregateInput' })
    t.field('comments', { type: 'CommentOrderByRelationAggregateInput' })
    t.field('myRatings', { type: 'RatingOrderByRelationAggregateInput' })
    t.field('ratings', { type: 'RatingOrderByRelationAggregateInput' })
  },
})

export const UserWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
  },
})

export const UserOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('githubUsername', { type: 'SortOrderInput' })
    t.field('registeredAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'UserCountOrderByAggregateInput' })
    t.field('_avg', { type: 'UserAvgOrderByAggregateInput' })
    t.field('_max', { type: 'UserMaxOrderByAggregateInput' })
    t.field('_min', { type: 'UserMinOrderByAggregateInput' })
    t.field('_sum', { type: 'UserSumOrderByAggregateInput' })
  },
})

export const UserScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'UserScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('email', { type: 'StringWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('githubUsername', { type: 'StringNullableWithAggregatesFilter' })
    t.field('registeredAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const CommentCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateInput',
  definition(t) {
    t.nonNull.field('message', { type: 'String' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutCommentsInput' })
    t.nonNull.field('post', { type: 'PostCreateNestedOneWithoutCommentsInput' })
  },
})

export const CommentUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('message', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('postId', { type: 'Int' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateInput',
  definition(t) {
    t.field('message', { type: 'String' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutCommentsNestedInput' })
    t.field('post', { type: 'PostUpdateOneRequiredWithoutCommentsNestedInput' })
  },
})

export const CommentUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('message', { type: 'String' })
    t.field('userId', { type: 'Int' })
    t.field('postId', { type: 'Int' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('message', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('postId', { type: 'Int' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyMutationInput',
  definition(t) {
    t.field('message', { type: 'String' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('message', { type: 'String' })
    t.field('userId', { type: 'Int' })
    t.field('postId', { type: 'Int' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutPostsInput' })
    t.field('comments', { type: 'CommentCreateNestedManyWithoutPostInput' })
  },
})

export const PostUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('comments', {
      type: 'CommentUncheckedCreateNestedManyWithoutPostInput',
    })
  },
})

export const PostUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateInput',
  definition(t) {
    t.field('title', { type: 'String' })
    t.field('body', { type: 'String' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutPostsNestedInput' })
    t.field('comments', { type: 'CommentUpdateManyWithoutPostNestedInput' })
  },
})

export const PostUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('title', { type: 'String' })
    t.field('body', { type: 'String' })
    t.field('userId', { type: 'Int' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('comments', {
      type: 'CommentUncheckedUpdateManyWithoutPostNestedInput',
    })
  },
})

export const PostCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyMutationInput',
  definition(t) {
    t.field('title', { type: 'String' })
    t.field('body', { type: 'String' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('title', { type: 'String' })
    t.field('body', { type: 'String' })
    t.field('userId', { type: 'Int' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingCreateInput',
  definition(t) {
    t.nonNull.field('rating', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutRatingsInput' })
    t.nonNull.field('rater', {
      type: 'UserCreateNestedOneWithoutMyRatingsInput',
    })
  },
})

export const RatingUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('rating', { type: 'Int' })
    t.nonNull.field('raterId', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUpdateInput',
  definition(t) {
    t.field('rating', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutRatingsNestedInput' })
    t.field('rater', {
      type: 'UserUpdateOneRequiredWithoutMyRatingsNestedInput',
    })
  },
})

export const RatingUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('rating', { type: 'Int' })
    t.field('raterId', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('rating', { type: 'Int' })
    t.nonNull.field('raterId', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUpdateManyMutationInput',
  definition(t) {
    t.field('rating', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('rating', { type: 'Int' })
    t.field('raterId', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostCreateNestedManyWithoutUserInput' })
    t.field('comments', { type: 'CommentCreateNestedManyWithoutUserInput' })
    t.field('myRatings', { type: 'RatingCreateNestedManyWithoutRaterInput' })
    t.field('ratings', { type: 'RatingCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutUserInput' })
    t.field('comments', {
      type: 'CommentUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('myRatings', {
      type: 'RatingUncheckedCreateNestedManyWithoutRaterInput',
    })
    t.field('ratings', {
      type: 'RatingUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateInput',
  definition(t) {
    t.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostUpdateManyWithoutUserNestedInput' })
    t.field('comments', { type: 'CommentUpdateManyWithoutUserNestedInput' })
    t.field('myRatings', { type: 'RatingUpdateManyWithoutRaterNestedInput' })
    t.field('ratings', { type: 'RatingUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutUserNestedInput' })
    t.field('comments', {
      type: 'CommentUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('myRatings', {
      type: 'RatingUncheckedUpdateManyWithoutRaterNestedInput',
    })
    t.field('ratings', {
      type: 'RatingUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const UserCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyMutationInput',
  definition(t) {
    t.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const UserRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserRelationFilter',
  definition(t) {
    t.field('is', { type: 'UserWhereInput' })
    t.field('isNot', { type: 'UserWhereInput' })
  },
})

export const PostRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostRelationFilter',
  definition(t) {
    t.field('is', { type: 'PostWhereInput' })
    t.field('isNot', { type: 'PostWhereInput' })
  },
})

export const CommentCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('postId', { type: 'SortOrder' })
    t.field('commentedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const CommentAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('postId', { type: 'SortOrder' })
  },
})

export const CommentMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('postId', { type: 'SortOrder' })
    t.field('commentedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const CommentMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('postId', { type: 'SortOrder' })
    t.field('commentedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const CommentSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('postId', { type: 'SortOrder' })
  },
})

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const CommentListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentListRelationFilter',
  definition(t) {
    t.field('every', { type: 'CommentWhereInput' })
    t.field('some', { type: 'CommentWhereInput' })
    t.field('none', { type: 'CommentWhereInput' })
  },
})

export const CommentOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const PostCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('body', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('postedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const PostAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const PostMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('body', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('postedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const PostMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('body', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('postedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const PostSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const RatingCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('raterId', { type: 'SortOrder' })
    t.field('ratedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const RatingAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('raterId', { type: 'SortOrder' })
  },
})

export const RatingMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('raterId', { type: 'SortOrder' })
    t.field('ratedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const RatingMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('raterId', { type: 'SortOrder' })
    t.field('ratedAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const RatingSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('raterId', { type: 'SortOrder' })
  },
})

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const PostListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostListRelationFilter',
  definition(t) {
    t.field('every', { type: 'PostWhereInput' })
    t.field('some', { type: 'PostWhereInput' })
    t.field('none', { type: 'PostWhereInput' })
  },
})

export const RatingListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingListRelationFilter',
  definition(t) {
    t.field('every', { type: 'RatingWhereInput' })
    t.field('some', { type: 'RatingWhereInput' })
    t.field('none', { type: 'RatingWhereInput' })
  },
})

export const SortOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SortOrderInput',
  definition(t) {
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.field('nulls', { type: 'NullsOrder' })
  },
})

export const PostOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const RatingOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const UserCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('githubUsername', { type: 'SortOrder' })
    t.field('registeredAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const UserAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const UserMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('githubUsername', { type: 'SortOrder' })
    t.field('registeredAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const UserMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('githubUsername', { type: 'SortOrder' })
    t.field('registeredAt', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const UserSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const UserCreateNestedOneWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutCommentsInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutCommentsInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutCommentsInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const PostCreateNestedOneWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateNestedOneWithoutCommentsInput',
  definition(t) {
    t.field('create', { type: 'PostUncheckedCreateWithoutCommentsInput' })
    t.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutCommentsInput',
    })
    t.field('connect', { type: 'PostWhereUniqueInput' })
  },
})

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  },
})

export const UserUpdateOneRequiredWithoutCommentsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutCommentsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutCommentsInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutCommentsInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutCommentsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUncheckedUpdateWithoutCommentsInput' })
  },
})

export const PostUpdateOneRequiredWithoutCommentsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateOneRequiredWithoutCommentsNestedInput',
  definition(t) {
    t.field('create', { type: 'PostUncheckedCreateWithoutCommentsInput' })
    t.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutCommentsInput',
    })
    t.field('upsert', { type: 'PostUpsertWithoutCommentsInput' })
    t.field('connect', { type: 'PostWhereUniqueInput' })
    t.field('update', { type: 'PostUncheckedUpdateWithoutCommentsInput' })
  },
})

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const UserCreateNestedOneWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutPostsInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutPostsInput' })
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutPostsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const CommentCreateNestedManyWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateNestedManyWithoutPostInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutPostInput' })
    t.list.field('connectOrCreate', {
      type: 'CommentCreateOrConnectWithoutPostInput',
    })
    t.field('createMany', { type: 'CommentCreateManyPostInputEnvelope' })
    t.list.field('connect', { type: 'CommentWhereUniqueInput' })
  },
})

export const CommentUncheckedCreateNestedManyWithoutPostInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'CommentUncheckedCreateNestedManyWithoutPostInput',
    definition(t) {
      t.list.field('create', { type: 'CommentCreateWithoutPostInput' })
      t.list.field('connectOrCreate', {
        type: 'CommentCreateOrConnectWithoutPostInput',
      })
      t.field('createMany', { type: 'CommentCreateManyPostInputEnvelope' })
      t.list.field('connect', { type: 'CommentWhereUniqueInput' })
    },
  },
)

export const UserUpdateOneRequiredWithoutPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutPostsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutPostsInput' })
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutPostsInput' })
    t.field('upsert', { type: 'UserUpsertWithoutPostsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUncheckedUpdateWithoutPostsInput' })
  },
})

export const CommentUpdateManyWithoutPostNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithoutPostNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutPostInput' })
    t.list.field('connectOrCreate', {
      type: 'CommentCreateOrConnectWithoutPostInput',
    })
    t.list.field('upsert', {
      type: 'CommentUpsertWithWhereUniqueWithoutPostInput',
    })
    t.field('createMany', { type: 'CommentCreateManyPostInputEnvelope' })
    t.list.field('set', { type: 'CommentWhereUniqueInput' })
    t.list.field('disconnect', { type: 'CommentWhereUniqueInput' })
    t.list.field('delete', { type: 'CommentWhereUniqueInput' })
    t.list.field('connect', { type: 'CommentWhereUniqueInput' })
    t.list.field('update', {
      type: 'CommentUpdateWithWhereUniqueWithoutPostInput',
    })
    t.list.field('updateMany', {
      type: 'CommentUpdateManyWithWhereWithoutPostInput',
    })
    t.list.field('deleteMany', { type: 'CommentScalarWhereInput' })
  },
})

export const CommentUncheckedUpdateManyWithoutPostNestedInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'CommentUncheckedUpdateManyWithoutPostNestedInput',
    definition(t) {
      t.list.field('create', { type: 'CommentCreateWithoutPostInput' })
      t.list.field('connectOrCreate', {
        type: 'CommentCreateOrConnectWithoutPostInput',
      })
      t.list.field('upsert', {
        type: 'CommentUpsertWithWhereUniqueWithoutPostInput',
      })
      t.field('createMany', { type: 'CommentCreateManyPostInputEnvelope' })
      t.list.field('set', { type: 'CommentWhereUniqueInput' })
      t.list.field('disconnect', { type: 'CommentWhereUniqueInput' })
      t.list.field('delete', { type: 'CommentWhereUniqueInput' })
      t.list.field('connect', { type: 'CommentWhereUniqueInput' })
      t.list.field('update', {
        type: 'CommentUpdateWithWhereUniqueWithoutPostInput',
      })
      t.list.field('updateMany', {
        type: 'CommentUpdateManyWithWhereWithoutPostInput',
      })
      t.list.field('deleteMany', { type: 'CommentScalarWhereInput' })
    },
  },
)

export const UserCreateNestedOneWithoutRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutRatingsInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutRatingsInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutRatingsInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const UserCreateNestedOneWithoutMyRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutMyRatingsInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutMyRatingsInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutMyRatingsInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const UserUpdateOneRequiredWithoutRatingsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutRatingsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutRatingsInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutRatingsInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutRatingsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUncheckedUpdateWithoutRatingsInput' })
  },
})

export const UserUpdateOneRequiredWithoutMyRatingsNestedInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpdateOneRequiredWithoutMyRatingsNestedInput',
    definition(t) {
      t.field('create', { type: 'UserUncheckedCreateWithoutMyRatingsInput' })
      t.field('connectOrCreate', {
        type: 'UserCreateOrConnectWithoutMyRatingsInput',
      })
      t.field('upsert', { type: 'UserUpsertWithoutMyRatingsInput' })
      t.field('connect', { type: 'UserWhereUniqueInput' })
      t.field('update', { type: 'UserUncheckedUpdateWithoutMyRatingsInput' })
    },
  },
)

export const PostCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'PostCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
  },
})

export const CommentCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'CommentCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'CommentCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'CommentWhereUniqueInput' })
  },
})

export const RatingCreateNestedManyWithoutRaterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingCreateNestedManyWithoutRaterInput',
  definition(t) {
    t.list.field('create', { type: 'RatingCreateWithoutRaterInput' })
    t.list.field('connectOrCreate', {
      type: 'RatingCreateOrConnectWithoutRaterInput',
    })
    t.field('createMany', { type: 'RatingCreateManyRaterInputEnvelope' })
    t.list.field('connect', { type: 'RatingWhereUniqueInput' })
  },
})

export const RatingCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'RatingCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'RatingCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'RatingCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'RatingWhereUniqueInput' })
  },
})

export const PostUncheckedCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'PostCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
  },
})

export const CommentUncheckedCreateNestedManyWithoutUserInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'CommentUncheckedCreateNestedManyWithoutUserInput',
    definition(t) {
      t.list.field('create', { type: 'CommentCreateWithoutUserInput' })
      t.list.field('connectOrCreate', {
        type: 'CommentCreateOrConnectWithoutUserInput',
      })
      t.field('createMany', { type: 'CommentCreateManyUserInputEnvelope' })
      t.list.field('connect', { type: 'CommentWhereUniqueInput' })
    },
  },
)

export const RatingUncheckedCreateNestedManyWithoutRaterInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'RatingUncheckedCreateNestedManyWithoutRaterInput',
    definition(t) {
      t.list.field('create', { type: 'RatingCreateWithoutRaterInput' })
      t.list.field('connectOrCreate', {
        type: 'RatingCreateOrConnectWithoutRaterInput',
      })
      t.field('createMany', { type: 'RatingCreateManyRaterInputEnvelope' })
      t.list.field('connect', { type: 'RatingWhereUniqueInput' })
    },
  },
)

export const RatingUncheckedCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUncheckedCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'RatingCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'RatingCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'RatingCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'RatingWhereUniqueInput' })
  },
})

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const PostUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'PostUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'PostCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'PostWhereUniqueInput' })
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' })
    t.list.field('delete', { type: 'PostWhereUniqueInput' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
    t.list.field('update', {
      type: 'PostUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'PostUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' })
  },
})

export const CommentUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'CommentCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'CommentUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'CommentCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'CommentWhereUniqueInput' })
    t.list.field('disconnect', { type: 'CommentWhereUniqueInput' })
    t.list.field('delete', { type: 'CommentWhereUniqueInput' })
    t.list.field('connect', { type: 'CommentWhereUniqueInput' })
    t.list.field('update', {
      type: 'CommentUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'CommentUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'CommentScalarWhereInput' })
  },
})

export const RatingUpdateManyWithoutRaterNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUpdateManyWithoutRaterNestedInput',
  definition(t) {
    t.list.field('create', { type: 'RatingCreateWithoutRaterInput' })
    t.list.field('connectOrCreate', {
      type: 'RatingCreateOrConnectWithoutRaterInput',
    })
    t.list.field('upsert', {
      type: 'RatingUpsertWithWhereUniqueWithoutRaterInput',
    })
    t.field('createMany', { type: 'RatingCreateManyRaterInputEnvelope' })
    t.list.field('set', { type: 'RatingWhereUniqueInput' })
    t.list.field('disconnect', { type: 'RatingWhereUniqueInput' })
    t.list.field('delete', { type: 'RatingWhereUniqueInput' })
    t.list.field('connect', { type: 'RatingWhereUniqueInput' })
    t.list.field('update', {
      type: 'RatingUpdateWithWhereUniqueWithoutRaterInput',
    })
    t.list.field('updateMany', {
      type: 'RatingUpdateManyWithWhereWithoutRaterInput',
    })
    t.list.field('deleteMany', { type: 'RatingScalarWhereInput' })
  },
})

export const RatingUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'RatingCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'RatingCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'RatingUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'RatingCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'RatingWhereUniqueInput' })
    t.list.field('disconnect', { type: 'RatingWhereUniqueInput' })
    t.list.field('delete', { type: 'RatingWhereUniqueInput' })
    t.list.field('connect', { type: 'RatingWhereUniqueInput' })
    t.list.field('update', {
      type: 'RatingUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'RatingUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'RatingScalarWhereInput' })
  },
})

export const PostUncheckedUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'PostUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'PostCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'PostWhereUniqueInput' })
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' })
    t.list.field('delete', { type: 'PostWhereUniqueInput' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
    t.list.field('update', {
      type: 'PostUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'PostUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' })
  },
})

export const CommentUncheckedUpdateManyWithoutUserNestedInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'CommentUncheckedUpdateManyWithoutUserNestedInput',
    definition(t) {
      t.list.field('create', { type: 'CommentCreateWithoutUserInput' })
      t.list.field('connectOrCreate', {
        type: 'CommentCreateOrConnectWithoutUserInput',
      })
      t.list.field('upsert', {
        type: 'CommentUpsertWithWhereUniqueWithoutUserInput',
      })
      t.field('createMany', { type: 'CommentCreateManyUserInputEnvelope' })
      t.list.field('set', { type: 'CommentWhereUniqueInput' })
      t.list.field('disconnect', { type: 'CommentWhereUniqueInput' })
      t.list.field('delete', { type: 'CommentWhereUniqueInput' })
      t.list.field('connect', { type: 'CommentWhereUniqueInput' })
      t.list.field('update', {
        type: 'CommentUpdateWithWhereUniqueWithoutUserInput',
      })
      t.list.field('updateMany', {
        type: 'CommentUpdateManyWithWhereWithoutUserInput',
      })
      t.list.field('deleteMany', { type: 'CommentScalarWhereInput' })
    },
  },
)

export const RatingUncheckedUpdateManyWithoutRaterNestedInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'RatingUncheckedUpdateManyWithoutRaterNestedInput',
    definition(t) {
      t.list.field('create', { type: 'RatingCreateWithoutRaterInput' })
      t.list.field('connectOrCreate', {
        type: 'RatingCreateOrConnectWithoutRaterInput',
      })
      t.list.field('upsert', {
        type: 'RatingUpsertWithWhereUniqueWithoutRaterInput',
      })
      t.field('createMany', { type: 'RatingCreateManyRaterInputEnvelope' })
      t.list.field('set', { type: 'RatingWhereUniqueInput' })
      t.list.field('disconnect', { type: 'RatingWhereUniqueInput' })
      t.list.field('delete', { type: 'RatingWhereUniqueInput' })
      t.list.field('connect', { type: 'RatingWhereUniqueInput' })
      t.list.field('update', {
        type: 'RatingUpdateWithWhereUniqueWithoutRaterInput',
      })
      t.list.field('updateMany', {
        type: 'RatingUpdateManyWithWhereWithoutRaterInput',
      })
      t.list.field('deleteMany', { type: 'RatingScalarWhereInput' })
    },
  },
)

export const RatingUncheckedUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUncheckedUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'RatingCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'RatingCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'RatingUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'RatingCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'RatingWhereUniqueInput' })
    t.list.field('disconnect', { type: 'RatingWhereUniqueInput' })
    t.list.field('delete', { type: 'RatingWhereUniqueInput' })
    t.list.field('connect', { type: 'RatingWhereUniqueInput' })
    t.list.field('update', {
      type: 'RatingUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'RatingUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'RatingScalarWhereInput' })
  },
})

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
  },
})

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const UserCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostCreateNestedManyWithoutUserInput' })
    t.field('myRatings', { type: 'RatingCreateNestedManyWithoutRaterInput' })
    t.field('ratings', { type: 'RatingCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutUserInput' })
    t.field('myRatings', {
      type: 'RatingUncheckedCreateNestedManyWithoutRaterInput',
    })
    t.field('ratings', {
      type: 'RatingUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutCommentsInput',
    })
  },
})

export const PostCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutPostsInput' })
  },
})

export const PostUncheckedCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostCreateOrConnectWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateOrConnectWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'PostUncheckedCreateWithoutCommentsInput',
    })
  },
})

export const UserUpsertWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'UserUncheckedUpdateWithoutCommentsInput',
    })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutCommentsInput',
    })
  },
})

export const UserUpdateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutCommentsInput',
  definition(t) {
    t.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostUpdateManyWithoutUserNestedInput' })
    t.field('myRatings', { type: 'RatingUpdateManyWithoutRaterNestedInput' })
    t.field('ratings', { type: 'RatingUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutUserNestedInput' })
    t.field('myRatings', {
      type: 'RatingUncheckedUpdateManyWithoutRaterNestedInput',
    })
    t.field('ratings', {
      type: 'RatingUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const PostUpsertWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpsertWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'PostUncheckedUpdateWithoutCommentsInput',
    })
    t.nonNull.field('create', {
      type: 'PostUncheckedCreateWithoutCommentsInput',
    })
  },
})

export const PostUpdateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutCommentsInput',
  definition(t) {
    t.field('title', { type: 'String' })
    t.field('body', { type: 'String' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutPostsNestedInput' })
  },
})

export const PostUncheckedUpdateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('title', { type: 'String' })
    t.field('body', { type: 'String' })
    t.field('userId', { type: 'Int' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutPostsInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('comments', { type: 'CommentCreateNestedManyWithoutUserInput' })
    t.field('myRatings', { type: 'RatingCreateNestedManyWithoutRaterInput' })
    t.field('ratings', { type: 'RatingCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('comments', {
      type: 'CommentUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('myRatings', {
      type: 'RatingUncheckedCreateNestedManyWithoutRaterInput',
    })
    t.field('ratings', {
      type: 'RatingUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutPostsInput' })
  },
})

export const CommentCreateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateWithoutPostInput',
  definition(t) {
    t.nonNull.field('message', { type: 'String' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutCommentsInput' })
  },
})

export const CommentUncheckedCreateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateWithoutPostInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('message', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentCreateOrConnectWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateOrConnectWithoutPostInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'CommentUncheckedCreateWithoutPostInput',
    })
  },
})

export const CommentCreateManyPostInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyPostInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'CommentCreateManyPostInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const UserUpsertWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutPostsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUncheckedUpdateWithoutPostsInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutPostsInput' })
  },
})

export const UserUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutPostsInput',
  definition(t) {
    t.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('comments', { type: 'CommentUpdateManyWithoutUserNestedInput' })
    t.field('myRatings', { type: 'RatingUpdateManyWithoutRaterNestedInput' })
    t.field('ratings', { type: 'RatingUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('comments', {
      type: 'CommentUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('myRatings', {
      type: 'RatingUncheckedUpdateManyWithoutRaterNestedInput',
    })
    t.field('ratings', {
      type: 'RatingUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const CommentUpsertWithWhereUniqueWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpsertWithWhereUniqueWithoutPostInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' })
    t.nonNull.field('update', {
      type: 'CommentUncheckedUpdateWithoutPostInput',
    })
    t.nonNull.field('create', {
      type: 'CommentUncheckedCreateWithoutPostInput',
    })
  },
})

export const CommentUpdateWithWhereUniqueWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithWhereUniqueWithoutPostInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' })
    t.nonNull.field('data', { type: 'CommentUncheckedUpdateWithoutPostInput' })
  },
})

export const CommentUpdateManyWithWhereWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithWhereWithoutPostInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'CommentUncheckedUpdateManyWithoutCommentsInput',
    })
  },
})

export const CommentScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CommentScalarWhereInput' })
    t.list.field('OR', { type: 'CommentScalarWhereInput' })
    t.list.field('NOT', { type: 'CommentScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('message', { type: 'StringFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('postId', { type: 'IntFilter' })
    t.field('commentedAt', { type: 'DateTimeFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
  },
})

export const UserCreateWithoutRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutRatingsInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostCreateNestedManyWithoutUserInput' })
    t.field('comments', { type: 'CommentCreateNestedManyWithoutUserInput' })
    t.field('myRatings', { type: 'RatingCreateNestedManyWithoutRaterInput' })
  },
})

export const UserUncheckedCreateWithoutRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutRatingsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutUserInput' })
    t.field('comments', {
      type: 'CommentUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('myRatings', {
      type: 'RatingUncheckedCreateNestedManyWithoutRaterInput',
    })
  },
})

export const UserCreateOrConnectWithoutRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutRatingsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutRatingsInput',
    })
  },
})

export const UserCreateWithoutMyRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutMyRatingsInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostCreateNestedManyWithoutUserInput' })
    t.field('comments', { type: 'CommentCreateNestedManyWithoutUserInput' })
    t.field('ratings', { type: 'RatingCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutMyRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutMyRatingsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutUserInput' })
    t.field('comments', {
      type: 'CommentUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('ratings', {
      type: 'RatingUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutMyRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutMyRatingsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutMyRatingsInput',
    })
  },
})

export const UserUpsertWithoutRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutRatingsInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'UserUncheckedUpdateWithoutRatingsInput',
    })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutRatingsInput',
    })
  },
})

export const UserUpdateWithoutRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutRatingsInput',
  definition(t) {
    t.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostUpdateManyWithoutUserNestedInput' })
    t.field('comments', { type: 'CommentUpdateManyWithoutUserNestedInput' })
    t.field('myRatings', { type: 'RatingUpdateManyWithoutRaterNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutRatingsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutUserNestedInput' })
    t.field('comments', {
      type: 'CommentUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('myRatings', {
      type: 'RatingUncheckedUpdateManyWithoutRaterNestedInput',
    })
  },
})

export const UserUpsertWithoutMyRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutMyRatingsInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'UserUncheckedUpdateWithoutMyRatingsInput',
    })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutMyRatingsInput',
    })
  },
})

export const UserUpdateWithoutMyRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutMyRatingsInput',
  definition(t) {
    t.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostUpdateManyWithoutUserNestedInput' })
    t.field('comments', { type: 'CommentUpdateManyWithoutUserNestedInput' })
    t.field('ratings', { type: 'RatingUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutMyRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutMyRatingsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('githubUsername', { type: 'String' })
    t.field('registeredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutUserNestedInput' })
    t.field('comments', {
      type: 'CommentUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('ratings', {
      type: 'RatingUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const PostCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutUserInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('comments', { type: 'CommentCreateNestedManyWithoutPostInput' })
  },
})

export const PostUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('comments', {
      type: 'CommentUncheckedCreateNestedManyWithoutPostInput',
    })
  },
})

export const PostCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('create', { type: 'PostUncheckedCreateWithoutUserInput' })
  },
})

export const PostCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyUserInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'PostCreateManyUserInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const CommentCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateWithoutUserInput',
  definition(t) {
    t.nonNull.field('message', { type: 'String' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nonNull.field('post', { type: 'PostCreateNestedOneWithoutCommentsInput' })
  },
})

export const CommentUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('message', { type: 'String' })
    t.nonNull.field('postId', { type: 'Int' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'CommentUncheckedCreateWithoutUserInput',
    })
  },
})

export const CommentCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyUserInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'CommentCreateManyUserInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const RatingCreateWithoutRaterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingCreateWithoutRaterInput',
  definition(t) {
    t.nonNull.field('rating', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutRatingsInput' })
  },
})

export const RatingUncheckedCreateWithoutRaterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUncheckedCreateWithoutRaterInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('rating', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingCreateOrConnectWithoutRaterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingCreateOrConnectWithoutRaterInput',
  definition(t) {
    t.nonNull.field('where', { type: 'RatingWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'RatingUncheckedCreateWithoutRaterInput',
    })
  },
})

export const RatingCreateManyRaterInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingCreateManyRaterInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'RatingCreateManyRaterInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const RatingCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingCreateWithoutUserInput',
  definition(t) {
    t.nonNull.field('rating', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nonNull.field('rater', {
      type: 'UserCreateNestedOneWithoutMyRatingsInput',
    })
  },
})

export const RatingUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('rating', { type: 'Int' })
    t.nonNull.field('raterId', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'RatingWhereUniqueInput' })
    t.nonNull.field('create', { type: 'RatingUncheckedCreateWithoutUserInput' })
  },
})

export const RatingCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingCreateManyUserInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'RatingCreateManyUserInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const PostUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('update', { type: 'PostUncheckedUpdateWithoutUserInput' })
    t.nonNull.field('create', { type: 'PostUncheckedCreateWithoutUserInput' })
  },
})

export const PostUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('data', { type: 'PostUncheckedUpdateWithoutUserInput' })
  },
})

export const PostUpdateManyWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithWhereWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'PostUncheckedUpdateManyWithoutPostsInput',
    })
  },
})

export const PostScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'PostScalarWhereInput' })
    t.list.field('OR', { type: 'PostScalarWhereInput' })
    t.list.field('NOT', { type: 'PostScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('body', { type: 'StringFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('postedAt', { type: 'DateTimeFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
  },
})

export const CommentUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' })
    t.nonNull.field('update', {
      type: 'CommentUncheckedUpdateWithoutUserInput',
    })
    t.nonNull.field('create', {
      type: 'CommentUncheckedCreateWithoutUserInput',
    })
  },
})

export const CommentUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' })
    t.nonNull.field('data', { type: 'CommentUncheckedUpdateWithoutUserInput' })
  },
})

export const CommentUpdateManyWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithWhereWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'CommentUncheckedUpdateManyWithoutCommentsInput',
    })
  },
})

export const RatingUpsertWithWhereUniqueWithoutRaterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUpsertWithWhereUniqueWithoutRaterInput',
  definition(t) {
    t.nonNull.field('where', { type: 'RatingWhereUniqueInput' })
    t.nonNull.field('update', {
      type: 'RatingUncheckedUpdateWithoutRaterInput',
    })
    t.nonNull.field('create', {
      type: 'RatingUncheckedCreateWithoutRaterInput',
    })
  },
})

export const RatingUpdateWithWhereUniqueWithoutRaterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUpdateWithWhereUniqueWithoutRaterInput',
  definition(t) {
    t.nonNull.field('where', { type: 'RatingWhereUniqueInput' })
    t.nonNull.field('data', { type: 'RatingUncheckedUpdateWithoutRaterInput' })
  },
})

export const RatingUpdateManyWithWhereWithoutRaterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUpdateManyWithWhereWithoutRaterInput',
  definition(t) {
    t.nonNull.field('where', { type: 'RatingScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'RatingUncheckedUpdateManyWithoutMyRatingsInput',
    })
  },
})

export const RatingScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'RatingScalarWhereInput' })
    t.list.field('OR', { type: 'RatingScalarWhereInput' })
    t.list.field('NOT', { type: 'RatingScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('rating', { type: 'IntFilter' })
    t.field('raterId', { type: 'IntFilter' })
    t.field('ratedAt', { type: 'DateTimeFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
  },
})

export const RatingUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'RatingWhereUniqueInput' })
    t.nonNull.field('update', { type: 'RatingUncheckedUpdateWithoutUserInput' })
    t.nonNull.field('create', { type: 'RatingUncheckedCreateWithoutUserInput' })
  },
})

export const RatingUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'RatingWhereUniqueInput' })
    t.nonNull.field('data', { type: 'RatingUncheckedUpdateWithoutUserInput' })
  },
})

export const RatingUpdateManyWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUpdateManyWithWhereWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'RatingScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'RatingUncheckedUpdateManyWithoutRatingsInput',
    })
  },
})

export const CommentCreateManyPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyPostInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('message', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentUpdateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithoutPostInput',
  definition(t) {
    t.field('message', { type: 'String' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutCommentsNestedInput' })
  },
})

export const CommentUncheckedUpdateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateWithoutPostInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('message', { type: 'String' })
    t.field('userId', { type: 'Int' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentUncheckedUpdateManyWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateManyWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('message', { type: 'String' })
    t.field('userId', { type: 'Int' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('message', { type: 'String' })
    t.nonNull.field('postId', { type: 'Int' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingCreateManyRaterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingCreateManyRaterInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('rating', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingCreateManyUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('rating', { type: 'Int' })
    t.nonNull.field('raterId', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutUserInput',
  definition(t) {
    t.field('title', { type: 'String' })
    t.field('body', { type: 'String' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('comments', { type: 'CommentUpdateManyWithoutPostNestedInput' })
  },
})

export const PostUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('title', { type: 'String' })
    t.field('body', { type: 'String' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('comments', {
      type: 'CommentUncheckedUpdateManyWithoutPostNestedInput',
    })
  },
})

export const PostUncheckedUpdateManyWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('title', { type: 'String' })
    t.field('body', { type: 'String' })
    t.field('postedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithoutUserInput',
  definition(t) {
    t.field('message', { type: 'String' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('post', { type: 'PostUpdateOneRequiredWithoutCommentsNestedInput' })
  },
})

export const CommentUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('message', { type: 'String' })
    t.field('postId', { type: 'Int' })
    t.field('commentedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingUpdateWithoutRaterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUpdateWithoutRaterInput',
  definition(t) {
    t.field('rating', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutRatingsNestedInput' })
  },
})

export const RatingUncheckedUpdateWithoutRaterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUncheckedUpdateWithoutRaterInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('rating', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingUncheckedUpdateManyWithoutMyRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUncheckedUpdateManyWithoutMyRatingsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('rating', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUpdateWithoutUserInput',
  definition(t) {
    t.field('rating', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('rater', {
      type: 'UserUpdateOneRequiredWithoutMyRatingsNestedInput',
    })
  },
})

export const RatingUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('rating', { type: 'Int' })
    t.field('raterId', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingUncheckedUpdateManyWithoutRatingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RatingUncheckedUpdateManyWithoutRatingsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('rating', { type: 'Int' })
    t.field('raterId', { type: 'Int' })
    t.field('ratedAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const AggregateComment = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateComment',
  definition(t) {
    t.nullable.field('_count', { type: 'CommentCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'CommentAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'CommentSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'CommentMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'CommentMaxAggregateOutputType' })
  },
})

export const AggregatePost = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregatePost',
  definition(t) {
    t.nullable.field('_count', { type: 'PostCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'PostAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'PostSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'PostMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'PostMaxAggregateOutputType' })
  },
})

export const AggregateRating = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateRating',
  definition(t) {
    t.nullable.field('_count', { type: 'RatingCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'RatingAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'RatingSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'RatingMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'RatingMaxAggregateOutputType' })
  },
})

export const AggregateUser = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUser',
  definition(t) {
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'UserAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'UserSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' })
  },
})

export const CommentCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('message', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('postId', { type: 'Int' })
    t.field('commentedAt', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const CommentAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('userId', { type: 'Float' })
    t.nullable.field('postId', { type: 'Float' })
  },
})

export const CommentSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('postId', { type: 'Int' })
  },
})

export const CommentMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('message', { type: 'String' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('postId', { type: 'Int' })
    t.nullable.field('commentedAt', { type: 'DateTime' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('message', { type: 'String' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('postId', { type: 'Int' })
    t.nullable.field('commentedAt', { type: 'DateTime' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostCountOutputType',
  definition(t) {
    t.field('comments', { type: 'Int' })
  },
})

export const PostCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('title', { type: 'Int' })
    t.field('body', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('postedAt', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const PostAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('userId', { type: 'Float' })
  },
})

export const PostSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
  },
})

export const PostMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('body', { type: 'String' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('postedAt', { type: 'DateTime' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('body', { type: 'String' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('postedAt', { type: 'DateTime' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'RatingCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('rating', { type: 'Int' })
    t.field('raterId', { type: 'Int' })
    t.field('ratedAt', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const RatingAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'RatingAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('userId', { type: 'Float' })
    t.nullable.field('rating', { type: 'Float' })
    t.nullable.field('raterId', { type: 'Float' })
  },
})

export const RatingSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'RatingSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('rating', { type: 'Int' })
    t.nullable.field('raterId', { type: 'Int' })
  },
})

export const RatingMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'RatingMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('rating', { type: 'Int' })
    t.nullable.field('raterId', { type: 'Int' })
    t.nullable.field('ratedAt', { type: 'DateTime' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const RatingMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'RatingMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('rating', { type: 'Int' })
    t.nullable.field('raterId', { type: 'Int' })
    t.nullable.field('ratedAt', { type: 'DateTime' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountOutputType',
  definition(t) {
    t.field('posts', { type: 'Int' })
    t.field('comments', { type: 'Int' })
    t.field('myRatings', { type: 'Int' })
    t.field('ratings', { type: 'Int' })
  },
})

export const UserCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('githubUsername', { type: 'Int' })
    t.field('registeredAt', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const UserAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const UserSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const UserMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('githubUsername', { type: 'String' })
    t.nullable.field('registeredAt', { type: 'DateTime' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('githubUsername', { type: 'String' })
    t.nullable.field('registeredAt', { type: 'DateTime' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})
