#!/usr/bin/env node

const args = process.argv
// Default: slice index at 2 because of structure of process.argv
// Index 0: path to nodejs executable
// Index 1: path to the script being executed
const myArgs = args.slice(2)
const command = myArgs[0]

const host = 'localhost'
const port = 8080

async function getData() {
    
    const response = await fetch(`http://${host}:${port}/api/tasks`, {
        method: 'GET'
    })

    console.log(response)
}

getData()

// switch (command) {
//     case 'add':
//         console.log('added')
//         console.log('multi line')
//         break
//     case 'update': 
//         console.log('updated')
//         break
//     case 'delete': 
//         console.log('deleted')
//         break
//     case 'list': 
//         console.log('list')
//         break
//     default: console.log(`'${command}' command is not valid`)
// }