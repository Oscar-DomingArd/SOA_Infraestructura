#!/bin/bash

node ./servidor1/app.js &
node ./servidor2/app.js &
node ./sensor.js
