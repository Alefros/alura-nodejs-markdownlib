const chalk = require('chalk');
const getFileAsync = require('./index');

const path = process.argv;

async function processText(filePath) {
    const result = await getFileAsync(path[2]);
    console.log(chalk.yellow('Links list', JSON.stringify(result)));
}

processText(path);

