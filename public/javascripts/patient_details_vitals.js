// $(document).ready(function () {
    $("#vitals_form").submit(function (event) {
        event.preventDefault()
        event.stopPropagation();
        var toid = $("#toid").val()
        var newmsg = $("#newmsg").val()
        // vitals_compose_flag = false
        default_right_compose_medical_vitals = document.getElementById(
            "right_compose_medical_vitals"
        ).innerHTML
        $.ajax({
            type: "GET",
            url: "/sample",
            data: "toid=" + content + "&newmsg=" + newmsg,
            success: function () {
                alert("success")
                // $("#right_compose_medical_vitals").replaceWith(
                //     $("#right_compose_medical_vitals", "data")
                // )
                var dataContainer = document.getElementById(
                    "right_compose_medical_vitals"
                )
                dataContainer.innerHTML = "Updated the Vitals"
                vitals_compose_flag = true
                // document.getElementById("right_compose_medical_vitals").hide()
            },
        })
    })
// })

$("#vitals_add").click(function () {
    $("#vitals_form").submit()
})
