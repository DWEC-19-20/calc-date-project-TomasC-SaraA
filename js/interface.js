//obtenervalores formulario

/*
document.getElementById("boton").addEventListener("click", function(e) {
    ParseDate();

});


function ParseDate() {
    var startdate = new Date(document.getElementById("startdate").value);
    var endDate = new Date(document.getElementById("endDate").value);
    document.getElementById("enviar").value = getDays(startdate, endDate);
}

document.getElementById("dias").addEventListener("click", function(e) {
    diasNat();

});

function diasNat() {
    var startdate = new Date(document.getElementById("startdate").value);
    var days = document.getElementById("days").value;
    document.getElementById("enviar").value = calcDate(startdate, days);
}
document.getElementById("dh").addEventListener("click", function(e) {
    diaHab();
});

function diaHab() {
    var startdate = new Date(document.getElementById("startdate").value);
    var days = document.getElementById("habil").value;
    document.getElementById("final").value = calcWorkingDate(startdate, days);
}
*/

document.getElementById("boton1").addEventListener("click", function (e) {
    parseDate();
});
document.getElementById("hoy").addEventListener("click", function (e) {

    fechaHoy();
});

function fechaHoy() {
    var hoy = new Date();
    document.getElementById('startdate').value = hoy.getFullYear() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getDate();
}


function parseDate() {

    var startdate = new Date(document.getElementById("startdate").value);
    var endDate = new Date(document.getElementById("endDate").value);
    if (document.getElementById("naturales").checked == true) {
        document.getElementById("resul").value = getDays(startdate, endDate);
    } else if (document.getElementById("habiles").checked == true) {
        document.getElementById("resul").value = getWorkingDays(startdate, endDate);
    }

}
document.getElementById("fechafinal").addEventListener("click", function (e) {
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