const fs = require('fs');

const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function(error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

const asyncReadFile = async function () {
    console.log('f1 start');
    const f1 = await readFile('src/demo05/jie.sql');
    console.log('f2 start');
    const f2 = await readFile('src/demo05/mock.txt');
    console.log('read end')
    console.log(f1.toString());
    console.log(f2.toString());
    console.log('end');
};

asyncReadFile();