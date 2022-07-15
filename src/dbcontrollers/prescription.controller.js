const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
const Op = Sequelize.Op;
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)

const logger = require("../config/logger")
const uuidAPIKey = require("uuid-apikey");
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




function get_endDate(presData, startDate) {
    let daysToAdd = 0
    presData.forEach(obj => {
        const freq = obj['frequency']
        const freqPeriod = parseInt(obj['frequencyPeriod'])
        if (freq.includes('day')) {
            const days = freqPeriod
            if(daysToAdd < days){
                daysToAdd = days
            }
        } else if (freq.includes('week')) {
            const days = freqPeriod * 7
            if(daysToAdd < days){
                daysToAdd = days
            }
        } else if (freq.includes('month')) {
            const days = freqPeriod * 30
            if(daysToAdd < days){
                daysToAdd = days
            }
        }
    });

    return new Date(startDate).setDate(new Date(startDate).getDate() + (daysToAdd-1))
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


async function db_create_prescription(params) {
    const t = await sequelizeDB.transaction()
    try {
        let endDate = get_endDate(params.drug, params["date_added"])

        const data = await Prescriptions.create(
            {
                prescription_uuid: params["prescription_uuid"],
                substitute: params["substitute"],
                site: params["site"],
                filled_by_id: params["filled_by_id"],
                pharmacy_id: params["pharmacy_id"],
                date_added: params["date_added"],
                date_modified: params["date_modified"],
                provider_id: params["provider_id"],
                encounter: params["encounter"],
                drug: params.drug,
                drug_uuid: params["drug_uuid"],
                rxnorm_drugcode: params["rxnorm_drugcode"],
                form: params["form"],
                dosage: params["dosage"],
                quantity: params["quantity"],
                size: params["size"],
                unit: params["unit"],
                route: params["route"],
                interval: params["interval"],
                refills: params["refills"],
                per_refill: params["per_refill"],
                filled_date: params["filled_date"],
                medication: params["medication"],
                note_uuid: params["note_uuid"],
                active: params["active"],
                datetime: params["datetime"],
                prac_uuid: params["prac_uuid"],
                prescriptionguid: params["prescriptionguid"],
                erx_source: params["erx_source"],
                erx_uploaded: params["erx_uploaded"],
                drug_info_erx: params["drug_info_erx"],
                external_id: params["external_id"],
                end_date: endDate,
                indication: params["indication"],
                prn: params["prn"],
                ntx: params["ntx"],
                rtx: params["rtx"],
                txDate: params["txDate"],
                tenant_uuid: params["tenant_uuid"],
                pid: params["pid"]
            },
            { transaction: t }
        )
        let result = { data: data }
        await t.commit()
        return result.data
    } catch (error) {
        await t.rollback()
        throw error
    }
}


async function db_get_prescription_list(params) {
    try {
        return await Prescriptions.findAll({
            where: {
                pid: params.pid
            }
        })
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = {
    db_get_prescription_list,
    db_create_prescription,
    db_update_prescription,
    db_delete_prescription,
}
