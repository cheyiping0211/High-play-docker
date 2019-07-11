// Imports
import { GraphQLObjectType, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'
import MusicType from '../music/types'

// UserLikes type
const UserLikesType = new GraphQLObjectType({
  name: 'userLikes',
  description: 'UserLikes Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    music: { type: MusicType },
  })
})

export default UserLikesType