const chalk = require('chalk');
const fs = require('fs');

function getFile(filePath) {
    const encoding = 'utf-8';
    fs.readFile(filePath, encoding, (_, data) => {
        console.log(chalk.green(data));
    });
}

getFile('./files/text1.md');