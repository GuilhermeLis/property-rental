
// importação do pacote mqtt
var mqtt = require('mqtt');

// conexão estabelecida com o broker mqtt do servidor de teste do mosquitto
var client  = mqtt.connect('mqtt://test.mosquitto.org');


client.on('connect', function() {

    // Aqui você precisa colocar o nome do usuário que você quer visualizar
    // client.publish('new-client',JSON.parse({newClient: "rafael"}));

    // Aqui você poderá vê as reservas disponíveis
    // client.publish('list-properties')

    // Aqui você podera fazer uma reserva 
    // client.publish('free-time')

    // Aqui você podera fazer uma reserva 
    // client.write('reservation', JSON.parse({ properties: 1, client: 1 }))
   
})