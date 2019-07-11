// Imports
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from './database'

const models = {
  User: databaseConnection.import('../modules/user/model'),
  Music: databaseConnection.import('../modules/music/model'),
  Banner: databaseConnection.import('../modules/banner/model'),
  UserLikes: databaseConnection.import('../modules/userLikes/model'),
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
