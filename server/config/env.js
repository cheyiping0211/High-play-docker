// Imports
import dotenv from 'dotenv'
import config from "config"
// Load .env
dotenv.config()

// Environment
export const NODE_ENV = process.env.NODE_ENV

// Port
export const PORT = config.port || 3001
