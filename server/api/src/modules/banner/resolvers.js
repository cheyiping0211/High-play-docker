// App Imports
import models from '../../setup/models'

// Get all
export async function getAll(parentValue) {
  return await models.Banner.findAll()
}

// Create banner
export async function create(parentValue, { image }, { auth }) {
    return await models.Banner.create({
      image,
    })
}

// Update banner
export async function update(parentValue, {id,image}) {
    return await models.Banner.update(
      {
        image,
      
      },
      {where: {id}}
    )
}

// Delete banner
export async function remove(parentValue, { id }) {
    return await models.Banner.destroy({where: {id}})
}
