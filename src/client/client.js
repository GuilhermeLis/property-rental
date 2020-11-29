
const net = require('net');

const client = net.Socket();

const clientConnected = () => {

    
    client.on("data", (data) => {
        console.log("Número aleatório: " + data.toString());
    
        client.write("FINALIZA");
    });
    
}

client.connect(3000, "192.168.0.110", clientConnected)