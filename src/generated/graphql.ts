import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import * as GQL from '@nestjs/graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** Cursor for paging through collections */
  ConnectionCursor: any;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type TagDeleteResponse = {
  __typename?: 'TagDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type TagEdge = {
  __typename?: 'TagEdge';
  /** The node containing the Tag */
  node: Tag;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};


export type PageInfo = {
  __typename?: 'PageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<TagEdge>;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type TagCountAggregate = {
  __typename?: 'TagCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type TagSumAggregate = {
  __typename?: 'TagSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TagAvgAggregate = {
  __typename?: 'TagAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TagMinAggregate = {
  __typename?: 'TagMinAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TagMaxAggregate = {
  __typename?: 'TagMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TagAggregateResponse = {
  __typename?: 'TagAggregateResponse';
  count?: Maybe<TagCountAggregate>;
  sum?: Maybe<TagSumAggregate>;
  avg?: Maybe<TagAvgAggregate>;
  min?: Maybe<TagMinAggregate>;
  max?: Maybe<TagMaxAggregate>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  orderID: Scalars['String'];
  orderName: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  accountID: Scalars['String'];
  accountName: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  commercial: Scalars['Boolean'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  prettyAddress?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  phone1: Scalars['String'];
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  tags: AccountTagsConnection;
  orders: AccountOrdersConnection;
  tagsAggregate: AccountTagsAggregateResponse;
  ordersAggregate: AccountOrdersAggregateResponse;
};


export type AccountTagsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<TagFilter>;
  sorting?: Maybe<Array<TagSort>>;
};


export type AccountOrdersArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<OrderFilter>;
  sorting?: Maybe<Array<OrderSort>>;
};


export type AccountTagsAggregateArgs = {
  filter?: Maybe<TagAggregateFilter>;
};


export type AccountOrdersAggregateArgs = {
  filter?: Maybe<OrderAggregateFilter>;
};

export type CursorPaging = {
  /** Paginate before opaque cursor */
  before?: Maybe<Scalars['ConnectionCursor']>;
  /** Paginate after opaque cursor */
  after?: Maybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first?: Maybe<Scalars['Int']>;
  /** Paginate last */
  last?: Maybe<Scalars['Int']>;
};

export type TagFilter = {
  and?: Maybe<Array<TagFilter>>;
  or?: Maybe<Array<TagFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
  created?: Maybe<DateFieldComparison>;
  updated?: Maybe<DateFieldComparison>;
  createdBy?: Maybe<StringFieldComparison>;
  updatedBy?: Maybe<StringFieldComparison>;
};

export type IdFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['ID']>;
  neq?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  like?: Maybe<Scalars['ID']>;
  notLike?: Maybe<Scalars['ID']>;
  iLike?: Maybe<Scalars['ID']>;
  notILike?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  notIn?: Maybe<Array<Scalars['ID']>>;
};

export type StringFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  notLike?: Maybe<Scalars['String']>;
  iLike?: Maybe<Scalars['String']>;
  notILike?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
};

export type DateFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  between?: Maybe<DateFieldComparisonBetween>;
  notBetween?: Maybe<DateFieldComparisonBetween>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};

