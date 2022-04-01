$(function () {
    "use strict"

    jQuery("#world-map-markers").vectorMap({
        map: "world_mill_en",
        backgroundColor: "transparent",
        borderColor: "#818181",
        borderOpacity: 0.25,
        borderWidth: 1,
        zoomOnScroll: false,
        color: "#2962FF",
        regionStyle: {
            initial: {
                fill: "#2962FF",
            },
        },
        markerStyle: {
            initial: {
                r: 9,
                fill: "#fff",
                "fill-opacity": 1,
                stroke: "#000",
                "stroke-width": 5,
                "stroke-opacity": 0.4,
            },
        },
        enableZoom: true,
        hoverColor: "#2962FF",
        markers: [
            {
                latLng: [21.0, 78.0],
                name: "I Love My India",
            },
        ],
        hoverOpacity: null,
        normalizeFunction: "linear",
        scaleColors: ["#b6d6ff", "#005ace"],
        selectedColor: "#c9dfaf",
        selectedRegions: [],
        showTooltip: true,
        onRegionClick: function (element, code, region) {
            var message =
                'You clicked "' +
                region +
                '" which has the code: ' +
                code.toUpperCase()

            alert(message)
        },
    })

    $("#india").vectorMap({
        map: "in_mill",
        backgroundColor: "transparent",
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: "#55ce63",
            },
        },
    })

    $("#usa").vectorMap({
        map: "us_aea_en",
        backgroundColor: "transparent",
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: "#7460ee",
            },
        },
    })

    $("#usaMapDistribution").vectorMap({
        map: "us_aea_en",
        backgroundColor: "transparent",
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: "#7460ee",
            },
        },
        hoverColor: "#2962FF",
        markerStyle: {
            initial: {
                r: 9,
                fill: "#fff",
                "fill-opacity": 1,
                stroke: "#000",
                "stroke-width": 5,
                "stroke-opacity": 0.4,
            },
        },
        enableZoom: true,
        markers: [
            { latLng: [33.9783241, -84.4783064], name: "P-AN-132867332" },
            {
                latLng: [30.51220349999999, -97.67312530000001],
                name: "P-AN-701543134",
            },
            { latLng: [39.4014955, -76.6019125], name: "P-AN-182029218" },
            { latLng: [33.37857109999999, -86.80439], name: "P-AN-404175160" },
            { latLng: [43.1938516, -71.5723953], name: "P-AN-427430766" },
            { latLng: [43.0026291, -78.8223134], name: "P-AN-136144062" },
            { latLng: [33.836081, -81.1637245], name: "P-AN-767060465" },
            { latLng: [41.7435073, -88.0118473], name: "P-AN-459900687" },
            { latLng: [39.1031182, -84.5120196], name: "P-AN-340285528" },
            { latLng: [41.6661573, -81.339552], name: "P-AN-59808038" },
            {
                latLng: [39.9611755, -82.99879419999999],
                name: "P-AN-232572126",
            },
            { latLng: [32.735687, -97.10806559999999], name: "P-AN-700049941" },
            { latLng: [39.9205411, -105.0866504], name: "P-AN-915568875" },
            { latLng: [42.8105356, -83.0790865], name: "P-AN-431653884" },
            { latLng: [41.754166, -72.624443], name: "P-AN-202142801" },
            {
                latLng: [29.7355047, -94.97742740000001],
                name: "P-AN-523269159",
            },
            { latLng: [39.978371, -86.1180435], name: "P-AN-611923596" },
            {
                latLng: [30.3321838, -81.65565099999999],
                name: "P-AN-299345653",
            },
            { latLng: [39.0653602, -94.5624426], name: "P-AN-878610515" },
            { latLng: [36.0849963, -115.1511364], name: "P-AN-78743544" },
            { latLng: [34.0596149, -118.1122679], name: "P-AN-536374151" },
            { latLng: [38.3964426, -85.4375574], name: "P-AN-296573501" },
            { latLng: [35.0387247, -89.8505012], name: "P-AN-158124557" },
            { latLng: [26.2378597, -80.1247667], name: "P-AN-640523881" },
            { latLng: [43.0166806, -88.0070315], name: "P-AN-871846716" },
            { latLng: [44.9389111, -93.1177555], name: "P-AN-563451639" },
            { latLng: [35.8905359, -86.7618425], name: "P-AN-260542042" },
            { latLng: [29.984544, -90.2042505], name: "P-AN-27115564" },
            {
                latLng: [40.7143528, -74.00597309999999],
                name: "P-AN-712727779",
            },
            { latLng: [35.4675602, -97.5164276], name: "P-AN-358171931" },
            {
                latLng: [28.2919557, -81.40757099999999],
                name: "P-AN-937372686",
            },
            { latLng: [39.8373479, -75.1545381], name: "P-AN-101461373" },
            { latLng: [33.48374, -111.9164779], name: "P-AN-754307773" },
            {
                latLng: [40.44062479999999, -79.9958864],
                name: "P-AN-627306160",
            },
            { latLng: [45.5809394, -122.7077056], name: "P-AN-641481850" },
            { latLng: [41.679407, -71.104972], name: "P-AN-378252434" },
            { latLng: [35.772096, -78.6386145], name: "P-AN-526604207" },
            { latLng: [37.5407246, -77.4360481], name: "P-AN-881381873" },
            { latLng: [34.0633443, -117.6508876], name: "P-AN-834828103" },
            { latLng: [43.16103, -77.6109219], name: "P-AN-49289611" },
            { latLng: [38.672006, -121.367741], name: "P-AN-236875641" },
            { latLng: [38.6105426, -90.3371889], name: "P-AN-212615493" },
            { latLng: [40.7607793, -111.8910474], name: "P-AN-559483472" },
            {
                latLng: [29.4241219, -98.49362819999999],
                name: "P-AN-378680093",
            },
            { latLng: [33.0763386, -117.2205771], name: "P-AN-974448454" },
            { latLng: [37.6788056, -122.2880726], name: "P-AN-549259435" },
            { latLng: [37.3666767, -121.958687], name: "P-AN-323768992" },
            { latLng: [47.610377, -122.2006786], name: "P-AN-59008816" },
            { latLng: [27.9249117, -82.5943072], name: "P-AN-676504844" },
            { latLng: [32.2217429, -110.926479], name: "P-AN-936307348" },
            {
                latLng: [36.9211118, -76.32017549999999],
                name: "P-AN-378994601",
            },
            {
                latLng: [38.9897306, -77.41000939999999],
                name: "P-AN-999302679",
            },
        ],
        hoverOpacity: null,
        normalizeFunction: "linear",
        onMarkerTipShow: function (event, label, index) {
            label.html(
                "<b>" +
                    "</b>" +
                    "<b>Active Devices: </b>" +
                    Math.ceil(Math.random() * 100) +
                    "</br>" +
                    "<b>Active Devices %: </b>" +
                    Math.ceil(Math.random() * 3) +
                    "%"
            )
        },
        onRegionTipShow: function (event, label, code) {
            label.html(
                "<b>" +
                    label.html() +
                    "</b></br>" +
                    "<b>Active Devices: </b>" +
                    Math.ceil(Math.random() * 100)
            )
        },
    })

    $("#australia").vectorMap({
        map: "au_mill",
        backgroundColor: "transparent",
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: "#ffca4a",
            },
        },
    })

    $("#uk").vectorMap({
        map: "uk_mill_en",
        backgroundColor: "transparent",
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: "#f62d51",
            },
        },
    })
})
