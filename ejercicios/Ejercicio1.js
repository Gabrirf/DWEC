let resultado = "";

do{
    let caracter = prompt("Introduce caracteres");

    if(resultado == ""){
        resultado = caracter;
    } else{
        resultado = resultado+"-"+caracter;
    }

}while(confirm("¿Deseas seguir?"));

document.write(resultado);