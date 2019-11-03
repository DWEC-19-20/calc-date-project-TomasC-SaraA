document.getElementById("boton1").addEventListener("click", function(e) {
    parseDate();
});

function parseDate() {
    var startdate = new Date(document.getElementById("startdate").value);
    var endDate = new Date(document.getElementById("endDate").value);
    if (document.getElementById("naturales").checked == true) {
        document.getElementById("resul").value = getDays(startdate, endDate);
    } else if (document.getElementById("habiles").checked == true) {
        document.getElementById("resul").value = getWorkingDays(startdate, endDate);
    }

}
document.getElementById("fechafinal").addEventListener("click", function(e) {
    parseDay();
});

function parseDay() {
    var startdate = new Date(document.getElementById("startdate").value);
    var dias = document.getElementById("numdias").value;
    if (document.getElementById("naturales").checked == true) {
        document.getElementById("resul2").value = calcDate(startdate, dias);
    } else if (document.getElementById("habiles").checked == true) {
        document.getElementById("resul2").value = calcWorkingDate(startdate, dias);
    }

}
