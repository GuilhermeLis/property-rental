
const net = require('net');

const client = net.Socket();

const clientConnected = () => {

    
    client.write('{"operation": "newClient", "newClient": "gui"}');
    
    client.on("data", (data) => {
        // console.log("Número aleatório: " + data.toString());
        
    });
    
}

//hostname -I
client.connect(3000, "192.168.1.7", clientConnected)