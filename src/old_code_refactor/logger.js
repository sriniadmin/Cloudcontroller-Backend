// const sequelizeDB = require("../config/emrmysqldb")
// var initModels =
//     require("../dbmodels/sequelizeEMRModels/init-models").initModels
// var models = initModels(sequelizeDB)
const fs = require("fs");
const { db_get_logger_data, db_add_logger_data, db_count_logger_data } = require("../dbcontrollers/logger_data.controller")
// const multipleUploadMiddleware = require("../middleware/multipleUploadMiddleware");
const util = require("util");
const path = require("path");
const multer = require("multer");
const {
    ALERT_CODE
} = require("../lib/constants/AppEnum")



const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(`${__dirname}/../../src/public/logger`));
    },
    filename: (req, file, callback) => {
        let math = ['text/plain'];
        if (math.indexOf(file.mimetype) === -1) {
            let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload text/plain.`;
            return callback(errorMess, null);
        }

        const filename = `${Date.now()}_${file.originalname}`;

        db_add_logger_data({
            url: `./src/public/logger/${filename}`
        })
        callback(null, filename);
    }
});
const uploadManyFiles = multer({ storage: storage }).array("many-files", 100);
const multipleUploadMiddleware = util.promisify(uploadManyFiles);



async function download(req, res, next) {
    try {
        if (fs.existsSync(req.query.url)) {
            return res.download(req.query.url)
        }
        return res.send({message: 'URL IS NOT EXIST'});
    } catch (error) {
        console.log(error)
        return res.send({error: error});
    }
}


async function upload(req, res, next) {
    try {
        //Upload process
        await multipleUploadMiddleware(req, res);
    
        if (req.files.length <= 0) {
          return res.send(`You must select at least 1 file`);
        }
        return res.send(`Your files has been uploaded.`);
      } catch (error) {
        if (error.code === "LIMIT_UNEXPECTED_FILE") {
          return res.send(`Exceeds the number of files allowed to upload.`);
        }
        return res.send(`Error when trying upload many files: ${error}}`);
    }
}






async function getLoggerData(req, res, next) {
    try {
        const data = await db_get_logger_data(req.query)

        const count = await db_count_logger_data(req.query)

        req.apiRes = ALERT_CODE["0"]
        req.apiRes["response"] = { 
            data: data,
            totalCount: count
        }
    } catch (error) {
        console.log(error)
        req.apiRes = ALERT_CODE["1"]
        req.apiRes["error"] = { error: error }
    }
    res.response(req.apiRes)
    return next()
}


module.exports = {
    download,
    upload,
    getLoggerData
}
