const chalk = require('chalk');
const getFile = require('./index');
const urlsValidator = require('./http-validation');

const path = process.argv;

async function processText(filePath) {
    const result = await getFile(path[2]);
    console.log(chalk.yellow('Links list: \n', JSON.stringify(result)));
}

processText(path);

