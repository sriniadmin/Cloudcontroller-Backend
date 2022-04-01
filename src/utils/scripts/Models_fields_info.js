var initModels =
    require("../../dbmodels/sequelizeEMRModels/init-models").initModels
const sequelizeDB = require("../../config/emrmysqldb")
var models = initModels(sequelizeDB)

async function modelsInfo() {
    let modelsOutput = {}
    // console.log("Models are ", Object.keys(models), models.rawAttributes)
    for (let table in models) {
        //console.log("The 1st for loop", table, typeof table, models[table])
        let modelsTableOutput = []
        for (let key in models[table].rawAttributes) {
            // console.log('Field: ', key); // this is name of the field
            // console.log('TypeField: ', models[table].rawAttributes[key].type.key); // Sequelize type of field
            // console.log("the fields are ", Object.keys(models[table].rawAttributes[key]))
            if ("validate" in models[table].rawAttributes[key]) {
                console.log(
                    "validate : ",
                    models[table].rawAttributes[key].Model,
                    models[table].rawAttributes[key].field,
                    models[table].rawAttributes[key].validate
                )
                let tempDict = {
                    field: models[table].rawAttributes[key].field,
                    validate: models[table].rawAttributes[key].validate,
                }
                modelsTableOutput.push(tempDict)
            }
            modelsOutput[table] = modelsTableOutput
        }
    }
    return modelsOutput
}

module.exports = modelsInfo
