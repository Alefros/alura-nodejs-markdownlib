
function extractUrls(links) {
    return links.map(objectLink =>  Object.values(objectLink).join());
}

function urlsValidator(links) {
    return extractUrls(links);
}

module.exports = urlsValidator;