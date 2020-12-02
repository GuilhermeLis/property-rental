const newClientRequest = require("./routes/newClient")
const properties = require("../querys/selectAllproperties")
const  reservation = require ("../querys/reservation")
const seeFreeTime = require ("../querys/seeFreeTime")

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


const newClient = async (call, callback) => {
  const { name } = call.request;
  await newClientRequest(name)

  callback(null, {})
}

const getProperties = async (call, callback) => {
  const result = await properties();

  callback(null, {result})
}

const makeResevantion = async (call, callback) => {
  const { properties, client } = call.request;
  await reservation(properties, client);

  callback(null, {})
}

const getFreeTime = async (call, callback) => {
  const freeschedule = await seeFreeTime();

  callback(null, {freeschedule})
}

function getServer() {

  var server = new grpc.Server();

  server.addService(protoDescriptor.PropertyService.service, {
    NewClient: newClient,
    GetProperties: getProperties,
    PutResevantion: makeResevantion,
    GetFreeTime: getFreeTime
  });

  return server;
}

var routeServer = getServer();
routeServer.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
routeServer.start();

console.log("we're on")