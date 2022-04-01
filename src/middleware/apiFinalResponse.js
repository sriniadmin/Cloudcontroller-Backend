const logger = require("../config/logger")
function apiFinalProcess(req, res) {
    logger.debug("finalProcess Dummy testing...")
    next()
}
module.exports = { apiFinalProcess }
