const newClientRequest = require("./routes/newClient")
const properties = require("../querys/selectAllproperties")
const  reservation = require ("../querys/reservation")
const seeFreeTime = require ("../querys/seeFreeTime")

const { response } = require('express');
const express = require('express');

const app = express();

const porta = process.env.PORT || 3000;

app.use(express.json());

// middleware do express que inclui um caminho de arquivos estáticos e os serve
app.use(express.static(process.env.PWD + '../../publicc'))

app.post("/cadastroClient", async (req, res) => {
  const { name } = req.body;
  await newClientRequest(name)

  res.send("{ result: 'OK' }");
})

app.get("/properties", async (req, res) => {
  const result = await properties();

  res.send( JSON.stringify(result) );
})

app.get("/properties", async (req, res) => {
  const freeschedule = await seeFreeTime();

  res.send( JSON.stringify(freeschedule) );
})

app.post("/cadastro", async (req, res) => {
  const { properties, client } = req.body;
  await reservation(properties, client);

  res.send("{ result: 'OK, cadastrado' }");
})



app.get("/", (req, res) => {
    // função que renderiza o conteúdo do diretório estático
    console.log('here')
    res.render("index");
});

app.listen(porta, () => {
    console.log(`Servidor executando, na porta ${porta}`);
});