// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Crate type
const MusicType = new GraphQLObjectType({
  name: 'music',
  description: 'Music Type',

  fields: () => ({
    id: { type: GraphQLInt },
    link: { type: GraphQLString },
    artist: { type: GraphQLString },
    name: { type: GraphQLString },
    image: { type: GraphQLString }
  })
})

export default MusicType