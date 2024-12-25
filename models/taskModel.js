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
        writeDataToFile('./data/tasks.json', tasks)
        resolve(newTask)
    })
}

module.exports = {
    findAll,
    create
}