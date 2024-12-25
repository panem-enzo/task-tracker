const Task = require('../models/taskModel')
const { getPostData } = require('../utils/taskUtils')

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

// @desc Creates a new task
// @route POST /api/tasks
async function addTask(req, res) {
    // Parse the request body into a string
    try {

        const body = await getPostData(req)
        const { description, status } = JSON.parse(body)

        let datetime = new Date()

        const task = {
            description,
            status,
            createdAt: datetime,
            updatedAt: datetime
        }

        const newTask = await Task.create(task)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(newTask))
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getTasks,
    addTask
}