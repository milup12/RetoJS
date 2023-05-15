
function mayorArray(lista){


    if (lista.length==0){
        return null;
    }else{
        if (lista.length==1){
            return lista[0];
        }
    
        if (lista.length>1){

            var j=0; //contador del index o posicion
    
            while(j<lista.length){ //mientras contador sea menor a la cantidad de elememntos que hay en la lista
                console.log(lista[j]); //me imprima los elementos
                j++; //vaya actualizando el contador 
            }       
            
            var mayornum = lista[0]; // por el momento el numero mayor se ubica en la posicion 0
           
            for (let i=0; i<lista.length; i++){
                if(lista[i]>mayornum){ //si algun elemento de la lista (que va pasando uno tras otro) es mayor que nuestra posicion 0, se va actualizando hasta que 
                    //encuentre el numero mayor comparado
                  
                    mayornum=lista[i]; //actualiza la variable mayornum
                }
            }
    
            var x=0;
            var xcontadorImpar=0;
    
            do{
             
                
                if(lista[x]%2==1){
    
                      
                    console.log("El numero: " + lista[x] + " Es impar");
                     x++;
                     xcontadorImpar++;
    
                }else{
                   console.log("El numero:" + lista[x] + " Es par");
                   x++; 
                   
                }
                
    
            }while(x<lista.length); 
    
            
         return "El numero mayor es: " + mayornum + " y el numero de impares dentro de la lista es: " + xcontadorImpar;
        }
    }       
    
}

console.log(mayorArray([3,2,3,4,5,6,7,8]));



// function sumar(a,b){

//     return(a+b);
// }

// console.log(sumar(5,8));
// console.log(sumar(10,5));