let tasks = require('../data/tasks')
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
        const index = tasks.findIndex((item) => item.id === id)
        tasks[index] = {id, ...taskData}
        writeDataToFile('./data/tasks.json', tasks)
        resolve(taskData)
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        tasks = tasks.filter((item) => item.id !== id)
        writeDataToFile('./data/tasks.json', tasks)
        resolve()
    })
}

function removeAll() {
    return new Promise((resolve, reject) => {
        writeDataToFile('./data/tasks.json', JSON.parse('[]'))
        resolve()
    })
}

module.exports = {
    findAll,
    create,
    findById,
    update,
    remove,
    removeAll
}