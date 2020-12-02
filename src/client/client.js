
const net = require('net');

const client = net.Socket();

const clientConnected = () => {

    // Aqui você precisa colocar o nome do usuário que você quer visualizar
    // client.write('{"operation": "newClient", "newClient": "rafael"}');

    // Aqui você poderá vê as reservas disponíveis
    // client.write('{"operation": "listProperties"}')

    // Aqui você podera fazer uma reserva 
    // client.write('{"operation": "reservation", "properties": 1, client: 1 }')
   
}

//hostname -I
client.connect(3000, "COLOQUE SEU IP AQUI", clientConnected)