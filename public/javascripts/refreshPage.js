function getPage(selectObject) {
    var value = selectObject.value;
    console.log("select object is ", value);
    var url = window.location.href;
    console.log("URL Href is ", url)
    var query_string = get_query_element()
    console.log("Query String is ", query_string)
    if (url.indexOf('?') > -1) {
        uri = url.split('?')[0]
        url = uri + '?monitortime=' + value
    } else {
        url += '?monitortime=' + value
    }
    url += '&' + query_string
    console.log("select object is ", url);

    window.location.href = url;
    // window.location.reload(true);
}

function get_query_element() {
    var eles = [];
    var query_string_txt = "";
    var inputs = document.querySelectorAll('*[id^="_query"]');
    console.log("inputs", inputs)
    for (var i = 0; i < inputs.length; i++) {
        eles.push(inputs[i].textContent);
        query_string_txt += inputs[i].id + '=' + (inputs[i].textContent).trim() + '&'
        console.log(query_string_txt)
    }
    console.log("Element is ", eles)
    return query_string_txt
}

function selectElement(id, valueToSelect) {
    let element = document.getElementById(id);
    element.value = valueToSelect;
}
var url = window.location.href;
console.log("monitor url is", url)
if (url.indexOf('?') > -1) {
    var tempQuery = url.split('?')
    console.log("temp", tempQuery)
    if (tempQuery[1].indexOf('&') > -1) {
        queryKV = tempQuery[1].split('&')
        for (var i = 0; i < queryKV.length; i++) {
            var tempMonTime = queryKV[i].split('=')
            console.log("tempMontime is", tempMonTime)
            if (tempMonTime[0] === 'monitortime') {
                montime = tempMonTime[1]
                break
            }
        }
    }
}
console.log('Monitor selected time is', montime)
selectElement('monitortime', montime)