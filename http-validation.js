const fetch = require('node-fetch');

function errorHandler(error) {
    throw new Error(error.message);
}

async function statusCheck(urls) {
    try {    
        const arrayStatus = await Promise
        .all(urls
            .map(async url => {
                const res = await fetch(url);
                return res.status;
            }));
        return arrayStatus;
    } catch (error) {
         errorHandler(error);           
    }
}

function extractUrls(links) {
    return links
        .map(objectLink =>  Object
            .values(objectLink)
            .join());
}

async function urlsValidator(objectsList) {
    const urlsArray = extractUrls(objectsList);
    const statusLinks = await statusCheck(urlsArray);
    const results = objectsList.map((object, index) => ({ 
        ...object, 
        status: statusLinks[index]
    }));
    return results;
}

module.exports = urlsValidator;