export type TagSort = {
  field: TagSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum TagSortFields {
  Id = 'id',
  Name = 'name',
  Created = 'created',
  Updated = 'updated',
  CreatedBy = 'createdBy',
  UpdatedBy = 'updatedBy'
}

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type OrderFilter = {
  and?: Maybe<Array<OrderFilter>>;
  or?: Maybe<Array<OrderFilter>>;
  id?: Maybe<IdFilterComparison>;
  orderID?: Maybe<StringFieldComparison>;
  orderName?: Maybe<StringFieldComparison>;
};

export type OrderSort = {
  field: OrderSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum OrderSortFields {
  Id = 'id',
  OrderId = 'orderID',
  OrderName = 'orderName'
}

export type TagAggregateFilter = {
  and?: Maybe<Array<TagAggregateFilter>>;
  or?: Maybe<Array<TagAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
  created?: Maybe<DateFieldComparison>;
  updated?: Maybe<DateFieldComparison>;
  createdBy?: Maybe<StringFieldComparison>;
  updatedBy?: Maybe<StringFieldComparison>;
};

export type OrderAggregateFilter = {
  and?: Maybe<Array<OrderAggregateFilter>>;
  or?: Maybe<Array<OrderAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  orderID?: Maybe<StringFieldComparison>;
  orderName?: Maybe<StringFieldComparison>;
};

export type AccountDeleteResponse = {
  __typename?: 'AccountDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  accountID?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  commercial?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  prettyAddress?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  phone1?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AccountEdge = {
  __typename?: 'AccountEdge';
  /** The node containing the Account */
  node: Account;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type AccountConnection = {
  __typename?: 'AccountConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<AccountEdge>;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  id?: Maybe<Scalars['Int']>;
  accountID?: Maybe<Scalars['Int']>;
  accountName?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['Int']>;
  commercial?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  prettyAddress?: Maybe<Scalars['Int']>;
  companyName?: Maybe<Scalars['Int']>;
  phone2?: Maybe<Scalars['Int']>;
  phone1?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  id?: Maybe<Scalars['ID']>;
  accountID?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  prettyAddress?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  phone1?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  accountID?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  prettyAddress?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  phone1?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AccountAggregateResponse = {
  __typename?: 'AccountAggregateResponse';
  count?: Maybe<AccountCountAggregate>;
  sum?: Maybe<AccountSumAggregate>;
  avg?: Maybe<AccountAvgAggregate>;
  min?: Maybe<AccountMinAggregate>;
  max?: Maybe<AccountMaxAggregate>;
};

export type AccountTagsConnection = {
  __typename?: 'AccountTagsConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<TagEdge>;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** The node containing the Order */
  node: Order;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type AccountOrdersConnection = {
  __typename?: 'AccountOrdersConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<OrderEdge>;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type AccountTagsCountAggregate = {
  __typename?: 'AccountTagsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type AccountTagsSumAggregate = {
  __typename?: 'AccountTagsSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type AccountTagsAvgAggregate = {
  __typename?: 'AccountTagsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type AccountTagsMinAggregate = {
  __typename?: 'AccountTagsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AccountTagsMaxAggregate = {
  __typename?: 'AccountTagsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AccountTagsAggregateResponse = {
  __typename?: 'AccountTagsAggregateResponse';
  count?: Maybe<AccountTagsCountAggregate>;
  sum?: Maybe<AccountTagsSumAggregate>;
  avg?: Maybe<AccountTagsAvgAggregate>;
  min?: Maybe<AccountTagsMinAggregate>;
  max?: Maybe<AccountTagsMaxAggregate>;
};

export type AccountOrdersCountAggregate = {
  __typename?: 'AccountOrdersCountAggregate';
  id?: Maybe<Scalars['Int']>;
  orderID?: Maybe<Scalars['Int']>;
  orderName?: Maybe<Scalars['Int']>;
};

export type AccountOrdersMinAggregate = {
  __typename?: 'AccountOrdersMinAggregate';
  id?: Maybe<Scalars['ID']>;
  orderID?: Maybe<Scalars['String']>;
  orderName?: Maybe<Scalars['String']>;
};

export type AccountOrdersMaxAggregate = {
  __typename?: 'AccountOrdersMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  orderID?: Maybe<Scalars['String']>;
  orderName?: Maybe<Scalars['String']>;
};

export type AccountOrdersAggregateResponse = {
  __typename?: 'AccountOrdersAggregateResponse';
  count?: Maybe<AccountOrdersCountAggregate>;
  min?: Maybe<AccountOrdersMinAggregate>;
  max?: Maybe<AccountOrdersMaxAggregate>;
};

export type OrderDeleteResponse = {
  __typename?: 'OrderDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  orderID?: Maybe<Scalars['String']>;
  orderName?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<OrderEdge>;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  id?: Maybe<Scalars['Int']>;
  orderID?: Maybe<Scalars['Int']>;
  orderName?: Maybe<Scalars['Int']>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  id?: Maybe<Scalars['ID']>;
  orderID?: Maybe<Scalars['String']>;
  orderName?: Maybe<Scalars['String']>;
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  orderID?: Maybe<Scalars['String']>;
  orderName?: Maybe<Scalars['String']>;
};

export type OrderAggregateResponse = {
  __typename?: 'OrderAggregateResponse';
  count?: Maybe<OrderCountAggregate>;
  min?: Maybe<OrderMinAggregate>;
  max?: Maybe<OrderMaxAggregate>;
};

export type Job = {
  __typename?: 'Job';
  id: Scalars['ID'];
  jobID: Scalars['String'];
  jobName: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type JobDeleteResponse = {
  __typename?: 'JobDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  jobID?: Maybe<Scalars['String']>;
  jobName?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type JobEdge = {
  __typename?: 'JobEdge';
  /** The node containing the Job */
  node: Job;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type JobConnection = {
  __typename?: 'JobConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<JobEdge>;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type JobCountAggregate = {
  __typename?: 'JobCountAggregate';
  id?: Maybe<Scalars['Int']>;
  jobID?: Maybe<Scalars['Int']>;
  jobName?: Maybe<Scalars['Int']>;
};

export type JobMinAggregate = {
  __typename?: 'JobMinAggregate';
  id?: Maybe<Scalars['ID']>;
  jobID?: Maybe<Scalars['String']>;
  jobName?: Maybe<Scalars['String']>;
};

export type JobMaxAggregate = {
  __typename?: 'JobMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  jobID?: Maybe<Scalars['String']>;
  jobName?: Maybe<Scalars['String']>;
};

export type JobAggregateResponse = {
  __typename?: 'JobAggregateResponse';
  count?: Maybe<JobCountAggregate>;
  min?: Maybe<JobMinAggregate>;
  max?: Maybe<JobMaxAggregate>;
};

export type Query = {
  __typename?: 'Query';
  tag?: Maybe<Tag>;
  tags: TagConnection;
  tagAggregate: TagAggregateResponse;
  me: User;
  account?: Maybe<Account>;
  accounts: AccountConnection;
  accountAggregate: AccountAggregateResponse;
  order?: Maybe<Order>;
  orders: OrderConnection;
  orderAggregate: OrderAggregateResponse;
  job?: Maybe<Job>;
  jobs: JobConnection;
  jobAggregate: JobAggregateResponse;
};


export type QueryTagArgs = {
  id: Scalars['ID'];
};


export type QueryTagsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<TagFilter>;
  sorting?: Maybe<Array<TagSort>>;
};


export type QueryTagAggregateArgs = {
  filter?: Maybe<TagAggregateFilter>;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
};


export type QueryAccountsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<AccountFilter>;
  sorting?: Maybe<Array<AccountSort>>;
};


export type QueryAccountAggregateArgs = {
  filter?: Maybe<AccountAggregateFilter>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrdersArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<OrderFilter>;
  sorting?: Maybe<Array<OrderSort>>;
};


export type QueryOrderAggregateArgs = {
  filter?: Maybe<OrderAggregateFilter>;
};


export type QueryJobArgs = {
  id: Scalars['ID'];
};


export type QueryJobsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<JobFilter>;
  sorting?: Maybe<Array<JobSort>>;
};


export type QueryJobAggregateArgs = {
  filter?: Maybe<JobAggregateFilter>;
};

export type AccountFilter = {
  and?: Maybe<Array<AccountFilter>>;
  or?: Maybe<Array<AccountFilter>>;
  id?: Maybe<IdFilterComparison>;
  accountID?: Maybe<StringFieldComparison>;
  accountName?: Maybe<StringFieldComparison>;
  firstName?: Maybe<StringFieldComparison>;
  lastName?: Maybe<StringFieldComparison>;
  commercial?: Maybe<BooleanFieldComparison>;
  created?: Maybe<DateFieldComparison>;
  updated?: Maybe<DateFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  prettyAddress?: Maybe<StringFieldComparison>;
  companyName?: Maybe<StringFieldComparison>;
  phone2?: Maybe<StringFieldComparison>;
  phone1?: Maybe<StringFieldComparison>;
  createdBy?: Maybe<StringFieldComparison>;
  updatedBy?: Maybe<StringFieldComparison>;
  tags?: Maybe<AccountFilterTagFilter>;
  orders?: Maybe<AccountFilterOrderFilter>;
};

export type BooleanFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
};

export type AccountFilterTagFilter = {
  and?: Maybe<Array<AccountFilterTagFilter>>;
  or?: Maybe<Array<AccountFilterTagFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
  created?: Maybe<DateFieldComparison>;
  updated?: Maybe<DateFieldComparison>;
  createdBy?: Maybe<StringFieldComparison>;
  updatedBy?: Maybe<StringFieldComparison>;
};

export type AccountFilterOrderFilter = {
  and?: Maybe<Array<AccountFilterOrderFilter>>;
  or?: Maybe<Array<AccountFilterOrderFilter>>;
  id?: Maybe<IdFilterComparison>;
  orderID?: Maybe<StringFieldComparison>;
  orderName?: Maybe<StringFieldComparison>;
};

export type AccountSort = {
  field: AccountSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum AccountSortFields {
  Id = 'id',
  AccountId = 'accountID',
  AccountName = 'accountName',
  FirstName = 'firstName',
  LastName = 'lastName',
  Commercial = 'commercial',
  Created = 'created',
  Updated = 'updated',
  Email = 'email',
  PrettyAddress = 'prettyAddress',
  CompanyName = 'companyName',
  Phone2 = 'phone2',
  Phone1 = 'phone1',
  CreatedBy = 'createdBy',
  UpdatedBy = 'updatedBy'
}

export type AccountAggregateFilter = {
  and?: Maybe<Array<AccountAggregateFilter>>;
  or?: Maybe<Array<AccountAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  accountID?: Maybe<StringFieldComparison>;
  accountName?: Maybe<StringFieldComparison>;
  firstName?: Maybe<StringFieldComparison>;
  lastName?: Maybe<StringFieldComparison>;
  commercial?: Maybe<BooleanFieldComparison>;
  created?: Maybe<DateFieldComparison>;
  updated?: Maybe<DateFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  prettyAddress?: Maybe<StringFieldComparison>;
  companyName?: Maybe<StringFieldComparison>;
  phone2?: Maybe<StringFieldComparison>;
  phone1?: Maybe<StringFieldComparison>;
  createdBy?: Maybe<StringFieldComparison>;
  updatedBy?: Maybe<StringFieldComparison>;
};

export type JobFilter = {
  and?: Maybe<Array<JobFilter>>;
  or?: Maybe<Array<JobFilter>>;
  id?: Maybe<IdFilterComparison>;
  jobID?: Maybe<StringFieldComparison>;
  jobName?: Maybe<StringFieldComparison>;
};

export type JobSort = {
  field: JobSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum JobSortFields {
  Id = 'id',
  JobId = 'jobID',
  JobName = 'jobName'
}

export type JobAggregateFilter = {
  and?: Maybe<Array<JobAggregateFilter>>;
  or?: Maybe<Array<JobAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  jobID?: Maybe<StringFieldComparison>;
  jobName?: Maybe<StringFieldComparison>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteOneTag: TagDeleteResponse;
  deleteManyTags: DeleteManyResponse;
  updateOneTag: Tag;
  updateManyTags: UpdateManyResponse;
  createOneTag: Tag;
  createManyTags: Array<Tag>;
  login: LoginResponse;
  deleteOneAccount: AccountDeleteResponse;
  deleteManyAccounts: DeleteManyResponse;
  updateOneAccount: Account;
  updateManyAccounts: UpdateManyResponse;
  createOneAccount: Account;
  createManyAccounts: Array<Account>;
  removeTagsFromAccount: Account;
  addTagsToAccount: Account;
  addOrdersToAccount: Account;
  deleteOneOrder: OrderDeleteResponse;
  deleteManyOrders: DeleteManyResponse;
  updateOneOrder: Order;
  updateManyOrders: UpdateManyResponse;
  createOneOrder: Order;
  createManyOrders: Array<Order>;
  deleteOneJob: JobDeleteResponse;
  deleteManyJobs: DeleteManyResponse;
  updateOneJob: Job;
  updateManyJobs: UpdateManyResponse;
  createOneJob: Job;
  createManyJobs: Array<Job>;
};


export type MutationDeleteOneTagArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyTagsArgs = {
  input: DeleteManyTagsInput;
};


export type MutationUpdateOneTagArgs = {
  input: UpdateOneTagInput;
};


export type MutationUpdateManyTagsArgs = {
  input: UpdateManyTagsInput;
};


export type MutationCreateOneTagArgs = {
  input: CreateOneTagInput;
};


export type MutationCreateManyTagsArgs = {
  input: CreateManyTagsInput;
};


export type MutationLoginArgs = {
  input: LoginInputDto;
};


export type MutationDeleteOneAccountArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyAccountsArgs = {
  input: DeleteManyAccountsInput;
};


export type MutationUpdateOneAccountArgs = {
  input: UpdateOneAccountInput;
};


export type MutationUpdateManyAccountsArgs = {
  input: UpdateManyAccountsInput;
};


export type MutationCreateOneAccountArgs = {
  input: CreateOneAccountInput;
};


export type MutationCreateManyAccountsArgs = {
  input: CreateManyAccountsInput;
};


export type MutationRemoveTagsFromAccountArgs = {
  input: RelationsInput;
};


export type MutationAddTagsToAccountArgs = {
  input: RelationsInput;
};


export type MutationAddOrdersToAccountArgs = {
  input: RelationsInput;
};


export type MutationDeleteOneOrderArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyOrdersArgs = {
  input: DeleteManyOrdersInput;
};


export type MutationUpdateOneOrderArgs = {
  input: UpdateOneOrderInput;
};


export type MutationUpdateManyOrdersArgs = {
  input: UpdateManyOrdersInput;
};


export type MutationCreateOneOrderArgs = {
  input: CreateOneOrderInput;
};


export type MutationCreateManyOrdersArgs = {
  input: CreateManyOrdersInput;
};


export type MutationDeleteOneJobArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyJobsArgs = {
  input: DeleteManyJobsInput;
};


export type MutationUpdateOneJobArgs = {
  input: UpdateOneJobInput;
};


export type MutationUpdateManyJobsArgs = {
  input: UpdateManyJobsInput;
};


export type MutationCreateOneJobArgs = {
  input: CreateOneJobInput;
};


export type MutationCreateManyJobsArgs = {
  input: CreateManyJobsInput;
};

export type DeleteOneInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteManyTagsInput = {
  /** Filter to find records to delete */
  filter: TagDeleteFilter;
};

export type TagDeleteFilter = {
  and?: Maybe<Array<TagDeleteFilter>>;
  or?: Maybe<Array<TagDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
  created?: Maybe<DateFieldComparison>;
  updated?: Maybe<DateFieldComparison>;
  createdBy?: Maybe<StringFieldComparison>;
  updatedBy?: Maybe<StringFieldComparison>;
};

export type UpdateOneTagInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: TagInput;
};

export type TagInput = {
  name: Scalars['String'];
};

export type UpdateManyTagsInput = {
  /** Filter used to find fields to update */
  filter: TagUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: TagInput;
};

export type TagUpdateFilter = {
  and?: Maybe<Array<TagUpdateFilter>>;
  or?: Maybe<Array<TagUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
  created?: Maybe<DateFieldComparison>;
  updated?: Maybe<DateFieldComparison>;
  createdBy?: Maybe<StringFieldComparison>;
  updatedBy?: Maybe<StringFieldComparison>;
};

export type CreateOneTagInput = {
  /** The record to create */
  tag: TagInput;
};

export type CreateManyTagsInput = {
  /** Array of records to create */
  tags: Array<TagInput>;
};

export type LoginInputDto = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type DeleteManyAccountsInput = {
  /** Filter to find records to delete */
  filter: AccountDeleteFilter;
};

export type AccountDeleteFilter = {
  and?: Maybe<Array<AccountDeleteFilter>>;
  or?: Maybe<Array<AccountDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  accountID?: Maybe<StringFieldComparison>;
  accountName?: Maybe<StringFieldComparison>;
  firstName?: Maybe<StringFieldComparison>;
  lastName?: Maybe<StringFieldComparison>;
  commercial?: Maybe<BooleanFieldComparison>;
  created?: Maybe<DateFieldComparison>;
  updated?: Maybe<DateFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  prettyAddress?: Maybe<StringFieldComparison>;
  companyName?: Maybe<StringFieldComparison>;
  phone2?: Maybe<StringFieldComparison>;
  phone1?: Maybe<StringFieldComparison>;
  createdBy?: Maybe<StringFieldComparison>;
  updatedBy?: Maybe<StringFieldComparison>;
};

export type UpdateOneAccountInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateAccountInput;
};

export type UpdateAccountInput = {
  /** Example field (placeholder) */
  accountName?: Maybe<Scalars['String']>;
  /** Example field (placeholder) */
  accountID?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateManyAccountsInput = {
  /** Filter used to find fields to update */
  filter: AccountUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateAccountInput;
};

export type AccountUpdateFilter = {
  and?: Maybe<Array<AccountUpdateFilter>>;
  or?: Maybe<Array<AccountUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  accountID?: Maybe<StringFieldComparison>;
  accountName?: Maybe<StringFieldComparison>;
  firstName?: Maybe<StringFieldComparison>;
  lastName?: Maybe<StringFieldComparison>;
  commercial?: Maybe<BooleanFieldComparison>;
  created?: Maybe<DateFieldComparison>;
  updated?: Maybe<DateFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  prettyAddress?: Maybe<StringFieldComparison>;
  companyName?: Maybe<StringFieldComparison>;
  phone2?: Maybe<StringFieldComparison>;
  phone1?: Maybe<StringFieldComparison>;
  createdBy?: Maybe<StringFieldComparison>;
  updatedBy?: Maybe<StringFieldComparison>;
};

export type CreateOneAccountInput = {
  /** The record to create */
  account: AccountInput;
};

export type AccountInput = {
  name: Scalars['String'];
};

export type CreateManyAccountsInput = {
  /** Array of records to create */
  accounts: Array<AccountInput>;
};

export type RelationsInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type DeleteManyOrdersInput = {
  /** Filter to find records to delete */
  filter: OrderDeleteFilter;
};

export type OrderDeleteFilter = {
  and?: Maybe<Array<OrderDeleteFilter>>;
  or?: Maybe<Array<OrderDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  orderID?: Maybe<StringFieldComparison>;
  orderName?: Maybe<StringFieldComparison>;
};

export type UpdateOneOrderInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateOrderInput;
};

export type UpdateOrderInput = {
  /** Example field (placeholder) */
  exampleField?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateManyOrdersInput = {
  /** Filter used to find fields to update */
  filter: OrderUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateOrderInput;
};

export type OrderUpdateFilter = {
  and?: Maybe<Array<OrderUpdateFilter>>;
  or?: Maybe<Array<OrderUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  orderID?: Maybe<StringFieldComparison>;
  orderName?: Maybe<StringFieldComparison>;
};

export type CreateOneOrderInput = {
  /** The record to create */
  order: OrderInput;
};

export type OrderInput = {
  name: Scalars['String'];
};

export type CreateManyOrdersInput = {
  /** Array of records to create */
  orders: Array<OrderInput>;
};

export type DeleteManyJobsInput = {
  /** Filter to find records to delete */
  filter: JobDeleteFilter;
};

export type JobDeleteFilter = {
  and?: Maybe<Array<JobDeleteFilter>>;
  or?: Maybe<Array<JobDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  jobID?: Maybe<StringFieldComparison>;
  jobName?: Maybe<StringFieldComparison>;
};

export type UpdateOneJobInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateJobInput;
};

export type UpdateJobInput = {
  /** Example field (placeholder) */
  exampleField?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateManyJobsInput = {
  /** Filter used to find fields to update */
  filter: JobUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateJobInput;
};

export type JobUpdateFilter = {
  and?: Maybe<Array<JobUpdateFilter>>;
  or?: Maybe<Array<JobUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  jobID?: Maybe<StringFieldComparison>;
  jobName?: Maybe<StringFieldComparison>;
};

export type CreateOneJobInput = {
  /** The record to create */
  job: JobInput;
};

export type JobInput = {
  name: Scalars['String'];
};

export type CreateManyJobsInput = {
  /** Array of records to create */
  jobs: Array<JobInput>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Tag: ResolverTypeWrapper<Tag>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeleteManyResponse: ResolverTypeWrapper<DeleteManyResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  TagDeleteResponse: ResolverTypeWrapper<TagDeleteResponse>;
  UpdateManyResponse: ResolverTypeWrapper<UpdateManyResponse>;
  TagEdge: ResolverTypeWrapper<TagEdge>;
  ConnectionCursor: ResolverTypeWrapper<Scalars['ConnectionCursor']>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  TagConnection: ResolverTypeWrapper<TagConnection>;
  TagCountAggregate: ResolverTypeWrapper<TagCountAggregate>;
  TagSumAggregate: ResolverTypeWrapper<TagSumAggregate>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  TagAvgAggregate: ResolverTypeWrapper<TagAvgAggregate>;
  TagMinAggregate: ResolverTypeWrapper<TagMinAggregate>;
  TagMaxAggregate: ResolverTypeWrapper<TagMaxAggregate>;
  TagAggregateResponse: ResolverTypeWrapper<TagAggregateResponse>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  User: ResolverTypeWrapper<User>;
  Order: ResolverTypeWrapper<Order>;
  Account: ResolverTypeWrapper<Account>;
  CursorPaging: CursorPaging;
  TagFilter: TagFilter;
  IDFilterComparison: IdFilterComparison;
  StringFieldComparison: StringFieldComparison;
  DateFieldComparison: DateFieldComparison;
  DateFieldComparisonBetween: DateFieldComparisonBetween;
  TagSort: TagSort;
  TagSortFields: TagSortFields;
  SortDirection: SortDirection;
  SortNulls: SortNulls;
  OrderFilter: OrderFilter;
  OrderSort: OrderSort;
  OrderSortFields: OrderSortFields;
  TagAggregateFilter: TagAggregateFilter;
  OrderAggregateFilter: OrderAggregateFilter;
  AccountDeleteResponse: ResolverTypeWrapper<AccountDeleteResponse>;
  AccountEdge: ResolverTypeWrapper<AccountEdge>;
  AccountConnection: ResolverTypeWrapper<AccountConnection>;
  AccountCountAggregate: ResolverTypeWrapper<AccountCountAggregate>;
  AccountSumAggregate: ResolverTypeWrapper<AccountSumAggregate>;
  AccountAvgAggregate: ResolverTypeWrapper<AccountAvgAggregate>;
  AccountMinAggregate: ResolverTypeWrapper<AccountMinAggregate>;
  AccountMaxAggregate: ResolverTypeWrapper<AccountMaxAggregate>;
  AccountAggregateResponse: ResolverTypeWrapper<AccountAggregateResponse>;
  AccountTagsConnection: ResolverTypeWrapper<AccountTagsConnection>;
  OrderEdge: ResolverTypeWrapper<OrderEdge>;
  AccountOrdersConnection: ResolverTypeWrapper<AccountOrdersConnection>;
  AccountTagsCountAggregate: ResolverTypeWrapper<AccountTagsCountAggregate>;
  AccountTagsSumAggregate: ResolverTypeWrapper<AccountTagsSumAggregate>;
  AccountTagsAvgAggregate: ResolverTypeWrapper<AccountTagsAvgAggregate>;
  AccountTagsMinAggregate: ResolverTypeWrapper<AccountTagsMinAggregate>;
  AccountTagsMaxAggregate: ResolverTypeWrapper<AccountTagsMaxAggregate>;
  AccountTagsAggregateResponse: ResolverTypeWrapper<AccountTagsAggregateResponse>;
  AccountOrdersCountAggregate: ResolverTypeWrapper<AccountOrdersCountAggregate>;
  AccountOrdersMinAggregate: ResolverTypeWrapper<AccountOrdersMinAggregate>;
  AccountOrdersMaxAggregate: ResolverTypeWrapper<AccountOrdersMaxAggregate>;
  AccountOrdersAggregateResponse: ResolverTypeWrapper<AccountOrdersAggregateResponse>;
  OrderDeleteResponse: ResolverTypeWrapper<OrderDeleteResponse>;
  OrderConnection: ResolverTypeWrapper<OrderConnection>;
  OrderCountAggregate: ResolverTypeWrapper<OrderCountAggregate>;
  OrderMinAggregate: ResolverTypeWrapper<OrderMinAggregate>;
  OrderMaxAggregate: ResolverTypeWrapper<OrderMaxAggregate>;
  OrderAggregateResponse: ResolverTypeWrapper<OrderAggregateResponse>;
  Job: ResolverTypeWrapper<Job>;
  JobDeleteResponse: ResolverTypeWrapper<JobDeleteResponse>;
  JobEdge: ResolverTypeWrapper<JobEdge>;
  JobConnection: ResolverTypeWrapper<JobConnection>;
  JobCountAggregate: ResolverTypeWrapper<JobCountAggregate>;
  JobMinAggregate: ResolverTypeWrapper<JobMinAggregate>;
  JobMaxAggregate: ResolverTypeWrapper<JobMaxAggregate>;
  JobAggregateResponse: ResolverTypeWrapper<JobAggregateResponse>;
  Query: ResolverTypeWrapper<{}>;
  AccountFilter: AccountFilter;
  BooleanFieldComparison: BooleanFieldComparison;
  AccountFilterTagFilter: AccountFilterTagFilter;
  AccountFilterOrderFilter: AccountFilterOrderFilter;
  AccountSort: AccountSort;
  AccountSortFields: AccountSortFields;
  AccountAggregateFilter: AccountAggregateFilter;
  JobFilter: JobFilter;
  JobSort: JobSort;
  JobSortFields: JobSortFields;
  JobAggregateFilter: JobAggregateFilter;
  Mutation: ResolverTypeWrapper<{}>;
  DeleteOneInput: DeleteOneInput;
  DeleteManyTagsInput: DeleteManyTagsInput;
  TagDeleteFilter: TagDeleteFilter;
  UpdateOneTagInput: UpdateOneTagInput;
  TagInput: TagInput;
  UpdateManyTagsInput: UpdateManyTagsInput;
  TagUpdateFilter: TagUpdateFilter;
  CreateOneTagInput: CreateOneTagInput;
  CreateManyTagsInput: CreateManyTagsInput;
  LoginInputDTO: LoginInputDto;
  DeleteManyAccountsInput: DeleteManyAccountsInput;
  AccountDeleteFilter: AccountDeleteFilter;
  UpdateOneAccountInput: UpdateOneAccountInput;
  UpdateAccountInput: UpdateAccountInput;
  UpdateManyAccountsInput: UpdateManyAccountsInput;
  AccountUpdateFilter: AccountUpdateFilter;
  CreateOneAccountInput: CreateOneAccountInput;
  AccountInput: AccountInput;
  CreateManyAccountsInput: CreateManyAccountsInput;
  RelationsInput: RelationsInput;
  DeleteManyOrdersInput: DeleteManyOrdersInput;
  OrderDeleteFilter: OrderDeleteFilter;
  UpdateOneOrderInput: UpdateOneOrderInput;
  UpdateOrderInput: UpdateOrderInput;
  UpdateManyOrdersInput: UpdateManyOrdersInput;
  OrderUpdateFilter: OrderUpdateFilter;
  CreateOneOrderInput: CreateOneOrderInput;
  OrderInput: OrderInput;
  CreateManyOrdersInput: CreateManyOrdersInput;
  DeleteManyJobsInput: DeleteManyJobsInput;
  JobDeleteFilter: JobDeleteFilter;
  UpdateOneJobInput: UpdateOneJobInput;
  UpdateJobInput: UpdateJobInput;
  UpdateManyJobsInput: UpdateManyJobsInput;
  JobUpdateFilter: JobUpdateFilter;
  CreateOneJobInput: CreateOneJobInput;
  JobInput: JobInput;
  CreateManyJobsInput: CreateManyJobsInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Tag: Tag;
  ID: Scalars['ID'];
  String: Scalars['String'];
  DateTime: Scalars['DateTime'];
  DeleteManyResponse: DeleteManyResponse;
  Int: Scalars['Int'];
  TagDeleteResponse: TagDeleteResponse;
  UpdateManyResponse: UpdateManyResponse;
  TagEdge: TagEdge;
  ConnectionCursor: Scalars['ConnectionCursor'];
  PageInfo: PageInfo;
  Boolean: Scalars['Boolean'];
  TagConnection: TagConnection;
  TagCountAggregate: TagCountAggregate;
  TagSumAggregate: TagSumAggregate;
  Float: Scalars['Float'];
  TagAvgAggregate: TagAvgAggregate;
  TagMinAggregate: TagMinAggregate;
  TagMaxAggregate: TagMaxAggregate;
  TagAggregateResponse: TagAggregateResponse;
  LoginResponse: LoginResponse;
  User: User;
  Order: Order;
  Account: Account;
  CursorPaging: CursorPaging;
  TagFilter: TagFilter;
  IDFilterComparison: IdFilterComparison;
  StringFieldComparison: StringFieldComparison;
  DateFieldComparison: DateFieldComparison;
  DateFieldComparisonBetween: DateFieldComparisonBetween;
  TagSort: TagSort;
  OrderFilter: OrderFilter;
  OrderSort: OrderSort;
  TagAggregateFilter: TagAggregateFilter;
  OrderAggregateFilter: OrderAggregateFilter;
  AccountDeleteResponse: AccountDeleteResponse;
  AccountEdge: AccountEdge;
  AccountConnection: AccountConnection;
  AccountCountAggregate: AccountCountAggregate;
  AccountSumAggregate: AccountSumAggregate;
  AccountAvgAggregate: AccountAvgAggregate;
  AccountMinAggregate: AccountMinAggregate;
  AccountMaxAggregate: AccountMaxAggregate;
  AccountAggregateResponse: AccountAggregateResponse;
  AccountTagsConnection: AccountTagsConnection;
  OrderEdge: OrderEdge;
  AccountOrdersConnection: AccountOrdersConnection;
  AccountTagsCountAggregate: AccountTagsCountAggregate;
  AccountTagsSumAggregate: AccountTagsSumAggregate;
  AccountTagsAvgAggregate: AccountTagsAvgAggregate;
  AccountTagsMinAggregate: AccountTagsMinAggregate;
  AccountTagsMaxAggregate: AccountTagsMaxAggregate;
  AccountTagsAggregateResponse: AccountTagsAggregateResponse;
  AccountOrdersCountAggregate: AccountOrdersCountAggregate;
  AccountOrdersMinAggregate: AccountOrdersMinAggregate;
  AccountOrdersMaxAggregate: AccountOrdersMaxAggregate;
  AccountOrdersAggregateResponse: AccountOrdersAggregateResponse;
  OrderDeleteResponse: OrderDeleteResponse;
  OrderConnection: OrderConnection;
  OrderCountAggregate: OrderCountAggregate;
  OrderMinAggregate: OrderMinAggregate;
  OrderMaxAggregate: OrderMaxAggregate;
  OrderAggregateResponse: OrderAggregateResponse;
  Job: Job;
  JobDeleteResponse: JobDeleteResponse;
  JobEdge: JobEdge;
  JobConnection: JobConnection;
  JobCountAggregate: JobCountAggregate;
  JobMinAggregate: JobMinAggregate;
  JobMaxAggregate: JobMaxAggregate;
  JobAggregateResponse: JobAggregateResponse;
  Query: {};
  AccountFilter: AccountFilter;
  BooleanFieldComparison: BooleanFieldComparison;
  AccountFilterTagFilter: AccountFilterTagFilter;
  AccountFilterOrderFilter: AccountFilterOrderFilter;
  AccountSort: AccountSort;
  AccountAggregateFilter: AccountAggregateFilter;
  JobFilter: JobFilter;
  JobSort: JobSort;
  JobAggregateFilter: JobAggregateFilter;
  Mutation: {};
  DeleteOneInput: DeleteOneInput;
  DeleteManyTagsInput: DeleteManyTagsInput;
  TagDeleteFilter: TagDeleteFilter;
  UpdateOneTagInput: UpdateOneTagInput;
  TagInput: TagInput;
  UpdateManyTagsInput: UpdateManyTagsInput;
  TagUpdateFilter: TagUpdateFilter;
  CreateOneTagInput: CreateOneTagInput;
  CreateManyTagsInput: CreateManyTagsInput;
  LoginInputDTO: LoginInputDto;
  DeleteManyAccountsInput: DeleteManyAccountsInput;
  AccountDeleteFilter: AccountDeleteFilter;
  UpdateOneAccountInput: UpdateOneAccountInput;
  UpdateAccountInput: UpdateAccountInput;
  UpdateManyAccountsInput: UpdateManyAccountsInput;
  AccountUpdateFilter: AccountUpdateFilter;
  CreateOneAccountInput: CreateOneAccountInput;
  AccountInput: AccountInput;
  CreateManyAccountsInput: CreateManyAccountsInput;
  RelationsInput: RelationsInput;
  DeleteManyOrdersInput: DeleteManyOrdersInput;
  OrderDeleteFilter: OrderDeleteFilter;
  UpdateOneOrderInput: UpdateOneOrderInput;
  UpdateOrderInput: UpdateOrderInput;
  UpdateManyOrdersInput: UpdateManyOrdersInput;
  OrderUpdateFilter: OrderUpdateFilter;
  CreateOneOrderInput: CreateOneOrderInput;
  OrderInput: OrderInput;
  CreateManyOrdersInput: CreateManyOrdersInput;
  DeleteManyJobsInput: DeleteManyJobsInput;
  JobDeleteFilter: JobDeleteFilter;
  UpdateOneJobInput: UpdateOneJobInput;
  UpdateJobInput: UpdateJobInput;
  UpdateManyJobsInput: UpdateManyJobsInput;
  JobUpdateFilter: JobUpdateFilter;
  CreateOneJobInput: CreateOneJobInput;
  JobInput: JobInput;
  CreateManyJobsInput: CreateManyJobsInput;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteManyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteManyResponse'] = ResolversParentTypes['DeleteManyResponse']> = {
  deletedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagDeleteResponse'] = ResolversParentTypes['TagDeleteResponse']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateManyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateManyResponse'] = ResolversParentTypes['UpdateManyResponse']> = {
  updatedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagEdge'] = ResolversParentTypes['TagEdge']> = {
  node?: Resolver<ResolversTypes['Tag'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ConnectionCursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ConnectionCursor'], any> {
  name: 'ConnectionCursor';
}

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPreviousPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['ConnectionCursor']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['ConnectionCursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagConnection'] = ResolversParentTypes['TagConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['TagEdge']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagCountAggregate'] = ResolversParentTypes['TagCountAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagSumAggregate'] = ResolversParentTypes['TagSumAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagAvgAggregate'] = ResolversParentTypes['TagAvgAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagMinAggregate'] = ResolversParentTypes['TagMinAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagMaxAggregate'] = ResolversParentTypes['TagMaxAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagAggregateResponse'] = ResolversParentTypes['TagAggregateResponse']> = {
  count?: Resolver<Maybe<ResolversTypes['TagCountAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['TagSumAggregate']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['TagAvgAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['TagMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['TagMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  accountID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accountName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commercial?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prettyAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<ResolversTypes['AccountTagsConnection'], ParentType, ContextType, RequireFields<AccountTagsArgs, 'paging' | 'filter' | 'sorting'>>;
  orders?: Resolver<ResolversTypes['AccountOrdersConnection'], ParentType, ContextType, RequireFields<AccountOrdersArgs, 'paging' | 'filter' | 'sorting'>>;
  tagsAggregate?: Resolver<ResolversTypes['AccountTagsAggregateResponse'], ParentType, ContextType, RequireFields<AccountTagsAggregateArgs, never>>;
  ordersAggregate?: Resolver<ResolversTypes['AccountOrdersAggregateResponse'], ParentType, ContextType, RequireFields<AccountOrdersAggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountDeleteResponse'] = ResolversParentTypes['AccountDeleteResponse']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  accountID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commercial?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prettyAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountEdge'] = ResolversParentTypes['AccountEdge']> = {
  node?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountConnection'] = ResolversParentTypes['AccountConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['AccountEdge']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountCountAggregate'] = ResolversParentTypes['AccountCountAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  accountID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  accountName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  commercial?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prettyAddress?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  phone2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  phone1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountSumAggregate'] = ResolversParentTypes['AccountSumAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountAvgAggregate'] = ResolversParentTypes['AccountAvgAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountMinAggregate'] = ResolversParentTypes['AccountMinAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  accountID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prettyAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountMaxAggregate'] = ResolversParentTypes['AccountMaxAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  accountID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prettyAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountAggregateResponse'] = ResolversParentTypes['AccountAggregateResponse']> = {
  count?: Resolver<Maybe<ResolversTypes['AccountCountAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['AccountSumAggregate']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['AccountAvgAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['AccountMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['AccountMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountTagsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTagsConnection'] = ResolversParentTypes['AccountTagsConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['TagEdge']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderEdge'] = ResolversParentTypes['OrderEdge']> = {
  node?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountOrdersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountOrdersConnection'] = ResolversParentTypes['AccountOrdersConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['OrderEdge']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountTagsCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTagsCountAggregate'] = ResolversParentTypes['AccountTagsCountAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountTagsSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTagsSumAggregate'] = ResolversParentTypes['AccountTagsSumAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountTagsAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTagsAvgAggregate'] = ResolversParentTypes['AccountTagsAvgAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountTagsMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTagsMinAggregate'] = ResolversParentTypes['AccountTagsMinAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountTagsMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTagsMaxAggregate'] = ResolversParentTypes['AccountTagsMaxAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountTagsAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTagsAggregateResponse'] = ResolversParentTypes['AccountTagsAggregateResponse']> = {
  count?: Resolver<Maybe<ResolversTypes['AccountTagsCountAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['AccountTagsSumAggregate']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['AccountTagsAvgAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['AccountTagsMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['AccountTagsMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountOrdersCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountOrdersCountAggregate'] = ResolversParentTypes['AccountOrdersCountAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orderID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orderName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountOrdersMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountOrdersMinAggregate'] = ResolversParentTypes['AccountOrdersMinAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  orderID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountOrdersMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountOrdersMaxAggregate'] = ResolversParentTypes['AccountOrdersMaxAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  orderID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountOrdersAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountOrdersAggregateResponse'] = ResolversParentTypes['AccountOrdersAggregateResponse']> = {
  count?: Resolver<Maybe<ResolversTypes['AccountOrdersCountAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['AccountOrdersMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['AccountOrdersMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderDeleteResponse'] = ResolversParentTypes['OrderDeleteResponse']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  orderID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnection'] = ResolversParentTypes['OrderConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['OrderEdge']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderCountAggregate'] = ResolversParentTypes['OrderCountAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orderID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orderName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderMinAggregate'] = ResolversParentTypes['OrderMinAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  orderID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderMaxAggregate'] = ResolversParentTypes['OrderMaxAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  orderID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderAggregateResponse'] = ResolversParentTypes['OrderAggregateResponse']> = {
  count?: Resolver<Maybe<ResolversTypes['OrderCountAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrderMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrderMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobResolvers<ContextType = any, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jobID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  jobName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobDeleteResponse'] = ResolversParentTypes['JobDeleteResponse']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  jobID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobEdge'] = ResolversParentTypes['JobEdge']> = {
  node?: Resolver<ResolversTypes['Job'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobConnection'] = ResolversParentTypes['JobConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['JobEdge']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobCountAggregate'] = ResolversParentTypes['JobCountAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  jobID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  jobName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobMinAggregate'] = ResolversParentTypes['JobMinAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  jobID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobMaxAggregate'] = ResolversParentTypes['JobMaxAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  jobID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobAggregateResponse'] = ResolversParentTypes['JobAggregateResponse']> = {
  count?: Resolver<Maybe<ResolversTypes['JobCountAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['JobMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['JobMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  tag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QueryTagArgs, 'id'>>;
  tags?: Resolver<ResolversTypes['TagConnection'], ParentType, ContextType, RequireFields<QueryTagsArgs, 'paging' | 'filter' | 'sorting'>>;
  tagAggregate?: Resolver<ResolversTypes['TagAggregateResponse'], ParentType, ContextType, RequireFields<QueryTagAggregateArgs, never>>;
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'id'>>;
  accounts?: Resolver<ResolversTypes['AccountConnection'], ParentType, ContextType, RequireFields<QueryAccountsArgs, 'paging' | 'filter' | 'sorting'>>;
  accountAggregate?: Resolver<ResolversTypes['AccountAggregateResponse'], ParentType, ContextType, RequireFields<QueryAccountAggregateArgs, never>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  orders?: Resolver<ResolversTypes['OrderConnection'], ParentType, ContextType, RequireFields<QueryOrdersArgs, 'paging' | 'filter' | 'sorting'>>;
  orderAggregate?: Resolver<ResolversTypes['OrderAggregateResponse'], ParentType, ContextType, RequireFields<QueryOrderAggregateArgs, never>>;
  job?: Resolver<Maybe<ResolversTypes['Job']>, ParentType, ContextType, RequireFields<QueryJobArgs, 'id'>>;
  jobs?: Resolver<ResolversTypes['JobConnection'], ParentType, ContextType, RequireFields<QueryJobsArgs, 'paging' | 'filter' | 'sorting'>>;
  jobAggregate?: Resolver<ResolversTypes['JobAggregateResponse'], ParentType, ContextType, RequireFields<QueryJobAggregateArgs, never>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  deleteOneTag?: Resolver<ResolversTypes['TagDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneTagArgs, 'input'>>;
  deleteManyTags?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyTagsArgs, 'input'>>;
  updateOneTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationUpdateOneTagArgs, 'input'>>;
  updateManyTags?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyTagsArgs, 'input'>>;
  createOneTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationCreateOneTagArgs, 'input'>>;
  createManyTags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationCreateManyTagsArgs, 'input'>>;
  login?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  deleteOneAccount?: Resolver<ResolversTypes['AccountDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneAccountArgs, 'input'>>;
  deleteManyAccounts?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyAccountsArgs, 'input'>>;
  updateOneAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationUpdateOneAccountArgs, 'input'>>;
  updateManyAccounts?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyAccountsArgs, 'input'>>;
  createOneAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationCreateOneAccountArgs, 'input'>>;
  createManyAccounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<MutationCreateManyAccountsArgs, 'input'>>;
  removeTagsFromAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationRemoveTagsFromAccountArgs, 'input'>>;
  addTagsToAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationAddTagsToAccountArgs, 'input'>>;
  addOrdersToAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationAddOrdersToAccountArgs, 'input'>>;
  deleteOneOrder?: Resolver<ResolversTypes['OrderDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneOrderArgs, 'input'>>;
  deleteManyOrders?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyOrdersArgs, 'input'>>;
  updateOneOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationUpdateOneOrderArgs, 'input'>>;
  updateManyOrders?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyOrdersArgs, 'input'>>;
  createOneOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationCreateOneOrderArgs, 'input'>>;
  createManyOrders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationCreateManyOrdersArgs, 'input'>>;
  deleteOneJob?: Resolver<ResolversTypes['JobDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneJobArgs, 'input'>>;
  deleteManyJobs?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyJobsArgs, 'input'>>;
  updateOneJob?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationUpdateOneJobArgs, 'input'>>;
  updateManyJobs?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyJobsArgs, 'input'>>;
  createOneJob?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationCreateOneJobArgs, 'input'>>;
  createManyJobs?: Resolver<Array<ResolversTypes['Job']>, ParentType, ContextType, RequireFields<MutationCreateManyJobsArgs, 'input'>>;
};

export type Resolvers<ContextType = any> = {
  Tag?: TagResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteManyResponse?: DeleteManyResponseResolvers<ContextType>;
  TagDeleteResponse?: TagDeleteResponseResolvers<ContextType>;
  UpdateManyResponse?: UpdateManyResponseResolvers<ContextType>;
  TagEdge?: TagEdgeResolvers<ContextType>;
  ConnectionCursor?: GraphQLScalarType;
  PageInfo?: PageInfoResolvers<ContextType>;
  TagConnection?: TagConnectionResolvers<ContextType>;
  TagCountAggregate?: TagCountAggregateResolvers<ContextType>;
  TagSumAggregate?: TagSumAggregateResolvers<ContextType>;
  TagAvgAggregate?: TagAvgAggregateResolvers<ContextType>;
  TagMinAggregate?: TagMinAggregateResolvers<ContextType>;
  TagMaxAggregate?: TagMaxAggregateResolvers<ContextType>;
  TagAggregateResponse?: TagAggregateResponseResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
  AccountDeleteResponse?: AccountDeleteResponseResolvers<ContextType>;
  AccountEdge?: AccountEdgeResolvers<ContextType>;
  AccountConnection?: AccountConnectionResolvers<ContextType>;
  AccountCountAggregate?: AccountCountAggregateResolvers<ContextType>;
  AccountSumAggregate?: AccountSumAggregateResolvers<ContextType>;
  AccountAvgAggregate?: AccountAvgAggregateResolvers<ContextType>;
  AccountMinAggregate?: AccountMinAggregateResolvers<ContextType>;
  AccountMaxAggregate?: AccountMaxAggregateResolvers<ContextType>;
  AccountAggregateResponse?: AccountAggregateResponseResolvers<ContextType>;
  AccountTagsConnection?: AccountTagsConnectionResolvers<ContextType>;
  OrderEdge?: OrderEdgeResolvers<ContextType>;
  AccountOrdersConnection?: AccountOrdersConnectionResolvers<ContextType>;
  AccountTagsCountAggregate?: AccountTagsCountAggregateResolvers<ContextType>;
  AccountTagsSumAggregate?: AccountTagsSumAggregateResolvers<ContextType>;
  AccountTagsAvgAggregate?: AccountTagsAvgAggregateResolvers<ContextType>;
  AccountTagsMinAggregate?: AccountTagsMinAggregateResolvers<ContextType>;
  AccountTagsMaxAggregate?: AccountTagsMaxAggregateResolvers<ContextType>;
  AccountTagsAggregateResponse?: AccountTagsAggregateResponseResolvers<ContextType>;
  AccountOrdersCountAggregate?: AccountOrdersCountAggregateResolvers<ContextType>;
  AccountOrdersMinAggregate?: AccountOrdersMinAggregateResolvers<ContextType>;
  AccountOrdersMaxAggregate?: AccountOrdersMaxAggregateResolvers<ContextType>;
  AccountOrdersAggregateResponse?: AccountOrdersAggregateResponseResolvers<ContextType>;
  OrderDeleteResponse?: OrderDeleteResponseResolvers<ContextType>;
  OrderConnection?: OrderConnectionResolvers<ContextType>;
  OrderCountAggregate?: OrderCountAggregateResolvers<ContextType>;
  OrderMinAggregate?: OrderMinAggregateResolvers<ContextType>;
  OrderMaxAggregate?: OrderMaxAggregateResolvers<ContextType>;
  OrderAggregateResponse?: OrderAggregateResponseResolvers<ContextType>;
  Job?: JobResolvers<ContextType>;
  JobDeleteResponse?: JobDeleteResponseResolvers<ContextType>;
  JobEdge?: JobEdgeResolvers<ContextType>;
  JobConnection?: JobConnectionResolvers<ContextType>;
  JobCountAggregate?: JobCountAggregateResolvers<ContextType>;
  JobMinAggregate?: JobMinAggregateResolvers<ContextType>;
  JobMaxAggregate?: JobMaxAggregateResolvers<ContextType>;
  JobAggregateResponse?: JobAggregateResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** Cursor for paging through collections */
  ConnectionCursor: any;
};

@GQL.ObjectType({  })
export class Tag {
  __typename?: 'Tag';

  @GQL.Field(_type => GQL.ID, { nullable: false })
  id!: Scalars['ID'];

  @GQL.Field(_type => String, { nullable: false })
  name!: Scalars['String'];

  @GQL.Field(_type => any, { nullable: false })
  created!: Scalars['DateTime'];

  @GQL.Field(_type => any, { nullable: false })
  updated!: Scalars['DateTime'];

  @GQL.Field(_type => String, { nullable: true })
  createdBy!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  updatedBy!: Maybe<Scalars['String']>;
};


@GQL.ObjectType({  })
export class DeleteManyResponse {
  __typename?: 'DeleteManyResponse';

  @GQL.Field(_type => GQL.Int, { nullable: false, description: `The number of records deleted.` })
  deletedCount!: Scalars['Int'];
};

@GQL.ObjectType({  })
export class TagDeleteResponse {
  __typename?: 'TagDeleteResponse';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  name!: Maybe<Scalars['String']>;

  @GQL.Field(_type => any, { nullable: true })
  created!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  updated!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => String, { nullable: true })
  createdBy!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  updatedBy!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class UpdateManyResponse {
  __typename?: 'UpdateManyResponse';

  @GQL.Field(_type => GQL.Int, { nullable: false, description: `The number of records updated.` })
  updatedCount!: Scalars['Int'];
};

@GQL.ObjectType({  })
export class TagEdge {
  __typename?: 'TagEdge';

  @GQL.Field(_type => Tag, { nullable: false, description: `The node containing the Tag` })
  node!: Tag;

  @GQL.Field(_type => any, { nullable: false, description: `Cursor for this node.` })
  cursor!: Scalars['ConnectionCursor'];
};


@GQL.ObjectType({  })
export class PageInfo {
  __typename?: 'PageInfo';

  @GQL.Field(_type => Boolean, { nullable: true, description: `true if paging forward and there are more records.` })
  hasNextPage!: Maybe<Scalars['Boolean']>;

  @GQL.Field(_type => Boolean, { nullable: true, description: `true if paging backwards and there are more records.` })
  hasPreviousPage!: Maybe<Scalars['Boolean']>;

  @GQL.Field(_type => any, { nullable: true, description: `The cursor of the first returned record.` })
  startCursor!: Maybe<Scalars['ConnectionCursor']>;

  @GQL.Field(_type => any, { nullable: true, description: `The cursor of the last returned record.` })
  endCursor!: Maybe<Scalars['ConnectionCursor']>;
};

@GQL.ObjectType({  })
export class TagConnection {
  __typename?: 'TagConnection';

  @GQL.Field(_type => PageInfo, { nullable: false, description: `Paging information` })
  pageInfo!: PageInfo;

  @GQL.Field(_type => [TagEdge], { nullable: false, description: `Array of edges.` })
  edges!: Array<TagEdge>;

  @GQL.Field(_type => GQL.Int, { nullable: false, description: `Fetch total count of records` })
  totalCount!: Scalars['Int'];
};

@GQL.ObjectType({  })
export class TagCountAggregate {
  __typename?: 'TagCountAggregate';

  @GQL.Field(_type => GQL.Int, { nullable: true })
  id!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  name!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  created!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  updated!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  createdBy!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  updatedBy!: Maybe<Scalars['Int']>;
};

@GQL.ObjectType({  })
export class TagSumAggregate {
  __typename?: 'TagSumAggregate';

  @GQL.Field(_type => GQL.Float, { nullable: true })
  id!: Maybe<Scalars['Float']>;
};

@GQL.ObjectType({  })
export class TagAvgAggregate {
  __typename?: 'TagAvgAggregate';

  @GQL.Field(_type => GQL.Float, { nullable: true })
  id!: Maybe<Scalars['Float']>;
};

@GQL.ObjectType({  })
export class TagMinAggregate {
  __typename?: 'TagMinAggregate';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  name!: Maybe<Scalars['String']>;

  @GQL.Field(_type => any, { nullable: true })
  created!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  updated!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => String, { nullable: true })
  createdBy!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  updatedBy!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class TagMaxAggregate {
  __typename?: 'TagMaxAggregate';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  name!: Maybe<Scalars['String']>;

  @GQL.Field(_type => any, { nullable: true })
  created!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  updated!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => String, { nullable: true })
  createdBy!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  updatedBy!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class TagAggregateResponse {
  __typename?: 'TagAggregateResponse';

  @GQL.Field(_type => TagCountAggregate, { nullable: true })
  count!: Maybe<TagCountAggregate>;

  @GQL.Field(_type => TagSumAggregate, { nullable: true })
  sum!: Maybe<TagSumAggregate>;

  @GQL.Field(_type => TagAvgAggregate, { nullable: true })
  avg!: Maybe<TagAvgAggregate>;

  @GQL.Field(_type => TagMinAggregate, { nullable: true })
  min!: Maybe<TagMinAggregate>;

  @GQL.Field(_type => TagMaxAggregate, { nullable: true })
  max!: Maybe<TagMaxAggregate>;
};

@GQL.ObjectType({  })
export class LoginResponse {
  __typename?: 'LoginResponse';

  @GQL.Field(_type => String, { nullable: false })
  accessToken!: Scalars['String'];
};

@GQL.ObjectType({  })
export class User {
  __typename?: 'User';

  @GQL.Field(_type => GQL.Float, { nullable: false })
  id!: Scalars['Float'];

  @GQL.Field(_type => String, { nullable: false })
  username!: Scalars['String'];

  @GQL.Field(_type => any, { nullable: false })
  created!: Scalars['DateTime'];

  @GQL.Field(_type => any, { nullable: false })
  updated!: Scalars['DateTime'];
};

@GQL.ObjectType({  })
export class Order {
  __typename?: 'Order';

  @GQL.Field(_type => GQL.ID, { nullable: false })
  id!: Scalars['ID'];

  @GQL.Field(_type => String, { nullable: false })
  orderID!: Scalars['String'];

  @GQL.Field(_type => String, { nullable: false })
  orderName!: Scalars['String'];

  @GQL.Field(_type => any, { nullable: false })
  created!: Scalars['DateTime'];

  @GQL.Field(_type => any, { nullable: false })
  updated!: Scalars['DateTime'];
};

@GQL.ObjectType({  })
export class Account {
  __typename?: 'Account';

  @GQL.Field(_type => GQL.ID, { nullable: false })
  id!: Scalars['ID'];

  @GQL.Field(_type => String, { nullable: false })
  accountID!: Scalars['String'];

  @GQL.Field(_type => String, { nullable: false })
  accountName!: Scalars['String'];

  @GQL.Field(_type => String, { nullable: true })
  firstName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  lastName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => Boolean, { nullable: false })
  commercial!: Scalars['Boolean'];

  @GQL.Field(_type => any, { nullable: false })
  created!: Scalars['DateTime'];

  @GQL.Field(_type => any, { nullable: false })
  updated!: Scalars['DateTime'];

  @GQL.Field(_type => String, { nullable: true })
  email!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  prettyAddress!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  companyName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  phone2!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: false })
  phone1!: Scalars['String'];

  @GQL.Field(_type => String, { nullable: true })
  createdBy!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  updatedBy!: Maybe<Scalars['String']>;

  @GQL.Field(_type => AccountTagsConnection, { nullable: false })
  tags!: AccountTagsConnection;

  @GQL.Field(_type => AccountOrdersConnection, { nullable: false })
  orders!: AccountOrdersConnection;

  @GQL.Field(_type => AccountTagsAggregateResponse, { nullable: false })
  tagsAggregate!: AccountTagsAggregateResponse;

  @GQL.Field(_type => AccountOrdersAggregateResponse, { nullable: false })
  ordersAggregate!: AccountOrdersAggregateResponse;
};


@GQL.ArgsType()
export class AccountTagsArgs {

  @GQL.Field(_type => CursorPaging, { nullable: true, description: `Limit or page results.` })
  paging!: Maybe<CursorPaging>;

  @GQL.Field(_type => TagFilter, { nullable: true, description: `Specify to filter the records returned.` })
  filter!: Maybe<TagFilter>;

  @GQL.Field(_type => [TagSort], { nullable: true, description: `Specify to sort results.` })
  sorting!: Maybe<Array<TagSort>>;
};


@GQL.ArgsType()
export class AccountOrdersArgs {

  @GQL.Field(_type => CursorPaging, { nullable: true, description: `Limit or page results.` })
  paging!: Maybe<CursorPaging>;

  @GQL.Field(_type => OrderFilter, { nullable: true, description: `Specify to filter the records returned.` })
  filter!: Maybe<OrderFilter>;

  @GQL.Field(_type => [OrderSort], { nullable: true, description: `Specify to sort results.` })
  sorting!: Maybe<Array<OrderSort>>;
};


@GQL.ArgsType()
export class AccountTagsAggregateArgs {

  @GQL.Field(_type => TagAggregateFilter, { nullable: true, description: `Filter to find records to aggregate on` })
  filter!: Maybe<TagAggregateFilter>;
};


@GQL.ArgsType()
export class AccountOrdersAggregateArgs {

  @GQL.Field(_type => OrderAggregateFilter, { nullable: true, description: `Filter to find records to aggregate on` })
  filter!: Maybe<OrderAggregateFilter>;
};

@GQL.InputType({  })
export class CursorPaging {

  @GQL.Field(_type => any, { nullable: true, description: `Paginate before opaque cursor` })
  before!: Maybe<Scalars['ConnectionCursor']>;

  @GQL.Field(_type => any, { nullable: true, description: `Paginate after opaque cursor` })
  after!: Maybe<Scalars['ConnectionCursor']>;

  @GQL.Field(_type => GQL.Int, { nullable: true, description: `Paginate first` })
  first!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true, description: `Paginate last` })
  last!: Maybe<Scalars['Int']>;
};

@GQL.InputType({  })
export class TagFilter {

  @GQL.Field(_type => [TagFilter], { nullable: true })
  and!: Maybe<Array<TagFilter>>;

  @GQL.Field(_type => [TagFilter], { nullable: true })
  or!: Maybe<Array<TagFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  name!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  created!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  updated!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  createdBy!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  updatedBy!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class IdFilterComparison {

  @GQL.Field(_type => Boolean, { nullable: true })
  is!: Maybe<Scalars['Boolean']>;

  @GQL.Field(_type => Boolean, { nullable: true })
  isNot!: Maybe<Scalars['Boolean']>;

  @GQL.Field(_type => GQL.ID, { nullable: true })
  eq!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => GQL.ID, { nullable: true })
  neq!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => GQL.ID, { nullable: true })
  gt!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => GQL.ID, { nullable: true })
  gte!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => GQL.ID, { nullable: true })
  lt!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => GQL.ID, { nullable: true })
  lte!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => GQL.ID, { nullable: true })
  like!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => GQL.ID, { nullable: true })
  notLike!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => GQL.ID, { nullable: true })
  iLike!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => GQL.ID, { nullable: true })
  notILike!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => [GQL.ID], { nullable: true })
  in!: Maybe<Array<Scalars['ID']>>;

  @GQL.Field(_type => [GQL.ID], { nullable: true })
  notIn!: Maybe<Array<Scalars['ID']>>;
};

@GQL.InputType({  })
export class StringFieldComparison {

  @GQL.Field(_type => Boolean, { nullable: true })
  is!: Maybe<Scalars['Boolean']>;

  @GQL.Field(_type => Boolean, { nullable: true })
  isNot!: Maybe<Scalars['Boolean']>;

  @GQL.Field(_type => String, { nullable: true })
  eq!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  neq!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  gt!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  gte!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  lt!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  lte!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  like!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  notLike!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  iLike!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  notILike!: Maybe<Scalars['String']>;

  @GQL.Field(_type => [String], { nullable: true })
  in!: Maybe<Array<Scalars['String']>>;

  @GQL.Field(_type => [String], { nullable: true })
  notIn!: Maybe<Array<Scalars['String']>>;
};

@GQL.InputType({  })
export class DateFieldComparison {

  @GQL.Field(_type => Boolean, { nullable: true })
  is!: Maybe<Scalars['Boolean']>;

  @GQL.Field(_type => Boolean, { nullable: true })
  isNot!: Maybe<Scalars['Boolean']>;

  @GQL.Field(_type => any, { nullable: true })
  eq!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  neq!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  gt!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  gte!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  lt!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  lte!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => [any], { nullable: true })
  in!: Maybe<Array<Scalars['DateTime']>>;

  @GQL.Field(_type => [any], { nullable: true })
  notIn!: Maybe<Array<Scalars['DateTime']>>;

  @GQL.Field(_type => DateFieldComparisonBetween, { nullable: true })
  between!: Maybe<DateFieldComparisonBetween>;

  @GQL.Field(_type => DateFieldComparisonBetween, { nullable: true })
  notBetween!: Maybe<DateFieldComparisonBetween>;
};

@GQL.InputType({  })
export class DateFieldComparisonBetween {

  @GQL.Field(_type => any, { nullable: false })
  lower!: Scalars['DateTime'];

  @GQL.Field(_type => any, { nullable: false })
  upper!: Scalars['DateTime'];
};

@GQL.InputType({  })
export class TagSort {

  @GQL.Field(_type => TagSortFields, { nullable: false })
  field!: TagSortFields;

  @GQL.Field(_type => SortDirection, { nullable: false })
  direction!: SortDirection;

  @GQL.Field(_type => SortNulls, { nullable: true })
  nulls!: Maybe<SortNulls>;
};

export enum TagSortFields {
  Id = 'id',
  Name = 'name',
  Created = 'created',
  Updated = 'updated',
  CreatedBy = 'createdBy',
  UpdatedBy = 'updatedBy'
}
GQL.registerEnumType(TagSortFields, { name: 'TagSortFields' });

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}
GQL.registerEnumType(SortDirection, { name: 'SortDirection' });

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}
GQL.registerEnumType(SortNulls, { name: 'SortNulls' });

@GQL.InputType({  })
export class OrderFilter {

  @GQL.Field(_type => [OrderFilter], { nullable: true })
  and!: Maybe<Array<OrderFilter>>;

  @GQL.Field(_type => [OrderFilter], { nullable: true })
  or!: Maybe<Array<OrderFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  orderID!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  orderName!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class OrderSort {

  @GQL.Field(_type => OrderSortFields, { nullable: false })
  field!: OrderSortFields;

  @GQL.Field(_type => SortDirection, { nullable: false })
  direction!: SortDirection;

  @GQL.Field(_type => SortNulls, { nullable: true })
  nulls!: Maybe<SortNulls>;
};

export enum OrderSortFields {
  Id = 'id',
  OrderId = 'orderID',
  OrderName = 'orderName'
}
GQL.registerEnumType(OrderSortFields, { name: 'OrderSortFields' });

@GQL.InputType({  })
export class TagAggregateFilter {

  @GQL.Field(_type => [TagAggregateFilter], { nullable: true })
  and!: Maybe<Array<TagAggregateFilter>>;

  @GQL.Field(_type => [TagAggregateFilter], { nullable: true })
  or!: Maybe<Array<TagAggregateFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  name!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  created!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  updated!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  createdBy!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  updatedBy!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class OrderAggregateFilter {

  @GQL.Field(_type => [OrderAggregateFilter], { nullable: true })
  and!: Maybe<Array<OrderAggregateFilter>>;

  @GQL.Field(_type => [OrderAggregateFilter], { nullable: true })
  or!: Maybe<Array<OrderAggregateFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  orderID!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  orderName!: Maybe<StringFieldComparison>;
};

@GQL.ObjectType({  })
export class AccountDeleteResponse {
  __typename?: 'AccountDeleteResponse';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  accountID!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  accountName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  firstName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  lastName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => Boolean, { nullable: true })
  commercial!: Maybe<Scalars['Boolean']>;

  @GQL.Field(_type => any, { nullable: true })
  created!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  updated!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => String, { nullable: true })
  email!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  prettyAddress!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  companyName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  phone2!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  phone1!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  createdBy!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  updatedBy!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class AccountEdge {
  __typename?: 'AccountEdge';

  @GQL.Field(_type => Account, { nullable: false, description: `The node containing the Account` })
  node!: Account;

  @GQL.Field(_type => any, { nullable: false, description: `Cursor for this node.` })
  cursor!: Scalars['ConnectionCursor'];
};

@GQL.ObjectType({  })
export class AccountConnection {
  __typename?: 'AccountConnection';

  @GQL.Field(_type => PageInfo, { nullable: false, description: `Paging information` })
  pageInfo!: PageInfo;

  @GQL.Field(_type => [AccountEdge], { nullable: false, description: `Array of edges.` })
  edges!: Array<AccountEdge>;

  @GQL.Field(_type => GQL.Int, { nullable: false, description: `Fetch total count of records` })
  totalCount!: Scalars['Int'];
};

@GQL.ObjectType({  })
export class AccountCountAggregate {
  __typename?: 'AccountCountAggregate';

  @GQL.Field(_type => GQL.Int, { nullable: true })
  id!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  accountID!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  accountName!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  firstName!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  lastName!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  commercial!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  created!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  updated!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  email!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  prettyAddress!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  companyName!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  phone2!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  phone1!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  createdBy!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  updatedBy!: Maybe<Scalars['Int']>;
};

@GQL.ObjectType({  })
export class AccountSumAggregate {
  __typename?: 'AccountSumAggregate';

  @GQL.Field(_type => GQL.Float, { nullable: true })
  id!: Maybe<Scalars['Float']>;
};

@GQL.ObjectType({  })
export class AccountAvgAggregate {
  __typename?: 'AccountAvgAggregate';

  @GQL.Field(_type => GQL.Float, { nullable: true })
  id!: Maybe<Scalars['Float']>;
};

@GQL.ObjectType({  })
export class AccountMinAggregate {
  __typename?: 'AccountMinAggregate';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  accountID!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  accountName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  firstName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  lastName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => any, { nullable: true })
  created!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  updated!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => String, { nullable: true })
  email!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  prettyAddress!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  companyName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  phone2!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  phone1!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  createdBy!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  updatedBy!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class AccountMaxAggregate {
  __typename?: 'AccountMaxAggregate';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  accountID!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  accountName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  firstName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  lastName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => any, { nullable: true })
  created!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  updated!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => String, { nullable: true })
  email!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  prettyAddress!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  companyName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  phone2!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  phone1!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  createdBy!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  updatedBy!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class AccountAggregateResponse {
  __typename?: 'AccountAggregateResponse';

  @GQL.Field(_type => AccountCountAggregate, { nullable: true })
  count!: Maybe<AccountCountAggregate>;

  @GQL.Field(_type => AccountSumAggregate, { nullable: true })
  sum!: Maybe<AccountSumAggregate>;

  @GQL.Field(_type => AccountAvgAggregate, { nullable: true })
  avg!: Maybe<AccountAvgAggregate>;

  @GQL.Field(_type => AccountMinAggregate, { nullable: true })
  min!: Maybe<AccountMinAggregate>;

  @GQL.Field(_type => AccountMaxAggregate, { nullable: true })
  max!: Maybe<AccountMaxAggregate>;
};

@GQL.ObjectType({  })
export class AccountTagsConnection {
  __typename?: 'AccountTagsConnection';

  @GQL.Field(_type => PageInfo, { nullable: false, description: `Paging information` })
  pageInfo!: PageInfo;

  @GQL.Field(_type => [TagEdge], { nullable: false, description: `Array of edges.` })
  edges!: Array<TagEdge>;

  @GQL.Field(_type => GQL.Int, { nullable: false, description: `Fetch total count of records` })
  totalCount!: Scalars['Int'];
};

@GQL.ObjectType({  })
export class OrderEdge {
  __typename?: 'OrderEdge';

  @GQL.Field(_type => Order, { nullable: false, description: `The node containing the Order` })
  node!: Order;

  @GQL.Field(_type => any, { nullable: false, description: `Cursor for this node.` })
  cursor!: Scalars['ConnectionCursor'];
};

@GQL.ObjectType({  })
export class AccountOrdersConnection {
  __typename?: 'AccountOrdersConnection';

  @GQL.Field(_type => PageInfo, { nullable: false, description: `Paging information` })
  pageInfo!: PageInfo;

  @GQL.Field(_type => [OrderEdge], { nullable: false, description: `Array of edges.` })
  edges!: Array<OrderEdge>;

  @GQL.Field(_type => GQL.Int, { nullable: false, description: `Fetch total count of records` })
  totalCount!: Scalars['Int'];
};

@GQL.ObjectType({  })
export class AccountTagsCountAggregate {
  __typename?: 'AccountTagsCountAggregate';

  @GQL.Field(_type => GQL.Int, { nullable: true })
  id!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  name!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  created!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  updated!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  createdBy!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  updatedBy!: Maybe<Scalars['Int']>;
};

@GQL.ObjectType({  })
export class AccountTagsSumAggregate {
  __typename?: 'AccountTagsSumAggregate';

  @GQL.Field(_type => GQL.Float, { nullable: true })
  id!: Maybe<Scalars['Float']>;
};

@GQL.ObjectType({  })
export class AccountTagsAvgAggregate {
  __typename?: 'AccountTagsAvgAggregate';

  @GQL.Field(_type => GQL.Float, { nullable: true })
  id!: Maybe<Scalars['Float']>;
};

@GQL.ObjectType({  })
export class AccountTagsMinAggregate {
  __typename?: 'AccountTagsMinAggregate';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  name!: Maybe<Scalars['String']>;

  @GQL.Field(_type => any, { nullable: true })
  created!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  updated!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => String, { nullable: true })
  createdBy!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  updatedBy!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class AccountTagsMaxAggregate {
  __typename?: 'AccountTagsMaxAggregate';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  name!: Maybe<Scalars['String']>;

  @GQL.Field(_type => any, { nullable: true })
  created!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  updated!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => String, { nullable: true })
  createdBy!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  updatedBy!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class AccountTagsAggregateResponse {
  __typename?: 'AccountTagsAggregateResponse';

  @GQL.Field(_type => AccountTagsCountAggregate, { nullable: true })
  count!: Maybe<AccountTagsCountAggregate>;

  @GQL.Field(_type => AccountTagsSumAggregate, { nullable: true })
  sum!: Maybe<AccountTagsSumAggregate>;

  @GQL.Field(_type => AccountTagsAvgAggregate, { nullable: true })
  avg!: Maybe<AccountTagsAvgAggregate>;

  @GQL.Field(_type => AccountTagsMinAggregate, { nullable: true })
  min!: Maybe<AccountTagsMinAggregate>;

  @GQL.Field(_type => AccountTagsMaxAggregate, { nullable: true })
  max!: Maybe<AccountTagsMaxAggregate>;
};

@GQL.ObjectType({  })
export class AccountOrdersCountAggregate {
  __typename?: 'AccountOrdersCountAggregate';

  @GQL.Field(_type => GQL.Int, { nullable: true })
  id!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  orderID!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  orderName!: Maybe<Scalars['Int']>;
};

@GQL.ObjectType({  })
export class AccountOrdersMinAggregate {
  __typename?: 'AccountOrdersMinAggregate';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  orderID!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  orderName!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class AccountOrdersMaxAggregate {
  __typename?: 'AccountOrdersMaxAggregate';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  orderID!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  orderName!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class AccountOrdersAggregateResponse {
  __typename?: 'AccountOrdersAggregateResponse';

  @GQL.Field(_type => AccountOrdersCountAggregate, { nullable: true })
  count!: Maybe<AccountOrdersCountAggregate>;

  @GQL.Field(_type => AccountOrdersMinAggregate, { nullable: true })
  min!: Maybe<AccountOrdersMinAggregate>;

  @GQL.Field(_type => AccountOrdersMaxAggregate, { nullable: true })
  max!: Maybe<AccountOrdersMaxAggregate>;
};

@GQL.ObjectType({  })
export class OrderDeleteResponse {
  __typename?: 'OrderDeleteResponse';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  orderID!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  orderName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => any, { nullable: true })
  created!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  updated!: Maybe<Scalars['DateTime']>;
};

@GQL.ObjectType({  })
export class OrderConnection {
  __typename?: 'OrderConnection';

  @GQL.Field(_type => PageInfo, { nullable: false, description: `Paging information` })
  pageInfo!: PageInfo;

  @GQL.Field(_type => [OrderEdge], { nullable: false, description: `Array of edges.` })
  edges!: Array<OrderEdge>;

  @GQL.Field(_type => GQL.Int, { nullable: false, description: `Fetch total count of records` })
  totalCount!: Scalars['Int'];
};

@GQL.ObjectType({  })
export class OrderCountAggregate {
  __typename?: 'OrderCountAggregate';

  @GQL.Field(_type => GQL.Int, { nullable: true })
  id!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  orderID!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  orderName!: Maybe<Scalars['Int']>;
};

@GQL.ObjectType({  })
export class OrderMinAggregate {
  __typename?: 'OrderMinAggregate';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  orderID!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  orderName!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class OrderMaxAggregate {
  __typename?: 'OrderMaxAggregate';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  orderID!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  orderName!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class OrderAggregateResponse {
  __typename?: 'OrderAggregateResponse';

  @GQL.Field(_type => OrderCountAggregate, { nullable: true })
  count!: Maybe<OrderCountAggregate>;

  @GQL.Field(_type => OrderMinAggregate, { nullable: true })
  min!: Maybe<OrderMinAggregate>;

  @GQL.Field(_type => OrderMaxAggregate, { nullable: true })
  max!: Maybe<OrderMaxAggregate>;
};

@GQL.ObjectType({  })
export class Job {
  __typename?: 'Job';

  @GQL.Field(_type => GQL.ID, { nullable: false })
  id!: Scalars['ID'];

  @GQL.Field(_type => String, { nullable: false })
  jobID!: Scalars['String'];

  @GQL.Field(_type => String, { nullable: false })
  jobName!: Scalars['String'];

  @GQL.Field(_type => any, { nullable: false })
  created!: Scalars['DateTime'];

  @GQL.Field(_type => any, { nullable: false })
  updated!: Scalars['DateTime'];
};

@GQL.ObjectType({  })
export class JobDeleteResponse {
  __typename?: 'JobDeleteResponse';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  jobID!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  jobName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => any, { nullable: true })
  created!: Maybe<Scalars['DateTime']>;

  @GQL.Field(_type => any, { nullable: true })
  updated!: Maybe<Scalars['DateTime']>;
};

@GQL.ObjectType({  })
export class JobEdge {
  __typename?: 'JobEdge';

  @GQL.Field(_type => Job, { nullable: false, description: `The node containing the Job` })
  node!: Job;

  @GQL.Field(_type => any, { nullable: false, description: `Cursor for this node.` })
  cursor!: Scalars['ConnectionCursor'];
};

@GQL.ObjectType({  })
export class JobConnection {
  __typename?: 'JobConnection';

  @GQL.Field(_type => PageInfo, { nullable: false, description: `Paging information` })
  pageInfo!: PageInfo;

  @GQL.Field(_type => [JobEdge], { nullable: false, description: `Array of edges.` })
  edges!: Array<JobEdge>;

  @GQL.Field(_type => GQL.Int, { nullable: false, description: `Fetch total count of records` })
  totalCount!: Scalars['Int'];
};

@GQL.ObjectType({  })
export class JobCountAggregate {
  __typename?: 'JobCountAggregate';

  @GQL.Field(_type => GQL.Int, { nullable: true })
  id!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  jobID!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  jobName!: Maybe<Scalars['Int']>;
};

@GQL.ObjectType({  })
export class JobMinAggregate {
  __typename?: 'JobMinAggregate';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  jobID!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  jobName!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class JobMaxAggregate {
  __typename?: 'JobMaxAggregate';

  @GQL.Field(_type => GQL.ID, { nullable: true })
  id!: Maybe<Scalars['ID']>;

  @GQL.Field(_type => String, { nullable: true })
  jobID!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true })
  jobName!: Maybe<Scalars['String']>;
};

@GQL.ObjectType({  })
export class JobAggregateResponse {
  __typename?: 'JobAggregateResponse';

  @GQL.Field(_type => JobCountAggregate, { nullable: true })
  count!: Maybe<JobCountAggregate>;

  @GQL.Field(_type => JobMinAggregate, { nullable: true })
  min!: Maybe<JobMinAggregate>;

  @GQL.Field(_type => JobMaxAggregate, { nullable: true })
  max!: Maybe<JobMaxAggregate>;
};

export class Query {
  __typename?: 'Query';

  @GQL.Field(_type => Tag, { nullable: true })
  tag!: Maybe<Tag>;

  @GQL.Field(_type => TagConnection, { nullable: false })
  tags!: TagConnection;

  @GQL.Field(_type => TagAggregateResponse, { nullable: false })
  tagAggregate!: TagAggregateResponse;

  @GQL.Field(_type => User, { nullable: false })
  me!: User;

  @GQL.Field(_type => Account, { nullable: true })
  account!: Maybe<Account>;

  @GQL.Field(_type => AccountConnection, { nullable: false })
  accounts!: AccountConnection;

  @GQL.Field(_type => AccountAggregateResponse, { nullable: false })
  accountAggregate!: AccountAggregateResponse;

  @GQL.Field(_type => Order, { nullable: true })
  order!: Maybe<Order>;

  @GQL.Field(_type => OrderConnection, { nullable: false })
  orders!: OrderConnection;

  @GQL.Field(_type => OrderAggregateResponse, { nullable: false })
  orderAggregate!: OrderAggregateResponse;

  @GQL.Field(_type => Job, { nullable: true })
  job!: Maybe<Job>;

  @GQL.Field(_type => JobConnection, { nullable: false })
  jobs!: JobConnection;

  @GQL.Field(_type => JobAggregateResponse, { nullable: false })
  jobAggregate!: JobAggregateResponse;
};


@GQL.ArgsType()
export class QueryTagArgs {

  @GQL.Field(_type => GQL.ID, { nullable: false, description: `The id of the record to find.` })
  id!: Scalars['ID'];
};


@GQL.ArgsType()
export class QueryTagsArgs {

  @GQL.Field(_type => CursorPaging, { nullable: true, description: `Limit or page results.` })
  paging!: Maybe<CursorPaging>;

  @GQL.Field(_type => TagFilter, { nullable: true, description: `Specify to filter the records returned.` })
  filter!: Maybe<TagFilter>;

  @GQL.Field(_type => [TagSort], { nullable: true, description: `Specify to sort results.` })
  sorting!: Maybe<Array<TagSort>>;
};


@GQL.ArgsType()
export class QueryTagAggregateArgs {

  @GQL.Field(_type => TagAggregateFilter, { nullable: true, description: `Filter to find records to aggregate on` })
  filter!: Maybe<TagAggregateFilter>;
};


@GQL.ArgsType()
export class QueryAccountArgs {

  @GQL.Field(_type => GQL.ID, { nullable: false, description: `The id of the record to find.` })
  id!: Scalars['ID'];
};


@GQL.ArgsType()
export class QueryAccountsArgs {

  @GQL.Field(_type => CursorPaging, { nullable: true, description: `Limit or page results.` })
  paging!: Maybe<CursorPaging>;

  @GQL.Field(_type => AccountFilter, { nullable: true, description: `Specify to filter the records returned.` })
  filter!: Maybe<AccountFilter>;

  @GQL.Field(_type => [AccountSort], { nullable: true, description: `Specify to sort results.` })
  sorting!: Maybe<Array<AccountSort>>;
};


@GQL.ArgsType()
export class QueryAccountAggregateArgs {

  @GQL.Field(_type => AccountAggregateFilter, { nullable: true, description: `Filter to find records to aggregate on` })
  filter!: Maybe<AccountAggregateFilter>;
};


@GQL.ArgsType()
export class QueryOrderArgs {

  @GQL.Field(_type => GQL.ID, { nullable: false, description: `The id of the record to find.` })
  id!: Scalars['ID'];
};


@GQL.ArgsType()
export class QueryOrdersArgs {

  @GQL.Field(_type => CursorPaging, { nullable: true, description: `Limit or page results.` })
  paging!: Maybe<CursorPaging>;

  @GQL.Field(_type => OrderFilter, { nullable: true, description: `Specify to filter the records returned.` })
  filter!: Maybe<OrderFilter>;

  @GQL.Field(_type => [OrderSort], { nullable: true, description: `Specify to sort results.` })
  sorting!: Maybe<Array<OrderSort>>;
};


@GQL.ArgsType()
export class QueryOrderAggregateArgs {

  @GQL.Field(_type => OrderAggregateFilter, { nullable: true, description: `Filter to find records to aggregate on` })
  filter!: Maybe<OrderAggregateFilter>;
};


@GQL.ArgsType()
export class QueryJobArgs {

  @GQL.Field(_type => GQL.ID, { nullable: false, description: `The id of the record to find.` })
  id!: Scalars['ID'];
};


@GQL.ArgsType()
export class QueryJobsArgs {

  @GQL.Field(_type => CursorPaging, { nullable: true, description: `Limit or page results.` })
  paging!: Maybe<CursorPaging>;

  @GQL.Field(_type => JobFilter, { nullable: true, description: `Specify to filter the records returned.` })
  filter!: Maybe<JobFilter>;

  @GQL.Field(_type => [JobSort], { nullable: true, description: `Specify to sort results.` })
  sorting!: Maybe<Array<JobSort>>;
};


@GQL.ArgsType()
export class QueryJobAggregateArgs {

  @GQL.Field(_type => JobAggregateFilter, { nullable: true, description: `Filter to find records to aggregate on` })
  filter!: Maybe<JobAggregateFilter>;
};

@GQL.InputType({  })
export class AccountFilter {

  @GQL.Field(_type => [AccountFilter], { nullable: true })
  and!: Maybe<Array<AccountFilter>>;

  @GQL.Field(_type => [AccountFilter], { nullable: true })
  or!: Maybe<Array<AccountFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  accountID!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  accountName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  firstName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  lastName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => BooleanFieldComparison, { nullable: true })
  commercial!: Maybe<BooleanFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  created!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  updated!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  email!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  prettyAddress!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  companyName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  phone2!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  phone1!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  createdBy!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  updatedBy!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => AccountFilterTagFilter, { nullable: true })
  tags!: Maybe<AccountFilterTagFilter>;

  @GQL.Field(_type => AccountFilterOrderFilter, { nullable: true })
  orders!: Maybe<AccountFilterOrderFilter>;
};

@GQL.InputType({  })
export class BooleanFieldComparison {

  @GQL.Field(_type => Boolean, { nullable: true })
  is!: Maybe<Scalars['Boolean']>;

  @GQL.Field(_type => Boolean, { nullable: true })
  isNot!: Maybe<Scalars['Boolean']>;
};

@GQL.InputType({  })
export class AccountFilterTagFilter {

  @GQL.Field(_type => [AccountFilterTagFilter], { nullable: true })
  and!: Maybe<Array<AccountFilterTagFilter>>;

  @GQL.Field(_type => [AccountFilterTagFilter], { nullable: true })
  or!: Maybe<Array<AccountFilterTagFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  name!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  created!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  updated!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  createdBy!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  updatedBy!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class AccountFilterOrderFilter {

  @GQL.Field(_type => [AccountFilterOrderFilter], { nullable: true })
  and!: Maybe<Array<AccountFilterOrderFilter>>;

  @GQL.Field(_type => [AccountFilterOrderFilter], { nullable: true })
  or!: Maybe<Array<AccountFilterOrderFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  orderID!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  orderName!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class AccountSort {

  @GQL.Field(_type => AccountSortFields, { nullable: false })
  field!: AccountSortFields;

  @GQL.Field(_type => SortDirection, { nullable: false })
  direction!: SortDirection;

  @GQL.Field(_type => SortNulls, { nullable: true })
  nulls!: Maybe<SortNulls>;
};

export enum AccountSortFields {
  Id = 'id',
  AccountId = 'accountID',
  AccountName = 'accountName',
  FirstName = 'firstName',
  LastName = 'lastName',
  Commercial = 'commercial',
  Created = 'created',
  Updated = 'updated',
  Email = 'email',
  PrettyAddress = 'prettyAddress',
  CompanyName = 'companyName',
  Phone2 = 'phone2',
  Phone1 = 'phone1',
  CreatedBy = 'createdBy',
  UpdatedBy = 'updatedBy'
}
GQL.registerEnumType(AccountSortFields, { name: 'AccountSortFields' });

@GQL.InputType({  })
export class AccountAggregateFilter {

  @GQL.Field(_type => [AccountAggregateFilter], { nullable: true })
  and!: Maybe<Array<AccountAggregateFilter>>;

  @GQL.Field(_type => [AccountAggregateFilter], { nullable: true })
  or!: Maybe<Array<AccountAggregateFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  accountID!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  accountName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  firstName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  lastName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => BooleanFieldComparison, { nullable: true })
  commercial!: Maybe<BooleanFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  created!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  updated!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  email!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  prettyAddress!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  companyName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  phone2!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  phone1!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  createdBy!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  updatedBy!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class JobFilter {

  @GQL.Field(_type => [JobFilter], { nullable: true })
  and!: Maybe<Array<JobFilter>>;

  @GQL.Field(_type => [JobFilter], { nullable: true })
  or!: Maybe<Array<JobFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  jobID!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  jobName!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class JobSort {

  @GQL.Field(_type => JobSortFields, { nullable: false })
  field!: JobSortFields;

  @GQL.Field(_type => SortDirection, { nullable: false })
  direction!: SortDirection;

  @GQL.Field(_type => SortNulls, { nullable: true })
  nulls!: Maybe<SortNulls>;
};

export enum JobSortFields {
  Id = 'id',
  JobId = 'jobID',
  JobName = 'jobName'
}
GQL.registerEnumType(JobSortFields, { name: 'JobSortFields' });

@GQL.InputType({  })
export class JobAggregateFilter {

  @GQL.Field(_type => [JobAggregateFilter], { nullable: true })
  and!: Maybe<Array<JobAggregateFilter>>;

  @GQL.Field(_type => [JobAggregateFilter], { nullable: true })
  or!: Maybe<Array<JobAggregateFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  jobID!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  jobName!: Maybe<StringFieldComparison>;
};

export class Mutation {
  __typename?: 'Mutation';

  @GQL.Field(_type => TagDeleteResponse, { nullable: false })
  deleteOneTag!: TagDeleteResponse;

  @GQL.Field(_type => DeleteManyResponse, { nullable: false })
  deleteManyTags!: DeleteManyResponse;

  @GQL.Field(_type => Tag, { nullable: false })
  updateOneTag!: Tag;

  @GQL.Field(_type => UpdateManyResponse, { nullable: false })
  updateManyTags!: UpdateManyResponse;

  @GQL.Field(_type => Tag, { nullable: false })
  createOneTag!: Tag;

  @GQL.Field(_type => [Tag], { nullable: false })
  createManyTags!: Array<Tag>;

  @GQL.Field(_type => LoginResponse, { nullable: false })
  login!: LoginResponse;

  @GQL.Field(_type => AccountDeleteResponse, { nullable: false })
  deleteOneAccount!: AccountDeleteResponse;

  @GQL.Field(_type => DeleteManyResponse, { nullable: false })
  deleteManyAccounts!: DeleteManyResponse;

  @GQL.Field(_type => Account, { nullable: false })
  updateOneAccount!: Account;

  @GQL.Field(_type => UpdateManyResponse, { nullable: false })
  updateManyAccounts!: UpdateManyResponse;

  @GQL.Field(_type => Account, { nullable: false })
  createOneAccount!: Account;

  @GQL.Field(_type => [Account], { nullable: false })
  createManyAccounts!: Array<Account>;

  @GQL.Field(_type => Account, { nullable: false })
  removeTagsFromAccount!: Account;

  @GQL.Field(_type => Account, { nullable: false })
  addTagsToAccount!: Account;

  @GQL.Field(_type => Account, { nullable: false })
  addOrdersToAccount!: Account;

  @GQL.Field(_type => OrderDeleteResponse, { nullable: false })
  deleteOneOrder!: OrderDeleteResponse;

  @GQL.Field(_type => DeleteManyResponse, { nullable: false })
  deleteManyOrders!: DeleteManyResponse;

  @GQL.Field(_type => Order, { nullable: false })
  updateOneOrder!: Order;

  @GQL.Field(_type => UpdateManyResponse, { nullable: false })
  updateManyOrders!: UpdateManyResponse;

  @GQL.Field(_type => Order, { nullable: false })
  createOneOrder!: Order;

  @GQL.Field(_type => [Order], { nullable: false })
  createManyOrders!: Array<Order>;

  @GQL.Field(_type => JobDeleteResponse, { nullable: false })
  deleteOneJob!: JobDeleteResponse;

  @GQL.Field(_type => DeleteManyResponse, { nullable: false })
  deleteManyJobs!: DeleteManyResponse;

  @GQL.Field(_type => Job, { nullable: false })
  updateOneJob!: Job;

  @GQL.Field(_type => UpdateManyResponse, { nullable: false })
  updateManyJobs!: UpdateManyResponse;

  @GQL.Field(_type => Job, { nullable: false })
  createOneJob!: Job;

  @GQL.Field(_type => [Job], { nullable: false })
  createManyJobs!: Array<Job>;
};


@GQL.ArgsType()
export class MutationDeleteOneTagArgs {

  @GQL.Field(_type => DeleteOneInput, { nullable: false })
  input!: DeleteOneInput;
};


@GQL.ArgsType()
export class MutationDeleteManyTagsArgs {

  @GQL.Field(_type => DeleteManyTagsInput, { nullable: false })
  input!: DeleteManyTagsInput;
};


@GQL.ArgsType()
export class MutationUpdateOneTagArgs {

  @GQL.Field(_type => UpdateOneTagInput, { nullable: false })
  input!: UpdateOneTagInput;
};


@GQL.ArgsType()
export class MutationUpdateManyTagsArgs {

  @GQL.Field(_type => UpdateManyTagsInput, { nullable: false })
  input!: UpdateManyTagsInput;
};


@GQL.ArgsType()
export class MutationCreateOneTagArgs {

  @GQL.Field(_type => CreateOneTagInput, { nullable: false })
  input!: CreateOneTagInput;
};


@GQL.ArgsType()
export class MutationCreateManyTagsArgs {

  @GQL.Field(_type => CreateManyTagsInput, { nullable: false })
  input!: CreateManyTagsInput;
};


@GQL.ArgsType()
export class MutationLoginArgs {

  @GQL.Field(_type => LoginInputDTO, { nullable: false })
  input!: LoginInputDTO;
};


@GQL.ArgsType()
export class MutationDeleteOneAccountArgs {

  @GQL.Field(_type => DeleteOneInput, { nullable: false })
  input!: DeleteOneInput;
};


@GQL.ArgsType()
export class MutationDeleteManyAccountsArgs {

  @GQL.Field(_type => DeleteManyAccountsInput, { nullable: false })
  input!: DeleteManyAccountsInput;
};


@GQL.ArgsType()
export class MutationUpdateOneAccountArgs {

  @GQL.Field(_type => UpdateOneAccountInput, { nullable: false })
  input!: UpdateOneAccountInput;
};


@GQL.ArgsType()
export class MutationUpdateManyAccountsArgs {

  @GQL.Field(_type => UpdateManyAccountsInput, { nullable: false })
  input!: UpdateManyAccountsInput;
};


@GQL.ArgsType()
export class MutationCreateOneAccountArgs {

  @GQL.Field(_type => CreateOneAccountInput, { nullable: false })
  input!: CreateOneAccountInput;
};


@GQL.ArgsType()
export class MutationCreateManyAccountsArgs {

  @GQL.Field(_type => CreateManyAccountsInput, { nullable: false })
  input!: CreateManyAccountsInput;
};


@GQL.ArgsType()
export class MutationRemoveTagsFromAccountArgs {

  @GQL.Field(_type => RelationsInput, { nullable: false })
  input!: RelationsInput;
};


@GQL.ArgsType()
export class MutationAddTagsToAccountArgs {

  @GQL.Field(_type => RelationsInput, { nullable: false })
  input!: RelationsInput;
};


@GQL.ArgsType()
export class MutationAddOrdersToAccountArgs {

  @GQL.Field(_type => RelationsInput, { nullable: false })
  input!: RelationsInput;
};


@GQL.ArgsType()
export class MutationDeleteOneOrderArgs {

  @GQL.Field(_type => DeleteOneInput, { nullable: false })
  input!: DeleteOneInput;
};


@GQL.ArgsType()
export class MutationDeleteManyOrdersArgs {

  @GQL.Field(_type => DeleteManyOrdersInput, { nullable: false })
  input!: DeleteManyOrdersInput;
};


@GQL.ArgsType()
export class MutationUpdateOneOrderArgs {

  @GQL.Field(_type => UpdateOneOrderInput, { nullable: false })
  input!: UpdateOneOrderInput;
};


@GQL.ArgsType()
export class MutationUpdateManyOrdersArgs {

  @GQL.Field(_type => UpdateManyOrdersInput, { nullable: false })
  input!: UpdateManyOrdersInput;
};


@GQL.ArgsType()
export class MutationCreateOneOrderArgs {

  @GQL.Field(_type => CreateOneOrderInput, { nullable: false })
  input!: CreateOneOrderInput;
};


@GQL.ArgsType()
export class MutationCreateManyOrdersArgs {

  @GQL.Field(_type => CreateManyOrdersInput, { nullable: false })
  input!: CreateManyOrdersInput;
};


@GQL.ArgsType()
export class MutationDeleteOneJobArgs {

  @GQL.Field(_type => DeleteOneInput, { nullable: false })
  input!: DeleteOneInput;
};


@GQL.ArgsType()
export class MutationDeleteManyJobsArgs {

  @GQL.Field(_type => DeleteManyJobsInput, { nullable: false })
  input!: DeleteManyJobsInput;
};


@GQL.ArgsType()
export class MutationUpdateOneJobArgs {

  @GQL.Field(_type => UpdateOneJobInput, { nullable: false })
  input!: UpdateOneJobInput;
};


@GQL.ArgsType()
export class MutationUpdateManyJobsArgs {

  @GQL.Field(_type => UpdateManyJobsInput, { nullable: false })
  input!: UpdateManyJobsInput;
};


@GQL.ArgsType()
export class MutationCreateOneJobArgs {

  @GQL.Field(_type => CreateOneJobInput, { nullable: false })
  input!: CreateOneJobInput;
};


@GQL.ArgsType()
export class MutationCreateManyJobsArgs {

  @GQL.Field(_type => CreateManyJobsInput, { nullable: false })
  input!: CreateManyJobsInput;
};

@GQL.InputType({  })
export class DeleteOneInput {

  @GQL.Field(_type => GQL.ID, { nullable: false, description: `The id of the record to delete.` })
  id!: Scalars['ID'];
};

@GQL.InputType({  })
export class DeleteManyTagsInput {

  @GQL.Field(_type => TagDeleteFilter, { nullable: false, description: `Filter to find records to delete` })
  filter!: TagDeleteFilter;
};

@GQL.InputType({  })
export class TagDeleteFilter {

  @GQL.Field(_type => [TagDeleteFilter], { nullable: true })
  and!: Maybe<Array<TagDeleteFilter>>;

  @GQL.Field(_type => [TagDeleteFilter], { nullable: true })
  or!: Maybe<Array<TagDeleteFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  name!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  created!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  updated!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  createdBy!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  updatedBy!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class UpdateOneTagInput {

  @GQL.Field(_type => GQL.ID, { nullable: false, description: `The id of the record to update` })
  id!: Scalars['ID'];

  @GQL.Field(_type => TagInput, { nullable: false, description: `The update to apply.` })
  update!: TagInput;
};

@GQL.InputType({  })
export class TagInput {

  @GQL.Field(_type => String, { nullable: false })
  name!: Scalars['String'];
};

@GQL.InputType({  })
export class UpdateManyTagsInput {

  @GQL.Field(_type => TagUpdateFilter, { nullable: false, description: `Filter used to find fields to update` })
  filter!: TagUpdateFilter;

  @GQL.Field(_type => TagInput, { nullable: false, description: `The update to apply to all records found using the filter` })
  update!: TagInput;
};

@GQL.InputType({  })
export class TagUpdateFilter {

  @GQL.Field(_type => [TagUpdateFilter], { nullable: true })
  and!: Maybe<Array<TagUpdateFilter>>;

  @GQL.Field(_type => [TagUpdateFilter], { nullable: true })
  or!: Maybe<Array<TagUpdateFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  name!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  created!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  updated!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  createdBy!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  updatedBy!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class CreateOneTagInput {

  @GQL.Field(_type => TagInput, { nullable: false, description: `The record to create` })
  tag!: TagInput;
};

@GQL.InputType({  })
export class CreateManyTagsInput {

  @GQL.Field(_type => [TagInput], { nullable: false, description: `Array of records to create` })
  tags!: Array<TagInput>;
};

@GQL.InputType({  })
export class LoginInputDto {

  @GQL.Field(_type => String, { nullable: false })
  username!: Scalars['String'];

  @GQL.Field(_type => String, { nullable: false })
  password!: Scalars['String'];
};

@GQL.InputType({  })
export class DeleteManyAccountsInput {

  @GQL.Field(_type => AccountDeleteFilter, { nullable: false, description: `Filter to find records to delete` })
  filter!: AccountDeleteFilter;
};

@GQL.InputType({  })
export class AccountDeleteFilter {

  @GQL.Field(_type => [AccountDeleteFilter], { nullable: true })
  and!: Maybe<Array<AccountDeleteFilter>>;

  @GQL.Field(_type => [AccountDeleteFilter], { nullable: true })
  or!: Maybe<Array<AccountDeleteFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  accountID!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  accountName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  firstName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  lastName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => BooleanFieldComparison, { nullable: true })
  commercial!: Maybe<BooleanFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  created!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  updated!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  email!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  prettyAddress!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  companyName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  phone2!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  phone1!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  createdBy!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  updatedBy!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class UpdateOneAccountInput {

  @GQL.Field(_type => GQL.ID, { nullable: false, description: `The id of the record to update` })
  id!: Scalars['ID'];

  @GQL.Field(_type => UpdateAccountInput, { nullable: false, description: `The update to apply.` })
  update!: UpdateAccountInput;
};

@GQL.InputType({  })
export class UpdateAccountInput {

  @GQL.Field(_type => String, { nullable: true, description: `Example field (placeholder)` })
  accountName!: Maybe<Scalars['String']>;

  @GQL.Field(_type => String, { nullable: true, description: `Example field (placeholder)` })
  accountID!: Maybe<Scalars['String']>;

  @GQL.Field(_type => GQL.Int, { nullable: true })
  priority!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: false })
  id!: Scalars['Int'];
};

@GQL.InputType({  })
export class UpdateManyAccountsInput {

  @GQL.Field(_type => AccountUpdateFilter, { nullable: false, description: `Filter used to find fields to update` })
  filter!: AccountUpdateFilter;

  @GQL.Field(_type => UpdateAccountInput, { nullable: false, description: `The update to apply to all records found using the filter` })
  update!: UpdateAccountInput;
};

@GQL.InputType({  })
export class AccountUpdateFilter {

  @GQL.Field(_type => [AccountUpdateFilter], { nullable: true })
  and!: Maybe<Array<AccountUpdateFilter>>;

  @GQL.Field(_type => [AccountUpdateFilter], { nullable: true })
  or!: Maybe<Array<AccountUpdateFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  accountID!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  accountName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  firstName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  lastName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => BooleanFieldComparison, { nullable: true })
  commercial!: Maybe<BooleanFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  created!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => DateFieldComparison, { nullable: true })
  updated!: Maybe<DateFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  email!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  prettyAddress!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  companyName!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  phone2!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  phone1!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  createdBy!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  updatedBy!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class CreateOneAccountInput {

  @GQL.Field(_type => AccountInput, { nullable: false, description: `The record to create` })
  account!: AccountInput;
};

@GQL.InputType({  })
export class AccountInput {

  @GQL.Field(_type => String, { nullable: false })
  name!: Scalars['String'];
};

@GQL.InputType({  })
export class CreateManyAccountsInput {

  @GQL.Field(_type => [AccountInput], { nullable: false, description: `Array of records to create` })
  accounts!: Array<AccountInput>;
};

@GQL.InputType({  })
export class RelationsInput {

  @GQL.Field(_type => GQL.ID, { nullable: false, description: `The id of the record.` })
  id!: Scalars['ID'];

  @GQL.Field(_type => [GQL.ID], { nullable: false, description: `The ids of the relations.` })
  relationIds!: Array<Scalars['ID']>;
};

@GQL.InputType({  })
export class DeleteManyOrdersInput {

  @GQL.Field(_type => OrderDeleteFilter, { nullable: false, description: `Filter to find records to delete` })
  filter!: OrderDeleteFilter;
};

@GQL.InputType({  })
export class OrderDeleteFilter {

  @GQL.Field(_type => [OrderDeleteFilter], { nullable: true })
  and!: Maybe<Array<OrderDeleteFilter>>;

  @GQL.Field(_type => [OrderDeleteFilter], { nullable: true })
  or!: Maybe<Array<OrderDeleteFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  orderID!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  orderName!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class UpdateOneOrderInput {

  @GQL.Field(_type => GQL.ID, { nullable: false, description: `The id of the record to update` })
  id!: Scalars['ID'];

  @GQL.Field(_type => UpdateOrderInput, { nullable: false, description: `The update to apply.` })
  update!: UpdateOrderInput;
};

@GQL.InputType({  })
export class UpdateOrderInput {

  @GQL.Field(_type => GQL.Int, { nullable: true, description: `Example field (placeholder)` })
  exampleField!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: false })
  id!: Scalars['Int'];
};

@GQL.InputType({  })
export class UpdateManyOrdersInput {

  @GQL.Field(_type => OrderUpdateFilter, { nullable: false, description: `Filter used to find fields to update` })
  filter!: OrderUpdateFilter;

  @GQL.Field(_type => UpdateOrderInput, { nullable: false, description: `The update to apply to all records found using the filter` })
  update!: UpdateOrderInput;
};

@GQL.InputType({  })
export class OrderUpdateFilter {

  @GQL.Field(_type => [OrderUpdateFilter], { nullable: true })
  and!: Maybe<Array<OrderUpdateFilter>>;

  @GQL.Field(_type => [OrderUpdateFilter], { nullable: true })
  or!: Maybe<Array<OrderUpdateFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  orderID!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  orderName!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class CreateOneOrderInput {

  @GQL.Field(_type => OrderInput, { nullable: false, description: `The record to create` })
  order!: OrderInput;
};

@GQL.InputType({  })
export class OrderInput {

  @GQL.Field(_type => String, { nullable: false })
  name!: Scalars['String'];
};

@GQL.InputType({  })
export class CreateManyOrdersInput {

  @GQL.Field(_type => [OrderInput], { nullable: false, description: `Array of records to create` })
  orders!: Array<OrderInput>;
};

@GQL.InputType({  })
export class DeleteManyJobsInput {

  @GQL.Field(_type => JobDeleteFilter, { nullable: false, description: `Filter to find records to delete` })
  filter!: JobDeleteFilter;
};

@GQL.InputType({  })
export class JobDeleteFilter {

  @GQL.Field(_type => [JobDeleteFilter], { nullable: true })
  and!: Maybe<Array<JobDeleteFilter>>;

  @GQL.Field(_type => [JobDeleteFilter], { nullable: true })
  or!: Maybe<Array<JobDeleteFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  jobID!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  jobName!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class UpdateOneJobInput {

  @GQL.Field(_type => GQL.ID, { nullable: false, description: `The id of the record to update` })
  id!: Scalars['ID'];

  @GQL.Field(_type => UpdateJobInput, { nullable: false, description: `The update to apply.` })
  update!: UpdateJobInput;
};

@GQL.InputType({  })
export class UpdateJobInput {

  @GQL.Field(_type => GQL.Int, { nullable: true, description: `Example field (placeholder)` })
  exampleField!: Maybe<Scalars['Int']>;

  @GQL.Field(_type => GQL.Int, { nullable: false })
  id!: Scalars['Int'];
};

@GQL.InputType({  })
export class UpdateManyJobsInput {

  @GQL.Field(_type => JobUpdateFilter, { nullable: false, description: `Filter used to find fields to update` })
  filter!: JobUpdateFilter;

  @GQL.Field(_type => UpdateJobInput, { nullable: false, description: `The update to apply to all records found using the filter` })
  update!: UpdateJobInput;
};

@GQL.InputType({  })
export class JobUpdateFilter {

  @GQL.Field(_type => [JobUpdateFilter], { nullable: true })
  and!: Maybe<Array<JobUpdateFilter>>;

  @GQL.Field(_type => [JobUpdateFilter], { nullable: true })
  or!: Maybe<Array<JobUpdateFilter>>;

  @GQL.Field(_type => IdFilterComparison, { nullable: true })
  id!: Maybe<IdFilterComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  jobID!: Maybe<StringFieldComparison>;

  @GQL.Field(_type => StringFieldComparison, { nullable: true })
  jobName!: Maybe<StringFieldComparison>;
};

@GQL.InputType({  })
export class CreateOneJobInput {

  @GQL.Field(_type => JobInput, { nullable: false, description: `The record to create` })
  job!: JobInput;
};

@GQL.InputType({  })
export class JobInput {

  @GQL.Field(_type => String, { nullable: false })
  name!: Scalars['String'];
};

@GQL.InputType({  })
export class CreateManyJobsInput {

  @GQL.Field(_type => [JobInput], { nullable: false, description: `Array of records to create` })
  jobs!: Array<JobInput>;
};
