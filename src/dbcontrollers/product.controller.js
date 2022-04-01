const Sequelize = require("sequelize")
const Op = Sequelize.Op
const postgresSequelizeDB = require("../config/emrpostgresdb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(postgresSequelizeDB)
const logger = require("../config/logger")
const Products = models.product
async function db_get_product_list(tenant_id, username, params) {
    product_list = ""
    let { limit, offset, filter, generic_name, product_name } = params
    if (generic_name) {
        await Products.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            //order: ["id"],
            where: {
                    generic_name: { [Op.iLike]: `%${generic_name}%`}
                },
            raw: true,
        })
            .then((product_data) => {
                logger.debug("Products list is" + product_data)
                product_list = product_data
            })
            .catch((err) => {
                logger.debug(
                    "Products list fetch error " +
                        tenant_id +
                        "not found Err:" +
                        err
                )
                throw new Error("Product list fetch error -  tenant check")
            })
        return product_list
    } else if (product_name) {
        await Products.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            //order: ["id"],
            where: {
                    product_name: { [Op.iLike]: `%${product_name}%` },
                },
                // product_name: { [Op.iLike]: `%${product_name}%` },
            raw: true,
        })
            .then((product_data) => {
                logger.debug("Products list is" + product_data)
                product_list = product_data
            })
            .catch((err) => {
                logger.debug(
                    "Products list fetch error " +
                        tenant_id +
                        "not found Err:" +
                        err
                )
                throw new Error("Product list fetch error -  tenant check")
            })
        return product_list
    } else {
        await Products.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            attributes: ["generic_name", "product_name"],
            //order: ["id"],
            where: {
                generic_name: { [Op.iLike]: `%${generic_name}%` },
                product_name: { [Op.iLike]: `%${product_name}%` },
            },
            raw: true,
        })
            .then((product_data) => {
                logger.debug("Product list is" + product_data)
                product_list = product_data
            })
            .catch((err) => {
                logger.debug(
                    "Product  list fetch error " +
                        tenant_id +
                        "not found Err:" +
                        err
                )
                throw new Error(
                    "Product list fetch error -  tenant check" + err
                )
            })

        return product_list
    }
}




async function db_create_product(tenant_id, product_data, transaction) {
    product_data = JSON.stringify(product_data)
    product_data = JSON.parse(product_data)
    logger.debug('the product data is',product_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let products = await Products.create(product_data, { transaction: trans })
    try {
        logger.debug("Product insert output is" + products)
    } catch (err) {
        logger.debug(
            "Product insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("Product insert  error -  tenant check" + err)
    }
    return products
}
module.exports = { db_get_product_list,db_create_product}
