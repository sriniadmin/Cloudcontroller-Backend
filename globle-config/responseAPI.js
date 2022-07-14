function responseAPI(res, params) {
    try {
        if(params.HttpStatus){
            return res.send(parseInt(params.HttpStatus), params);
        }
        else{
            return res.send(500, {message: 'Response Object Is Not Defined'});
        }
    } catch (error) {
        return res.send(500, {message: error.message});
    }
}

module.exports = responseAPI