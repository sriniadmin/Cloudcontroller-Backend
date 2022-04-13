let IGNORE_AUTH_PATH = [
  "/api/sign/login",
  "api/patch/patchinventory",
  "/api/location/locationinventory", //delete latter, if i forget, please delete
  "/api/patientinventory", //delete latter, if i forget, please delete
  "api/patch/patchinventory",
  "/api/login",
  "/signup",
  "/sign/signup",

  // Live Api - Needs to be authenticated - and Ratelimited at Nginx
  "/liveapi/gateway/gateway_register",
  "/liveapi/gateway/gateway_keepalive",
  "/liveapi/gateway/push_data",
  "/liveapi/gateway/discovered_devices",

  "/",

  // "/sign/kafka",
  // "/api/patientinventory",
  // "/api/patients/patienttransaction/abc",

  // Internal Apis
  // "/api/internal/getuuid",
  "/api/internal/texttospeech",
  // "/api/internal/validatemodels",
  // Swagger
  "/api-docs/",
  "/api-docs/swagger-ui.css",
  "/api-docs/swagger-ui-bundle.js",
  "/api-docs/swagger-ui-standalone-preset.js",
  "/api-docs/swagger-ui-init.js",
  "/api-docs/swagger-ui-init.js",
  "/api-docs/favicon-16x16.png"

]

module.exports = {
  IGNORE_AUTH_PATH
}
