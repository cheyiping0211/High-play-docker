// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { UserType } from './types'
import { getAll, getById  } from './resolvers'

// All
export const userAll = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// By ID
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

