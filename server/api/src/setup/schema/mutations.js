// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/mutations';
import * as banner from '../../modules/banner/mutations';
import * as music from '../../modules/music/mutations';
import * as userLikes from '../../modules/userLikes/mutations';

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  fields: {
    ...user,
    ...banner,
    ...music,
    ...userLikes
  }
})

export default mutation
