const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)

const logger = require("../config/logger")
const Image = models.image
const Report=models.report



const uploadFiles = async (req, res) => {
    try {
        console.log(req.file)

        if (req.file == undefined) {
            return res.send(`You must select a file.`)
        }

        Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: __dirname + "/static/assets/uploads/",
            // data: fs.readFileSync(
            //     __dirname + "/static/assets/uploads/" + req.file.filename
            // ),
        }).then((image) => {
            // fs.writeFileSync(
            //     `__dirname + /static/assets/tmp/${image.name,image.data}`
            // )

            return res.send(`File has been uploaded.`)
        })
    } catch (error) {
        console.log(error)
        return res.send(`Error when trying upload images: ${error}`)
    }
}

async function db_create_images(images_data, reqfile, transaction,fullUrl) {
    images_list = ""
    logger.debug("Images data is " + images_data)


    await Image.create(
        {
            image_uuid: images_data["image_uuid"],
            template_uuid: images_data["template_uuid"],
            template_type: images_data["template_type"],
            tags:images_data["tags"],
            pid:images_data["pid"],
            type: reqfile.mimetype,
            name: reqfile.originalname,
            data:fullUrl
            // data: fs.readFileSync(
            //     __dirname + "/static/assets/uploads/" + reqfile.filename
            // ),
        },
        { transaction: transaction["transaction"] }
    )
        .then((images_data) => {
            logger.debug("Images insert output is" + images_data)
            // fs.writeFileSync(
            //     `${reqfile.path}`
            // )
            images_list = images_data
        })
        .catch((err) => {
            logger.debug("images insert  error " + " not found Err:" + err)
            throw new Error("Images insert  error")
        })

    return images_list
}

async function db_get_images_list(tenant_id, username, params) {
    image_list = ""
    let { limit, offset, template_uuid, pid } = params
    let whereStatement = {}
    if (template_uuid && template_uuid != 0) whereStatement.template_uuid = template_uuid
    if (pid && pid != 0) whereStatement.pid = pid
    logger.debug('THE wherestatement is',whereStatement, template_uuid, pid, params)
    await Image.findAll({
        limit: parseInt(limit),
        offset: parseInt(offset),
        where:whereStatement,
        raw: true,
        })
        .then((images_data) => {

            logger.debug("Images list is" + images_data)
            logger.debug('THE IMAGES DATA IN UPLOAD IS',images_data)
            image_list = images_data
            // logger.debug('THE IMAGES LIST IN UPLOAD IS',image_list)
        })
        .catch((err) => {
            logger.debug("Images list fetch error " + tenant_id + "not found Err:" + err)
            throw new Error(
                "Images list fetch error -  tenant check"
            )
        })

    return image_list
}

async function db_update_images(images_data, reqfile,template_uuid, transaction,fullUrl) {
    images_list = ""
    logger.debug("Images data is " + images_data)


    await Image.update(
        {
            template_uuid: images_data["template_uuid"],
            type: reqfile.mimetype,
            name: reqfile.originalname,
            data:fullUrl
            // data: fs.readFileSync(
            //     __dirname + "/static/assets/uploads/" + reqfile.filename
            // ),
        },
        {
            where:{
                template_uuid:template_uuid
            },
        },
       
        { transaction: transaction["transaction"] }
    )
        .then((images_data) => {
            logger.debug("Images insert output is" + images_data)
            // fs.writeFileSync(
            //     `${reqfile.path}`
            // )
            images_list = images_data
        })
        .catch((err) => {
            logger.debug("images insert  error " + " not found Err:" + err)
            throw new Error("Images insert  error")
        })

    return images_list
}


//Report

async function db_create_report(report_data, reqfile, transaction,fullUrl) {
    report_list = ""
    logger.debug("Report data is " + report_data)
    

    await Report.create(
        {
            type: reqfile.mimetype,
            name: reqfile.originalname,
            data:fullUrl,
            pid:report_data['pid'],
            report_uuid:report_data['report_uuid']
            // data: fs.readFileSync(
            //     __dirname + "/static/assets/uploads/" + reqfile.filename
            // ),
        },
        { transaction: transaction["transaction"] }
    )
        .then((report_data) => {
            logger.debug("Report insert output is" + report_data)
            // fs.writeFileSync(
            //     `${reqfile.path}`
            // )
            report_list = report_data
        })
        .catch((err) => {
            logger.debug("Report insert  error " + " not found Err:" + err)
            throw new Error("Report insert  error")
        })

    return report_list
}


async function db_get_report_list(tenant_id, username, params) {
    report_list = ""
    let { limit, offset,report_uuid, pid } = params
    let whereStatement = {}

    logger.debug('where statement is',whereStatement)
    if (report_uuid && report_uuid != 0) whereStatement.report_uuid = report_uuid
    if (pid && pid != 0) whereStatement.pid = pid
    logger.debug('THE wherestatement is',whereStatement)
    await Report.findAll({
        limit: parseInt(limit),
        offset: parseInt(offset),
        where:whereStatement,
        raw: true,
        })
        .then((report_data) => {

            logger.debug("Report list is" + report_data)
            logger.debug('THE REPORT DATA IS',report_data)
            report_list = report_data
            // logger.debug('THE IMAGES LIST IN UPLOAD IS',image_list)
        })
        .catch((err) => {
            logger.debug("report list fetch error " + tenant_id + "not found Err:" + err)
            throw new Error(
                "report list fetch error -  tenant check"
            )
        })

    return report_list
}

module.exports = {
    uploadFiles,
    db_create_images,
    db_get_images_list,
    db_create_report,
    db_get_report_list,
    db_update_images
}
