import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/hello', async () => {
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    port: 4000,
  })
  .then(() => {
    console.log('HTTP Server Running on http://localhost:4000')
  })
