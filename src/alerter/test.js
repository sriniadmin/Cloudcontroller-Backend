const alerter = require('./globalAlert')

const test = async () => {
    try {
        let alert = await alerter({
            resource: 'user', event: 'User Login', environment: 'Production', service: [
                "example.com"
            ], text: `user has been logge successfully`,
            severity: 'normal', group: 'Web'
        })
        console.log(alert)
    }
    catch (err) {
        console.log(err)
    }
}

test()