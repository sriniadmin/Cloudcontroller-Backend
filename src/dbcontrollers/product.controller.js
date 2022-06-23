const Sequelize = require("sequelize")
const Op = Sequelize.Op
const postgresSequelizeDB = require("../config/emrpostgresdb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(postgresSequelizeDB)
const logger = require("../config/logger")
const Products = models.product


// async function db_get_product_list(tenant_id, username, params) {
//     product_list = ""
//     let { limit, offset, filter, generic_name, product_name } = params
//     if (generic_name) {
//         await Products.findAll({
//             limit: parseInt(limit),
//             offset: parseInt(offset),
//             //order: ["id"],
//             where: {
//                     generic_name: { [Op.iLike]: `%${generic_name}%`}
//                 },
//             raw: true,
//         })
//             .then((product_data) => {
//                 logger.debug("Products list is" + product_data)
//                 product_list = product_data
//             })
//             .catch((err) => {
//                 logger.debug(
//                     "Products list fetch error " +
//                         tenant_id +
//                         "not found Err:" +
//                         err
//                 )
//                 throw new Error("Product list fetch error -  tenant check")
//             })
//         return product_list
//     } else if (product_name) {
//         await Products.findAll({
//             limit: parseInt(limit),
//             offset: parseInt(offset),
//             //order: ["id"],
//             where: {
//                     product_name: { [Op.iLike]: `%${product_name}%` },
//                 },
//                 // product_name: { [Op.iLike]: `%${product_name}%` },
//             raw: true,
//         })
//             .then((product_data) => {
//                 logger.debug("Products list is" + product_data)
//                 product_list = product_data
//             })
//             .catch((err) => {
//                 logger.debug(
//                     "Products list fetch error " +
//                         tenant_id +
//                         "not found Err:" +
//                         err
//                 )
//                 throw new Error("Product list fetch error -  tenant check")
//             })
//         return product_list
//     } else {
//         await Products.findAll({
//             limit: parseInt(limit),
//             offset: parseInt(offset),
//             attributes: ["generic_name", "product_name"],
//             //order: ["id"],
//             where: {
//                 generic_name: { [Op.iLike]: `%${generic_name}%` },
//                 product_name: { [Op.iLike]: `%${product_name}%` },
//             },
//             raw: true,
//         })
//             .then((product_data) => {
//                 logger.debug("Product list is" + product_data)
//                 product_list = product_data
//             })
//             .catch((err) => {
//                 logger.debug(
//                     "Product  list fetch error " +
//                         tenant_id +
//                         "not found Err:" +
//                         err
//                 )
//                 throw new Error(
//                     "Product list fetch error -  tenant check" + err
//                 )
//             })

//         return product_list
//     }
// }


async function db_create_product(params) {
    try {
        const obj = {
            ndc_product_code: params["ndc_product_code"],
            form: params["form"] || null,
            generic_name: params["generic_name"] || null,
            product_name: params["product_name"] || null,
            route: params["route"] || null,
            marketing_status: params["marketing_status"] || null,
            active_ingredient_count: params["active_ingredient_count"] || null
        }
        return await Products.create(obj)
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}


async function db_get_product_list(params) {
    try {
        return await Products.findAll({
            attributes: ["route", "product_name", "form", "marketing_status", "generic_name", ["active_ingredient_count", "strength"]],
            where: {
                product_name: { [Op.iLike]: `%${params.product_name}%` },
            },
            order: [["product_name", "ASC"]]
        })
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}


module.exports = { db_get_product_list,db_create_product}
