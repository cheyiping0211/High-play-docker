// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import SubscriptionType from './types'
import {  getAll } from './resolvers'


// Subscriptions by user
export const userLikes = {
  type: new GraphQLList(SubscriptionType),
  resolve: getAll
}
