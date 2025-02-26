$("document").ready(function () {
    $("#mySpinner1").removeClass("d-none");

    $.ajax({
        url: "http://localhost:2061/api/History/GetHistoryByMonasteryId/" + window.localStorage.getItem("MonasteryId"),
        method: "GET",
        contentType: "application/json",
        success: function (List) {
            if (List.length == 0) {
                $("#NoData").removeClass("d-none");
                $(".hiddenOne").addClass("d-none");
            }
            else {
                var histoJumbotrons = "";
                for (var i = 0; i < List.length; i++) {

                    //if (List[i].MonasteryId == 1 && i == List.length - 6) {

                    //    histoJumbotrons = histoJumbotrons + "</div></div>";
                    //}
                    if (i != 0 && List[i].ParagraphTitle !== null || i === List.length) {
                        histoJumbotrons = histoJumbotrons + "</div></div>";

                    }
                    if (List[i].ImagePath === null && List[i].ParagraphTitle !== null) {
                        histoJumbotrons = histoJumbotrons + "<div class=\"jumbotron jumbotron-fluid\">" +
                            "<div class=\"container\">" +
                            "<h1 class=\"display-4\">" + List[i].ParagraphTitle + "</h1>" +
                            "<br><br>" +
                            "<p class=\"lead\">" + List[i].History +
                        "</p>";
                    }
                    else if (List[i].ImagePath !== null && List[i].ParagraphTitle === null) {
                        histoJumbotrons = histoJumbotrons +
                            "<br><br>" +
                                   "<img src=\"../Images/imges 2/" + List[i].ImagePath + ".jpg\" \" class=\"rounded\" style=\"" + List[i].Style + "\">" +
                                   "<p class=\"lead\">" + List[i].History +
                        "</p>";
                    }

                    else if (List[i].ImagePath === null && List[i].ParagraphTitle === null) {
                        histoJumbotrons = histoJumbotrons +
                            "<br><br>" +
                                   "<p class=\"lead\">" + List[i].History +
                        "</p>";
                    }

                    else {
                        histoJumbotrons = histoJumbotrons + "<div class=\"jumbotron jumbotron-fluid\">" +
                                    "<div class=\"container\">" +
                                    "<h1 class=\"display-4\">" + List[i].ParagraphTitle + "</h1>" +
                                    "<img src=\"../Images/imges 2/" + List[i].ImagePath + ".jpg\" class=\"rounded\" style=\"" + List[i].Style + "\">" +

                                    "<p class=\"lead\">" + List[i].History +
                        "</p>";
                    }

                }
            }

            $("#mySpinner1").addClass("d-none");
            $("#historyJombotrons").append(histoJumbotrons);

            
        }
    });

});