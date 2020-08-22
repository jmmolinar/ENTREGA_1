/*
  Curso: Javascript
  Estudiante: José Miguel Molina Rondón
  1era Entrega del Proyecto Final | 16-08-2020

  Se trata de un cotizador de trabajos de diseño gráfico.
  Proximamente, con el aprendizaje de éste curso se creará una nueva web
  para BRUSA en el dominio brusacrea.com

  El concepto de BRUSA contiene varias áreas y una de ellas es
  Brusa Design.  Ésta es la que coloco como logo en el index.html

  El ejercicio tiene lo solicitado para la 1era entrega:
  -HTML y CSS
  -Prompt, console, alert
  -Funciones
  -Objetos
  -Arreglos
*/

//VARIABLES GLOBALES
var logo = 0;
var papeleria = 0;
var empaque = 0;
var branding = 0;
var tipo = "";
var resultadoLogos = 0;
var resultadoPapeleria = 0;
var resultadoEmpaque = 0;
var resultadoBranding = 0;
var total = 0;


//CONSTANTES
//Precios 1 logo
const precioLogo = 30000;
//Precio de 1 combo papeleria: 100 hojas, 100 sobres, 100 tarjetas, 100 carpetas
const precioPapeleria = 120000;
//Precio de 1 combo empaque: 100 cajas impresas con el logo
const precioEmpaque = 200000;
//Precio de 1 combo branding: 10 gorras, 10 boligrafos, 10 libretas
const precioBranding = 60000;
//Descuento del 10%
const descuento = 0.90;
//Impuesto 19%
const iva = 0.19;

//FUNCION PARA SOLICITAR LOGOTIPO
//Se invoca en el botón Solicitar de Logotipo
function solicitarLogo(){
    tipo = "LOGOTIPO";
    logo = parseInt(prompt("DISEÑO DE LOGOTIPO\n\nPrecio unitario: " + precioLogo + " CLP\nDescuento del 10% para cantidades superiores a 1 logo\n\nIngrese la cantidad:"));
    noEsNumero(logo,tipo);
    resultadoLogos = calculos(logo,tipo,precioLogo,resultadoLogos);
    return resultadoLogos;
}

//FUNCION PARA SOLICITAR PAPELERIA
//Se invoca en el botón Solicitar de Papelería
function solicitarPapeleria(){
    tipo = "Combos de PAPELERÍA";
    papeleria = parseInt(prompt("COMBO DE PAPELERÍA: 100 hojas, 100 sobres, 100 tarjetas, 100 carpetas con logo impreso\n\nPrecio por combo: " + precioPapeleria + " CLP\nDescuento del 10% para cantidades superiores a 1 combo\n\nIngrese la cantidad:"));
    noEsNumero(papeleria,tipo);
    resultadoPapeleria = calculos(papeleria,tipo,precioPapeleria,resultadoPapeleria);
    return resultadoPapeleria;
}

//FUNCION PARA SOLICITAR EMPAQUE
//Se invoca en el botón Solicitar de Empaque
function solicitarEmpaque(){
    tipo = "Combos de EMPAQUE";
    empaque = parseInt(prompt("COMBO DE EMPAQUE: 100 cajas con logo impreso\n\nPrecio por combo: " + precioEmpaque + " CLP\nDescuento del 10% para cantidades superiores a 1 combo\n\nIngrese la cantidad:"));
    noEsNumero(empaque,tipo);
    resultadoEmpaque = calculos(empaque,tipo,precioEmpaque,resultadoEmpaque);
    return resultadoEmpaque;
}

//FUNCION PARA SOLICITAR BRANDING
//Se invoca en el botón Solicitar de Branding
function solicitarBranding(){
    tipo = "Combos de Branding";
    branding = parseInt(prompt("COMBO DE BRANDING: 10 gorras, 10 boligrafos, 10 libretas con logo impreso\n\nPrecio por combo: " + precioBranding + " CLP\nDescuento del 10% para cantidades superiores a 1 combo\n\nIngrese la cantidad:"));
    noEsNumero(branding,tipo);
    resultadoBranding= calculos(branding,tipo,precioBranding,resultadoBranding);
    return resultadoBranding;
}

