const axios = require('axios')

async function systemStatusHandler(req, res, next) {
    try {
        let headers = {
            'Content-type': 'application/json'
        }

        // let response

        let alertId = req.query.id

        let status = req.query.status

        let data = {
            "status": status
        }

        console.log('Alert id : ', alertId)
        console.log('Attributes : ', data)

        let options = {
            method: 'put',
            headers: headers,
            url: `http://localhost:8999/alert/${alertId}/status`,
            data: JSON.stringify(data)
        }
        axios(options)
            .then((response) => {
                res.status(200).send(`Alert status has been changed to "${status}"`)
            })
            .catch((err) => {
                res.send(err)
            })
    }
    catch (err) {
        res.send(`ERROR : ${err.message}`)
        console.log('ERROR : ', err.message)
        return next()
    }
}

module.exports = { systemStatusHandler }

// curl -XPUT http://localhost:8999/alert/b8a5f8bd-b8d9-4813-a1cd-4dac11cf7a76/attributes \
// -H 'Content-type: application/json' \
// -d '{
//       "attributes": {
//         "status" : "close"
//       }
//     }'