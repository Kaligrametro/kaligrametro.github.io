var fs = require('fs');

function getFileNames()
{
    var files = fs.readdirSync('./public');
    console.log(files);
}
