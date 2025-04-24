var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var mqtt = require("mqtt");


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
    var client = new mqtt.connect("mqtt://test.mosquitto.org:1883");
    client.subscribe('ra_g17/sensores');
    client.on("connect", ()=> {
        var now = new Date();
        client.publish('ra_g17/sensores','nodo: '+req.body.id_nodo+', timestamp: '+now.getTime()+ ', temperatura: '+req.body.temperatura+', humedad: '+req.body.humedad+', co2: '+req.body.co2+', volatiles: '+req.body.volatiles);
    });

});
module.exports = router;
