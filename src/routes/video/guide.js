// in the imports above
var express = require("express")
var router = express.Router()
const fs = require("fs");

router.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

router.get("/helpvideo", function (req, res) {
    console.log("In ECG Video", req.query)
    type = req.query['type']
    const guideFiles = {
        "ecg" : "/ecg1.mp4",
        "spo2" : "/spo21.mp4",
        "temp": "/temp1.mp4"
    }

    const videoPath = __dirname + guideFiles[type]
    const path = videoPath
    console.log("In ECG Video1")
  

    const stat = fs.statSync(__dirname + guideFiles[type])
    const fileSize = stat.size
    const range = req.headers.range

    console.log("In here.. ", stat, fileSize, range)

    if (range) {
        console.log("I am in range condition")
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize - 1

        if (start >= fileSize) {
            res.status(416).send('Requested range not satisfiable\n' + start + ' >= ' + fileSize);
            return
        }

        const chunksize = (end - start) + 1
        const file = fs.createReadStream(path, { start, end })
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }

        res.writeHead(206, head)
        file.pipe(res)
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        console.log("Header",head)
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
        console.log("piping")
    }
});

module.exports = router