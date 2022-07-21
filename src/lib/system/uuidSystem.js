const uuidAPIKey = require('uuid-apikey');

var getUUID = async function (params) {
  return  params.uuidType + uuidAPIKey.create()["uuid"]
}

module.exports = {
  getUUID
}