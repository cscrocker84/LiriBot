require("dotenv").config();
var fs = require("fs")
var axios = require("axios");
var moment = require("moment")
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var artist = process.argv.slice(3).join("+")
var movie = process.argv.slice(3).join("+")
var song = process.argv.slice(3).join("+")