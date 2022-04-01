const logger = require("../config/logger")
const ApiResponse = require("../lib/api/apiResponse")

const apiResponseHandler = async function(err, req, res, next){
  if ((req.path).includes("liveapi")) {
    return
  }
  if ((req.path).includes("helpvideo")) {
    return
  }
  try{
    logger.info("Api Response Handler", req.apiRes,JSON.stringify(req.apiRes['response']))
    req.apiRes = new ApiResponse(req.apiRes)
    return res
        .status(req.apiRes["status"])
        .json(req.apiRes)
  }
  catch(error){
    logger.debug("Unable to send the response - Mostly req.apiRes is undefined.", error)
    throw new Error('CATCH ALL ERROR CALLED', error);
  }
}

module.exports = apiResponseHandler;
