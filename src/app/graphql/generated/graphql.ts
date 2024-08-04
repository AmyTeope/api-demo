export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * The `BigInt` scalar type represents non-fractional signed whole numeric values.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
   */
  BigInt: { input: any; output: any };
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: { input: any; output: any };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any };
  /** An arbitrary-precision Decimal type */
  Decimal: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: { input: any; output: any };
};

export type AggregateComment = {
  __typename?: "AggregateComment";
  _avg?: Maybe<CommentAvgAggregateOutputType>;
  _count?: Maybe<CommentCountAggregateOutputType>;
  _max?: Maybe<CommentMaxAggregateOutputType>;
  _min?: Maybe<CommentMinAggregateOutputType>;
  _sum?: Maybe<CommentSumAggregateOutputType>;
};

export type AggregatePost = {
  __typename?: "AggregatePost";
  _avg?: Maybe<PostAvgAggregateOutputType>;
  _count?: Maybe<PostCountAggregateOutputType>;
  _max?: Maybe<PostMaxAggregateOutputType>;
  _min?: Maybe<PostMinAggregateOutputType>;
  _sum?: Maybe<PostSumAggregateOutputType>;
};

export type AggregateRating = {
  __typename?: "AggregateRating";
  _avg?: Maybe<RatingAvgAggregateOutputType>;
  _count?: Maybe<RatingCountAggregateOutputType>;
  _max?: Maybe<RatingMaxAggregateOutputType>;
  _min?: Maybe<RatingMinAggregateOutputType>;
  _sum?: Maybe<RatingSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: "AggregateUser";
  _avg?: Maybe<UserAvgAggregateOutputType>;
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  _sum?: Maybe<UserSumAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: "BatchPayload";
  count: Scalars["Int"]["output"];
};

