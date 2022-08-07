const chalk = require('chalk');
const fs = require('fs');

const ASSETS_PATH = './files/';
const FILE_PATH =  ASSETS_PATH + 'text1.md';

function treatError(error) {
    throw new Error(chalk.red(error.code, 'Error on access this file'));
}

function getFileAsync(filePath) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(filePath, encoding)
        .then((text) => chalk.green(console.log(text)))
        .catch((error) => treatError(error));
}

function getFile(filePath) {
    const encoding = 'utf-8';
    fs.readFile(filePath, encoding, (error, data) => {
        if (error) {
            treatError(error);
        }
        console.log(chalk.green(data));
    });
}

getFile(FILE_PATH);
getFileAsync(FILE_PATH);