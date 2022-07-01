var DataTypes = require("sequelize").DataTypes
var _addresses = require("./addresses")
var _amc_misc_data = require("./amc_misc_data")
var _amendments = require("./amendments")
var _amendments_history = require("./amendments_history")
var _api_token = require("./api_token")
var _ar_activity = require("./ar_activity")
var _ar_session = require("./ar_session")
var _audit_details = require("./audit_details")
var _audit_master = require("./audit_master")
var _audit_log = require("./audit_log.model")
var _automatic_notification = require("./automatic_notification")
var _background_services = require("./background_services")
var _batchcom = require("./batchcom")
var _benefit_eligibility = require("./benefit_eligibility")
var _billing = require("./billing")
var _billing_summary = require("./billing_summary")
var _calendar_external = require("./calendar_external")
var _categories = require("./categories")
var _categories_seq = require("./categories_seq")
var _categories_to_documents = require("./categories_to_documents")
var _ccda = require("./ccda")
var _ccda_components = require("./ccda_components")
var _ccda_field_mapping = require("./ccda_field_mapping")
var _ccda_sections = require("./ccda_sections")
var _ccda_table_mapping = require("./ccda_table_mapping")
var _chart_tracker = require("./chart_tracker")
var _claims = require("./claims")
var _clinical_plans = require("./clinical_plans")
var _clinical_plans_rules = require("./clinical_plans_rules")
var _clinical_rules = require("./clinical_rules")
var _clinical_rules_log = require("./clinical_rules_log")
var _code_types = require("./code_types")
var _codes = require("./codes")
var _codes_history = require("./codes_history")
var _customlists = require("./customlists")
var _dated_reminders = require("./dated_reminders")
var _dated_reminders_link = require("./dated_reminders_link")
var _direct_message_log = require("./direct_message_log")
var _documents = require("./documents")
var _documents_legal_categories = require("./documents_legal_categories")
var _documents_legal_detail = require("./documents_legal_detail")
var _documents_legal_master = require("./documents_legal_master")
var _drug_inventory = require("./drug_inventory")
var _drug_sales = require("./drug_sales")
var _drug_templates = require("./drug_templates")
var _drugs = require("./drugs")
var _eligibility_verification = require("./eligibility_verification")
var _employer_data = require("./employer_data")
var _enc_category_map = require("./enc_category_map")
var _erx_narcotics = require("./erx_narcotics")
var _erx_rx_log = require("./erx_rx_log")
var _erx_ttl_touch = require("./erx_ttl_touch")
var _erx_weno_drugs = require("./erx_weno_drugs")
var _esign_signatures = require("./esign_signatures")
var _extended_log = require("./extended_log")
var _external_encounters = require("./external_encounters")
var _external_procedures = require("./external_procedures")
var _facility = require("./facility")
var _facility_user_ids = require("./facility_user_ids")
var _fee_sheet_options = require("./fee_sheet_options")
var _form_care_plan = require("./form_care_plan")
var _form_clinical_instructions = require("./form_clinical_instructions")
var _form_dictation = require("./form_dictation")
var _form_encounter = require("./form_encounter")
var _form_eye_acuity = require("./form_eye_acuity")
var _form_eye_antseg = require("./form_eye_antseg")
var _form_eye_base = require("./form_eye_base")
var _form_eye_biometrics = require("./form_eye_biometrics")
var _form_eye_external = require("./form_eye_external")
var _form_eye_hpi = require("./form_eye_hpi")
var _form_eye_locking = require("./form_eye_locking")
var _form_eye_mag_dispense = require("./form_eye_mag_dispense")
var _form_eye_mag_impplan = require("./form_eye_mag_impplan")
var _form_eye_mag_orders = require("./form_eye_mag_orders")
var _form_eye_mag_prefs = require("./form_eye_mag_prefs")
var _form_eye_mag_wearing = require("./form_eye_mag_wearing")
var _form_eye_neuro = require("./form_eye_neuro")
var _form_eye_postseg = require("./form_eye_postseg")
var _form_eye_refraction = require("./form_eye_refraction")
var _form_eye_ros = require("./form_eye_ros")
var _form_eye_vitals = require("./form_eye_vitals")
var _form_functional_cognitive_status = require("./form_functional_cognitive_status")
var _form_group_attendance = require("./form_group_attendance")
var _form_groups_encounter = require("./form_groups_encounter")
var _form_misc_billing_options = require("./form_misc_billing_options")
var _form_observation = require("./form_observation")
var _form_reviewofs = require("./form_reviewofs")
var _form_ros = require("./form_ros")
var _form_soap = require("./form_soap")
var _form_taskman = require("./form_taskman")
var _form_vitals = require("./form_vitals")
var _forms = require("./forms")
var _gacl_acl = require("./gacl_acl")
var _gacl_acl_sections = require("./gacl_acl_sections")
var _gacl_acl_seq = require("./gacl_acl_seq")
var _gacl_aco = require("./gacl_aco")
var _gacl_aco_map = require("./gacl_aco_map")
var _gacl_aco_sections = require("./gacl_aco_sections")
var _gacl_aco_sections_seq = require("./gacl_aco_sections_seq")
var _gacl_aco_seq = require("./gacl_aco_seq")
var _gacl_aro = require("./gacl_aro")
var _gacl_aro_groups = require("./gacl_aro_groups")
var _gacl_aro_groups_id_seq = require("./gacl_aro_groups_id_seq")
var _gacl_aro_groups_map = require("./gacl_aro_groups_map")
var _gacl_aro_map = require("./gacl_aro_map")
var _gacl_aro_sections = require("./gacl_aro_sections")
var _gacl_aro_sections_seq = require("./gacl_aro_sections_seq")
var _gacl_aro_seq = require("./gacl_aro_seq")
var _gacl_axo = require("./gacl_axo")
var _gacl_axo_groups = require("./gacl_axo_groups")
var _gacl_axo_groups_map = require("./gacl_axo_groups_map")
var _gacl_axo_map = require("./gacl_axo_map")
var _gacl_axo_sections = require("./gacl_axo_sections")
var _gacl_groups_aro_map = require("./gacl_groups_aro_map")
var _gacl_groups_axo_map = require("./gacl_groups_axo_map")
var _gacl_phpgacl = require("./gacl_phpgacl")
var _globals = require("./globals")
var _gprelations = require("./gprelations")
var _groups = require("./groups")
var _history_data = require("./history_data")
var _icd10_dx_order_code = require("./icd10_dx_order_code")
var _icd10_gem_dx_10_9 = require("./icd10_gem_dx_10_9")
var _icd10_gem_dx_9_10 = require("./icd10_gem_dx_9_10")
var _icd10_gem_pcs_10_9 = require("./icd10_gem_pcs_10_9")
var _icd10_gem_pcs_9_10 = require("./icd10_gem_pcs_9_10")
var _icd10_pcs_order_code = require("./icd10_pcs_order_code")
var _icd10_reimbr_dx_9_10 = require("./icd10_reimbr_dx_9_10")
var _icd10_reimbr_pcs_9_10 = require("./icd10_reimbr_pcs_9_10")
var _icd9_dx_code = require("./icd9_dx_code")
var _icd9_dx_long_code = require("./icd9_dx_long_code")
var _icd9_sg_code = require("./icd9_sg_code")
var _icd9_sg_long_code = require("./icd9_sg_long_code")
var _immunization_observation = require("./immunization_observation")
var _immunizations = require("./immunizations")
var _insurance_companies = require("./insurance_companies")
var _insurance_data = require("./insurance_data")
var _insurance_numbers = require("./insurance_numbers")
var _issue_encounter = require("./issue_encounter")
var _issue_types = require("./issue_types")
var _keys = require("./keys")
var _lang_constants = require("./lang_constants")
var _lang_custom = require("./lang_custom")
var _lang_definitions = require("./lang_definitions")
var _lang_languages = require("./lang_languages")
var _layout_group_properties = require("./layout_group_properties")
var _layout_options = require("./layout_options")
var _lbf_data = require("./lbf_data")
var _lbt_data = require("./lbt_data")
var _list_options = require("./list_options")
var _lists = require("./lists")
var _lists_touch = require("./lists_touch")
var _log = require("./log")
var _log_comment_encrypt = require("./log_comment_encrypt")
var _log_validator = require("./log_validator")
var _login_mfa_registrations = require("./login_mfa_registrations")
var _medex_icons = require("./medex_icons")
var _medex_outgoing = require("./medex_outgoing")
var _medex_prefs = require("./medex_prefs")
var _medex_recalls = require("./medex_recalls")
var _medSched = require("./medsched")
var _misc_address_book = require("./misc_address_book")
var _module_acl_group_settings = require("./module_acl_group_settings")
var _module_acl_sections = require("./module_acl_sections")
var _module_acl_user_settings = require("./module_acl_user_settings")
var _module_configuration = require("./module_configuration")
var _modules = require("./modules")
var _modules_hooks_settings = require("./modules_hooks_settings")
var _modules_settings = require("./modules_settings")
var _multiple_db = require("./multiple_db")
var _notes = require("./notes")
var _notification_log = require("./notification_log")
var _notification_settings = require("./notification_settings")
var _onotes = require("./onotes")
var _onsite_documents = require("./onsite_documents")
var _onsite_mail = require("./onsite_mail")
var _onsite_messages = require("./onsite_messages")
var _onsite_online = require("./onsite_online")
var _onsite_portal_activity = require("./onsite_portal_activity")
var _onsite_signatures = require("./onsite_signatures")
var _openemr_module_vars = require("./openemr_module_vars")
var _openemr_modules = require("./openemr_modules")
var _openemr_postcalendar_categories = require("./openemr_postcalendar_categories")
var _openemr_postcalendar_events = require("./openemr_postcalendar_events")
var _patient_access_offsite = require("./patient_access_offsite")
var _patient_access_onsite = require("./patient_access_onsite")
var _patient_birthday_alert = require("./patient_birthday_alert")
var _patient_data = require("./patient_data")
var _patient_portal_menu = require("./patient_portal_menu")
var _patient_reminders = require("./patient_reminders")
var _patient_tracker = require("./patient_tracker")
var _patient_tracker_element = require("./patient_tracker_element")
var _payment_gateway_details = require("./payment_gateway_details")
var _payments = require("./payments")
var _pharmacies = require("./pharmacies")
var _phone_numbers = require("./phone_numbers")
var _pnotes = require("./pnotes")
var _practictioner_patient_map = require("./practictioner_patient_map")
var _prescriptions = require("./prescriptions")
var _prices = require("./prices")
var _procedure_answers = require("./procedure_answers")
var _procedure_order = require("./procedure_order")
var _procedure_order_code = require("./procedure_order_code")
var _procedure_providers = require("./procedure_providers")
var _procedure_questions = require("./procedure_questions")
var _procedure_report = require("./procedure_report")
var _procedure_result = require("./procedure_result")
var _procedure_type = require("./procedure_type")
var _product_registration = require("./product_registration")
var _product_warehouse = require("./product_warehouse")
var _registry = require("./registry")
var _report_itemized = require("./report_itemized")
var _report_results = require("./report_results")
var _rule_action = require("./rule_action")
var _rule_action_item = require("./rule_action_item")
var _rule_filter = require("./rule_filter")
var _rule_patient_data = require("./rule_patient_data")
var _rule_reminder = require("./rule_reminder")
var _rule_target = require("./rule_target")
var _sequences = require("./sequences")
var _shared_attributes = require("./shared_attributes")
var _standardized_tables_track = require("./standardized_tables_track")
var _supported_external_dataloads = require("./supported_external_dataloads")
var _syndromic_surveillance = require("./syndromic_surveillance")
var _template_users = require("./template_users")
var _tenant = require("./tenant")
var _therapy_groups = require("./therapy_groups")
var _therapy_groups_counselors = require("./therapy_groups_counselors")
var _therapy_groups_participant_attendance = require("./therapy_groups_participant_attendance")
var _therapy_groups_participants = require("./therapy_groups_participants")
var _transactions = require("./transactions")
var _user_settings = require("./user_settings")
var _users = require("./users")
var _users_facility = require("./users_facility")
var _users_secure = require("./users_secure")
var _valueset = require("./valueset")
var _version = require("./version")
var _voids = require("./voids")
var _x12_partners = require("./x12_partners")
var _patch = require("./patch")
var _patch_patient_map = require("./patch_patient_map")
var _ews_table = require("./ews_table")
var _role = require("./role")
var _Appointment = require("./Appointment")
var _location = require("./location")
var _bed = require("./bed")
var _uuid = require("./uuid")
var _vital_threshold = require("./vital_threshold")
var _image = require("./image")
var _connector = require("./connector")
var _user_patient_map = require("./user_patient_map")
var _approval_type = require("./approval_type")
var _product = require("./product")
var _patient_location_table = require("./patient_location_table")
var _patient_medication_table = require("./patient_medication_table")
var _device_type = require("./device_type")
var _alert_data = require("./alert_data")
var _logger_data = require("./logger_data")
var _upgradeMobile = require("./upgradeMobile");

