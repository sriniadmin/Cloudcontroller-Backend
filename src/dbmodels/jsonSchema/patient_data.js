let schema = {
    $schema: "http://json-schema.org/draft-07/schema",
    $comment: "JSON Schema for patient_data table",
    $id: "patient_data",
    title: "patient_data",
    type: "object",
    required: ["lname", "DOB", "tenant_id", "med_record", "sex","admission_date","title","fname","phone_contact"],
    definitions: {
        id: {
            type: "integer",
            minimum: -7.307508186654515e47,
            maximum: 7.307508186654515e47,
        },
        title: {
            type: "string",
            maxLength: 255,
        },
        language: {
            type: "string",
            maxLength: 255,
        },
        financial: {
            type: "string",
            maxLength: 255,
        },
        fname: {
            type: "string",
            maxLength: 255,
        },
        lname: {
            type: "string",
            maxLength: 255,
        },
        mname: {
            type: "string",
            maxLength: 255,
        },
        DOB: {
            type: ["string","null"]

        },
        discharge_date: {
            type: ["string","null"]
        },
        street: {
            type: "string",
            maxLength: 255,
        },
        postal_code: {
            type: "string",
            maxLength: 255,
        },
        city: {
            type: "string",
            maxLength: 255,
        },
        state: {
            type: "string",
            maxLength: 255,
        },
        country_code: {
            type: "string",
            maxLength: 255,
        },
        idtype: {
            type: "string",
            maxLength: 255,
        },
        idnumber: {
            type: "string",
            maxLength: 255,
        },
        occupation: {
            type: ["string","null"],
            maxLength: 4294967295
        },
        phone_home: {
            type: "string",
            maxLength: 255,
        },
        phone_biz: {
            type: "string",
            maxLength: 255,
        },
        phone_contact: {
            type: "string",
            maxLength: 255,
        },
        med_record: {
            type: "string",
            maxLength: 150,
        },
        phone_cell: {
            type: "string",
            maxLength: 255,
        },
        pharmacy_id: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
        },
        status: {
            type: "string",
            maxLength: 255,
        },
        contact_relationship: {
            type: "string",
            maxLength: 255,
        },
        admission_date: {
            type: ["string","null"],
        },
        sex: {
            type: "string",
            maxLength: 255,
        },
        referrer: {
            type: "string",
            maxLength: 255,
        },
        referrerID: {
            type: "string",
            maxLength: 255,
        },
        providerID: {
            type: ["integer","null"],
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,//null
        },
        ref_providerID: {
            type: ["integer","null"],
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,//null
        },
        email: {
            type: ["string","null"],
            maxLength: 255,
        },
        email_direct: {
            type: "string",
            maxLength: 255,
        },
        ethnoracial: {
            type: "string",
            maxLength: 255,
        },
        race: {
            type: "string",
            maxLength: 255,
        },
        ethnicity: {
            type: "string",
            maxLength: 255,
        },
        religion: {
            type: "string",
            maxLength: 40,
        },
        interpretter: {
            type: "string",
            maxLength: 255,
        },
        migrantseasonal: {
            type: "string",
            maxLength: 255,
        },
        family_size: {
            type: "string",
            maxLength: 255,
        },
        monthly_income: {
            type: "string",
            maxLength: 255,
        },
        billing_note: {
            type: ["string","null"],
            maxLength: 65535,
        },
        homeless: {
            type: "string",
            maxLength: 255,
        },
        financial_review: {
            type: ["string","null"],
        },
        pubpid: {
            type: "string",
            maxLength: 255,
        },
        pid: {
            type: "string",
            maxLength: 255,
            default: "0",
        },
        genericname1: {
            type: "string",
            maxLength: 255,
        },
        genericval1: {
            type: "string",
            maxLength: 255,
        },
        genericname2: {
            type: "string",
            maxLength: 255,
        },
        genericval2: {
            type: "string",
            maxLength: 255,
        },
        hipaa_mail: {
            type: "string",
            maxLength: 3,
        },
        hipaa_voice: {
            type: "string",
            maxLength: 3,
        },
        hipaa_notice: {
            type: "string",
            maxLength: 3,
        },
        hipaa_message: {
            type: "string",
            maxLength: 20,
        },
        hipaa_allowsms: {
            type: "string",
            maxLength: 3,
            default: "NO",
        },
        hipaa_allowemail: {
            type: "string",
            maxLength: 3,
            default: "NO",
        },
        squad: {
            type: "string",
            maxLength: 32,
        },
        fitness: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
        },
        referral_source: {
            type: "string",
            maxLength: 30,
        },
        usertext1: {
            type: "string",
            maxLength: 255,
        },
        usertext2: {
            type: "string",
            maxLength: 255,
        },
        usertext3: {
            type: "string",
            maxLength: 255,
        },
        usertext4: {
            type: "string",
            maxLength: 255,
        },
        usertext5: {
            type: "string",
            maxLength: 255,
        },
        usertext6: {
            type: "string",
            maxLength: 255,
        },
        usertext7: {
            type: "string",
            maxLength: 255,
        },
        usertext8: {
            type: "string",
            maxLength: 255,
        },
        userlist1: {
            type: "string",
            maxLength: 255,
        },
        userlist2: {
            type: "string",
            maxLength: 255,
        },
        userlist3: {
            type: "string",
            maxLength: 255,
        },
        userlist4: {
            type: ["string","null"],
            maxLength: 255,
        },
        userlist5: {
            type: "string",
            maxLength: 255,
        },
        userlist6: {
            type: "string",
            maxLength: 255,
        },
        userlist7: {
            type: "string",
            maxLength: 255,
        },
        pricelevel: {
            type: "string",
            maxLength: 255,
            default: "standard",
        },
        regdate: {
            description: "Registration Date",
            type:["string","null"],//null
        },
        contrastart: {
            description: "Date contraceptives initially used",
            type:["string","null"],//null
        },
        completed_ad: {
            type: "string",
            maxLength: 3,
            default: "NO",
        },
        ad_reviewed: {
            type:["string","null"],//null
        },
        vfc: {
            type: "string",
            maxLength: 255,
        },
        location_uuid: {
            type: "string",
            maxLength: 255,
        },
        bed_uuid: {
            type: "string",
            maxLength: 255,
        },
        mothersname: {
            type: "string",
            maxLength: 255,
        },
        guardiansname: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        allow_imm_reg_use: {
            type: "string",
            maxLength: 255,
        },
        allow_imm_info_share: {
            type: "string",
            maxLength: 255,
        },
        allow_health_info_ex: {
            type: "string",
            maxLength: 255,
        },
        allow_patient_portal: {
            type: "string",
            maxLength: 31,
        },
        deceased_date: {
            type:["string","null"],//null
        },
        deceased_reason: {
            type: "string",
            maxLength: 255,
        },
        soap_import_status: {
            description:
                "1-Prescription Press 2-Prescription Import 3-Allergy Press 4-Allergy Import",
            type: ["integer","null"],
            minimum: -2147483648,
            maximum: 2147483647,//null
        },
        cmsportal_login: {
            type: "string",
            maxLength: 60,
        },
        care_team: {
            type: ["integer","null"],
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,//null
        },
        county: {
            type: "string",
            maxLength: 40,
        },
        industry: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        imm_reg_status: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        imm_reg_stat_effdate: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        publicity_code: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        publ_code_eff_date: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        protect_indicator: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        prot_indi_effdate: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        guardianrelationship: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        guardiansex: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        guardianaddress: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        guardiancity: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        guardianstate: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        guardianpostalcode: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        guardiancountry: {
            type: ["string","null"],
            maxLength: 65535,//null
        },
        guardianphone: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        guardianworkphone: {
            type:["string","null"],
            maxLength: 65535,//null
        },
        guardianemail: {
            type: ["string","null"],
            maxLength: 65535,//null
        },
        tenant_id: {
            type: "string",
            maxLength: 255,
            default: "0",
        },
    },
    properties: {
        id: {
            $ref: "#/definitions/id",
        },
        title: {
            $ref: "#/definitions/title",
        },
        language: {
            $ref: "#/definitions/language",
        },
        financial: {
            $ref: "#/definitions/financial",
        },
        fname: {
            $ref: "#/definitions/fname",
        },
        lname: {
            $ref: "#/definitions/lname",
        },
        mname: {
            $ref: "#/definitions/mname",
        },
        DOB: {
            $ref: "#/definitions/DOB",
        },
        street: {
            $ref: "#/definitions/street",
        },
        postal_code: {
            $ref: "#/definitions/postal_code",
        },
        city: {
            $ref: "#/definitions/city",
        },
        state: {
            $ref: "#/definitions/state",
        },
        country_code: {
            $ref: "#/definitions/country_code",
        },
        idtype: {
            $ref: "#/definitions/idtype",
        },
        idnumber: {
            $ref: "#/definitions/idnumber",
        },
        occupation: {
            $ref: "#/definitions/occupation",
        },
        phone_home: {
            $ref: "#/definitions/phone_home",
        },
        phone_biz: {
            $ref: "#/definitions/phone_biz",
        },
        phone_contact: {
            $ref: "#/definitions/phone_contact",
        },
        phone_cell: {
            $ref: "#/definitions/phone_cell",
        },
        pharmacy_id: {
            $ref: "#/definitions/pharmacy_id",
        },
        status: {
            $ref: "#/definitions/status",
        },
        contact_relationship: {
            $ref: "#/definitions/contact_relationship",
        },
        admission_date: {
            $ref: "#/definitions/admission_date",
        },
        sex: {
            $ref: "#/definitions/sex",
        },
        referrer: {
            $ref: "#/definitions/referrer",
        },
        referrerID: {
            $ref: "#/definitions/referrerID",
        },
        providerID: {
            $ref: "#/definitions/providerID",
        },
        ref_providerID: {
            $ref: "#/definitions/ref_providerID",
        },
        email: {
            $ref: "#/definitions/email",
        },
        email_direct: {
            $ref: "#/definitions/email_direct",
        },
        ethnoracial: {
            $ref: "#/definitions/ethnoracial",
        },
        race: {
            $ref: "#/definitions/race",
        },
        ethnicity: {
            $ref: "#/definitions/ethnicity",
        },
        religion: {
            $ref: "#/definitions/religion",
        },
        interpretter: {
            $ref: "#/definitions/interpretter",
        },
        migrantseasonal: {
            $ref: "#/definitions/migrantseasonal",
        },
        family_size: {
            $ref: "#/definitions/family_size",
        },
        monthly_income: {
            $ref: "#/definitions/monthly_income",
        },
        billing_note: {
            $ref: "#/definitions/billing_note",
        },
        med_record: {
            $ref: "#/definitions/med_record",
        },
        homeless: {
            $ref: "#/definitions/homeless",
        },
        financial_review: {
            $ref: "#/definitions/financial_review",
        },
        pubpid: {
            $ref: "#/definitions/pubpid",
        },
        pid: {
            $ref: "#/definitions/pid",
        },
        genericname1: {
            $ref: "#/definitions/genericname1",
        },
        genericval1: {
            $ref: "#/definitions/genericval1",
        },
        genericname2: {
            $ref: "#/definitions/genericname2",
        },
        genericval2: {
            $ref: "#/definitions/genericval2",
        },
        hipaa_mail: {
            $ref: "#/definitions/hipaa_mail",
        },
        hipaa_voice: {
            $ref: "#/definitions/hipaa_voice",
        },
        hipaa_notice: {
            $ref: "#/definitions/hipaa_notice",
        },
        hipaa_message: {
            $ref: "#/definitions/hipaa_message",
        },
        hipaa_allowsms: {
            $ref: "#/definitions/hipaa_allowsms",
        },
        hipaa_allowemail: {
            $ref: "#/definitions/hipaa_allowemail",
        },
        squad: {
            $ref: "#/definitions/squad",
        },
        fitness: {
            $ref: "#/definitions/fitness",
        },
        referral_source: {
            $ref: "#/definitions/referral_source",
        },
        usertext1: {
            $ref: "#/definitions/usertext1",
        },
        usertext2: {
            $ref: "#/definitions/usertext2",
        },
        usertext3: {
            $ref: "#/definitions/usertext3",
        },
        usertext4: {
            $ref: "#/definitions/usertext4",
        },
        usertext5: {
            $ref: "#/definitions/usertext5",
        },
        usertext6: {
            $ref: "#/definitions/usertext6",
        },
        usertext7: {
            $ref: "#/definitions/usertext7",
        },
        usertext8: {
            $ref: "#/definitions/usertext8",
        },
        userlist1: {
            $ref: "#/definitions/userlist1",
        },
        userlist2: {
            $ref: "#/definitions/userlist2",
        },
        userlist3: {
            $ref: "#/definitions/userlist3",
        },
        userlist4: {
            $ref: "#/definitions/userlist4",
        },
        location_uuid: {
            $ref: "#/definitions/userlist4",
        },
        bed_uuid: {
            $ref: "#/definitions/userlist4",
        },
        userlist5: {
            $ref: "#/definitions/userlist5",
        },
        userlist6: {
            $ref: "#/definitions/userlist6",
        },
        userlist7: {
            $ref: "#/definitions/userlist7",
        },
        pricelevel: {
            $ref: "#/definitions/pricelevel",
        },
        regdate: {
            $ref: "#/definitions/regdate",
        },
        contrastart: {
            $ref: "#/definitions/contrastart",
        },
        completed_ad: {
            $ref: "#/definitions/completed_ad",
        },
        ad_reviewed: {
            $ref: "#/definitions/ad_reviewed",
        },
        vfc: {
            $ref: "#/definitions/vfc",
        },
        mothersname: {
            $ref: "#/definitions/mothersname",
        },
        guardiansname: {
            $ref: "#/definitions/guardiansname",
        },
        allow_imm_reg_use: {
            $ref: "#/definitions/allow_imm_reg_use",
        },
        allow_imm_info_share: {
            $ref: "#/definitions/allow_imm_info_share",
        },
        allow_health_info_ex: {
            $ref: "#/definitions/allow_health_info_ex",
        },
        allow_patient_portal: {
            $ref: "#/definitions/allow_patient_portal",
        },
        deceased_date: {
            $ref: "#/definitions/deceased_date",
        },
        deceased_reason: {
            $ref: "#/definitions/deceased_reason",
        },
        soap_import_status: {
            $ref: "#/definitions/soap_import_status",
        },
        cmsportal_login: {
            $ref: "#/definitions/cmsportal_login",
        },
        care_team: {
            $ref: "#/definitions/care_team",
        },
        county: {
            $ref: "#/definitions/county",
        },
        industry: {
            $ref: "#/definitions/industry",
        },
        imm_reg_status: {
            $ref: "#/definitions/imm_reg_status",
        },
        imm_reg_stat_effdate: {
            $ref: "#/definitions/imm_reg_stat_effdate",
        },
        publicity_code: {
            $ref: "#/definitions/publicity_code",
        },
        publ_code_eff_date: {
            $ref: "#/definitions/publ_code_eff_date",
        },
        protect_indicator: {
            $ref: "#/definitions/protect_indicator",
        },
        prot_indi_effdate: {
            $ref: "#/definitions/prot_indi_effdate",
        },
        guardianrelationship: {
            $ref: "#/definitions/guardianrelationship",
        },
        guardiansex: {
            $ref: "#/definitions/guardiansex",
        },
        guardianaddress: {
            $ref: "#/definitions/guardianaddress",
        },
        guardiancity: {
            $ref: "#/definitions/guardiancity",
        },
        guardianstate: {
            $ref: "#/definitions/guardianstate",
        },
        guardianpostalcode: {
            $ref: "#/definitions/guardianpostalcode",
        },
        guardiancountry: {
            $ref: "#/definitions/guardiancountry",
        },
        guardianphone: {
            $ref: "#/definitions/guardianphone",
        },
        guardianworkphone: {
            $ref: "#/definitions/guardianworkphone",
        },
        guardianemail: {
            $ref: "#/definitions/guardianemail",
        },
        tenant_id: {
            $ref: "#/definitions/tenant_id",
        },
        discharge_date: {
            $ref: "#/definitions/discharge_date",
        },
    },
}

module.exports = schema
