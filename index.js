const chalk = require('chalk');
const fs = require('fs');

const ASSETS_PATH = './files/';
const FILE_PATH =  ASSETS_PATH + 'text1.md';
const encoding = 'utf-8';

function treatError(error) {
    throw new Error(chalk.red(error.code, 'Error on access this file'));
}

async function getFile(filePath) {
    try {
        const text = await fs.promises.readFile(filePath, encoding);
        return getTextsLinks(text);
    } catch (error) {
        treatError(error);
    }
}

function getFileSynchronous(filePath) {
    fs.readFile(filePath, encoding, (error, data) => {
        if (error) {
            treatError(error);
        }
        console.log(chalk.green(data));
    });
}

function getTextsLinks(text) {
    
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const links = [];
    let temp;
    while ((temp = regex.exec(text)) != null) {
        links.push({ [temp[1]]: temp[2] });
    }
    return links.length === 0 ? 'No have links' : links;
}

module.exports = getFile;
