const stream = require('stream');
const { db_get_logger_data, db_add_logger_data, db_count_logger_data, db_download_logger_data } = require("../dbcontrollers/logger_data.controller")
const {
    ALERT_CODE
} = require("../lib/constants/AppEnum")

async function download(req, res, next) {
    try {

        if(!req.query.id){
            return res.status(470).json({ message: 'Missing param id' })
        }
        const data = await db_download_logger_data(req.query)

        const fileContents = Buffer.from(data.data, "base64");

        const readStream = new stream.PassThrough();
        readStream.end(fileContents);

        res.set('Content-disposition', 'attachment; filename=' + data.url);
        res.set('Content-Type', 'text/plain');

        return readStream.pipe(res);
    } catch (error) {
        console.log(error)
        return res.status(500, { error: error })
    }
}


async function upload(req, res, next) {
    try {
        const data = req.files['many-files']
        if (!data && !data[0]) {
            return res.status(470).json({ message: 'You must select at least 1 file' })
        }

        let list = data
        if (!data[0]) {
            list = []
            list.push(data)
        }

        if(list.length > 10){
            return res.status(470).json({ message: 'Maximum is 10 files' })
        }

        let flg = 0
        for (const obj of list) {
            const spl = obj.name.split('.')
            if(spl[spl.length-1] !== 'txt'){
                flg = 1
                break
            }
            if(obj.size > 10485760){
                flg = 2
                break
            }
        }
        if(flg === 1){
            return res.status(470).json({ message: 'File type must be text/plain' })
        }
        if(flg === 2){
            return res.status(470).json({ message: 'File size must be smaller than 10MB' })
        }

        list.forEach(obj => {
            db_add_logger_data({
                data: obj.data,
                url: `${obj.name}`
            })
        });
        return res.send(200, { message: 'Sucessful' })
    } catch (error) {
        if (error.code === "LIMIT_UNEXPECTED_FILE") {
            return res.status(470).json({ message: 'Exceeds the number of files allowed to upload.' })
        }
        return res.status(500, { error: error })
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
    return responseAPI(res, req.apiRes)
}


module.exports = {
    download,
    upload,
    getLoggerData
}
