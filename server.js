const http = require('http')
const app = require('./app')

//specify endpoint and handler
const PORT = process.env.port || 3010
const server = http.createServer(app)

//
server.listen(PORT)