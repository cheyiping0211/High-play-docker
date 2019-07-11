// Imports
import { Sequelize } from 'sequelize'

// App Imports
import config from 'config';
import { NODE_ENV } from '../../../config/env'
 
// Load database config
const databaseConfigEnv = config.development

// Create new database connection
const connection = new Sequelize(databaseConfigEnv.database,databaseConfigEnv.username, databaseConfigEnv.password, {
  host: databaseConfigEnv.host,
  dialect: databaseConfigEnv.dialect,
  logging: false,
  port:databaseConfigEnv.port,
  operatorsAliases: Sequelize.Op
})

// Test connection
console.info('SETUP - Connecting database...')

connection
  .authenticate()
  .then(() => {
    console.info('INFO - Database connected.');
  })
  .catch(err => {
    console.error('ERROR - Unable to connect to the database:', err)
  })

export default connection