var _upgradeGateway = require("./upgradeGateway");

var _medical_history = require("./medical_history")
var _allergy = require("./allergy")
var _report = require("./report")
var _patient_report_map = require("./patient_report_map")
var _procedure = require("./procedure")
var _lab_report = require("./lab_report")
var _license = require("./license")
var _tasks = require("./tasks")
var _user_tenant_map = require("./user_tenant_map")
var _profile = require("./profile")
var _medical_illness_map=require("./medical_illness_map")


function initModels(sequelize) {
    /*
    sequelize.sync().then(() => {
        console.log("Drop and re-sync db.");
    });*/
    var addresses = _addresses(sequelize, DataTypes)
    var amc_misc_data = _amc_misc_data(sequelize, DataTypes)
    var amendments = _amendments(sequelize, DataTypes)
    var amendments_history = _amendments_history(sequelize, DataTypes)
    var api_token = _api_token(sequelize, DataTypes)
    var ar_activity = _ar_activity(sequelize, DataTypes)
    var ar_session = _ar_session(sequelize, DataTypes)
    var audit_details = _audit_details(sequelize, DataTypes)
    var audit_master = _audit_master(sequelize, DataTypes)
    var audit_log = _audit_log(sequelize, DataTypes)
    var automatic_notification = _automatic_notification(sequelize, DataTypes)
    var background_services = _background_services(sequelize, DataTypes)
    var batchcom = _batchcom(sequelize, DataTypes)
    var benefit_eligibility = _benefit_eligibility(sequelize, DataTypes)
    var billing = _billing(sequelize, DataTypes)
    var billing_summary = _billing_summary(sequelize, DataTypes)
    var calendar_external = _calendar_external(sequelize, DataTypes)
    var categories = _categories(sequelize, DataTypes)
    var categories_seq = _categories_seq(sequelize, DataTypes)
    var categories_to_documents = _categories_to_documents(sequelize, DataTypes)
    var ccda = _ccda(sequelize, DataTypes)
    var ccda_components = _ccda_components(sequelize, DataTypes)
    var ccda_field_mapping = _ccda_field_mapping(sequelize, DataTypes)
    var ccda_sections = _ccda_sections(sequelize, DataTypes)
    var ccda_table_mapping = _ccda_table_mapping(sequelize, DataTypes)
    var chart_tracker = _chart_tracker(sequelize, DataTypes)
    var claims = _claims(sequelize, DataTypes)
    var clinical_plans = _clinical_plans(sequelize, DataTypes)
    var clinical_plans_rules = _clinical_plans_rules(sequelize, DataTypes)
    var clinical_rules = _clinical_rules(sequelize, DataTypes)
    var clinical_rules_log = _clinical_rules_log(sequelize, DataTypes)
    var code_types = _code_types(sequelize, DataTypes)
    var codes = _codes(sequelize, DataTypes)
    var codes_history = _codes_history(sequelize, DataTypes)
    var customlists = _customlists(sequelize, DataTypes)
    var dated_reminders = _dated_reminders(sequelize, DataTypes)
    var dated_reminders_link = _dated_reminders_link(sequelize, DataTypes)
    var direct_message_log = _direct_message_log(sequelize, DataTypes)
    var documents = _documents(sequelize, DataTypes)
    var documents_legal_categories = _documents_legal_categories(
        sequelize,
        DataTypes
    )
    var documents_legal_detail = _documents_legal_detail(sequelize, DataTypes)
    var documents_legal_master = _documents_legal_master(sequelize, DataTypes)
    var drug_inventory = _drug_inventory(sequelize, DataTypes)
    var drug_sales = _drug_sales(sequelize, DataTypes)
    var drug_templates = _drug_templates(sequelize, DataTypes)
    var drugs = _drugs(sequelize, DataTypes)
    var eligibility_verification = _eligibility_verification(
        sequelize,
        DataTypes
    )
    var employer_data = _employer_data(sequelize, DataTypes)
    var enc_category_map = _enc_category_map(sequelize, DataTypes)
    var erx_narcotics = _erx_narcotics(sequelize, DataTypes)
    var erx_rx_log = _erx_rx_log(sequelize, DataTypes)
    var erx_ttl_touch = _erx_ttl_touch(sequelize, DataTypes)
    var erx_weno_drugs = _erx_weno_drugs(sequelize, DataTypes)
    var esign_signatures = _esign_signatures(sequelize, DataTypes)
    var extended_log = _extended_log(sequelize, DataTypes)
    var external_encounters = _external_encounters(sequelize, DataTypes)
    var external_procedures = _external_procedures(sequelize, DataTypes)
    var facility = _facility(sequelize, DataTypes)
    var facility_user_ids = _facility_user_ids(sequelize, DataTypes)
    var fee_sheet_options = _fee_sheet_options(sequelize, DataTypes)
    // var form_care_plan = _form_care_plan(sequelize, DataTypes);
    var form_clinical_instructions = _form_clinical_instructions(
        sequelize,
        DataTypes
    )
    var form_dictation = _form_dictation(sequelize, DataTypes)
    var form_encounter = _form_encounter(sequelize, DataTypes)
    var form_eye_acuity = _form_eye_acuity(sequelize, DataTypes)
    var form_eye_antseg = _form_eye_antseg(sequelize, DataTypes)
    var form_eye_base = _form_eye_base(sequelize, DataTypes)
    var form_eye_biometrics = _form_eye_biometrics(sequelize, DataTypes)
    var form_eye_external = _form_eye_external(sequelize, DataTypes)
    var form_eye_hpi = _form_eye_hpi(sequelize, DataTypes)
    var form_eye_locking = _form_eye_locking(sequelize, DataTypes)
    var form_eye_mag_dispense = _form_eye_mag_dispense(sequelize, DataTypes)
    var form_eye_mag_impplan = _form_eye_mag_impplan(sequelize, DataTypes)
    var form_eye_mag_orders = _form_eye_mag_orders(sequelize, DataTypes)
    // var form_eye_mag_prefs = _form_eye_mag_prefs(sequelize, DataTypes);
    // var form_eye_mag_wearing = _form_eye_mag_wearing(sequelize, DataTypes);
    var form_eye_neuro = _form_eye_neuro(sequelize, DataTypes)
    var form_eye_postseg = _form_eye_postseg(sequelize, DataTypes)
    var form_eye_refraction = _form_eye_refraction(sequelize, DataTypes)
    var form_eye_ros = _form_eye_ros(sequelize, DataTypes)
    var form_eye_vitals = _form_eye_vitals(sequelize, DataTypes)
    // var form_functional_cognitive_status = _form_functional_cognitive_status(sequelize, DataTypes);
    var form_group_attendance = _form_group_attendance(sequelize, DataTypes)
    var form_groups_encounter = _form_groups_encounter(sequelize, DataTypes)
    var form_misc_billing_options = _form_misc_billing_options(
        sequelize,
        DataTypes
    )
    // var form_observation = _form_observation(sequelize, DataTypes);
    var form_reviewofs = _form_reviewofs(sequelize, DataTypes)
    var form_ros = _form_ros(sequelize, DataTypes)
    var form_soap = _form_soap(sequelize, DataTypes)
    var form_taskman = _form_taskman(sequelize, DataTypes)
    var form_vitals = _form_vitals(sequelize, DataTypes)
    var forms = _forms(sequelize, DataTypes)
    // var gacl_acl = _gacl_acl(sequelize, DataTypes);
    var gacl_acl_sections = _gacl_acl_sections(sequelize, DataTypes)
    // var gacl_acl_seq = _gacl_acl_seq(sequelize, DataTypes);
    var gacl_aco = _gacl_aco(sequelize, DataTypes)
    var gacl_aco_map = _gacl_aco_map(sequelize, DataTypes)
    var gacl_aco_sections = _gacl_aco_sections(sequelize, DataTypes)
    // var gacl_aco_sections_seq = _gacl_aco_sections_seq(sequelize, DataTypes);
    // var gacl_aco_seq = _gacl_aco_seq(sequelize, DataTypes);
    var gacl_aro = _gacl_aro(sequelize, DataTypes)
    var gacl_aro_groups = _gacl_aro_groups(sequelize, DataTypes)
    // var gacl_aro_groups_id_seq = _gacl_aro_groups_id_seq(sequelize, DataTypes);
    var gacl_aro_groups_map = _gacl_aro_groups_map(sequelize, DataTypes)
    var gacl_aro_map = _gacl_aro_map(sequelize, DataTypes)
    var gacl_aro_sections = _gacl_aro_sections(sequelize, DataTypes)
    // var gacl_aro_sections_seq = _gacl_aro_sections_seq(sequelize, DataTypes);
    // var gacl_aro_seq = _gacl_aro_seq(sequelize, DataTypes);
    var gacl_axo = _gacl_axo(sequelize, DataTypes)
    var gacl_axo_groups = _gacl_axo_groups(sequelize, DataTypes)
    var gacl_axo_groups_map = _gacl_axo_groups_map(sequelize, DataTypes)
    var gacl_axo_map = _gacl_axo_map(sequelize, DataTypes)
    var gacl_axo_sections = _gacl_axo_sections(sequelize, DataTypes)
    var gacl_groups_aro_map = _gacl_groups_aro_map(sequelize, DataTypes)
    var gacl_groups_axo_map = _gacl_groups_axo_map(sequelize, DataTypes)
    var gacl_phpgacl = _gacl_phpgacl(sequelize, DataTypes)
    var globals = _globals(sequelize, DataTypes)
    var gprelations = _gprelations(sequelize, DataTypes)
    var groups = _groups(sequelize, DataTypes)
    var history_data = _history_data(sequelize, DataTypes)
    // var icd10_dx_order_code = _icd10_dx_order_code(sequelize, DataTypes);
    // // var icd10_gem_dx_10_9 = _icd10_gem_dx_10_9(sequelize, DataTypes);
    // var icd10_gem_dx_9_10 = _icd10_gem_dx_9_10(sequelize, DataTypes);
    // var icd10_gem_pcs_10_9 = _icd10_gem_pcs_10_9(sequelize, DataTypes);
    // var icd10_gem_pcs_9_10 = _icd10_gem_pcs_9_10(sequelize, DataTypes);
    // var icd10_pcs_order_code = _icd10_pcs_order_code(sequelize, DataTypes);
    // var icd10_reimbr_dx_9_10 = _icd10_reimbr_dx_9_10(sequelize, DataTypes);
    // var icd10_reimbr_pcs_9_10 = _icd10_reimbr_pcs_9_10(sequelize, DataTypes);
    // var icd9_dx_code = _icd9_dx_code(sequelize, DataTypes);
    // var icd9_dx_long_code = _icd9_dx_long_code(sequelize, DataTypes);
    // var icd9_sg_code = _icd9_sg_code(sequelize, DataTypes);
    // var icd9_sg_long_code = _icd9_sg_long_code(sequelize, DataTypes);
    var immunization_observation = _immunization_observation(
        sequelize,
        DataTypes
    )
    var immunizations = _immunizations(sequelize, DataTypes)
    var insurance_companies = _insurance_companies(sequelize, DataTypes)
    var insurance_data = _insurance_data(sequelize, DataTypes)
    var insurance_numbers = _insurance_numbers(sequelize, DataTypes)
    var issue_encounter = _issue_encounter(sequelize, DataTypes)
    var issue_types = _issue_types(sequelize, DataTypes)
    var keys = _keys(sequelize, DataTypes)
    // // var lang_constants = _lang_constants(sequelize, DataTypes);
    // var lang_custom = _lang_custom(sequelize, DataTypes);
    // var lang_definitions = _lang_definitions(sequelize, DataTypes);
    // var lang_languages = _lang_languages(sequelize, DataTypes);
    var layout_group_properties = _layout_group_properties(sequelize, DataTypes)
    var layout_options = _layout_options(sequelize, DataTypes)
    var lbf_data = _lbf_data(sequelize, DataTypes)
    var lbt_data = _lbt_data(sequelize, DataTypes)
    var list_options = _list_options(sequelize, DataTypes)
    var lists = _lists(sequelize, DataTypes)
    var lists_touch = _lists_touch(sequelize, DataTypes)
    var log = _log(sequelize, DataTypes)
    var log_comment_encrypt = _log_comment_encrypt(sequelize, DataTypes)
    var log_validator = _log_validator(sequelize, DataTypes)
    var login_mfa_registrations = _login_mfa_registrations(sequelize, DataTypes)
    var medex_icons = _medex_icons(sequelize, DataTypes)
    var medex_outgoing = _medex_outgoing(sequelize, DataTypes)
    var medex_prefs = _medex_prefs(sequelize, DataTypes)
    var medex_recalls = _medex_recalls(sequelize, DataTypes)
    var medsched = _medSched(sequelize, DataTypes)
    var misc_address_book = _misc_address_book(sequelize, DataTypes)
    var module_acl_group_settings = _module_acl_group_settings(
        sequelize,
        DataTypes
    )
    var module_acl_sections = _module_acl_sections(sequelize, DataTypes)
    var module_acl_user_settings = _module_acl_user_settings(
        sequelize,
        DataTypes
    )
    var module_configuration = _module_configuration(sequelize, DataTypes)
    var modules = _modules(sequelize, DataTypes)
    var modules_hooks_settings = _modules_hooks_settings(sequelize, DataTypes)
    var modules_settings = _modules_settings(sequelize, DataTypes)
    var multiple_db = _multiple_db(sequelize, DataTypes)
    var notes = _notes(sequelize, DataTypes)
    var notification_log = _notification_log(sequelize, DataTypes)
    var notification_settings = _notification_settings(sequelize, DataTypes)
    var onotes = _onotes(sequelize, DataTypes)
    var onsite_documents = _onsite_documents(sequelize, DataTypes)
    var onsite_mail = _onsite_mail(sequelize, DataTypes)
    var onsite_messages = _onsite_messages(sequelize, DataTypes)
    var onsite_online = _onsite_online(sequelize, DataTypes)
    var onsite_portal_activity = _onsite_portal_activity(sequelize, DataTypes)
    var onsite_signatures = _onsite_signatures(sequelize, DataTypes)
    var openemr_module_vars = _openemr_module_vars(sequelize, DataTypes)
    var openemr_modules = _openemr_modules(sequelize, DataTypes)
    var openemr_postcalendar_categories = _openemr_postcalendar_categories(
        sequelize,
        DataTypes
    )
    var openemr_postcalendar_events = _openemr_postcalendar_events(
        sequelize,
        DataTypes
    )
    var patient_access_offsite = _patient_access_offsite(sequelize, DataTypes)
    var patient_access_onsite = _patient_access_onsite(sequelize, DataTypes)
    var patient_birthday_alert = _patient_birthday_alert(sequelize, DataTypes)
    var patient_data = _patient_data(sequelize, DataTypes)
    var patient_portal_menu = _patient_portal_menu(sequelize, DataTypes)
    var patient_reminders = _patient_reminders(sequelize, DataTypes)
    var patient_tracker = _patient_tracker(sequelize, DataTypes)
    var patient_tracker_element = _patient_tracker_element(sequelize, DataTypes)
    var payment_gateway_details = _payment_gateway_details(sequelize, DataTypes)
    var payments = _payments(sequelize, DataTypes)
    var pharmacies = _pharmacies(sequelize, DataTypes)
    var phone_numbers = _phone_numbers(sequelize, DataTypes)
    var pnotes = _pnotes(sequelize, DataTypes)
    var practictioner_patient_map = _practictioner_patient_map(
        sequelize,
        DataTypes
    )
    var prescriptions = _prescriptions(sequelize, DataTypes)
    var prices = _prices(sequelize, DataTypes)
    var procedure_answers = _procedure_answers(sequelize, DataTypes)
    var procedure_order = _procedure_order(sequelize, DataTypes)
    var procedure_order_code = _procedure_order_code(sequelize, DataTypes)
    var procedure_providers = _procedure_providers(sequelize, DataTypes)
    var procedure_questions = _procedure_questions(sequelize, DataTypes)
    var procedure_report = _procedure_report(sequelize, DataTypes)
    var procedure_result = _procedure_result(sequelize, DataTypes)
    var procedure_type = _procedure_type(sequelize, DataTypes)
    var product_registration = _product_registration(sequelize, DataTypes)
    var product_warehouse = _product_warehouse(sequelize, DataTypes)
    var registry = _registry(sequelize, DataTypes)
    var report_itemized = _report_itemized(sequelize, DataTypes)
    var report_results = _report_results(sequelize, DataTypes)
    // var rule_action = _rule_action(sequelize, DataTypes);
    var rule_action_item = _rule_action_item(sequelize, DataTypes)
    // var rule_filter = _rule_filter(sequelize, DataTypes);
    var rule_patient_data = _rule_patient_data(sequelize, DataTypes)
    // var rule_reminder = _rule_reminder(sequelize, DataTypes);
    // var rule_target = _rule_target(sequelize, DataTypes);
    // var sequences = _sequences(sequelize, DataTypes);
    var shared_attributes = _shared_attributes(sequelize, DataTypes)
    var standardized_tables_track = _standardized_tables_track(
        sequelize,
        DataTypes
    )
    // var supported_external_dataloads = _supported_external_dataloads(sequelize, DataTypes);
    var syndromic_surveillance = _syndromic_surveillance(sequelize, DataTypes)
    var template_users = _template_users(sequelize, DataTypes)
    var tenant = _tenant(sequelize, DataTypes)
    var therapy_groups = _therapy_groups(sequelize, DataTypes)
    var therapy_groups_counselors = _therapy_groups_counselors(
        sequelize,
        DataTypes
    )
    var therapy_groups_participant_attendance = _therapy_groups_participant_attendance(
        sequelize,
        DataTypes
    )
    var therapy_groups_participants = _therapy_groups_participants(
        sequelize,
        DataTypes
    )
    var transactions = _transactions(sequelize, DataTypes)
    var user_settings = _user_settings(sequelize, DataTypes)
    var users = _users(sequelize, DataTypes)
    var users_facility = _users_facility(sequelize, DataTypes)
    var users_secure = _users_secure(sequelize, DataTypes)
    var valueset = _valueset(sequelize, DataTypes)
    var version = _version(sequelize, DataTypes)
    var voids = _voids(sequelize, DataTypes)
    var x12_partners = _x12_partners(sequelize, DataTypes)
    var patch = _patch(sequelize, DataTypes)
    var patch_patient_map = _patch_patient_map(sequelize, DataTypes)
    var ews_table = _ews_table(sequelize, DataTypes)
    var role = _role(sequelize, DataTypes)
    var Appointment = _Appointment(sequelize, DataTypes)
    var location = _location(sequelize, DataTypes)
    var bed = _bed(sequelize, DataTypes)
    var uuid = _uuid(sequelize, DataTypes)
    var vital_threshold = _vital_threshold(sequelize, DataTypes)
    var image = _image(sequelize, DataTypes)
    var connector = _connector(sequelize, DataTypes)
    var user_patient_map = _user_patient_map(sequelize, DataTypes)
    var approval_type = _approval_type(sequelize, DataTypes)
    var product = _product(sequelize, DataTypes)
    var patient_medication_table = _patient_medication_table(sequelize, DataTypes)
    var upgradeMobile = _upgradeMobile(sequelize, DataTypes);
    var medical_history = _medical_history(sequelize, DataTypes)
    var allergy = _allergy(sequelize, DataTypes)
    var patient_location_table = _patient_location_table(sequelize, DataTypes)

    var patient_medication_table = _patient_medication_table(sequelize, DataTypes)
    var upgradeMobile = _upgradeMobile(sequelize, DataTypes);
    var upgradeGateway = _upgradeGateway(sequelize, DataTypes);
    var patient_report_map = _patient_report_map(sequelize, DataTypes)

    var report = _report(sequelize, DataTypes)
    var procedure = _procedure(sequelize, DataTypes)
    var lab_report = _lab_report(sequelize, DataTypes)
    var license = _license(sequelize, DataTypes)
    var tasks = _tasks(sequelize, DataTypes)
    var user_tenant_map = _user_tenant_map(sequelize, DataTypes)
    var profile = _profile(sequelize, DataTypes)
    var medical_illness_map=_medical_illness_map(sequelize,DataTypes)
    var device_type = _device_type(sequelize, DataTypes)
    var alert_data = _alert_data(sequelize, DataTypes)
    var logger_data = _logger_data(sequelize, DataTypes)


    return {
        addresses,
        amc_misc_data,
        amendments,
        amendments_history,
        api_token,
        ar_activity,
        ar_session,
        audit_details,
        audit_master,
        audit_log,
        automatic_notification,
        background_services,
        batchcom,
        benefit_eligibility,
        billing,
        billing_summary,
        calendar_external,
        categories,
        categories_seq,
        categories_to_documents,
        ccda,
        ccda_components,
        ccda_field_mapping,
        ccda_sections,
        ccda_table_mapping,
        chart_tracker,
        claims,
        clinical_plans,
        clinical_plans_rules,
        clinical_rules,
        clinical_rules_log,
        code_types,
        codes,
        codes_history,
        customlists,
        dated_reminders,
        dated_reminders_link,
        direct_message_log,
        documents,
        documents_legal_categories,
        documents_legal_detail,
        documents_legal_master,
        drug_inventory,
        drug_sales,
        drug_templates,
        drugs,
        eligibility_verification,
        employer_data,
        enc_category_map,
        erx_narcotics,
        erx_rx_log,
        erx_ttl_touch,
        erx_weno_drugs,
        esign_signatures,
        extended_log,
        external_encounters,
        external_procedures,
        facility,
        facility_user_ids,
        fee_sheet_options,
        // form_care_plan,
        form_clinical_instructions,
        form_dictation,
        form_encounter,
        form_eye_acuity,
        form_eye_antseg,
        form_eye_base,
        form_eye_biometrics,
        form_eye_external,
        form_eye_hpi,
        form_eye_locking,
        form_eye_mag_dispense,
        form_eye_mag_impplan,
        form_eye_mag_orders,
        // form_eye_mag_prefs,
        // form_eye_mag_wearing,
        form_eye_neuro,
        form_eye_postseg,
        form_eye_refraction,
        form_eye_ros,
        form_eye_vitals,
        // form_functional_cognitive_status,
        form_group_attendance,
        form_groups_encounter,
        form_misc_billing_options,
        // form_observation,
        form_reviewofs,
        form_ros,
        form_soap,
        form_taskman,
        form_vitals,
        forms,
        // gacl_acl,
        gacl_acl_sections,
        // gacl_acl_seq,
        gacl_aco,
        gacl_aco_map,
        gacl_aco_sections,
        // gacl_aco_sections_seq,
        // gacl_aco_seq,
        gacl_aro,
        gacl_aro_groups,
        // gacl_aro_groups_id_seq,
        gacl_aro_groups_map,
        gacl_aro_map,
        gacl_aro_sections,
        // gacl_aro_sections_seq,
        // gacl_aro_seq,
        gacl_axo,
        gacl_axo_groups,
        gacl_axo_groups_map,
        gacl_axo_map,
        gacl_axo_sections,
        gacl_groups_aro_map,
        gacl_groups_axo_map,
        gacl_phpgacl,
        globals,
        gprelations,
        groups,
        history_data,
        // icd10_dx_order_code,
        // icd10_gem_dx_10_9,
        // icd10_gem_dx_9_10,
        // icd10_gem_pcs_10_9,
        // icd10_gem_pcs_9_10,
        // icd10_pcs_order_code,
        // icd10_reimbr_dx_9_10,
        // icd10_reimbr_pcs_9_10,
        // icd9_dx_code,
        // icd9_dx_long_code,
        // icd9_sg_code,
        // icd9_sg_long_code,
        immunization_observation,
        immunizations,
        insurance_companies,
        insurance_data,
        insurance_numbers,
        issue_encounter,
        issue_types,
        keys,
        // lang_constants,
        // lang_custom,
        // lang_definitions,
        // lang_languages,
        layout_group_properties,
        layout_options,
        lbf_data,
        lbt_data,
        list_options,
        lists,
        lists_touch,
        log,
        log_comment_encrypt,
        log_validator,
        login_mfa_registrations,
        medex_icons,
        medex_outgoing,
        medex_prefs,
        medex_recalls,
        medsched,
        misc_address_book,
        module_acl_group_settings,
        module_acl_sections,
        module_acl_user_settings,
        module_configuration,
        modules,
        modules_hooks_settings,
        modules_settings,
        multiple_db,
        notes,
        notification_log,
        notification_settings,
        onotes,
        onsite_documents,
        onsite_mail,
        onsite_messages,
        onsite_online,
        onsite_portal_activity,
        onsite_signatures,
        openemr_module_vars,
        openemr_modules,
        openemr_postcalendar_categories,
        openemr_postcalendar_events,
        patient_access_offsite,
        patient_access_onsite,
        patient_birthday_alert,
        patient_data,
        patient_portal_menu,
        patient_reminders,
        patient_tracker,
        patient_tracker_element,
        payment_gateway_details,
        payments,
        pharmacies,
        phone_numbers,
        pnotes,
        practictioner_patient_map,
        prescriptions,
        prices,
        procedure_answers,
        procedure_order,
        procedure_order_code,
        procedure_providers,
        procedure_questions,
        procedure_report,
        procedure_result,
        procedure_type,
        product_registration,
        product_warehouse,
        profile,
        registry,
        report_itemized,
        report_results,
        // rule_action,
        // rule_action_item,
        // rule_filter,
        rule_patient_data,
        // rule_reminder,
        // rule_target,
        // sequences,
        shared_attributes,
        standardized_tables_track,
        // supported_external_dataloads,
        syndromic_surveillance,
        template_users,
        tenant,
        therapy_groups,
        therapy_groups_counselors,
        therapy_groups_participant_attendance,
        therapy_groups_participants,
        transactions,
        user_settings,
        users,
        users_facility,
        users_secure,
        valueset,
        version,
        voids,
        x12_partners,
        patch,
        patch_patient_map,
        ews_table,
        role,
        Appointment,
        location,
        bed,
        uuid,
        vital_threshold,
        image,
        connector,
        user_patient_map,
        approval_type,
        product,
        patient_location_table,
        patient_medication_table,

        upgradeGateway,


        upgradeMobile,
        medical_history,
        allergy,
        report,
        patient_report_map,
        procedure,
        lab_report,
        license,
        tasks,
        user_tenant_map,
        medical_illness_map,
        device_type,
        alert_data,
        logger_data
    }
}
//Relations
module.exports = initModels
module.exports.initModels = initModels
module.exports.default = initModels