export type Comment = {
  __typename?: "Comment";
  commentedAt: Scalars["DateTime"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  message: Scalars["String"]["output"];
  post: Post;
  postId: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  user: User;
  userId: Scalars["Int"]["output"];
};

export type CommentAvgAggregateOutputType = {
  __typename?: "CommentAvgAggregateOutputType";
  id?: Maybe<Scalars["Float"]["output"]>;
  postId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

export type CommentAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentCountAggregateOutputType = {
  __typename?: "CommentCountAggregateOutputType";
  _all: Scalars["Int"]["output"];
  commentedAt: Scalars["Int"]["output"];
  createdAt: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  message: Scalars["Int"]["output"];
  postId: Scalars["Int"]["output"];
  updatedAt: Scalars["Int"]["output"];
  userId: Scalars["Int"]["output"];
};

export type CommentCountOrderByAggregateInput = {
  commentedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentCreateInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  message: Scalars["String"]["input"];
  post: PostCreateNestedOneWithoutCommentsInput;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateManyInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  message: Scalars["String"]["input"];
  postId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId: Scalars["Int"]["input"];
};

export type CommentCreateManyPostInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  message: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId: Scalars["Int"]["input"];
};

export type CommentCreateManyPostInputEnvelope = {
  data: CommentCreateManyPostInput;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CommentCreateManyUserInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  message: Scalars["String"]["input"];
  postId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CommentCreateManyUserInputEnvelope = {
  data: CommentCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CommentCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutPostInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutPostInput>>>;
  createMany?: InputMaybe<CommentCreateManyPostInputEnvelope>;
};

export type CommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutUserInput>>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
};

export type CommentCreateOrConnectWithoutPostInput = {
  create: CommentUncheckedCreateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUserInput = {
  create: CommentUncheckedCreateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutPostInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  message: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateWithoutUserInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  message: Scalars["String"]["input"];
  post: PostCreateNestedOneWithoutCommentsInput;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregateOutputType = {
  __typename?: "CommentMaxAggregateOutputType";
  commentedAt?: Maybe<Scalars["DateTime"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  postId?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userId?: Maybe<Scalars["Int"]["output"]>;
};

export type CommentMaxOrderByAggregateInput = {
  commentedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentMinAggregateOutputType = {
  __typename?: "CommentMinAggregateOutputType";
  commentedAt?: Maybe<Scalars["DateTime"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  postId?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userId?: Maybe<Scalars["Int"]["output"]>;
};

export type CommentMinOrderByAggregateInput = {
  commentedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithAggregationInput = {
  _avg?: InputMaybe<CommentAvgOrderByAggregateInput>;
  _count?: InputMaybe<CommentCountOrderByAggregateInput>;
  _max?: InputMaybe<CommentMaxOrderByAggregateInput>;
  _min?: InputMaybe<CommentMinOrderByAggregateInput>;
  _sum?: InputMaybe<CommentSumOrderByAggregateInput>;
  commentedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithRelationInput = {
  commentedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  CommentedAt = "commentedAt",
  CreatedAt = "createdAt",
  Id = "id",
  Message = "message",
  PostId = "postId",
  UpdatedAt = "updatedAt",
  UserId = "userId",
}

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  commentedAt?: InputMaybe<DateTimeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  message?: InputMaybe<StringFilter>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<CommentScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CommentScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CommentScalarWhereWithAggregatesInput>>>;
  commentedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  message?: InputMaybe<StringWithAggregatesFilter>;
  postId?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type CommentSumAggregateOutputType = {
  __typename?: "CommentSumAggregateOutputType";
  id?: Maybe<Scalars["Int"]["output"]>;
  postId?: Maybe<Scalars["Int"]["output"]>;
  userId?: Maybe<Scalars["Int"]["output"]>;
};

export type CommentSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentUncheckedCreateInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  message: Scalars["String"]["input"];
  postId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId: Scalars["Int"]["input"];
};

export type CommentUncheckedCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutPostInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutPostInput>>>;
  createMany?: InputMaybe<CommentCreateManyPostInputEnvelope>;
};

export type CommentUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutUserInput>>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
};

export type CommentUncheckedCreateWithoutPostInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  message: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId: Scalars["Int"]["input"];
};

export type CommentUncheckedCreateWithoutUserInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  message: Scalars["String"]["input"];
  postId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CommentUncheckedUpdateInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  postId?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentUncheckedUpdateManyInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  postId?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentUncheckedUpdateManyWithoutCommentsInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutPostInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutPostInput>>>;
  createMany?: InputMaybe<CommentCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutPostInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutPostInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutPostInput>>>;
};

export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutUserInput>>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type CommentUncheckedUpdateWithoutPostInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentUncheckedUpdateWithoutUserInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  postId?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CommentUpdateInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutCommentsNestedInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
};

export type CommentUpdateManyMutationInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutUserInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutPostInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutPostInput>>>;
  createMany?: InputMaybe<CommentCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutPostInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutPostInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutPostInput>>>;
};

export type CommentUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutUserInput>>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  data: CommentUncheckedUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutUserInput = {
  data: CommentUncheckedUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutPostInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
};

export type CommentUpdateWithoutUserInput = {
  commentedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutCommentsNestedInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  create: CommentUncheckedCreateWithoutPostInput;
  update: CommentUncheckedUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutUserInput = {
  create: CommentUncheckedCreateWithoutUserInput;
  update: CommentUncheckedUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CommentWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CommentWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CommentWhereInput>>>;
  commentedAt?: InputMaybe<DateTimeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  message?: InputMaybe<StringFilter>;
  post?: InputMaybe<PostWhereInput>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<IntFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars["Int"]["input"]>;
  divide?: InputMaybe<Scalars["Int"]["input"]>;
  increment?: InputMaybe<Scalars["Int"]["input"]>;
  multiply?: InputMaybe<Scalars["Int"]["input"]>;
  set?: InputMaybe<Scalars["Int"]["input"]>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  createOneComment: Comment;
  createOnePost: Post;
  createOneRating: Rating;
  createOneUser: User;
  deleteManyComment: BatchPayload;
  deleteManyPost: BatchPayload;
  deleteManyRating: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneComment?: Maybe<Comment>;
  deleteOnePost?: Maybe<Post>;
  deleteOneRating?: Maybe<Rating>;
  deleteOneUser?: Maybe<User>;
  updateManyComment: BatchPayload;
  updateManyPost: BatchPayload;
  updateManyRating: BatchPayload;
  updateManyUser: BatchPayload;
  updateOneComment: Comment;
  updateOnePost: Post;
  updateOneRating: Rating;
  updateOneUser: User;
  upsertOneComment: Comment;
  upsertOnePost: Post;
  upsertOneRating: Rating;
  upsertOneUser: User;
};

export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};

export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};

export type MutationCreateOneRatingArgs = {
  data: RatingCreateInput;
};

export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};

export type MutationDeleteManyCommentArgs = {
  where?: InputMaybe<CommentWhereInput>;
};

export type MutationDeleteManyPostArgs = {
  where?: InputMaybe<PostWhereInput>;
};

export type MutationDeleteManyRatingArgs = {
  where?: InputMaybe<RatingWhereInput>;
};

export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};

export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};

export type MutationDeleteOneRatingArgs = {
  where: RatingWhereUniqueInput;
};

export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: InputMaybe<CommentWhereInput>;
};

export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: InputMaybe<PostWhereInput>;
};

export type MutationUpdateManyRatingArgs = {
  data: RatingUpdateManyMutationInput;
  where?: InputMaybe<RatingWhereInput>;
};

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};

export type MutationUpdateOneCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type MutationUpdateOneRatingArgs = {
  data: RatingUpdateInput;
  where: RatingWhereUniqueInput;
};

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpsertOneCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type MutationUpsertOnePostArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type MutationUpsertOneRatingArgs = {
  create: RatingCreateInput;
  update: RatingUpdateInput;
  where: RatingWhereUniqueInput;
};

export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]["input"]>;
};

export enum NullsOrder {
  First = "first",
  Last = "last",
}

