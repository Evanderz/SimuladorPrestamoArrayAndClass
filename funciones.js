const calculoParaSacarValorCuota = (montoPrestamo, numeroOpciones, tasaInteresAnual) => { return ((montoPrestamo * (tasaInteresAnual * (numeroOpciones / 12))) / 100 + montoPrestamo) / numeroOpciones }
const mensajePlan = mensajeMostrar => alert(`Su prestamo de $${montoPrestamo} en ${numeroOpciones} cuotas con un TNA del ${tasaInteresAnual}% le da una valor de cuota de $${parseInt(calculoParaSacarValorCuota(montoPrestamo, numeroOpciones, tasaInteresAnual))} `)
const mensajeInvalido = mensajeMostrar => alert("Comando Invalido");

function seleccionarPlan() {


    let mailUsuario;
    let nombreUsuario;
    let apellidoUsuario;
    let telefonoUsuario;
    let validadorUsuario;
    let validadorVolver;
    let confirmarSeleccion;

    confirmarSeleccion = prompt("Ingrese 1 para seleccionar este plan, 2 para volver a elegir la cantidad de cuotas, 3 para ir al inicio o 4 para salir");

    while (validadorUsuario != "y") {

        validadorUsuario = "n";

        switch (confirmarSeleccion) {

            case "1":

                validadorVolver = prompt("Ingrese 1 para ingresar su informacion o ingrese 2 para volver al paso anterior");

                if (validadorVolver == "2") {

                    validadorUsuario = "y";

                } else if (validadorVolver == "1") {

                    alert("Por favor ingresa los sigueintes datos:")
                    nombreUsuario = prompt("Ingrese su nombre por favor");
                    apellidoUsuario = prompt("Ingrese su apellido por favor");
                    mailUsuario = prompt("Ingrese su mail por favor");
                    telefonoUsuario = prompt("Ingrese su numero de telefono por favor");

                    validadorUsuario = prompt(`Los datos ingresados son los siguiente:
                    \nNombre: ${nombreUsuario}
                    \nApellido: ${apellidoUsuario}
                    \nMail: ${mailUsuario}
                    \nTelefono: ${telefonoUsuario}
               
                    \nSi la informacion es correcta presione "y" para que en un plazo de 48hs nos comuniquemos
                    \nEn caso de querer volver a ingresar su informacion presione "n"`).toLowerCase();

                    switch (validadorUsuario) {

                        case "y":

                            alert(`Sr/Sra: ${nombreUsuario} ${apellidoUsuario} gracias por confiar en nosotros y nos comunicaremos con usted dentro de un plazo de 48hs habiles.`)

                            validadorUsuario = "y";
                            validadorPlan = 1;
                            presupuestoCliente = "ESC";
                            
                            idUsuario = (acumuladoClientes[acumuladoClientes.length-1].idCliente)+1



                            break;

                        case "n":
                            validadorUsuario = "n";
                            break;

                        default:

                            mensajeInvalido();
                            validadorUsuario = "n";
                            break;
                    }
                } else {

                    mensajeInvalido();
                    validadorUsuario = "n";

                }

                break;

            case "2":
                   
                calculoMontoCuotas();

                break;

            case "3":
                validadorPlan = 1;
                validadorUsuario = "y";
                presupuestoCliente = "NOESC"
                break;

            case "4":
                validadorPlan = 1;
                validadorUsuario = "y";
                presupuestoCliente = "ESC";
                break;

            default:
                mensajeInvalido();
                validadorUsuario = "y";
                break;

        }
    }

    class DatosCliente{

        constructor (idCliente,nombreCliente,apellidoCliente,mailCliente,telefonoCliente,montoPrestamoCliente,montoCuotaCliente,cantidadCuotaCliente){

              this.idCliente = idCliente;
              this.nombreCliente = nombreCliente;
              this.apellidoCliente = apellidoCliente;
              this.mailCliente = mailCliente;
              this.telefonoCliente = telefonoCliente;
              this.montoPrestamoCliente = montoPrestamoCliente;
              this.montoCuotaCliente = montoCuotaCliente;
              this.cantidadCuotaCliente = cantidadCuotaCliente;

        }
        

 }

 acumuladoClientes.push(new DatosCliente(idUsuario,nombreUsuario,apellidoUsuario,mailUsuario,telefonoUsuario,montoPrestamo,calculoParaSacarValorCuota(montoPrestamo, numeroOpciones, tasaInteresAnual),numeroOpciones))

 preguntarSiEsUsuario = "SALIR"


}


function calculoMontoCuotas() {

    while (validadorPlan != 1) {
        numeroOpciones = prompt(`Su presupuesto es ${categoriaPresupuesto}  puede acceder a un prestamo de $${montoPrestamo} seleccione entre 12, 24, 36, 48 y 60 cuotas para ver los planes: `);
        numeroOpciones = parseInt(numeroOpciones);


        switch (numeroOpciones) {

            case 12:
                mensajePlan();
                seleccionarPlan();
                break;

            case 24:
                mensajePlan();
                seleccionarPlan();
                break;

            case 36:
                mensajePlan();
                seleccionarPlan();
                break;

            case 48:
                mensajePlan();
                seleccionarPlan();
                break;

            case 60:
                mensajePlan();
                seleccionarPlan();
                break;

            default:
                mensajeInvalido();
                break;
        }
    }

}



