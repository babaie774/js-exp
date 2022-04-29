const http = require("http");
const qs = require("querystring");

const server = http.createServer((req, res) => {
    res.write(`
    <html>
    <head>
    <title>search</title>
    </head>
    <body>
    <form action="/" method="POST" >
    <input name="search" />
    <button type="submit">try it</button>
    <form>
    </body>
    </html>
    `)
    res.end();
})

server.listen(3001, "127.0.0.1", () => {
    console.log("server is running on 127.0.0.1");
})