// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];




const select = document.getElementById("opciones");
const otroInput = document.getElementById("otro-input")
select.addEventListener("change", function() {
    if (select.value === "otros") {
        otroInput.style.display = "block"; // Mostrar input
        otroInput.focus(); // Colocar el cursor en el input
    } else {
        otroInput.style.display = "none"; // Ocultar input
        otroInput.value = ""; // Limpiar el campo
    }
  
});


document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === " ") { // Si presiona "Enter"
        agregarAmigo(); // Llamar a la función del botón
    } else if (event.key === "Enter" ) {
        sortearAmigo();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "e") { // Si presiona "E" o "e"
        document.getElementById("amigo").focus(); // Enfocar el input
    } 
});


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


function Title() {
    let opc = document.getElementById("opciones").value;
    let otro = document.getElementById("otro-input").value;
    let titulo = document.querySelector(".main-title");
    if (opc == "otros") {
        titulo.innerHTML = otro + " secreto";
    } else {
        titulo.innerHTML = opc + " secreto";
    }
}

function sortearAmigo() {

    let opc = document.getElementById("opciones").value;
    let otro = document.getElementById("otro-input").value;

    if (amigos == '') {
        alert("No hay ni un nombre");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let li = document.querySelector("#listaAmigos")
        li.innerHTML = "";
        let res = document.querySelector("#resultado")  

        if (opc == "otros") {
            res.innerHTML = "El " + otro + " secreto es para " + amigos[indiceAleatorio];
            amigos = [];
        } else {
            res.innerHTML = "El " + opc + " secreto es para " + amigos[indiceAleatorio];
            amigos = [];
            li.innerHTML = "";
        }
    }
}


