const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
const Op = Sequelize.Op;
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)

const logger = require("../config/logger")
const uuidAPIKey = require("uuid-apikey")
const Tenants = models.tenant
const MedSched = models.medsched
const Prescriptions = models.prescriptions

Prescriptions.hasMany(MedSched, {
    foreignKey: "prescription_id",
    sourceKey: "id",
})

var Prescription = function (prescriptionobj) {
    ; (this.filled_by_id = prescriptionobj.filled_by_id),
        (this.pharmacy_id = prescriptionobj.pharmacy_id),
        (this.date_added = prescriptionobj.date_added),
        (this.date_modified = prescriptionobj.date_modified),
        (this.provider_id = prescriptionobj.provider_id),
        (this.encounter = prescriptionobj.encounter),
        (this.start_date = prescriptionobj.start_date),
        (this.drug = prescriptionobj.drug),
        (this.drug_uuid = prescriptionobj.drug_uuid),
        (this.rxnorm_drugcode = prescriptionobj.rxnorm_drugcode),
        (this.form = prescriptionobj.form),
        (this.dosage = prescriptionobj.dosage),
        (this.quantity = prescriptionobj.quantity),
        (this.size = prescriptionobj.size),
        (this.unit = prescriptionobj.unit),
        (this.route = prescriptionobj.route),
        (this.interval = prescriptionobj.interval),
        (this.substitute = prescriptionobj.substitute),
        (this.refills = prescriptionobj.refills),
        (this.per_refill = prescriptionobj.per_refill),
        (this.filled_date = prescriptionobj.filled_date),
        (this.medication = prescriptionobj.medication),
        (this.note_uuid = prescriptionobj.note_uuid),
        (this.active = prescriptionobj.active),
        (this.datetime = prescriptionobj.datetime),
        (this.prac_uuid = prescriptionobj.prac_uuid),
        (this.site = prescriptionobj.site),
        (this.prescriptionguid = prescriptionobj.prescriptionguid),
        (this.erx_source = prescriptionobj.erx_source),
        (this.erx_uploaded = prescriptionobj.erx_uploaded),
        (this.drug_info_erx = prescriptionobj.drug_info_erx),
        (this.external_id = prescriptionobj.external_id),
        (this.end_date = prescriptionobj.end_date),
        (this.indication = prescriptionobj.indication),
        (this.prn = prescriptionobj.prn),
        (this.ntx = prescriptionobj.ntx),
        (this.rtx = prescriptionobj.rtx),
        (this.txDate = prescriptionobj.txDate),
        (this.tenant_uuid = prescriptionobj.tenant_uuid)
}

