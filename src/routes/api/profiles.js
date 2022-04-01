const express = require('express')
const router = express.Router()

var {
    getProfiles,
    postProfiles,
    putProfiles
} = require('../../old_code_refactor/internalUser')

const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

/**
 * @openapi
 *  /api/profile/getUserProfile:
 *   get:
 *       tags:
 *         - profile
 *       summary: profile information based on id
 *       responses:
 *         '200':
 *           description: profile info of existing profile
 *       parameters:
 *          - in: query
 *            name: pid
 *            required: true
 *            schema:
 *               type: string
 *            description: patient id of the profile that needs to be fetched.
 */

router.get('/getUserProfile', getProfiles, apiFinalProcess)

/**
 * @openapi
 *  /api/profile/createUserProfile:
 *   post:
 *       tags:
 *         - profile
 *       summary: Create new profile
 *       requestBody:
 *         description: New proile is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/profile'
 *       parameters:
 *          - in: query
 *            name: pid
 *            required: true
 *            schema:
 *               type: string
 *            description: patient id of the profile that needs to be created.
 *          - in: query
 *            name: tenant_id
 *            required: true
 *            schema:
 *               type: string
 *            description: tenant id of the profile that needs to be created.
 *       responses:
 *         '200':
 *           description: profile Information is added.
 */

router.post('/createUserProfile', postProfiles, apiFinalProcess)

/**
 * @openapi
 *  /api/profile/updateUserProfile:
 *   put:
 *       tags:
 *         - profile
 *       summary: update profile
 *       requestBody:
 *         description: proile is updated with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/profile'
 *       parameters:
 *          - in: query
 *            name: pid
 *            required: true
 *            schema:
 *               type: string
 *            description: patient id of the profile that needs to be updated.
 *       responses:
 *         '200':
 *           description: profile Information is updated.
 */

router.put('/updateUserProfile', putProfiles, apiFinalProcess)

module.exports = router