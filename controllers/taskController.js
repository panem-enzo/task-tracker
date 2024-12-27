const Task = require('../models/taskModel')
const { getData } = require('../utils/taskUtils')

// @desc Returns all the tasks
// @route GET /api/tasks
async function getTasks(req, res) {
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
    try {
        // Parse the request body into a string
        const body = await getData(req)
        const { description, status } = JSON.parse(body)

        let dateTime = new Date()

        const task = {
            description,
            status,
            createdAt: dateTime.toLocaleString(),
            updatedAt: dateTime.toLocaleString()
        }

        const newTask = await Task.create(task)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(newTask))
    } catch (error) {
        console.log(error)
    }
}

// @desc Mark the task as to-do, in-progress, or done
// @route PUT /api/tasks/:id
async function markTask(req, res, id) {
    try {
        
        const task = await Task.findById(id)

        if (!task) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Task not found' }))
        } else {
            // Parse the request body into a string
            const body = await getData(req)

            const { status } = JSON.parse(body) 

            let dateTime = new Date()

            const taskData = {
                description: task.description,
                status,
                createdAt: task.createdAt,
                updatedAt: dateTime.toLocaleString()
            }

            const updatedTask = await Task.update(id, taskData)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(updatedTask))
        }
        
    } catch (error) {
        console.log(error)
    }
}

// @desc remove a task
// @route DELETE /api/tasks/:id
async function removeTask(req, res, id) {
    try {

        const task = await Task.findById(id)

        if (!task) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Task not found' }))
        } else {

            await Task.remove(id)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `Task (${id}): successfully removed` }))
        }
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getTasks,
    addTask,
    markTask,
    removeTask
}