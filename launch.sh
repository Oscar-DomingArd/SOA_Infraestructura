#!/bin/bash

node ./ra_infraestructura_soa_17/app.js &
node ./servidor_2/app.js &
node ./sensor.js