export type Post = {
  __typename?: "Post";
  _count: PostCountOutputType;
  body: Scalars["String"]["output"];
  comments: Array<Comment>;
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  postedAt: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  user: User;
  userId: Scalars["Int"]["output"];
};

export type PostCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<CommentScalarFieldEnum>;
  orderBy?: InputMaybe<CommentOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CommentWhereInput>;
};

export type PostAvgAggregateOutputType = {
  __typename?: "PostAvgAggregateOutputType";
  id?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

export type PostAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostCountAggregateOutputType = {
  __typename?: "PostCountAggregateOutputType";
  _all: Scalars["Int"]["output"];
  body: Scalars["Int"]["output"];
  createdAt: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  postedAt: Scalars["Int"]["output"];
  title: Scalars["Int"]["output"];
  updatedAt: Scalars["Int"]["output"];
  userId: Scalars["Int"]["output"];
};

export type PostCountOrderByAggregateInput = {
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postedAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostCountOutputType = {
  __typename?: "PostCountOutputType";
  comments: Scalars["Int"]["output"];
};

export type PostCreateInput = {
  body: Scalars["String"]["input"];
  comments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user: UserCreateNestedOneWithoutPostsInput;
};

export type PostCreateManyInput = {
  body: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId: Scalars["Int"]["input"];
};

export type PostCreateManyUserInput = {
  body: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PostCreateManyUserInputEnvelope = {
  data: PostCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<PostWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PostCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PostCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PostCreateManyUserInputEnvelope>;
};

export type PostCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PostUncheckedCreateWithoutCommentsInput>;
};

export type PostCreateOrConnectWithoutCommentsInput = {
  create: PostUncheckedCreateWithoutCommentsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutUserInput = {
  create: PostUncheckedCreateWithoutUserInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutCommentsInput = {
  body: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user: UserCreateNestedOneWithoutPostsInput;
};

export type PostCreateWithoutUserInput = {
  body: Scalars["String"]["input"];
  comments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostMaxAggregateOutputType = {
  __typename?: "PostMaxAggregateOutputType";
  body?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  postedAt?: Maybe<Scalars["DateTime"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userId?: Maybe<Scalars["Int"]["output"]>;
};

export type PostMaxOrderByAggregateInput = {
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postedAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostMinAggregateOutputType = {
  __typename?: "PostMinAggregateOutputType";
  body?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  postedAt?: Maybe<Scalars["DateTime"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userId?: Maybe<Scalars["Int"]["output"]>;
};

export type PostMinOrderByAggregateInput = {
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postedAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostOrderByWithAggregationInput = {
  _avg?: InputMaybe<PostAvgOrderByAggregateInput>;
  _count?: InputMaybe<PostCountOrderByAggregateInput>;
  _max?: InputMaybe<PostMaxOrderByAggregateInput>;
  _min?: InputMaybe<PostMinOrderByAggregateInput>;
  _sum?: InputMaybe<PostSumOrderByAggregateInput>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postedAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
  body?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postedAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type PostRelationFilter = {
  is?: InputMaybe<PostWhereInput>;
  isNot?: InputMaybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  Body = "body",
  CreatedAt = "createdAt",
  Id = "id",
  PostedAt = "postedAt",
  Title = "title",
  UpdatedAt = "updatedAt",
  UserId = "userId",
}

export type PostScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<PostScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PostScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PostScalarWhereInput>>>;
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  postedAt?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<PostScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PostScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PostScalarWhereWithAggregatesInput>>>;
  body?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  postedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type PostSumAggregateOutputType = {
  __typename?: "PostSumAggregateOutputType";
  id?: Maybe<Scalars["Int"]["output"]>;
  userId?: Maybe<Scalars["Int"]["output"]>;
};

export type PostSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostUncheckedCreateInput = {
  body: Scalars["String"]["input"];
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutPostInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId: Scalars["Int"]["input"];
};

export type PostUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<PostWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PostCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PostCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PostCreateManyUserInputEnvelope>;
};

export type PostUncheckedCreateWithoutCommentsInput = {
  body: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId: Scalars["Int"]["input"];
};

export type PostUncheckedCreateWithoutUserInput = {
  body: Scalars["String"]["input"];
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutPostInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PostUncheckedUpdateInput = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutPostNestedInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PostUncheckedUpdateManyInput = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PostUncheckedUpdateManyWithoutPostsInput = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PostUncheckedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<PostWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PostCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PostCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PostCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<PostWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PostScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PostWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PostWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PostUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PostUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PostUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type PostUncheckedUpdateWithoutCommentsInput = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PostUncheckedUpdateWithoutUserInput = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutPostNestedInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PostUpdateInput = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  comments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPostsNestedInput>;
};

export type PostUpdateManyMutationInput = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PostUpdateManyWithWhereWithoutUserInput = {
  data: PostUncheckedUpdateManyWithoutPostsInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<PostWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PostCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PostCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PostCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<PostWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PostScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PostWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PostWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PostUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PostUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PostUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PostUncheckedCreateWithoutCommentsInput>;
  update?: InputMaybe<PostUncheckedUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<PostUpsertWithoutCommentsInput>;
};

export type PostUpdateWithWhereUniqueWithoutUserInput = {
  data: PostUncheckedUpdateWithoutUserInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutCommentsInput = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPostsNestedInput>;
};

export type PostUpdateWithoutUserInput = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  comments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  postedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PostUpsertWithWhereUniqueWithoutUserInput = {
  create: PostUncheckedCreateWithoutUserInput;
  update: PostUncheckedUpdateWithoutUserInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutCommentsInput = {
  create: PostUncheckedCreateWithoutCommentsInput;
  update: PostUncheckedUpdateWithoutCommentsInput;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<PostWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PostWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PostWhereInput>>>;
  body?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  postedAt?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<IntFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  aggregateComment?: Maybe<AggregateComment>;
  aggregatePost?: Maybe<AggregatePost>;
  aggregateRating?: Maybe<AggregateRating>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstComment?: Maybe<Comment>;
  findFirstPost?: Maybe<Post>;
  findFirstRating?: Maybe<Rating>;
  findFirstUser?: Maybe<User>;
  findManyComment: Array<Comment>;
  findManyCommentCount: Scalars["Int"]["output"];
  findManyPost: Array<Post>;
  findManyPostCount: Scalars["Int"]["output"];
  findManyRating: Array<Rating>;
  findManyRatingCount: Scalars["Int"]["output"];
  findManyUser: Array<User>;
  findManyUserCount: Scalars["Int"]["output"];
  findUniqueComment?: Maybe<Comment>;
  findUniquePost?: Maybe<Post>;
  findUniqueRating?: Maybe<Rating>;
  findUniqueUser?: Maybe<User>;
};

export type QueryAggregateCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<CommentOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CommentWhereInput>;
};

export type QueryAggregatePostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<PostOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PostWhereInput>;
};

export type QueryAggregateRatingArgs = {
  cursor?: InputMaybe<RatingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<RatingOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<RatingWhereInput>;
};

export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindFirstCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<CommentScalarFieldEnum>;
  orderBy?: InputMaybe<Array<InputMaybe<CommentOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CommentWhereInput>;
};

export type QueryFindFirstPostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<PostScalarFieldEnum>;
  orderBy?: InputMaybe<Array<InputMaybe<PostOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PostWhereInput>;
};

export type QueryFindFirstRatingArgs = {
  cursor?: InputMaybe<RatingWhereUniqueInput>;
  distinct?: InputMaybe<RatingScalarFieldEnum>;
  orderBy?: InputMaybe<Array<InputMaybe<RatingOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<RatingWhereInput>;
};

export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<UserScalarFieldEnum>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindManyCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<CommentScalarFieldEnum>;
  orderBy?: InputMaybe<Array<InputMaybe<CommentOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CommentWhereInput>;
};

export type QueryFindManyCommentCountArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<CommentScalarFieldEnum>;
  orderBy?: InputMaybe<Array<InputMaybe<CommentOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CommentWhereInput>;
};

export type QueryFindManyPostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<PostScalarFieldEnum>;
  orderBy?: InputMaybe<Array<InputMaybe<PostOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PostWhereInput>;
};

export type QueryFindManyPostCountArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<PostScalarFieldEnum>;
  orderBy?: InputMaybe<Array<InputMaybe<PostOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PostWhereInput>;
};

export type QueryFindManyRatingArgs = {
  cursor?: InputMaybe<RatingWhereUniqueInput>;
  distinct?: InputMaybe<RatingScalarFieldEnum>;
  orderBy?: InputMaybe<Array<InputMaybe<RatingOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<RatingWhereInput>;
};

export type QueryFindManyRatingCountArgs = {
  cursor?: InputMaybe<RatingWhereUniqueInput>;
  distinct?: InputMaybe<RatingScalarFieldEnum>;
  orderBy?: InputMaybe<Array<InputMaybe<RatingOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<RatingWhereInput>;
};

export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<UserScalarFieldEnum>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindManyUserCountArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<UserScalarFieldEnum>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindUniqueCommentArgs = {
  where: CommentWhereUniqueInput;
};

export type QueryFindUniquePostArgs = {
  where: PostWhereUniqueInput;
};

export type QueryFindUniqueRatingArgs = {
  where: RatingWhereUniqueInput;
};

export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export type Rating = {
  __typename?: "Rating";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  ratedAt: Scalars["DateTime"]["output"];
  rater: User;
  raterId: Scalars["Int"]["output"];
  rating: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  user: User;
  userId: Scalars["Int"]["output"];
};

export type RatingAvgAggregateOutputType = {
  __typename?: "RatingAvgAggregateOutputType";
  id?: Maybe<Scalars["Float"]["output"]>;
  raterId?: Maybe<Scalars["Float"]["output"]>;
  rating?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

export type RatingAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  raterId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RatingCountAggregateOutputType = {
  __typename?: "RatingCountAggregateOutputType";
  _all: Scalars["Int"]["output"];
  createdAt: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  ratedAt: Scalars["Int"]["output"];
  raterId: Scalars["Int"]["output"];
  rating: Scalars["Int"]["output"];
  updatedAt: Scalars["Int"]["output"];
  userId: Scalars["Int"]["output"];
};

export type RatingCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ratedAt?: InputMaybe<SortOrder>;
  raterId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RatingCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  rater: UserCreateNestedOneWithoutMyRatingsInput;
  rating: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user: UserCreateNestedOneWithoutRatingsInput;
};

export type RatingCreateManyInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  raterId: Scalars["Int"]["input"];
  rating: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId: Scalars["Int"]["input"];
};

export type RatingCreateManyRaterInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  rating: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId: Scalars["Int"]["input"];
};

