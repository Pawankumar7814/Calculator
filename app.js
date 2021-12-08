// All require modules
let express = require('express');
let ejs = require('ejs');
let http = require('http');

const { getPriority } = require('os');

//
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//assign port number
let port = 2100 | process.env.port;

//my routes
app.get('/', (req, res) => {
    res.status(200).render("../views/index.ejs", { v1: "", v2: "", Answer: "" });
});

app.post('/add', (req, res) => {
    let a = req.body.First_Value;
    let b = req.body.Second_Value;
    let c = parseInt(a) + parseInt(b);
    res.status(200).render("../views/index.ejs", { v1: a, v2: b, Answer: c });
})

app.post('/sub', (req, res) => {
    let a = req.body.First_Value;
    let b = req.body.Second_Value;
    let c = parseInt(a) - parseInt(b);
    res.status(200).render("../views/index.ejs", { v1: a, v2: b, Answer: c });
})

app.post('/mul', (req, res) => {
    let a = req.body.First_Value;
    let b = req.body.Second_Value;
    let c = parseInt(a) * parseInt(b);
    res.status(200).render("../views/index.ejs", { v1: a, v2: b, Answer: c });
})

app.post('/div', (req, res) => {
    let a = req.body.First_Value;
    let b = req.body.Second_Value;
    let c = parseInt(a) / parseInt(b);
    res.status(200).render("../views/index.ejs", { v1: a, v2: b, Answer: c });
})

//Starting server
http.createServer(app).listen(port, () => {
    console.log("Port = " + port);
})