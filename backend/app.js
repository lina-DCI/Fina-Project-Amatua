import express from 'express'

import { } from 'dotenv/config'

import { intervalId } from './lib/database/userExpiration.js'

import './lib/database/conf.js'

import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

import usersRouter from './routes/users.js'
import localesRouter from './routes/locales.js'
import productsRouter from './routes/products.js'

//imprort errorHandler method
import { errorHandler } from './middleware/errorHandler.js'

/** __dirname ist der Pfad zu app.js  **/
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname( __filename )

const app = express();

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static( join( __dirname, 'public') ) )



/** Routing **/
app.use('/api/locales', localesRouter)
app.use('/users', usersRouter);
app.use('/products', productsRouter);

//Error Handling
app.use(errorHandler)
/** END => Routing **/


export default app;
