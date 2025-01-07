#!/usr/bin/env node

const { addTask, removeTask, removeAll, getTasks, updateStatus } = require('../lib/api.js')

async function main() {
    const args = process.argv
    // Default: slice index at 2 because of structure of process.argv
    // Index 0: path to nodejs executable
    // Index 1: path to the script being executed
    const myArgs = args.slice(2)
    const command = myArgs[0]
    let desc = myArgs[1]
    let id = myArgs[1]

    switch (command) {
        case 'add':
            await addTask(desc)
            console.log('Task successfully added!')
            break
        case 'delete': 
            await removeTask(id)
            console.log(`Task (${id}) successfully deleted`)
            break
        case 'delete-all':
            await removeAll()
            console.log('Tasks successfully cleared!')
            break
        case 'list': 
            console.log(await getTasks())
            break
        case 'mark-in-progress':
            await updateStatus('in-progress', id)
            console.log(`Task (${id}) status successfully updated to 'in-progress'`)
            break
        case 'mark-done':
            await updateStatus('done', id)
            console.log(`Task (${id}) status successfully updated to 'done'`)
            break
        default: console.log(`'${command}' command for the task-cli does not exist`)
    }
}

main().catch((error)=> console.error(`Unhandled Error: ${error.message}`))