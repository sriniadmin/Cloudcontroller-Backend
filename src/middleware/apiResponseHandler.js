const ApiResponse = require("../lib/api/apiResponse")

const apiResponseHandler = async function(err, req, res, next){
  // if ((req.path).includes("liveapi")) {
  //   return
  // }
  // if ((req.path).includes("helpvideo")) {
  //   return
  // }
  try{
    req.apiRes = new ApiResponse(req.apiRes)
    return res
        .status(req.apiRes["status"])
        .json(req.apiRes)
  }
  catch(error){
    return res.send(500, {message: error.message});
  }
}

module.exports = apiResponseHandler;
