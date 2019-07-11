// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import BannerType from './types'
import { getAll } from './resolvers'

// Crates All
export const bannerAll = {
  type: new GraphQLList(BannerType),
  resolve: getAll
}