/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcDate(startdate, days) {
  return new Date().toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días naturales que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días naturales entre las dos fechas
*/
function getDays(startdate, endDate) {
  return 0;
}

/*Tom*/

/*días hábiles son las fechas que no caen en uno de los siguientes días: fines de semana, 1 enero, 6 enero, 1 mayo ,15 agosto, 12 octubre, 1 noviembre 6 diciembre, 8 diciembre y 25 diciembre*/

/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcWorkingDate(startdate, days) {
  return new Date().toLocaleDateString("es-ES");
}

var hoy = new Date();

// Nuestro método para sumar n dias (que no sean ni Sábado ni Domingo)
Date.prototype.sumarLaborables = function (n) {
  for (var i = 0; i < n; i++) {
    this.setTime(this.getTime() + 24 * 60 * 60 * 1000);
    if ((this.getDay() == 6) || (this.getDay() == 0)) // sábado o domingo
      i--; // hacemos el bucle una unidad mas larga.
  }
  return this;
}
// COMPLETAMOS CON CEROS A LA IZQUIERDA AQUELLOS VALORES QUE LO NECESITEN PARA VERLOS BONITOS
Date.prototype.getXXXzeroFilled = function (propiedad) {
  var dev = this["get" + propiedad]();
  if ((propiedad == "Milliseconds") && (dev < 100) && (dev > 9)) dev = "0" + dev;
  else if (dev < 10) dev = (propiedad == "Milliseconds") ? "00" : "0" + dev;
  return dev.toString();
}
var dia = startdate.getDays();
var mes = startdate.getMonth();
var anno = startdate.getFullYear();



/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas*/
function getWorkingDays(startdate, endDate) {
  return 0;
}