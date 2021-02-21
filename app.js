// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "cricinfo.cex37jklfrwo.ap-south-1.rds.amazonaws.com",
//   user: "cricinfo",
//   password: "cricinfo",
//   database: "cricketers"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("select * from cricketers_info", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("I am here!.");
});

app.listen( process.env.port | 3000, () => {
    console.log("Connected!");
});