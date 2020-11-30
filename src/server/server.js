const net = require("net");
const newClientRequest = require("./routes/newClient")

const connectionListener = (socket) => {

    socket.on("data", async (data) => {
      const body = data.toString()
      const object = JSON.parse(body);
      const { operation } = object;
      if (operation === "BREAK") socket.end();

      if (operation === "newClient"){
        const { newClient } = object;
        await newClientRequest(newClient)
        socket.write('usuário adicionado')
      }

      
      
      socket.end();
       
    });

    socket.on("end", () => {
        console.log("Cliente desconectado!");
    });
}

const server = net.createServer(connectionListener);

server.listen(3000, "0.0.0.0");

console.log("server on")