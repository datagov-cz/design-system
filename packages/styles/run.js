var fs = require('fs');
var path = require('path');

function walk(dir, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
            var filepath = path.join(dir, file);
            fs.stat(filepath, function (err, stats) {
                if (stats.isDirectory()) {
                    walk(filepath, callback);
                } else if (stats.isFile()) {
                    callback(filepath, stats);
                }
            });
        });
    });
}

function callback(path, stats) {

    const fileName = path
    const data = fs.readFileSync(fileName, 'utf8');
    fs.writeFileSync(fileName, '@import \'core\';\n' + data)
}


walk(path.dirname(__filename) + "/dist/components_", callback)
