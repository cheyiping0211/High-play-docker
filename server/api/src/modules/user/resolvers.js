// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import { serverConfig,params,saltRounds,secret } from 'config'
import models from '../../setup/models'

// Create
export async function create(parentValue, { username, password, avatar }) {
  // Users exists with same email check

  const user = await models.User.findOne({ where: { username } })


  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, saltRounds)
    return await models.User.create({
      username,
      password: passwordHashed,
      avatar,
    })
  } else {
    // User exists
    throw new Error(`The username ${ username } is already registered. Please try to login.`)
  }
}

export async function login(parentValue, { username, password }) {
  const user = await models.User.findOne({ where: { username } })

  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ username } email address. Please signup.`)
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        username: userDetails.username,
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, secret)
      }
    }
  }
}

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } })
}

// Get all
export async function getAll() {
  return await models.User.findAll()
}

// Delete
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
}
