var http = require('http');

var express = require('express');

var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var bparser = require("body-parser");
app.use(bparser.json());

//to server html,css,js from yhs server
app.use(express.static(__dirname + '/views'));

var ejs = require('ejs');
app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);
app.set('view engine', ejs);

//Mongo
var mongoose = require('mongoose');
mongoose.connect('asd', {

});
var db = moongose.connection;
var ItemDB;
//sistemas de almasenaje de info
var items = [];
var nextId = 0;
app.get('/', (req, res) => {
    res.render('index.html');
});
app.get('/admin', (req, res) => {
    res.render('admin.html');
});
app.get('/contact', (req, res) => {
    res.send("this is contact");
});
app.get('/about', (req, res) => {
    res.send("miguelito");
});
app.post('/api/products', (req, res) => {
    ItemDB.find({}, function (error, data) {
        if (error) {
            console.log("error reading data", error);
            res.status(500);
            res.send(error);
        }
        res.jason(data);
    });

});
pp.post('/api/products/:user', (req, res) => {
    ItemDB.find({
        user: req.params.user
    }, function (error, data) {
        if (error) {
            console.log("error reading data", error);
            res.status(500);
            res.send(error);
        }
        res.jason(data);
    });

});
app.post('/api/products', (req, res) => {
    console.log("client wants to save");
    console.log(req.body);
    res.send("ok");

    var item = new ItemDB(req.body);

    item.save(function (error, savedItem) {
        if (error) {
            console.log("no se armo la machaca", error);
            res.status(500);
            res.send(error);
        }
        console.log("si se armo la machaca");
        res.status = 201;
        res.json(savedItem);
    });


});
db.on('error', function (error) {
    console.log("error connection to mongo server", error)
});
db.on('open', function () {
    console.log("ya rifaste");

    var itemSchema = mongoose.Schema({
        title: String,
        description: String,
        price: Number,
        image: String,
        category: String,
        user: String
    });
    ItemDB = mongoose.model("itemsCh4", itemSchema);



});
app.listen(8080, () => {
    console.log("server running at http://localhost:8080")


});