
const net = require('net');

const client = net.Socket();

const clientConnected = () => {

    
    // client.write('{"operation": "newClient", "newClient": "alberto"}');

    client.write('{"operation": "listProperties"}')
    
}

//hostname -I
client.connect(3000, "192.168.1.7", clientConnected)