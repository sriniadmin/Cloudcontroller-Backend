// Api Response Class

class ApiResponse {
  constructor(apiResp) {
    this.result = apiResp.Code;
    this.response = apiResp.response;
    this.error = apiResp.error;
    this.privilege = apiResp.privilege;
    this.status = apiResp.HttpStatus;
    this.message = apiResp.Message;
  }
}

module.exports = ApiResponse