async function db_get_prescription_list(tenant_id, username, params) {
    prescription_list = ""
    let { limit, offset, filter, pid } = params

    let where = {}
    where.active = 1


    let limits = {};
    if (limit) {
        limits = {
            offset: (offset) ? parseInt(offset) : 0,
            limit: parseInt(limit)
        }
    }

    //pid = "patient6f5f9749-617f-4e86-98f3-b391d414525f"

    if (pid) {
        where.pid = pid
    }

    // if(true) {
    //     where[Op.and] = Sequelize.fn('DISTINCT', Sequelize.col('prescription_uuid')), 'prescription_uuid', 'date', 'drug', 'pid'
    // }

    //filter = {}
    //filter.from = new Date('2021-03-02')
    //filter.to = new Date('2021-03-03')

    let include = []
    let whereMedSched = {}
    if (filter) {
        /* //XXX - RGHV - LEAVE THIS IN THE CODE - TODO
        if (filter.hasOwnPropery(period)) {
            switch (filter.period) {
                case 'morning':
                    //where = Sequelize.where(Sequelize.fn('JSON_VALUE', Sequelize.col('drug'), '$.occurrence'), 'after breakfast')
                    //where.$and = Sequelize.where(Sequelize.fn('ISJSON', Sequelize.col('drug')), 1)
                    
                    //where.drug = {}
                    //where.drug.occurrence = {
                    //    [Op.or]: ['before breakfast', 'after breakfast']
                    //}
                }
        }*/

        if (filter.hasOwnProperty('prsc_id')) {
            whereMedSched.prescription_id = filter.prsc_id

            if (filter.hasOwnProperty('from') && filter.hasOwnProperty('to')) {
                whereMedSched.createdAt = {
                    [Op.between]: [filter.from, filter.to]
                }
            } else if (filter.hasOwnProperty('from')) {
                whereMedSched.createdAt = {
                    [Op.between]: [filter.from, Date.now()]
                }
            } else if (filter.hasOwnProperty('to')) {
                whereMedSched.createdAt = {
                    [Op.lte]: filter.to
                }
            }

            include.push({
                model: MedSched,
                attributes: [
                    "endedAt",
                    "createdAt",
                    "updatedAt"
                ],
                where: whereMedSched
            })
        } else {
            if (filter.hasOwnProperty('from') && filter.hasOwnProperty('to')) {
                where = {
                    [Op.and]: [{
                        end_date: {
                            [Op.lte]: filter.to
                        }
                    }, {
                        date_added: {
                            [Op.gte]: filter.from
                        }
                    }]
                }
            } else if (filter.hasOwnProperty('from')) {
                where.createdAt = {
                    [Op.between]: [filter.from, Date.now()]
                }
            } else if (filter.hasOwnProperty('to')) {
                where.createdAt = {
                    [Op.lte]: filter.to
                }
            }
        }
    }

    if (pid) {
        await Prescriptions.findAll({
            include: include,
            order: Sequelize.literal('date DESC'),
            attributes: [Sequelize.fn('DISTINCT', Sequelize.col('prescription_uuid')), 'prescription_uuid', 'date', 'drug', 'pid', 'txDate', 'end_date', 'date_modified'],
            raw: true,
            nest: true,
            where: where,
            ...limits
        })
            .then((prescription_data) => {
                logger.debug("Prescription list is" + prescription_data)
                prescription_list = prescription_data
            })
            .catch((err) => {
                logger.debug(
                    "Prescription list fetch error " +
                    tenant_id +
                    "not found Err:" +
                    err
                )
                throw new Error("Prescription list fetch error -  tenant check")
            })
        return prescription_list
    } else {

        await Prescriptions.findAll({
            include: include,
            order: ["id"],
            raw: true,
            nest: true,
            where: where,
            ...limits
        })
            .then((prescription_data) => {
                logger.debug("Prescriptions list is" + prescription_data)

                prescription_list = prescription_data
            })
            .catch((err) => {
                logger.debug(
                    "Prescriptions list fetch error " +
                    minrr +
                    "not found Err:" +
                    err
                )
                throw new Error(
                    "Prescriptions list fetch error -  tenant check"
                )
            })

        return prescription_list
    }
}

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    // logger.debug("Date add ",date, days)
    return date
}

function get_endDate(presData, startDate) {
    let tempDate = new Date(startDate)
    logger.debug('values are', presData, startDate)
    logger.debug('tempdate is', tempDate)
    logger.debug('object values are', presData['strength'])
    freq = presData['frequency']
    freqPeriod = presData['frequencyPeriod']
    logger.debug("end date calculation", freq, freqPeriod, tempDate)
    if (freq.includes('day')) {
        daysToAdd = freqPeriod
    } else if (freq.includes('week')) {
        daysToAdd = freqPeriod * 7
    } else if (freq.includes('month')) {
        daysToAdd = freqPeriod * 30
    }
    return tempDate.addDays(parseInt(daysToAdd))
}

async function db_create_prescription(
    tenant_id,
    prescription_data,
    transaction
) {
    prescription_list = ""
    let pdata = new Prescription(prescription_data)
    logger.debug("Prescription data is " + JSON.stringify(prescription_data))
    const promises = [];
    for (let i = 0; i < prescription_data["drug"].length; i++) {

        logger.debug("The drugs are", prescription_data["drug"][i])
        logger.debug('the date added is', prescription_data["date_added"])
        logger.debug('THE NEW DATE ADDED IS', prescription_data["date_added"][i])
        let endDate = get_endDate(prescription_data["drug"][i], prescription_data["date_added"])
        logger.debug('THE END DATE CALCULATION IS', endDate)
        promises.push(Prescriptions.create(
            {
                prescription_uuid: prescription_data["prescription_uuid"],
                substitute: prescription_data["substitute"],
                site: prescription_data["site"],
                filled_by_id: prescription_data["filled_by_id"],
                pharmacy_id: prescription_data["pharmacy_id"],
                date_added: prescription_data["date_added"],
                date_modified: prescription_data["date_modified"],
                provider_id: prescription_data["provider_id"],
                encounter: prescription_data["encounter"],
                drug: [prescription_data["drug"][i]],
                drug_uuid: prescription_data["drug_uuid"],
                rxnorm_drugcode: prescription_data["rxnorm_drugcode"],
                form: prescription_data["form"],
                dosage: prescription_data["dosage"],
                quantity: prescription_data["quantity"],
                size: prescription_data["size"],
                unit: prescription_data["unit"],
                route: prescription_data["route"],
                interval: prescription_data["interval"],
                refills: prescription_data["refills"],
                per_refill: prescription_data["per_refill"],
                filled_date: prescription_data["filled_date"],
                medication: prescription_data["medication"],
                note_uuid: prescription_data["note_uuid"],
                active: prescription_data["active"],
                datetime: prescription_data["datetime"],
                prac_uuid: prescription_data["prac_uuid"],
                prescriptionguid: prescription_data["prescriptionguid"],
                erx_source: prescription_data["erx_source"],
                erx_uploaded: prescription_data["erx_uploaded"],
                drug_info_erx: prescription_data["drug_info_erx"],
                external_id: prescription_data["external_id"],
                end_date: endDate,
                indication: prescription_data["indication"],
                prn: prescription_data["prn"],
                ntx: prescription_data["ntx"],
                rtx: prescription_data["rtx"],
                txDate: prescription_data["txDate"],
                tenant_uuid: prescription_data["tenant_uuid"],
                pid: prescription_data["pid"],
            },
            { transaction: transaction["transaction"] }
        ))
    }
    logger.debug("Promise is ", promises)
    await Promise.all(promises)
        .then((prescription_data) => {
            logger.debug("Prescription insert output is" + prescription_data)
            prescription_list = prescription_data
        })
        .catch((err) => {
            logger.debug(
                "Prescription insert  error " +
                tenant_id +
                " not found Err:" +
                err
            )
            throw new Error("Prescription insert  error -  tenant check" + err)
        })

    return prescription_list
}

