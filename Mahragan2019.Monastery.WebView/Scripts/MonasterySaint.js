$("document").ready(function () {
    $("#mySpinner2").removeClass("d-none");

    $.ajax({
        url: "http://localhost:2061/api/SaintOfManostery/GetSaintByMonasteryId/" + window.localStorage.getItem("MonasteryId"),
        method: "GET",
        contentType: "application/json",
        success: function (List) {
            if (List.length == 0) {
                $("#NoData").removeClass("d-none");
                $(".hiddenOne").addClass("d-none");
            }
            else {
                var monasterySaint = "<div class=\"jumbotron\">";
                for (var i = 0; i < List.length; i++) {
                    if (i != 0 && List[i].Header != null) {
                        monasterySaint = monasterySaint + "</div\">" + "\"<div class=\"jumbotron\">";
                    }
                    monasterySaint = monasterySaint + "<h1 class=\"display-4\" style=\"text-align: center;\">" + List[i].Header + "</h1>";
                    for (var j = 0; j < List[i].SaintTitlesList.length; j++) {
                        if (List[i].SaintTitlesList[j].MediaSrc === null) {
                            monasterySaint = monasterySaint + "<h3> + " + List[i].SaintTitlesList[j].SaintTitle1 + "</h3>"
                            for (var x = 0; x < List[i].SaintTitlesList[j].SaintParagraph1.length; x++) {
                                monasterySaint = monasterySaint + "<p class=\"lead\">" + List[i].SaintTitlesList[j].SaintParagraph1[x] + "</p>";
                            }
                        }
                        else {
                            monasterySaint = monasterySaint + "<h3> + " + List[i].SaintTitlesList[j].SaintTitle1 + "</h3>" +
                                "<img src=\"../Images/imges 2/" + List[i].SaintTitlesList[j].MediaSrc + ".jpg\" class=\"rounded d-none d-lg-block\">";
                            for (var x = 0; x < List[i].SaintTitlesList[j].SaintParagraph1.length; x++) {
                                monasterySaint = monasterySaint + "<p class=\"lead\">" + List[i].SaintTitlesList[j].SaintParagraph1[x] + "</p>";
                            }
                        }
                    }
                }
            }

            $("#mySpinner2").addClass("d-none");
            $("#SaintJumbotron").append(monasterySaint);
        }
    });
});