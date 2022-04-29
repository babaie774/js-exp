const http = require("http");
const qs = require("querystring");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // const dataRead = fs.readFileSync("db.text")
    const dataRead = fs.readFile("db.text", "utf-8", (err, data) => {
        console.log(data);
    })
    if (req.url == "/") {
        res.write(`
        <html>
        <head>
        <title>search</title>
        </head>
        <body>
        <p>${dataRead}</p>
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
            const data = qs.parse(body);
            fs.appendFileSync("db.text", data.search, () => {
                // res.statusCode = 302;
                // res.setHeader('Location', '/res');
                // res.writeHead(302, { "Location": "/" })
                res.writeHead(302, { 'Location': '/' })
            })
            res.end();
        })
    }
})
server.listen(3001, "127.0.0.1", () => {
    console.log("server is running on 127.0.0.1");
})
