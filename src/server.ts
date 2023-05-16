import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello Diego'
})

app
  .listen({
    port: 4000,
  })
  .then(() => {
    console.log('HTTP Server Running on http://localhost:4000')
  })
