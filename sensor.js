const axios = require('axios');



setInterval(() => {
	var sensorData = {
		id_nodo: "sensor_01",
		temperatura: Math.floor(Math.random()*101),
		humedad: Math.floor(Math.random()*101),
		co2: Math.floor(Math.random()*1001),
		volatiles: Math.floor(Math.random()*101),
		timestamp: new Date().toISOString()
	};
	axios.post('http://localhost:8080/record',sensorData).then(res=>console.log('Sensor envio datos',res.data)).catch(err=>console.error('ERROR: ', err.message));},10000);
