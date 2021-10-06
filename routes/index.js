var express = require('express');
var router = express.Router();

//Get Timestamp and Client ip address
router.get('/', function (req, res) {
  var timestamp = new Date() 
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
  res 
    .set("Content-type", "application/json; charset=utf-8")
    .send(JSON.stringify({
      "timestamp": timestamp,
      "ip": ip,
  }, null, '\t'))
});

  module.exports = router