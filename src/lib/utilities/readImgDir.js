var fs = require('fs');


module.exports = function readImgDir( directory, callback ) {
    directory = directory || console.log('No files could be read from directory ' )
    let files = fs.readdirSync(directory)
    return callback(files);
  }
  