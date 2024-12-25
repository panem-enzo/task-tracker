const Task = require('../models/taskModel')

// @desc Returns all the tasks
// @route GET /api/tasks
async function getTasks(req, res) {
    // Parse the request body into a string
    try {
        const tasks = await Task.findAll()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(tasks))
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getTasks
}