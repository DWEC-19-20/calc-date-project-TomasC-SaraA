const DIA_MILISEGUNDOS = (24 * 60 * 60 * 1000);
const FESTIVOS = ["1,0", "6,0", "1,4", "15,7", "12,9", "1,10", "6,11", "8,11", "25,11"];

/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcDate(startdate, days) {
    days = parseInt(days);
    startdate.setDate(startdate.getDate() + days);
    return startdate.toLocaleDateString("es-ES");;

}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días naturales que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días naturales entre las dos fechas
*/
function getDays(startdate, endDate) {

    var dias = Math.ceil((endDate.getTime() - startdate.getTime()) / DIA_MILISEGUNDOS);

    return dias;
}

/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcWorkingDate(startdate, days) {
    contador = Math.abs(days); // pasamos dias a valor absoluto para que sirva de contador
    while (contador > 0) {
        if (days >= 0) {
            calcDate(startdate, 1); // sumamos un día a la fecha 
        } else {
            calcDate(startdate, -1); //restamos un dia a la fecha
        }


        if (esFinDeSemana(startdate)) { //Si es finde, restamos 1
            contador++;

        } else if (esDiaFiesta(startdate)) {
            contador++;
        }
        contador--;
    }
    return startdate.toLocaleDateString("es-ES");
}
/* funciones para calcular si es o no finde semana o dia festivo */

function esFinDeSemana(fecha) {

    return (fecha.getDay() == 0 || fecha.getDay() == 6);
}

function esDiaFiesta(fecha) {


    for (let i = 0; i < FESTIVOS.length; i++) {

        if ((fecha.getDate() + "," + fecha.getMonth()) == FESTIVOS[i]) {
            return true;

        }
    }
    return false;

}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas*/
function getWorkingDays(startdate, endDate) {
    if (startdate > endDate) {
        var aux;
        aux = startdate;
        startdate = endDate;
        endDate = aux;
    }

    var diasHabiles = getDays(startdate, endDate);


    while (startdate < endDate) {
        calcDate(startdate, 1);
        if (esFinDeSemana(startdate)) {
            diasHabiles--;
        } else if (esDiaFiesta(startdate)) {
            diasHabiles--;
        }

    }



    return diasHabiles;
}
