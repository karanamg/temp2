const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Welcome to our history')
    }

    //res.end(); 
    res.end(
        `<h1>Oops!</h1>
    <p> Page not available </p>
    <a href="/"> back to home</a>`

    )
})

server.listen(5000)