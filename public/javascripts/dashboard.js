$(function () {
    "use strict";


    // Data injection
    // console.log("window.mdata ", window.mdata);
    // var zzz = JSON.parse("<%= JSON.stringify(data) %>");
    // console.log("ZZZ ", zzz);

    // ------------------------------
    // Pie chart
    // Heart Rate
    // ------------------------------
    // based on prepared DOM, initialize echarts instance

    var heartRatePieChart = echarts.init(document.getElementById('heartrate_pie_dashboard'));
    var heartRatePieChartoption = {
        // Add title
        title: {
            subtext: 'Heart Rate',
            x: 'center'
        },

        // Add tooltip
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        // Add legend
        legend: {
            orient: 'vertical',
            x: 'left',
            data: [{
                name: 'Critical',
                icon: 'circle',
                textStyle: {
                    color: '#FF7DA1'
                }
            }, {
                name: 'Low',
                icon: 'circle',
                textStyle: {
                    color: '#5EA79F'
                }
            }, {
                name: 'Medium',
                icon: 'circle',
                textStyle: {
                    color: '#FFCC3D'
                }
            }, {
                name: 'High',
                icon: 'circle',
                textStyle: {
                    color: '#FFAEa1'
                }
            }]
        },

        // Add custom colors

        color: ['#FF7DA1', '#5EA79F', '#FFCC3D', '#FFAEa1'],

        // Display toolbox
        toolbox: {
            show: true,
            orient: 'vertical',
            feature: {
                mark: {
                    show: true,
                    title: {
                        mark: 'Markline switch',
                        markUndo: 'Undo markline',
                        markClear: 'Clear markline'
                    }
                },
                dataView: {
                    show: true,
                    readOnly: false,
                    title: 'View data',
                    lang: ['View chart data', 'Close', 'Update']
                },
                magicType: {
                    show: true,
                    title: {
                        pie: 'Switch to pies',
                        funnel: 'Switch to funnel',
                    },
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            y: '20%',
                            width: '50%',
                            height: '70%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore: {
                    show: true,
                    title: 'Restore'
                },
                saveAsImage: {
                    show: true,
                    title: 'Same as image',
                    lang: ['Save']
                }
            }
        },

        // Enable drag recalculate
        calculable: true,

        // Add series
        series: [{
            name: 'HeartRate',
            type: 'pie',
            radius: '70%',
            center: ['50%', '57.5%'],
            data: [{
                    value: 50,
                    name: 'Critical'
                },
                {
                    value: 310,
                    name: 'Low'
                },
                {
                    value: 100,
                    name: 'Medium'
                },
                {
                    value: 40,
                    name: 'High'
                }
            ]
        }]
    };

    heartRatePieChart.setOption(heartRatePieChartoption);
    // ------------------------------
    // Pie chart
    // ------------------------------

    // Pie chart
    // Heart Rate
    // ------------------------------
    // based on prepared DOM, initialize echarts instance
    var deviceLocationPieChart = echarts.init(document.getElementById('device_location_pie_dashboard'));
    var deviceLocationPieChartoption = {
        // Add title
        title: {
            subtext: 'Device Location',
            x: 'center'
        },

        // Add tooltip
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        // Add legend
        legend: {
            orient: 'vertical',
            x: 'left',
            data: [{
                name: 'In-Patient',
                icon: 'circle',
                textStyle: {
                    color: '#FFCC3D'
                }
            }, {
                name: 'Remote Monitoring',
                icon: 'circle',
                textStyle: {
                    color: '#5EA79F'
                }
            }]
        },

        // Add custom colors
        color: ['#FFCC3D', '#5EA79F'],

        // Display toolbox
        toolbox: {
            show: true,
            orient: 'vertical',
            feature: {
                mark: {
                    show: true,
                    title: {
                        mark: 'Markline switch',
                        markUndo: 'Undo markline',
                        markClear: 'Clear markline'
                    }
                },
                dataView: {
                    show: true,
                    readOnly: false,
                    title: 'View data',
                    lang: ['View chart data', 'Close', 'Update']
                },
                magicType: {
                    show: true,
                    title: {
                        pie: 'Switch to pies',
                        funnel: 'Switch to funnel',
                    },
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            y: '20%',
                            width: '50%',
                            height: '70%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore: {
                    show: true,
                    title: 'Restore'
                },
                saveAsImage: {
                    show: true,
                    title: 'Same as image',
                    lang: ['Save']
                }
            }
        },

        // Enable drag recalculate
        calculable: true,

        // Add series
        series: [{
            name: 'DeviceLocation',
            type: 'pie',
            radius: '70%',
            center: ['50%', '57.5%'],
            data: [{
                    value: 310,
                    name: 'In-Patient'
                },
                {
                    value: 530,
                    name: 'Remote Monitoring'
                }
            ]
        }]
    };

    heartRatePieChart.setOption(heartRatePieChartoption);
    deviceLocationPieChart.setOption(deviceLocationPieChartoption);

    heartRatePieChart.on('click', function (params) {
        // window.open('' + encodeURIComponent(params.name) + '.html', '_self');
        window.open('/patientlist', '_self')
    });

    deviceLocationPieChart.on('click', function (params) {
        // window.open('' + encodeURIComponent(params.name) + '.html', '_self');
        window.open('/patientlist', '_self')
    });
    // ------------------------------
    // Pie chart
    // ------------------------------
    //------------------------------------------------------
    // Resize chart on menu width change and window resize
    //------------------------------------------------------
    $(function () {

        // Resize chart on menu width change and window resize
        $(window).on('resize', resize);
        $(".sidebartoggler").on('click', resize);

        // Resize function
        function resize() {
            setTimeout(function () {

                // Resize chart
                heartRatePieChart.resize();
                heartRatePieChart.resize();
            }, 200);
        }
    });



    // ------------------------------
    // Sparkline Line chart
    // Key Health Events
    // ------------------------------
    var chart = new Chartist.Line(
        "#sales", {
            labels: ["0", "4", "8", "12", "16", "20", "24", "30"],
            series: [
                [0, 2, 5.5, 4, 3.5, 2, 8, 7]
            ],
        }, {
            high: 10,
            low: 0,
            showArea: true,
            fullWidth: true,
            plugins: [Chartist.plugins.tooltip()], // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
            axisY: {
                onlyInteger: true,
                offset: 20,
                labelInterpolationFnc: function (value) {
                    return value / 1 + "k"
                },
            },
        }
    )

    // Offset x1 a tiny amount so that the straight stroke gets a bounding box
    // Straight lines don't get a bounding box
    // Last remark on -> http://www.w3.org/TR/SVG11/coords.html#ObjectBoundingBox
    chart.on("draw", function (ctx) {
        if (ctx.type === "area") {
            ctx.element.attr({
                x1: ctx.x1 + 0.001,
            })
        }
    })

    // Create the gradient definition on created event (always after chart re-render)
    chart.on("created", function (ctx) {
        var defs = ctx.svg.elem("defs")
        defs
            .elem("linearGradient", {
                id: "gradient",
                x1: 0,
                y1: 1,
                x2: 0,
                y2: 0,
            })
            .elem("stop", {
                offset: 0,
                "stop-color": "#2397F3",
            })
            .parent()
            .elem("stop", {
                offset: 1,
                "stop-color": "#f370b0",
            })
    })

    var chart = [chart]

    var sparklineLogin = function () {
        $(".spark-count").sparkline(
            [4, 5, 0, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9], {
                type: "bar",
                width: "100%",
                height: "70",
                barWidth: "2",
                resize: true,
                barSpacing: "6",
                barColor: "#a880fa",
            }
        )

        $(".spark-count2").sparkline([20, 60, 20], {
            type: "pie",
            height: "80",
            resize: true,
            sliceColors: ["#FE917B", "#28B778", "#FFCC3D"],
        })
    }
    var sparkResize

    sparklineLogin()

});