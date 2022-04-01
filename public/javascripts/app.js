const Influx = require('influx')
const express = require('express')
const http = require('http')
const os = require('os')


//const Influx = require('influx');
const influx = new Influx.InfluxDB({

            host: 'localhost',

            database: 'example',

            schema: [{

                measurement: 'cpu_load_short',

                fields: { Int_value: Influx.FieldType.INTEGER },

                tags: ['host', 'region']

            }]

        });


const influx1 = new Influx.InfluxDB('http://host:8086/database')
console.log('hi')



influx.query('select * from cpu_load_short').then(results => {
  console.log(results)
})



res = influx.query(`select * from cpu_load_short`)
   .then(result => response.status(200).json(result))
   .catch(error => response.status(500).json({ error }));
console.log(res)


const app = express()

