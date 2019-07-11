// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType,UserLoginType　} from './types'
import { create, remove,login } from './resolvers'

// Create
export const userRegister = {
  type: UserType,
  args: {
    username: {
      name: 'username',
      type: GraphQLString
    },
    password: {
      name: 'password',
      type: GraphQLString
    },
    avatar: {
      name: 'avatar',
      type: GraphQLString
    },
  },
  resolve: create
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

// Auth
export const userLogin = {
  type: UserLoginType,
  args: {
    username: {
      name: 'username',
      type: GraphQLString
    },
    password: {
      name: 'password',
      type: GraphQLString
    },
  },
  resolve: login
}