export type RatingCreateManyRaterInputEnvelope = {
  data: RatingCreateManyRaterInput;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type RatingCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  raterId: Scalars["Int"]["input"];
  rating: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type RatingCreateManyUserInputEnvelope = {
  data: RatingCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type RatingCreateNestedManyWithoutRaterInput = {
  connect?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<RatingCreateOrConnectWithoutRaterInput>>>;
  create?: InputMaybe<Array<InputMaybe<RatingCreateWithoutRaterInput>>>;
  createMany?: InputMaybe<RatingCreateManyRaterInputEnvelope>;
};

export type RatingCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<RatingCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<RatingCreateWithoutUserInput>>>;
  createMany?: InputMaybe<RatingCreateManyUserInputEnvelope>;
};

export type RatingCreateOrConnectWithoutRaterInput = {
  create: RatingUncheckedCreateWithoutRaterInput;
  where: RatingWhereUniqueInput;
};

export type RatingCreateOrConnectWithoutUserInput = {
  create: RatingUncheckedCreateWithoutUserInput;
  where: RatingWhereUniqueInput;
};

export type RatingCreateWithoutRaterInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  rating: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user: UserCreateNestedOneWithoutRatingsInput;
};

export type RatingCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  rater: UserCreateNestedOneWithoutMyRatingsInput;
  rating: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type RatingListRelationFilter = {
  every?: InputMaybe<RatingWhereInput>;
  none?: InputMaybe<RatingWhereInput>;
  some?: InputMaybe<RatingWhereInput>;
};

