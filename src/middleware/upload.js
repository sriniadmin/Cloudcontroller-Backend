const multer = require("multer")
const logger = require("../config/logger")
const path = require("path")
const {
    db_create_patient_location,
} = require("../dbcontrollers/location.controller")

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null,'./uploads');
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().getTime()+path.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image")) {
//     cb(null, true);
//   } else {
//     cb(new Error("Please upload only images."), false);
//   }
// };

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true)
    } else if (file.mimetype.split("/")[1] === "pdf") {
        cb(null, true)
    } else {
        cb("Please upload only images or PDF or Excel files", false)
    }
}
logger.debug("PROCESS CED IS", process.cwd())
//__basedir + "/resources/static/assets/uploads/
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + "/public/images/")
        logger.debug("THE DIRNAME IS", __dirname)
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname))
    },
})
//`${Date.now()}-emr-${file.originalname}`

const uploadFile = multer({
    storage: storage,
    fileFilter: fileFilter,
    limit: "50mb",
})
module.exports = uploadFile
