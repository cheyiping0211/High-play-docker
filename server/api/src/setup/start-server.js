// App Imports
import { NODE_ENV,PORT } from '../../../config/env'
// Start server
export default function (server) {
  console.info('SETUP - Starting server..')

  server.listen(PORT, (error) => {
    if (error) {
      console.error('ERROR - Unable to start server.')
    } else {
      console.info(`INFO - Server started on http://localhost:${ PORT }/graphql [${ NODE_ENV }]`)
    }
  })
}
