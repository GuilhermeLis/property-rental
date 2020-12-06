var mqtt = require('mqtt');
var server  = mqtt.connect('mqtt://test.mosquitto.org');

const newClientRequest = require ("./routes/newClient")
const properties = require ("../querys/selectAllproperties")
const  reservation = require ("../querys/reservation")
const seeFreeTime = require ("../querys/seeFreeTime")

const NEW_CARRO = 'new-client';
const LIST_PROPERTIES = 'list-properties';
const RESERVATION = 'reservation';
const FREE_TIME = 'free-time';


server.on('connect', function(data, message) {

    server.subscribe(NEW_CARRO, function (err) {
      if (!err) {
            console.log("Conexão não foi realizada com sucesso");
        }
      switch (data){

      case data:
        const object = JSON.parse(message)
        const { newClient } = object;
        await newClientRequest(newClient)
        server.publish('usuário adicionado')
        break;
      
      case data:
        const result = await properties()
        server.publish(JSON.stringify(result))
        break;

      case data:
        const object = JSON.parse(message)
        const { properties, client } = object;
        await reservation(properties, client)
        break;

      case data:
        const response = await seeFreeTime()
        server.publish(JSON.stringify(response))
        break;

      }
       
    });
}