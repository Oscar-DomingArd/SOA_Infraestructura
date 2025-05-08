mosquitto_sub -h localhost -t "ra_g17/sensores" -v &
mosquitto_pub -h localhost -t "ra_g17/sensores" -m '{"temperatura":21.5}'