export type RatingMaxAggregateOutputType = {
  __typename?: "RatingMaxAggregateOutputType";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  ratedAt?: Maybe<Scalars["DateTime"]["output"]>;
  raterId?: Maybe<Scalars["Int"]["output"]>;
  rating?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userId?: Maybe<Scalars["Int"]["output"]>;
};

export type RatingMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ratedAt?: InputMaybe<SortOrder>;
  raterId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RatingMinAggregateOutputType = {
  __typename?: "RatingMinAggregateOutputType";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  ratedAt?: Maybe<Scalars["DateTime"]["output"]>;
  raterId?: Maybe<Scalars["Int"]["output"]>;
  rating?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userId?: Maybe<Scalars["Int"]["output"]>;
};

export type RatingMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ratedAt?: InputMaybe<SortOrder>;
  raterId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RatingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RatingOrderByWithAggregationInput = {
  _avg?: InputMaybe<RatingAvgOrderByAggregateInput>;
  _count?: InputMaybe<RatingCountOrderByAggregateInput>;
  _max?: InputMaybe<RatingMaxOrderByAggregateInput>;
  _min?: InputMaybe<RatingMinOrderByAggregateInput>;
  _sum?: InputMaybe<RatingSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ratedAt?: InputMaybe<SortOrder>;
  raterId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RatingOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ratedAt?: InputMaybe<SortOrder>;
  rater?: InputMaybe<UserOrderByWithRelationInput>;
  raterId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum RatingScalarFieldEnum {
  CreatedAt = "createdAt",
  Id = "id",
  RatedAt = "ratedAt",
  RaterId = "raterId",
  Rating = "rating",
  UpdatedAt = "updatedAt",
  UserId = "userId",
}

export type RatingScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<RatingScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<RatingScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RatingScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  ratedAt?: InputMaybe<DateTimeFilter>;
  raterId?: InputMaybe<IntFilter>;
  rating?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type RatingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<RatingScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<RatingScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RatingScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  ratedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  raterId?: InputMaybe<IntWithAggregatesFilter>;
  rating?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type RatingSumAggregateOutputType = {
  __typename?: "RatingSumAggregateOutputType";
  id?: Maybe<Scalars["Int"]["output"]>;
  raterId?: Maybe<Scalars["Int"]["output"]>;
  rating?: Maybe<Scalars["Int"]["output"]>;
  userId?: Maybe<Scalars["Int"]["output"]>;
};

export type RatingSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  raterId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RatingUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  raterId: Scalars["Int"]["input"];
  rating: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId: Scalars["Int"]["input"];
};

