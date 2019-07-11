// App Imports
import models from '../../setup/models'
import { params } from 'config'

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.Music.findOne({ where: { id } })
}

// Get all
export async function getAll() {
  return await models.Music.findAll()
}

// Create music
export async function create(parentValue, { link, artist, name, image }, { auth }) {
  return await models.Music.create({
    link,
    artist,
    name,
    image
  })
}

// Update music
export async function update(parentValue, { id, image }) {
  return await models.Music.update(
    {
      link,
      artist,
      name,
      image
    },
    { where: { id } }
  )
}

// Delete music
export async function remove(parentValue, { id }) {
  return await models.Music.destroy({ where: { id } })
} 