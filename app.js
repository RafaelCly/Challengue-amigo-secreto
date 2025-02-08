// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTexto (element,text) {
    let a = document.getElementById(element).value;
    a.innerHTML = text;
}

function agregarAmigo() {
    let nombre = document.querySelector(".input-name").value;

    if (nombre =="") {
        alert("El campo esta vacío, ingresa un nombre")
    } else {
        document.querySelector(".input-name").value = "";
        amigos.push(nombre);
        console.log(amigos);
        ActualizarLista();
    }
}

function ActualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++) {
        l = "<li>" + amigos[i] + "</li>";
        lista.innerHTML += l;
    }
}

function sortearAmigo() {

    if (amigos == '') {
        alert("No hay ni un nombre");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let li = document.querySelector("#listaAmigos")
        li.innerHTML = "";
        let res = document.querySelector("#resultado")  
        res.innerHTML = "El amigo secreto es " + amigos[indiceAleatorio];
        amigos = [];
    }
}


