const net = require("net");

let number = 0;

const connectionListener = (socket) => {

    socket.on("data", (data) => {
      if (data === "BREAK") socket.end();

      number = number + 1
      socket.write(number)
      socket.end();
       
    });

    socket.on("end", () => {
        console.log("Cliente desconectado!");
    });
}

const server = net.createServer(connectionListener);

server.listen(3000, "0.0.0.0");

console.log("server on")