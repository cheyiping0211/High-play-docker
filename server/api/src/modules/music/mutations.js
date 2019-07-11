// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import MusicType from './types'
import { create, update, remove } from './resolvers'

// banner create
export const musicCreate = {
    type: MusicType,
    args: {
        link: {
            type: GraphQLString
        },
        artist: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        image: {
            type: GraphQLString
        }
    },
    resolve: create
}

// banner update
export const musicUpdate = {
    type: MusicType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        },
        link: {
            type: GraphQLString
        },
        artist: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        image: {
            type: GraphQLString
        }
    },
    resolve: update
}

// banner remove
export const musicRemove = {
    type: MusicType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
}