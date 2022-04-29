const http = require("http");
const qs = require("querystring");

const server = http.createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
        res.write(`
        <html>
        <head>
        <title>search</title>
        </head>
        <body>
        <form action="/" method="POST" >
        <input name="search" type="search" />
        <button type="submit">try it</button>
        <form>
        </body>
        </html>
        `)
        res.end();
    }

    if (req.url == "/" && req.method == "POST") {
        let body = "";
        req.on("data", (data) => {
            body += data
        })

        req.on("end", () => {
            console.log(body);
            const data = qs.parse(body)
            console.log(data.search);
            // res.statusCode = 302;
            // res.setHeader('Location', '/');
            // res.writeHead(302, { "Location": "/" })
            res.writeHead(302, { 'Location': '/' })
            res.end();
        })
        res.end();
    }
})

server.listen(3001, "127.0.0.1", () => {
    console.log("server is running on 127.0.0.1");
})