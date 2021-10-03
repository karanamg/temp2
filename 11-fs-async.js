const { readFile, writeFile } = require('fs');
//const { read } = require('node:fs');
console.log("start")
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;

        // console.log(first, second);
        // writeFile('/content/result-asyn.txt', 'hello');
        writeFile('./content/result-sync.txt', `Here is the resule : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })


})
console.log('Start next task.')