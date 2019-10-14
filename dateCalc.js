

/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcDate(startdate, days) { 
  var startdate=new Date();
  var days=parseInt(days);
  var dias=startdate.getDate();
    dias=dias+days;
  var mes=startdate.getMonth();
  var año=startdate.getFullYear();
    max=0;
  switch(mes){
    case 0:
      case 2:
        case 4:
          case 6:
            case 7:
              case 9:
                case 11:
                  max=31;
                  break;
                  case 1:
                    if(año%4==0 && año%100!=0){
                      max=29;
                    }
                    else{
                      max=28;
                    }
                    break;
                    case 3:
                      case 5:
                        case 8:
                          case 10:
                            max=30;
                            break;
                            default:
                              break;
  }
  if(dias >max){
    dias=dias -max;
    mes++;
    if(mes >11){
      mes =11;
      año++;
    }
  }
  finalDate=new Date(año,mes,dias);
 
  return finalDate.toLocaleDateString("es-ES");
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

/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcWorkingDate(startdate, days) { 
  return new Date().toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas*/
function getWorkingDays(startdate, endDate) {
   return 0;
}

