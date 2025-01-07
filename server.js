require('dotenv').config()
const http = require('http')
const { getTasks, addTask, markTask, removeTask, removeAll } = require('./controllers/taskController')

const host = process.env.SERVER_HOST || 'localhost' 
const port = process.env.SERVER_PORT || 8080

const server = http.createServer((req, res) => {
    if (req.url === '/api/tasks' && req.method === 'GET') {
        getTasks(req, res)
    } else if (req.url === '/api/tasks' && req.method === 'POST') {
        addTask(req, res)
    } else if (req.url.match(/\/api\/tasks\/([a-zA-Z0-9-]+)/) && req.method === 'PUT') {
        const id = req.url.split('/')[3]
        markTask(req, res, id)
    } else if (req.url.match(/\/api\/tasks\/([a-zA-Z0-9-]+)/) && req.method === 'DELETE') {
        const id = req.url.split('/')[3]
        removeTask(req, res, id)
    } else if (req.url === '/api/tasks' && req.method === 'DELETE') {
        removeAll(req, res)
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }))
    }
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})