var log4js = require('log4js');
log4js.configure('./src/config/log4js-config.json');
const logger = log4js.getLogger('devicefactory');

const { DEVICE_CODE } = require("../lib/constants/AppEnum")

//Filter
function getFilter(filter, subfilter) {
    if (!filter) return { [subfilter]: null }
    filter = filter.split("&")
    let tempval = filter.filter((element) => element.includes(subfilter))
    logger.debug("The value is ", tempval)
    if (tempval && tempval.length > 0) {
        key = tempval[0].split("=")[0]
        val = tempval[0].split("=")[1]
        if (!val) return { [key]: null }
        return {
            [key]: val,
        }
    }
    return { [subfilter]: null }
}

async function getDevicesFactoryFile(req, res, next) {
    // const t = await sequelizeDB.transaction();

    let filter_flag = false
    logger.debug("Query, Params ", req.query, req.params)
    req.query.serial_number = getFilter(req.query.filter, "serial_number")["serial_number"]
    req.query.realfactory = getFilter(req.query.filter, "realfactory")["realfactory"]
    if (req.query.serial_number) {
        filter_flag = true
    }

    let device_data = req.body;
    logger.debug('DEVICE DATA IS', device_data)
    let devices;
    let totalCount = 0
    devices = []
    // try {
    //     devices = await db_get_devices_list(req.query)
    //     totalCount = await db_device_count()
    //     totalCount = dbOutput_JSON(totalCount)
    // } catch (err) {
    //     logger.debug("Device create error " + err);
    //     req.apiRes = DEVICE_CODE["2"];
    //     // error: "ERROR IN FETCHING  Devices FactoryReSeT",
    //     req.apiRes["error"] = {
    //         error: "ERROR IN FETCHING  Devices ",

    //     };
    //     return next();
    // }
    let factory_flag = 'fact'
    if (req.query.realfactory == '861629050019268') {
        // Options : DownloadFile, RestartApp, clearDownload, RebootSystem, FactoryReSeT
        factory_flag = 'DownloadFile'
    }
    var text = 'touch /sdcard/Download/new\ntouch /sdcard/Download/new1'
    res.setHeader('Content-type', "application/octet-stream");
    res.setHeader('Content-disposition', 'attachment; filename=file.txt');

    // res.attachment('filename.txt')
    // res.type('txt')
    res.send(text);
    logger.debug("File Sent");
    // req.apiRes = DEVICE_CODE["3"];
    // req.apiRes["response"] = {
    //     devices_data: devices,
    //     count: devices.length,
    //     deviceTotalCount: totalCount,
    //     factText: factory_flag
    // };
    // return next();
}


async function getDevices(req, res, next) {
    // const t = await sequelizeDB.transaction();

    let filter_flag = false
    logger.debug("Get Devices Query, Params ", req.query, req.params)
    req.query.serial_number = getFilter(req.query.filter, "serial_number")["serial_number"]
    req.query.realfactory = getFilter(req.query.filter, "realfactory")["realfactory"]
    if (req.query.serial_number) {
        filter_flag = true
    }

    let device_data = req.body;
    logger.debug('DEVICE DATA IS', device_data)
    let devices;
    let totalCount = 0
    devices=[]
    // try {
    //     devices = await db_get_devices_list(req.query)
    //     totalCount = await db_device_count()
    //     totalCount = dbOutput_JSON(totalCount)
    // } catch (err) {
    //     logger.debug("Device create error " + err);
    //     req.apiRes = DEVICE_CODE["2"];
    //     // error: "ERROR IN FETCHING  Devices FactoryReSeT",
    //     req.apiRes["error"] = {
    //         error: "ERROR IN FETCHING  Devices ",

    //     };
    //     return next();
    // }
    let factory_flag = 'fact'
    if (req.query.realfactory == '861629050019268') {
        // Options : DownloadFile, RestartApp, clearDownload, RebootSystem, FactoryReSeT
        factory_flag = 'DownloadFile'
    }
    logger.debug("Device list is " + devices + " Fact_info: " + factory_flag);
    req.apiRes = DEVICE_CODE["3"];
    req.apiRes["response"] = {
        devices_data: devices,
        count: devices.length,
        deviceTotalCount: totalCount,
        factText: factory_flag
    };
    return next();
}


module.exports = { getDevices, getDevicesFactoryFile }