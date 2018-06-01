var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'weather'
});

connection.connect();


router.post('/', function(req, res, next) {

    var postBody = req.body;

    var cityName = postBody.city;
    var countryName = postBody.country;
    var temperature = postBody.temperature;
    var img = postBody.img;
    var wind = postBody.wind;
    var pressure = postBody.pressure;
    var humidity = postBody.humidity;
    var sunrise = postBody.sunrise;
    var sunset = postBody.sunset;
    var lat = postBody.lat;
    var lon = postBody.lon;

    let sql = "INSERT INTO history (`city`, `country`, `temperature`, `img`, `wind`, `pressure`, `humidity`, `sunrise`, `sunset`, `lat`, `lon`) VALUES ('" + cityName + "','" + countryName + "','" + temperature + "','" + img + "','" + wind + "','" + pressure + "','" + humidity + "','" + sunrise + "','" + sunset + "','" + lat + "','" + lon + "')";

    console.log(sql);

    connection.query("INSERT INTO history (`city`, `country`, `temperature`, `img`, `wind`, `pressure`, `humidity`, `sunrise`, `sunset`, `lat`, `lon`) VALUES ('" + cityName + "','" + countryName + "','" + temperature + "','" + img + "','" + wind + "','" + pressure + "','" + humidity + "','" + sunrise + "','" + sunset + "','" + lat + "','" + lon + "')", function(err, rows, fields) {

        if (!err) {
            connection.query("SELECT * FROM history where city = '" + cityName + "'", function(err, rows) {
                if (!err && rows.length > 1) {
                    //console.log(rows)
                    res.json(rows);
                } else {
                    console.log("length < 0")
                    res.json([]);
                }
            });
        }
    });

});

module.exports = router;
