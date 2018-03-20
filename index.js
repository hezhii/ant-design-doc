const express = require('express')

const PUBLIC_DIR = 'public'
const app = express()

app.use(express.static(PUBLIC_DIR, {extensions: ['html']}))

const server = app.listen(3000, function () {
  const host = server.address().address
  const port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})