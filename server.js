const http = require('http')

const host = 'localhost'
const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200);
    res.end(`{"message": "This is a JSON"}`)
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})