const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cros = require("cors");
const {port} = require("./config");

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cros());

const dotenv = require('dotenv');
dotenv.config();

require("./app/connection");

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const todoRoutes = require('./app/routers/todo.routes');

// Allow CORS For Localhost
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
    res.header("Cache-Control", "no-cache");
    next();
});
// Todo Routes
app.use('/todo', jsonParser, todoRoutes);

app.listen(port, () => {
    console.log('Server is running....', port)
})