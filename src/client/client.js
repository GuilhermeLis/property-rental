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

// client.NewClient({name: 'rafael'}, (err, response) => {
//     if (err !== null){
//         console.log("Ocorreu um erro!")
//         return;
//     }
//     console.log('Usuário cadastrado')
// })

client.GetProperties({}, (err, response) => {
    if (err !== null){
        console.log("Ocorreu um erro!")
        return;
    }

    console.log(response.result)
})

// client.PutResevantion({properties, client},(err,response)=>{

// })

// client.write('{"operation": "newClient", "newClient": "alberto"}');

    // client.write('{"operation": "listProperties"}')
