#!/usr/bin/env node

const host = 'localhost'
const port = 8080

async function addTask(desc) {
    await fetch(`http://${host}:${port}/api/tasks`, {
        method: 'POST',
        body: JSON.stringify({ 
            "description": desc, 
            "status":  "to-do"
        })
    })
}

async function removeTask(id) {
    await fetch(`http://${host}:${port}/api/tasks/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({ 
            "id": id
        })
    })
}

async function updateStatus(status, id) {
    await fetch(`http://${host}:${port}/api/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ 
            "id": id,
            "status": status
        })
    })
}

const args = process.argv
// Default: slice index at 2 because of structure of process.argv
// Index 0: path to nodejs executable
// Index 1: path to the script being executed
const myArgs = args.slice(2)
const command = myArgs[0]

// Execute Command
let desc = myArgs[1]
let id = myArgs[1]

switch (command) {
    case 'add':
        addTask(desc)
        console.log('Task Successfully Added!')
        break
    case 'update': 
        desc = myArgs[2]
        // updateTask(id, desc)
        break
    case 'delete': 
        removeTask(id)
        console.log(`Task (${id}) successfully deleted`)
        break
    case 'list': 
        getTasks()
        break
    case 'mark-in-progress':
        updateStatus('in-progress', id)
        console.log(`Task (${id}) status successfully updated to 'in-progress'`)
        break
    case 'mark-done':
        updateStatus('done', id)
        console.log(`Task (${id}) status successfully updated to 'done'`)
        break
    default: console.log(`'${command}' command does not exist`)
}