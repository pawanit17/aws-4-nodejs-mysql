var mysql = require('mysql');

var con = mysql.createConnection({
  host: "cricinfo.cex37jklfrwo.ap-south-1.rds.amazonaws.com",
  user: "cricinfo",
  password: "cricinfo",
  database: "cricketers"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("select * from cricketers_info", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});