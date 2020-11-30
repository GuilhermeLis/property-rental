const putClient = require('../../querys/putClient')
module.exports = async function(newClient) {
  await putClient(newClient)
}