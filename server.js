// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// require note and article models
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");
// scraping tools
var request = require("request");
var cheerio = require("cheerio");

// initialize express
var app = express();

// use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
	extended: false
}));

// make public a static dir
app.use(express.static("public"));

// database configuration with mongoose
mongoose.connect("mongodb://localhost/blah");
var db = mongoose.connection;

// show any mongoose errors
db.on("error", function(error) {
	console.log("Mongoose Error: ", error);
});

// once logged into the db through mongoose, log a success message
db.once("open", function() {
	console.log("Mongoose connection successful.");
});

// ROUTES



