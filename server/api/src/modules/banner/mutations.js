// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

 // App Imports
import  BannerType  from './types'
import { create, update, remove } from './resolvers'

// banner create
export const bannerCreate = {
  type: BannerType,
  args: {
    image: {
      name: 'image',
      type: GraphQLString
    },
  },
  resolve: create
}

// banner update
export const bannerUpdate = {
    type: BannerType,
    args: {
      id: {
        name: 'id',
        type: GraphQLInt
      },
      image: {
        name: 'image',
        type: GraphQLString
      },
    },
    resolve: update
}
  
// banner remove
export const bannerRemove = {
    type: BannerType,
    args: {
      id: {
        name: 'id',
        type: GraphQLInt
      }
    },
    resolve: remove
}