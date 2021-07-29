const express = require('express')
const router = express.Router()
const tmp = require('tmp');
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

router.post('/:lang', (req, res) => {
    const lang = req.params.lang;
    const code = req.body.code

    var fileExt;
    var compiler;
    if (lang == 'python') {
        compiler = 'python3'
        fileExt = 'py'
    }
    else if (lang == 'javascript') {
        compiler = 'node'; 
        fileExt = 'js';
    }

    tmp.file({prefix: `code-${lang}`, postfix: '.' + fileExt, keep: true}, function (err, path, fd, cleanupCallback) {
        if (err) throw err;

        fs.writeFile(path, code, (err, response) => {
            if(err) console.log('error', err);
        });
        fs.readFile(path, 'utf8', (err, response) => {
            if(err) console.log('error', err);

            exec(compiler + " " + path, (error, stdout, stderr) => {
                var output = stdout;

                fs.unlink(path,(err, response) => {
                    if(err) console.log('error', err);
                });

                if (error) {
                    errorBlock = error.toString().split('\n')
                    errorBlock.splice(0,2)
                    errorBlock.splice(1,2)
                    error = errorBlock.join('\n')
                    res.status(500).send(error.toString());
                } else {
                    console.log(output, output.length)
                    output = output.slice(0, output.length - 1);
                    res.send(output);
                }
            });
        });
    });
})

module.exports = router