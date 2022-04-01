const redis = require('redis');
const jwt = require("jsonwebtoken")
const logger = require("../../../config/logger")
logger.debug("The Redis keys are ", process.env.REDIS_SERVER, process.env.REDIS_PORT, process.env.REDIS_KEY, process.env)

// create and connect redis client to local instance.
// const redisClient = redis.createClient();
const redisClient = redis.createClient({
  // host: process.env.REDIS_SERVER,
  // port: process.env.REDIS_PORT,
  // password: process.env.REDIS_KEY
  port: 6379,
});


function isJson(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

function checkRedisCache(keyType, key=null) {
  let finalkey
  finalkey = keyType+':'+key
  if (!key) {
    finalkey = keyType
  }
  return new Promise((resolve, reject) => {
    //redisClient.get(`${keyType}:${key}`, function(err, result) {
      redisClient.get(finalkey, function(err, result) {
      let response_result = {
        status: null,
        response: null,
        error: false
      }

      if (err) {
          logger.info("Cookie JWK Error : " + err)
          redisClient.del(finalkey, function(err, response) {
            if (response == 1) {
              logger.debug("Deleted key Successfully!")
            } else {
              logger.debug("Cannot delete Key")
            }
          })

          response_result.status = false
          response_result.error = true
          response_result.response = err.name
          resolve(response_result)
        }



      if (result) {


        logger.debug("result is ", key, result,typeof(result))
        response_result.status = true
        if (isJson (result)){
          response_result.response = JSON.parse(result)
         }
         else
         {
          response_result.response = result

         }
        resolve(response_result)
      } else if (!err) {
        // Cache not found
          logger.debug("Cache not found ... ", keyType, key)
          response_result.status = false
          resolve(response_result)
      }


      // }
    })

  });

}


function updateRedisCache(keyType, key=null, cacheResult='', timeout=0) {
  let finalkey
  finalkey = keyType+':'+key
  if (!key) {
    finalkey = keyType
  }
  return new Promise((resolve, reject) => {
    redisClient.get(finalkey, function(err, result) {
      let response_result = {
        status: null,
        response: null,
        error: false
      }

      if (err) {
          logger.info("Cookie JWK Error : " + err)
          redisClient.del(finalkey, function(err, response) {
            if (response == 1) {
              logger.debug("Deleted key Successfully!")
            } else {
              logger.debug("Cannot delete Key")
            }
          })

          response_result.status = false
          response_result.error = true
          response_result.response = err.name
          resolve(response_result)
        }

      // if (result) {
      //   logger.debug("Prev result is ", keyType , key, result)
      // }
      // redisClient.setex(`${keyType}:${key}`, 3600, JSON.stringify({
      //   source: 'Redis Cache',
      //   ...cacheResult,
      // }));
      redisClient.setex(finalkey, 3600,JSON.stringify(cacheResult));
      response_result.status = true
      response_result.response = cacheResult
      // response_result.response = JSON.parse(cacheResult)
      resolve(response_result)

      // }
    })
  });
}



async function redisTenantUpdate(accessToken, tenant_name, tenant_id_result) {
  logger.debug("JWT decoded is", accessToken, tenant_name, tenant_id_result)
  let JwtDecoded = {}
  try {
    JwtDecoded = jwt.verify(accessToken, process.env.JWT_SECRET)
    logger.debug("JWT decoded is", JwtDecoded)
    JwtDecoded["userTenant"] = tenant_name
    JwtDecoded["userTenantId"] = tenant_id_result
  } catch (err) {
    response = err
    logger.info("Cookie JWT Error : " + response + err)
    // if (response == "TokenExpiredError") {
    // catch all error to Token Expiry as of today - Needs improvement in error handling
    res.clearCookie(process.env.TOKEN_KEY)
    return res.status(SYSTEM_AAA_CODE["2"].HttpStatus).json({
      result: SYSTEM_AAA_CODE["2"].Code,
      response: {},
      error: {
        errMessage: SYSTEM_AAA_CODE["2"].Message,
      },
      privilege: {},
    })
    // }
  }
  try {
    redisResponse = updateRedisCache(
      "userSession",
      accessToken,
      JwtDecoded
    )
  } catch (err) {
    logger.info("Redis JWT Update error userSession for tenant : " + err)
  }
  try {
    redisResponse = updateRedisCache(
      "tenants",
      tenant_name,
      { tenant_id: tenant_id_result }
    )
  } catch (err) {
    logger.info("Redis JWT Error  Tenant Update : " + err)
  }
  redisResponse = updateRedisCache(
      "tenants_id",
      tenant_id_result,
      {
        tenant_name: tenant_name,
      }
    )
    .catch((err) => {
      logger.error(
        "Redis JWT Error  Tenant Update  " +
        err
      )

    })
}


module.exports = {
  client :  redisClient,
  updateRedisCache : updateRedisCache,
  checkRedisCache: checkRedisCache,
  redisTenantUpdate: redisTenantUpdate
}