//OBJETO COTIZACION
function Cotizacion(cantLogo,cantPapeleria,cantEmpaque,cantBranding){
    this.cantLogo = cantLogo;
    this.cantPapeleria = cantPapeleria;
    this.cantEmpaque = cantEmpaque;
    this.cantBranding = cantBranding;


    //COMPONENTES DEL OBJETO COTIZACION
    this.composicion = function(){
        console.log("\n\nMi cotización finalmente se compuso de: "+
        "\n"+ cantLogo + " logotipos"+
        "\n"+ cantPapeleria + " Combos de papelería"+
        "\n"+ cantEmpaque + " Combos de empaque"+
        "\n"+ cantBranding + " Combos de branding");
    }

    //METODO PERTENECIENTE AL OBJETO PARA CALCULAR EL VALOR DE LA COTIZACION
    //Se invoca al hacer clic en el boton Cotizar del index.html
    //Utiliza componentes del mismo objeto y datos de las otras funciones
    //como los resultados de cada solicitud por ejemplo
    this.cotizar = function() {

        total = resultadoLogos + resultadoPapeleria + resultadoEmpaque + resultadoBranding;
        totalIva = total + (total*iva);


        console.log("\n\nCOTIZACIÓN FINAL\n\nLOGOS | Cantidad: " + cantLogo + " / Subtotal: " + resultadoLogos + " CLP"+
                                "\nCOMBOS DE PAPELERÍA | Cantidad: " + cantPapeleria  + " / Subtotal: " + resultadoPapeleria + " CLP"+
                                "\nCOMBOS DE EMPAQUE | Cantidad: " + cantEmpaque + " / Subtotal: " + resultadoEmpaque + " CLP"+
                                "\nCOMBOS DE BRANDING | Cantidad: " + cantBranding + " / Subtotal: " + resultadoBranding+ " CLP"+
                                "\n\nTOTAL: " + total + " CLP"+
                                "\nTOTAL + IVA (19%): " + totalIva + " CLP"+
                                "\n\nARREGLO RESUMEN DE CANTIDADES: " + arregloResumenCantidades());
                                
        alert("COTIZACIÓN FINAL\n\nLOGOS | Cantidad: " + cantLogo + " / Subtotal: " + resultadoLogos + " CLP"+
                                "\nCOMBOS DE PAPELERÍA | Cantidad: " + cantPapeleria + " / Subtotal: " + resultadoPapeleria + " CLP"+
                                "\nCOMBOS DE EMPAQUE | Cantidad: " + cantEmpaque + " / Subtotal: " + resultadoEmpaque + " CLP"+
                                "\nCOMBOS DE BRANDING | Cantidad: " + cantBranding + " / Subtotal: " + resultadoBranding+ " CLP"+
                                "\n\nTOTAL: " + total + " CLP"+
                                "\nTOTAL + IVA (19%): " + totalIva + " CLP"+
                                "\n\nARREGLO RESUMEN DE CANTIDADES: " + arregloResumenCantidades());

    }


}


//FUNCION QUE INSTANCIA AL OBJETO Y CALCULA EN ÉL LA COTIZACION FINAL
//Es llamado en el botón Cotizar del HTML
function totalCotizacion(){
    //INSTANCIA DEL OBJETO COTIZACION
    //Se utiliza para invocar el método cotizar() del Objeto en el botón Cotizar del index.html
    var miCotizacion = new Cotizacion(logo,papeleria,empaque,branding);
    miCotizacion.cotizar();
    miCotizacion.composicion();
}

//ARREGLO RESUMEN DE CANTIDADES SOLICITADAS
function arregloResumenCantidades(){
    var partesCotizacion = [];
    partesCotizacion.push("Logotipos: " + logo);
    partesCotizacion.push("Combo Papeleria: " + papeleria);
    partesCotizacion.push("Combo Empaque: " + empaque);
    partesCotizacion.push("Combo Branding: " + branding);
    partesCotizacion = partesCotizacion.join(" / ");
    return partesCotizacion;
}


//VALIDAR NUMERO
function noEsNumero(numero,tipo){
    //si no es numero ó si es menor que cero, indica al cliente solicitar de nuevo
    if(isNaN(numero) || numero < 0){
        alert("Debes ingresar una Cantidad de " + tipo + " válido\nHaz una nueva solicitud");
    }
}


//FUNCION PARA CALCULAR EL COSTO DE LAS SOLICITUDES
//Es invocada por las 4 funciones de solicitudes de logotipo, papeleria, empaque y branding
//Se aplican descuentos para solitudes mayores a 1
function calculos(cantidad,tipo,precio,resultado){
    if(cantidad == 1 || cantidad == 0){
        resultado = cantidad*precio;
        console.log("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " CLP");
        alert("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " CLP");
    }
    if(cantidad > 1){
        resultado = cantidad*(precio*descuento);
        console.log("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " CLP");
        alert("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " CLP");
    }
    return resultado;
}

