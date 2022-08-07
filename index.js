const chalk = require('chalk');
const fs = require('fs');

const ASSETS_PATH = './files/';
const FILE_PATH =  ASSETS_PATH + 'text1.md';
const encoding = 'utf-8';

function treatError(error) {
    throw new Error(chalk.red(error.code, 'Error on access this file'));
}

async function getFileAsync(filePath) {
    try {
        const text = await fs.promises.readFile(filePath, encoding);
        chalk.green(console.log(text));
    } catch (error) {
        treatError(error);
    }
}

function getFile(filePath) {
    fs.readFile(filePath, encoding, (error, data) => {
        if (error) {
            treatError(error);
        }
        console.log(chalk.green(data));
    });
}

getFile(FILE_PATH);
getFileAsync(ASSETS_PATH);