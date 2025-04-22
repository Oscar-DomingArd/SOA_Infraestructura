var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var mqtt = require("mqtt");

client.on("connect", ()=> {
    var now = new Date();
    client.publish("1;"+now.getTime()+"30;50;20");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Data-Logger' });
});

router.get('/record', function(req, res, next) {
	var now = new Date();

});

function append2file (file2append, content){
	fs.appendFile(file2append, content, function (err) {
    if (err) throw err;
    console.log("Saving: "+content+" in: "+file2append);
});
}

router.post('/record', function(req, res, next){
    //express.use(bodyParser.json());
    //express.use(bodyParser.urlencoder({ extended : true }));
    //router.use(bodyParser.json());
	//
    var client = new mqtt.connect("mqtt://test.mosquitto.org/ra_g17/sensores");

});
module.exports = router;
