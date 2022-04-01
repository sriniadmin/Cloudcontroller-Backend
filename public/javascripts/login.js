function getPage(selectObject) {
    var value = selectObject.value;
    console.log("select object is ", value);
    var url = window.location.href;
    console.log("URL Href is ", url)
    if (url.indexOf('?') > -1) {
        uri = url.split('?')[0]
        url = uri + '?monitortime=' + value
    } else {
        url += '?monitortime=' + value
    }
    window.location.href = url;
    console.log("select object is ", url);
    // window.location.reload(true);
}


function selectElement(id, valueToSelect) {
    let element = document.getElementById(id);
    element.value = valueToSelect;
}

let montime = '1m';

var url = window.location.href;
if (url.indexOf('?') > -1) {
    var tempMonTime = url.split('?')[1].split('=')[1]
    montime = tempMonTime
}
selectElement('monitortime', montime)