// Imports
import express from 'express'

// App Imports
import setupLoadModules from './api/src/setup/load-modules'
import setupGraphQL from './api/src/setup/graphql'
import setupUpload from './api/src/setup/upload'
import setupStartServer from './api/src/setup/start-server'

// Create express server
const server = express()

// Setup load modules
setupLoadModules(server)

// Setup uploads
setupUpload(server)

// Setup GraphQL
setupGraphQL(server)

// Start server
setupStartServer(server)

// sequelize-auto -h 127.0.0.1 -d cheMysql -u root -x 111111 