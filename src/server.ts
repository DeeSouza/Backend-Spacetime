import 'dotenv/config'

import { resolve } from 'node:path'
import fastify from 'fastify'

import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(require('@fastify/multipart'))
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(require('@fastify/cors'), { origin: true })
app.register(require('@fastify/jwt'), { secret: 'spacetime' })

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app.listen({ port: 4000 }).then(() => {
  console.log('HTTP Server Running on http://localhost:4000')
})
