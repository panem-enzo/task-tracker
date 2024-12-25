require('dotenv').config()
const http = require('http')

const host = process.env.SERVER_HOST || 'localhost' 
const port = process.env.SERVER_PORT || 8080

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(`Working`)
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})