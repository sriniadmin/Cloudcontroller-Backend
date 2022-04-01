const { resolveInclude } = require('ejs');
const Influx = require('influx')


// const influx = new Influx.InfluxDB({
//     host: 'localhost',
//     database: 'example',
//     schema: [{
//         measurement: 'cpu_load_short',
//         fields: { Int_value: Influx.FieldType.INTEGER },
//         tags: ['host', 'region']
//     }]
// });


const influx1 = new Influx.InfluxDB('http://host:8086/database')
console.log('hi')



function asyncinfluxres1() {
    var value1 = [70, 20, 100, 90, 80, 30]
    var test
    var res
    console.log("asyncValue is ", value1)
    const influx = new Influx.InfluxDB({
        host: 'localhost',
        database: 'example',
        schema: [{
            measurement: 'weather',
            fields: { temparature: Influx.FieldType.FLOAT },
            tags: ['location']
        }]
    });

    // const reqs = ['select * from cpu_load_short']

    // const result = reqs.reduce((prevPr, currArg) => {
    //     return prevPr.then((acc) => influx.query(currArg))

    // }, Promise.resolve([]))
    // console.log("newthing", result)
    // result.then(
    //     result => test = result
    // )
    // return test
    influx.query(`select * from weather`).then(result => {
        let count = result.length;
        console.log('res1 ', result)
        for (let i = 0; i < count; i++) {
            console.log("result loop", result[i])
        }
        console.log('temp', temp)
        res.json(result)
    })
    console.log("what is this", res)
    return res
        // .then(result => { console.log(result) })

}

function influxres1() {
    var value1 = [10, 20, 100, 90, 80, 30]
    console.log("Value is ", value1)
    var value2 = asyncinfluxres1()
        // .then((result) => {
        //     console.log("Result inside is", result)
        //     return value2
        // })
    console.log("after Value is ", value2)

    return value2
}

async function influxres() {
    const influx = new Influx.InfluxDB({
        host: 'localhost',
        database: 'example',
        schema: [{
            measurement: 'cpu_load_short',
            fields: { Int_value: Influx.FieldType.INTEGER },
            tags: ['host', 'region']
        }]
    });
    res = await influx.queryRaw(`select * from cpu_load_short`)
    return res
        // .then(result => { console.log(result) })
}

module.exports = {
    influxres1,
    getinflux: async() => {
        // let value1 = await influxres()
        var value1 = [10, 20, 100, 90, 80, 30]
        return value1
    },

};



// res = influx.query(`select * from cpu_load_short`)
//    .then(result => response.status(200).json(result))
//    .catch(error => response.status(500).json({ error }));
// console.log(res)