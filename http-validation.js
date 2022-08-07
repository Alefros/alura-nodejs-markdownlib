const fetch = require('node-fetch');

async function statusCheck(urls) {
    const arrayStatus = await Promise
        .all(urls
            .map(async url => {
                const res = await fetch(url);
                return res.status;
    }));
    return arrayStatus;
}

function extractUrls(links) {
    return links
        .map(objectLink =>  Object
            .values(objectLink)
            .join());
}

async function urlsValidator(links) {
    const urls = extractUrls(links);
    const statusLinks = await statusCheck(urls);
    return statusLinks;
}

module.exports = urlsValidator;