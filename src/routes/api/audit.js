let router = require("express").Router();
const auditLogCtrlr = require("../../dbcontrollers/audit_log.controller");

const AUDIT_CODE = require("../../lib/constants/AppEnum").AUDIT_CODE


// Create a new AuditLog
router.post("/", auditLogCtrlr.create);

/**
 * @openapi
 *  /api/audit/:
 *   get:
 *       tags:
 *         - Audit Log
 *       summary: Audit Log
 *       responses:
 *         '200':
 *           description: Audit Log.
 *       parameters:
 *          - in: query
 *            name: from
 *            schema:
 *               type: string
 *            description: From time.
 *          - in: query
 *            name: to
 *            schema:
 *               type: string
 *            description: To time.
 *          - in: query
 *            name: email
 *            schema:
 *               type: string
 *            description: User email.
 *          - in: query
 *            name: tenant
 *            schema:
 *               type: string
 *            description: User tenant.
 *          - in: query
 *            name: role
 *            schema:
 *               type: string
 *            description: User role.
 *          - in: query
 *            name: verb
 *            schema:
 *               type: string
 *            description: HTTP verb GET/POST/PUT/DELETE.
 *          - in: query
 *            name: route
 *            schema:
 *               type: string
 *            description: Filter specific route.
 */
router.get("/", async function(req, res, next) {
    let auditLog = null
    req.params.filter = {}

    console.log(req.query)
    if (req.query.hasOwnProperty('from')) {
        req.params.filter.from = new Date(req.query.from)
    }

    if (req.query.hasOwnProperty('to')) {
        req.params.filter.to = new Date(req.query.to)
    }

    if (req.query.hasOwnProperty('email')) {
        req.params.filter.email = req.query.email.toLowerCase()
    }

    if (req.query.hasOwnProperty('tenant')) {
        req.params.filter.tenant = req.query.tenant.toLowerCase()
    }

    if (req.query.hasOwnProperty('role')) {
        req.params.filter.role = req.query.role.toLowerCase()
    }

    if (req.query.hasOwnProperty('route')) {
        req.params.filter.route = req.query.route.toLowerCase()
    }

    if (req.query.hasOwnProperty('verb')) {
        req.params.filter.verb = req.query.verb.toLowerCase()
    }

    try {
        auditLog = await auditLogCtrlr.findAll(req, res)
    }
    catch (err) {
        console.log("Audit Log Get Error :", err)
    }

    if (auditLog) {
        res.status(AUDIT_CODE["SUCCESS"].HttpStatus).json({
            result: AUDIT_CODE["SUCCESS"].Code,
            response: { "auditLog": auditLog },
            error: {},
            privilege: {}
        })
    } else {
        res.status(AUDIT_CODE['FAILURE'].HttpStatus).json({
            result: AUDIT_CODE['FAILURE'].Code,
            response: { "auditLog": {} },
            error: {},
            privilege: {}
        })
    }
});
/*
// Retrieve all published AuditLogs
router.get("/published", auditLogCtrlr.findAllPublished);

// Retrieve a single AuditLog with id
router.get("/:id", auditLogCtrlr.findOne);

// Update a AuditLog with id
router.put("/:id", auditLogCtrlr.update);

// Delete a AuditLog with id
router.delete("/:id", auditLogCtrlr.delete);

// Delete all AuditLogs
router.delete("/", auditLogCtrlr.deleteAll);
*/

module.exports = router;
