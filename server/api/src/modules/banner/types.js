// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Crate type
const BannerType = new GraphQLObjectType({
  name: 'banner',
  description: 'Banner Type',

  fields: () => ({
    id: { type: GraphQLInt },
    image: { type: GraphQLString }
  })
})

export default BannerType;
