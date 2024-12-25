const readline = require('readline');

// 'prompts' is a readline object that holds the input arguments
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('task-cli ', (input) => {
    const args = input.split(' ');
    console.log(args[0]);
    console.log(args[1]);
    rl.close();
});
