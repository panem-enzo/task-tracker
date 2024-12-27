const tasks = require('../data/tasks')
const { v4: uuidv4 } = require('uuid')

const { writeDataToFile } = require('../utils/taskUtils')

function findAll() {
    return new Promise((resolve, reject) =>{
        resolve(tasks)
    })
}

function create(task) {
    return new Promise((resolve, reject) => {
        const newTask = {id: uuidv4(), ...task}
        tasks.push(newTask)
        // Overrite the new 'tasks' to the JSON file
        writeDataToFile('./data/tasks.json', tasks)
        resolve(newTask)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        // Handle the else case (if id is not found) later
        const matchingTask = tasks.find((item) => item.id === id)
        resolve(matchingTask)
    })
}

function update(id, taskData) {
    return new Promise((resolve, reject) => {
        const index = tasks.findIndex((p) => p.id === id)
        tasks[index] = {id, ...taskData}
        writeDataToFile('./data/tasks.json', tasks)
        resolve(taskData)
    })
}

module.exports = {
    findAll,
    create,
    findById,
    update
}