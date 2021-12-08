// All require modules
let express = require('express');
let ejs = require('ejs');
let http = require('http');
const { getPriority } = require('os');

//
let app = express();

//assign port number
let port = 2100 | process.env.port;

//my routes
app.get('/', (req, res) => {
    res.status(200).render("../views/index.ejs");
})


//Starting server
http.createServer(app).listen(port, () => {
    console.log("Port = " + port);
})