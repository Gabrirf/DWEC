
 function iniciar1(contador1){
  
    var contador1 = 0; 
    document.getElementById("boton1").onclick = function(){
       contador1++;
       document.getElementById("mostrar1").innerHTML = contador1;
    }
 }


function iniciar2 (contador2) {
    var contador2 = 0;
    document.getElementById("boton2").onclick = function () {
        contador2++;
        document.getElementById("mostrar2").innerHTML = contador2;    
    }
}

 function iniciar3(contador3) {
    var contador3 = 0;
    document.getElementById("boton3").onclick = function () {
        contador3++;
        document.getElementById("mostrar3").innerHTML = contador3;   
    }
}

function reset(){
    this.contador1 = 0;
    this.contador2 = 0;
    this.contador3 = 0;
}

