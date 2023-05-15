var precioBase = 100;
var descuento = 0.2;


function calcularPrecio(precioBase,descuento){
    

    console.log(calcularPrecio(precioBase,descuento));

    if(precioBase<=0 || (descuento<0 || descuento>100)){
         return ("Los valores ingresados son invalidos");
    //     console.log("Los valores ingresados son invalidos");

     }

     if(descuento==0){
        return (precioBase);
    //     console.log(precioBase)
     }
    if (descuento>0 && descuento <=100){
        var precioFinal=precioBase-(precioBase*descuento)/100;
         return ("El precio final con su descuento es: " + precioFinal);
    //     console.log("El precio final con su descuento es: " + precioFinal)

     }

     var resultado = calcularPrecio(precioBase, descuento);
console.log(resultado);

}