export type RatingUncheckedCreateNestedManyWithoutRaterInput = {
  connect?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<RatingCreateOrConnectWithoutRaterInput>>>;
  create?: InputMaybe<Array<InputMaybe<RatingCreateWithoutRaterInput>>>;
  createMany?: InputMaybe<RatingCreateManyRaterInputEnvelope>;
};

export type RatingUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<RatingCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<RatingCreateWithoutUserInput>>>;
  createMany?: InputMaybe<RatingCreateManyUserInputEnvelope>;
};

export type RatingUncheckedCreateWithoutRaterInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  rating: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId: Scalars["Int"]["input"];
};

export type RatingUncheckedCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  raterId: Scalars["Int"]["input"];
  rating: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type RatingUncheckedUpdateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  raterId?: InputMaybe<Scalars["Int"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RatingUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  raterId?: InputMaybe<Scalars["Int"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RatingUncheckedUpdateManyWithoutMyRatingsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RatingUncheckedUpdateManyWithoutRaterNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<RatingCreateOrConnectWithoutRaterInput>>>;
  create?: InputMaybe<Array<InputMaybe<RatingCreateWithoutRaterInput>>>;
  createMany?: InputMaybe<RatingCreateManyRaterInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<RatingScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<RatingUpdateWithWhereUniqueWithoutRaterInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<RatingUpdateManyWithWhereWithoutRaterInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<RatingUpsertWithWhereUniqueWithoutRaterInput>>>;
};

export type RatingUncheckedUpdateManyWithoutRatingsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  raterId?: InputMaybe<Scalars["Int"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type RatingUncheckedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<RatingCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<RatingCreateWithoutUserInput>>>;
  createMany?: InputMaybe<RatingCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<RatingScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<RatingUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<RatingUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<RatingUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type RatingUncheckedUpdateWithoutRaterInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RatingUncheckedUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  raterId?: InputMaybe<Scalars["Int"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type RatingUpdateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  rater?: InputMaybe<UserUpdateOneRequiredWithoutMyRatingsNestedInput>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRatingsNestedInput>;
};

export type RatingUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type RatingUpdateManyWithWhereWithoutRaterInput = {
  data: RatingUncheckedUpdateManyWithoutMyRatingsInput;
  where: RatingScalarWhereInput;
};

export type RatingUpdateManyWithWhereWithoutUserInput = {
  data: RatingUncheckedUpdateManyWithoutRatingsInput;
  where: RatingScalarWhereInput;
};

export type RatingUpdateManyWithoutRaterNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<RatingCreateOrConnectWithoutRaterInput>>>;
  create?: InputMaybe<Array<InputMaybe<RatingCreateWithoutRaterInput>>>;
  createMany?: InputMaybe<RatingCreateManyRaterInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<RatingScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<RatingUpdateWithWhereUniqueWithoutRaterInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<RatingUpdateManyWithWhereWithoutRaterInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<RatingUpsertWithWhereUniqueWithoutRaterInput>>>;
};

export type RatingUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<RatingCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<RatingCreateWithoutUserInput>>>;
  createMany?: InputMaybe<RatingCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<RatingScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<RatingWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<RatingUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<RatingUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<RatingUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type RatingUpdateWithWhereUniqueWithoutRaterInput = {
  data: RatingUncheckedUpdateWithoutRaterInput;
  where: RatingWhereUniqueInput;
};

export type RatingUpdateWithWhereUniqueWithoutUserInput = {
  data: RatingUncheckedUpdateWithoutUserInput;
  where: RatingWhereUniqueInput;
};

export type RatingUpdateWithoutRaterInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRatingsNestedInput>;
};

export type RatingUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ratedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  rater?: InputMaybe<UserUpdateOneRequiredWithoutMyRatingsNestedInput>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type RatingUpsertWithWhereUniqueWithoutRaterInput = {
  create: RatingUncheckedCreateWithoutRaterInput;
  update: RatingUncheckedUpdateWithoutRaterInput;
  where: RatingWhereUniqueInput;
};

export type RatingUpsertWithWhereUniqueWithoutUserInput = {
  create: RatingUncheckedCreateWithoutUserInput;
  update: RatingUncheckedUpdateWithoutUserInput;
  where: RatingWhereUniqueInput;
};

export type RatingWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<RatingWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<RatingWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RatingWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  ratedAt?: InputMaybe<DateTimeFilter>;
  rater?: InputMaybe<UserWhereInput>;
  raterId?: InputMaybe<IntFilter>;
  rating?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<IntFilter>;
};

export type RatingWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export enum TransactionIsolationLevel {
  ReadCommitted = "ReadCommitted",
  ReadUncommitted = "ReadUncommitted",
  RepeatableRead = "RepeatableRead",
  Serializable = "Serializable",
}

