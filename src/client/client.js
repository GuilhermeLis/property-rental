const PROTO_PATH = "./property-rental.proto";

const grpc = require('grpc');

const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
});

var protoDescriptor = grpc.loadPackageDefinition(packageDefinition).propertyRental;

const client = new protoDescriptor.PropertyService('localhost:50051', grpc.credentials.createInsecure());

// Aqui você precisa adicionar o teu nome e descomentar o metodo

// client.NewClient({name: 'rafael'}, (err, response) => {
//     if (err !== null){
//         console.log("Ocorreu um erro!")
//         return;
//     }
//     console.log('Usuário cadastrado')
// })

// Esse metodo vai listar todas as propriedades

// const call = client.GetProperties({}, (err, response) => {
//     if (err !== null){
//         console.log("Ocorreu um erro!")
//         return;
//     }

//     console.log(response.result)
// })

// Aqui você vê os horários disponíveis de cada imovel
// client.GetFreeTime({}, (err, response) => {
//     if (err !== null){
//         console.log("Ocorreu um erro!")
//         return;
//     }

//     console.log(response.freeschedule)
// })

// Aqui você precisa colocar o id do cliente e o horário de agendamento

// client.PutResevantion({ properties: 2, client: 1},(err,response)=>{
//     if (err !== null){
//         console.log("Ocorreu um erro!")
//         return;
//     }

//     console.log('agendamento realizado')
// })


    // client.write('{"operation": "listProperties"}')

