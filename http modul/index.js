const http = require('http')
const port = 8080

const server = http.createServer((req, res) => {
    res.end('Hello')
})

server.listen(port, () => {
    console.log('Server listeninng  on: http://localhost:%s', port)
})
