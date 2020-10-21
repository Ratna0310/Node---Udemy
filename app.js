const chalk = require('chalk');

// const greenMsg = chalk.blue.inverse.bold("Success!");
// console.log(greenMsg);

// console.log(process.argv[2]);
const command = process.argv[2];
if(command == 'add')
{
    console.log("adding note!");
}