async function db_update_prescription(
    tenant_id,
    prescription_data,
    given_pid,
    transaction
) {
    let { pid } = given_pid
    if (!prescription_data) return
    prescription_list = ""
    let pdata = new Prescription(prescription_data)
    logger.debug("Prescription data is " + prescription_data)

    await Prescriptions.update(
        {
            prescription_uuid: prescription_data["prescription_uuid"],
            substitute: prescription_data["substitute"],
            site: prescription_data["site"],
            filled_by_id: prescription_data["filled_by_id"],
            pharmacy_id: prescription_data["pharmacy_id"],
            date_added: prescription_data["date_added"],
            date_modified: prescription_data["date_modified"],
            provider_id: prescription_data["provider_id"],
            encounter: prescription_data["encounter"],
            start_date: prescription_data["start_date"],
            drug: prescription_data["drug"],
            drug_uuid: prescription_data["drug_uuid"],
            rxnorm_drugcode: prescription_data["rxnorm_drugcode"],
            form: prescription_data["form"],
            dosage: prescription_data["dosage"],
            quantity: prescription_data["quantity"],
            size: prescription_data["size"],
            unit: prescription_data["unit"],
            route: prescription_data["route"],
            interval: prescription_data["interval"],
            substitute: prescription_data["substitute"],
            refills: prescription_data["refills"],
            per_refill: prescription_data["per_refill"],
            filled_date: prescription_data["filled_date"],
            medication: prescription_data["medication"],
            note_uuid: prescription_data["note_uuid"],
            active: prescription_data["active"],
            datetime: prescription_data["datetime"],
            prac_uuid: prescription_data["prac_uuid"],
            prescriptionguid: prescription_data["prescriptionguid"],
            erx_source: prescription_data["erx_source"],
            erx_uploaded: prescription_data["erx_uploaded"],
            drug_info_erx: prescription_data["drug_info_erx"],
            external_id: prescription_data["external_id"],
            end_date: prescription_data["end_date"],
            indication: prescription_data["indication"],
            prn: prescription_data["prn"],
            ntx: prescription_data["ntx"],
            rtx: prescription_data["rtx"],
            txDate: prescription_data["txDate"],
        },
        {
            where: {
                pid: given_pid,
            },
        },
        { transaction: transaction["transaction"] }
    )

        .then((prescription_data) => {
            logger.debug("Prescription insert output is" + prescription_data)
            prescription_list = prescription_data
        })
        .catch((err) => {
            logger.debug(
                "Prescription insert  error " +
                tenant_id +
                " not found Err:" +
                err
            )
            throw new Error("Prescription insert  error -  tenant check")
        })

    return prescription_list
}

async function db_delete_prescription(given_pid, transaction) {
    let { pid } = given_pid
    logger.debug("The prescriptions given pid is", given_pid)
    Prescriptions.destroy(
        {
            where: {
                pid: given_pid,
            },
        },
        { transaction: transaction["transaction"] }
    )
        .then((num) => {
            if (num == 1) {
                logger.debug(
                    "The prescription is deleted successfully with pid",
                    given_pid
                )
            } else {
                logger.debug(
                    "Cannot delete prescription with pid" + given_pid,
                    "may be the prescription was not found"
                )
            }
        })
        .catch((err) => {
            logger.debug("The prescription delete error is" + err)
            throw new Error("Could not delete prescription with pid", given_pid)
        })
}

module.exports = {
    db_get_prescription_list,
    db_create_prescription,
    db_update_prescription,
    db_delete_prescription,
}
