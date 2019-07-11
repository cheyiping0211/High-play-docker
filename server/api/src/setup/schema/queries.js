// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/query';
import * as music from '../../modules/music/query';
import * as banner from '../../modules/banner/query';
import * as userLikes from '../../modules/userLikes/query';


// import * as crate from '../../modules/crate/query'
// import * as subscription from '../../modules/subscription/query'

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',
  fields: () => ({
    ...user,
    ...music,
    ...banner,
    ...userLikes
  })
})

export default query