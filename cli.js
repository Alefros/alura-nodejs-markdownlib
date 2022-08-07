const chalk = require('chalk');
const getFile = require('./index');
const urlsValidator = require('./http-validation');

const path = process.argv;

async function processText(filePath) {
    const result = await getFile(path[2]);
    if (path[3] === 'validate') {
        console.log(chalk.yellow('Validateds links: \n', JSON.stringify(await urlsValidator(result))));
    } else {
        console.log(chalk.yellow('Links list: \n', JSON.stringify(result)));
    }
}

processText(path);

