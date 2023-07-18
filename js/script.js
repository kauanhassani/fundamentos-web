function helloWorld(){
    alert("Hello World")
}

/* 
    VAR= Escopo global, pode ser usada em qualquer lugar do arquivo
    LET= Escopo local, 
    CONST= Constate escopo global
*/

let nome = document.getElementById("nome")

function enviar(){
    alert("Olá "+ nome.value)
}