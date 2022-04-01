var data = require("../mock/patientlist.mock.js").data
var p = data.map((b) => {
    return { latLng: [b.latitude, b.longitude], name: b.patch }
})

const fs = require("fs")
fs.writeFileSync("markers.json", JSON.stringify(p))
