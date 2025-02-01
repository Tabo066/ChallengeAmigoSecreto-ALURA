// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }
    amigos.push(nombre);
    inputAmigo.value = "";
    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    let resultado = document.getElementById("resultado");
    lista.innerHTML = "";
    resultado.innerHTML = "";
    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agrega amigos antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
