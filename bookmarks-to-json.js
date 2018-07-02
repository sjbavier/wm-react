var bookmarks = require('bookmarks-to-json-categorization');

var bookmarksHTML = process.argv[2].toString();
var startTime = Date.now();
var pipeFile = './src/components/bookmarks/bookmarksJson.json';;

bookmarks(bookmarksHTML, options = { pipeFile: pipeFile, exportToFile: true }, (data) => {
    var endTime = Date.now();
    var dataObject = JSON.parse(data);
    console.log(`Converted ${dataObject.length} bookmarks in ${(endTime - startTime)}ms\nPiped to => ${pipeFile}`)
});