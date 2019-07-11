// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import MusicType from './types'
import { getAll, getById } from './resolvers'

// Crates All
export const musicAll = {
  type: new GraphQLList(MusicType),
  resolve: getAll
}

// By ID
export const music = {
  type: MusicType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}
