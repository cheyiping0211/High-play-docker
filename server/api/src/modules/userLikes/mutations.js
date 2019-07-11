// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import UserLikesType from './types'
import { create, remove } from './resolvers'

// UserLikes create
export const userLikesCreate = {
  type: UserLikesType,
  args: {
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// UserLikes remove
export const userLikesRemove = {
  type: UserLikesType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}