export type User = {
  __typename?: "User";
  _count: UserCountOutputType;
  comments: Array<Comment>;
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  githubUsername?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  myRatings: Array<Rating>;
  name: Scalars["String"]["output"];
  posts: Array<Post>;
  ratings: Array<Rating>;
  registeredAt: Scalars["DateTime"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type UserCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<CommentScalarFieldEnum>;
  orderBy?: InputMaybe<CommentOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CommentWhereInput>;
};

export type UserMyRatingsArgs = {
  cursor?: InputMaybe<RatingWhereUniqueInput>;
  distinct?: InputMaybe<RatingScalarFieldEnum>;
  orderBy?: InputMaybe<RatingOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<RatingWhereInput>;
};

export type UserPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<PostScalarFieldEnum>;
  orderBy?: InputMaybe<PostOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PostWhereInput>;
};

export type UserRatingsArgs = {
  cursor?: InputMaybe<RatingWhereUniqueInput>;
  distinct?: InputMaybe<RatingScalarFieldEnum>;
  orderBy?: InputMaybe<RatingOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<RatingWhereInput>;
};

export type UserAvgAggregateOutputType = {
  __typename?: "UserAvgAggregateOutputType";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCountAggregateOutputType = {
  __typename?: "UserCountAggregateOutputType";
  _all: Scalars["Int"]["output"];
  createdAt: Scalars["Int"]["output"];
  email: Scalars["Int"]["output"];
  githubUsername: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  name: Scalars["Int"]["output"];
  registeredAt: Scalars["Int"]["output"];
  updatedAt: Scalars["Int"]["output"];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  githubUsername?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  registeredAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCountOutputType = {
  __typename?: "UserCountOutputType";
  comments: Scalars["Int"]["output"];
  myRatings: Scalars["Int"]["output"];
  posts: Scalars["Int"]["output"];
  ratings: Scalars["Int"]["output"];
};

export type UserCreateInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  myRatings?: InputMaybe<RatingCreateNestedManyWithoutRaterInput>;
  name: Scalars["String"]["input"];
  posts?: InputMaybe<PostCreateNestedManyWithoutUserInput>;
  ratings?: InputMaybe<RatingCreateNestedManyWithoutUserInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutMyRatingsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMyRatingsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutMyRatingsInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutPostsInput>;
};

export type UserCreateNestedOneWithoutRatingsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRatingsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutRatingsInput>;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserUncheckedCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMyRatingsInput = {
  create: UserUncheckedCreateWithoutMyRatingsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  create: UserUncheckedCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRatingsInput = {
  create: UserUncheckedCreateWithoutRatingsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCommentsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  myRatings?: InputMaybe<RatingCreateNestedManyWithoutRaterInput>;
  name: Scalars["String"]["input"];
  posts?: InputMaybe<PostCreateNestedManyWithoutUserInput>;
  ratings?: InputMaybe<RatingCreateNestedManyWithoutUserInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserCreateWithoutMyRatingsInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  posts?: InputMaybe<PostCreateNestedManyWithoutUserInput>;
  ratings?: InputMaybe<RatingCreateNestedManyWithoutUserInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserCreateWithoutPostsInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  myRatings?: InputMaybe<RatingCreateNestedManyWithoutRaterInput>;
  name: Scalars["String"]["input"];
  ratings?: InputMaybe<RatingCreateNestedManyWithoutUserInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserCreateWithoutRatingsInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  myRatings?: InputMaybe<RatingCreateNestedManyWithoutRaterInput>;
  name: Scalars["String"]["input"];
  posts?: InputMaybe<PostCreateNestedManyWithoutUserInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserMaxAggregateOutputType = {
  __typename?: "UserMaxAggregateOutputType";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  githubUsername?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  registeredAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  githubUsername?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  registeredAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: "UserMinAggregateOutputType";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  githubUsername?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  registeredAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  githubUsername?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  registeredAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  githubUsername?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  registeredAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  githubUsername?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  myRatings?: InputMaybe<RatingOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
  ratings?: InputMaybe<RatingOrderByRelationAggregateInput>;
  registeredAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = "createdAt",
  Email = "email",
  GithubUsername = "githubUsername",
  Id = "id",
  Name = "name",
  RegisteredAt = "registeredAt",
  UpdatedAt = "updatedAt",
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  githubUsername?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  registeredAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: "UserSumAggregateOutputType";
  id?: Maybe<Scalars["Int"]["output"]>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUncheckedCreateInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  myRatings?: InputMaybe<RatingUncheckedCreateNestedManyWithoutRaterInput>;
  name: Scalars["String"]["input"];
  posts?: InputMaybe<PostUncheckedCreateNestedManyWithoutUserInput>;
  ratings?: InputMaybe<RatingUncheckedCreateNestedManyWithoutUserInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUncheckedCreateWithoutCommentsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  myRatings?: InputMaybe<RatingUncheckedCreateNestedManyWithoutRaterInput>;
  name: Scalars["String"]["input"];
  posts?: InputMaybe<PostUncheckedCreateNestedManyWithoutUserInput>;
  ratings?: InputMaybe<RatingUncheckedCreateNestedManyWithoutUserInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUncheckedCreateWithoutMyRatingsInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  posts?: InputMaybe<PostUncheckedCreateNestedManyWithoutUserInput>;
  ratings?: InputMaybe<RatingUncheckedCreateNestedManyWithoutUserInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUncheckedCreateWithoutPostsInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  myRatings?: InputMaybe<RatingUncheckedCreateNestedManyWithoutRaterInput>;
  name: Scalars["String"]["input"];
  ratings?: InputMaybe<RatingUncheckedCreateNestedManyWithoutUserInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUncheckedCreateWithoutRatingsInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  myRatings?: InputMaybe<RatingUncheckedCreateNestedManyWithoutRaterInput>;
  name: Scalars["String"]["input"];
  posts?: InputMaybe<PostUncheckedCreateNestedManyWithoutUserInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUncheckedUpdateInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  myRatings?: InputMaybe<RatingUncheckedUpdateManyWithoutRaterNestedInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  posts?: InputMaybe<PostUncheckedUpdateManyWithoutUserNestedInput>;
  ratings?: InputMaybe<RatingUncheckedUpdateManyWithoutUserNestedInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUncheckedUpdateWithoutCommentsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  myRatings?: InputMaybe<RatingUncheckedUpdateManyWithoutRaterNestedInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  posts?: InputMaybe<PostUncheckedUpdateManyWithoutUserNestedInput>;
  ratings?: InputMaybe<RatingUncheckedUpdateManyWithoutUserNestedInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUncheckedUpdateWithoutMyRatingsInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  posts?: InputMaybe<PostUncheckedUpdateManyWithoutUserNestedInput>;
  ratings?: InputMaybe<RatingUncheckedUpdateManyWithoutUserNestedInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUncheckedUpdateWithoutPostsInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  myRatings?: InputMaybe<RatingUncheckedUpdateManyWithoutRaterNestedInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  ratings?: InputMaybe<RatingUncheckedUpdateManyWithoutUserNestedInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUncheckedUpdateWithoutRatingsInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  myRatings?: InputMaybe<RatingUncheckedUpdateManyWithoutRaterNestedInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  posts?: InputMaybe<PostUncheckedUpdateManyWithoutUserNestedInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUpdateInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  myRatings?: InputMaybe<RatingUpdateManyWithoutRaterNestedInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  posts?: InputMaybe<PostUpdateManyWithoutUserNestedInput>;
  ratings?: InputMaybe<RatingUpdateManyWithoutUserNestedInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutCommentsInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneRequiredWithoutMyRatingsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMyRatingsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutMyRatingsInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutMyRatingsInput>;
  upsert?: InputMaybe<UserUpsertWithoutMyRatingsInput>;
};

export type UserUpdateOneRequiredWithoutPostsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutPostsInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutPostsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateOneRequiredWithoutRatingsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRatingsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutRatingsInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutRatingsInput>;
  upsert?: InputMaybe<UserUpsertWithoutRatingsInput>;
};

export type UserUpdateWithoutCommentsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  myRatings?: InputMaybe<RatingUpdateManyWithoutRaterNestedInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  posts?: InputMaybe<PostUpdateManyWithoutUserNestedInput>;
  ratings?: InputMaybe<RatingUpdateManyWithoutUserNestedInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUpdateWithoutMyRatingsInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  posts?: InputMaybe<PostUpdateManyWithoutUserNestedInput>;
  ratings?: InputMaybe<RatingUpdateManyWithoutUserNestedInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUpdateWithoutPostsInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  myRatings?: InputMaybe<RatingUpdateManyWithoutRaterNestedInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  ratings?: InputMaybe<RatingUpdateManyWithoutUserNestedInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUpdateWithoutRatingsInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  githubUsername?: InputMaybe<Scalars["String"]["input"]>;
  myRatings?: InputMaybe<RatingUpdateManyWithoutRaterNestedInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  posts?: InputMaybe<PostUpdateManyWithoutUserNestedInput>;
  registeredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserUncheckedCreateWithoutCommentsInput;
  update: UserUncheckedUpdateWithoutCommentsInput;
};

export type UserUpsertWithoutMyRatingsInput = {
  create: UserUncheckedCreateWithoutMyRatingsInput;
  update: UserUncheckedUpdateWithoutMyRatingsInput;
};

export type UserUpsertWithoutPostsInput = {
  create: UserUncheckedCreateWithoutPostsInput;
  update: UserUncheckedUpdateWithoutPostsInput;
};

export type UserUpsertWithoutRatingsInput = {
  create: UserUncheckedCreateWithoutRatingsInput;
  update: UserUncheckedUpdateWithoutRatingsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  githubUsername?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  myRatings?: InputMaybe<RatingListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  ratings?: InputMaybe<RatingListRelationFilter>;
  registeredAt?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
};
