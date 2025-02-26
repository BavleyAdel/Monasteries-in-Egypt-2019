$(document).ready(function () {
    $("#cards").fadeOut();

    $("#mySpinner").removeClass("d-none");
    GetAllFunction();

});

function GetAllFunction() {

    $.ajax({
        url: "http://localhost:2061/api/Monastery/GetAll",
        method: "GET",
        contentType: "application/json",
        success: function (list) {
            drawingFunction(list);
        }
    });
}

function drawingFunction(list) {

    for (var i = 0; i < list.length; i = i + 3) {
        var cardGroupDiv = "<div class=\"card-group\">"

        for (var j = 0; j < 3 && (i + j) < list.length; j++) {
            if (list[i + j].Description === null && list[i + j].Town !== null) {
                cardGroupDiv = cardGroupDiv + "<div class=\"col-lg-4\">  <div class=\"card\">" +
               "<a onclick=\"saveLocalStorage(" + list[i + j].Id + ")\" href=\"#\"><img src = \"../Images/Images/" + list[i + j].ImagePath + ".jpg\" class=\"card-img-top\"></a>" +
               "<div class=\"card-body\">" +
               "<a onclick=\"saveLocalStorage(" + list[i + j].Id + ")\" href=\"#\"><h5 class=\"card-title\">" + list[i + j].Name + "</h5></a>" +
               "</div>" +
               "<div class=\"card-footer\">" +
               "<small class=\"text-muted\">" + list[i + j].CityName + " " + "-" + " " + list[i + j].Town + "</small>" +
               "</div>" +
               "</div></div>";
            }
            else if (list[i + j].Description !== null && list[i + j].Town === null) {
                cardGroupDiv = cardGroupDiv + "<div class=\"col-lg-4\"> <div class=\"card\">" +
               "<a onclick=\"saveLocalStorage(" + list[i + j].Id + ")\" href=\"#\"><img src = \"../Images/Images/" + list[i + j].ImagePath + ".jpg\" class=\"card-img-top\"></a>" +
               "<div class=\"card-body\">" +
               "<a onclick=\"saveLocalStorage(" + list[i + j].Id + ")\" href=\"#\"><h5 class=\"card-title\">" + list[i + j].Name + "</h5></a>" +
               "<p class=\"card-text\">" + list[i + j].Description + "</p>" +
               "</div>" +
               "<div class=\"card-footer\">" +
               "<small class=\"text-muted\">" + list[i + j].CityName + "</small>" +
               "</div>" +
               "</div></div>";
            }
            else if (list[i + j].Description === null && list[i + j].Town === null) {
                cardGroupDiv = cardGroupDiv + "<div class=\"col-lg-4\"><div class=\"card\">" +
               "<a onclick=\"saveLocalStorage(" + list[i + j].Id + ")\" href=\"#\"><img src = \"../Images/Images/" + list[i + j].ImagePath + ".jpg\" class=\"card-img-top\"></a>" +
               "<div class=\"card-body\">" +
               "<a onclick=\"saveLocalStorage(" + list[i + j].Id + ")\" href=\"#\"><h5 class=\"card-title\">" + list[i + j].Name + "</h5></a>" +
               "</div>" +
               "<div class=\"card-footer\">" +
               "<small class=\"text-muted\">" + list[i + j].CityName + "</small>" +
               "</div>" +
               "</div></div>";
            }
            else {
                cardGroupDiv = cardGroupDiv + "<div class=\"col-lg-4\"><div class=\"card\">" +
               "<a onclick=\"saveLocalStorage(" + list[i + j].Id + ")\" href=\"#\"><img src = \"../Images/Images/" + list[i + j].ImagePath + ".jpg\" class=\"card-img-top\"></a>" +
               "<div class=\"card-body\">" +
               "<a onclick=\"saveLocalStorage(" + list[i + j].Id + ")\" href=\"#\"><h5 class=\"card-title\">" + list[i + j].Name + "</h5></a>" +
               "<p class=\"card-text\">" + list[i + j].Description + "</p>" +
               "</div>" +
               "<div class=\"card-footer\">" +
               "<small class=\"text-muted\">" + list[i + j].CityName + " " + "-" + " " + list[i + j].Town + "</small>" +
               "</div>" +
               "</div></div>";

            }
        }
        cardGroupDiv = cardGroupDiv + "</div>";

        $("#cards").append(cardGroupDiv);
        $("#cards").fadeIn();

        $("#mySpinner").addClass("d-none");
    }
}

function saveLocalStorage(id) {
    window.localStorage.setItem("MonasteryId", id);
    window.location.href = "Monastery_of_Saint_Bishoy.html";
}

function SearchFunction() {
    var searchVal = $("#mySearch").val();
    $("#cards").empty();
    $("#mySpinner").removeClass("d-none");

    if (searchVal !== '') {
        $("#cards").fadeOut();

        $.ajax({
            url: "http://localhost:2061/api/Monastery/GetSearchMonastery",
            contentType: "application/json",
            method: "Get",
            data: { 'SearchVal': searchVal },
            success: function (result){
                if (result.length !== 0) {
                    drawingFunction(result);
                    
                    if (!$("#noData").hasClass("d-none")) {
                        $("#noData").addClass("d-none");
                    }
                }
                else{
                    $("#noData").removeClass("d-none");
                    $("#mySpinner").addClass("d-none");

                }
            }
        });
    }
    else {
        if (!$("#noData").hasClass("d-none")) {
            $("#noData").addClass("d-none");
        }
        GetAllFunction();
    }


}
