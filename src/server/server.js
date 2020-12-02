const net = require ("net");
const newClientRequest = require ("./routes/newClient")
const properties = require ("../querys/selectAllproperties")
const  reservation = require ("../querys/reservation")
const seeFreeTime = require ("../querys/seeFreeTime")

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

      if (operation === "listProperties"){
        const result = await properties()
        socket.write(JSON.stringify(result))
      }

      if (operation === "reservation"){
        const { properties, client } = object;
        await reservation(properties, client)
      }

      if (operation === "freeTime"){
        const response = await seeFreeTime()
        socket.write(JSON.stringify(response))
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