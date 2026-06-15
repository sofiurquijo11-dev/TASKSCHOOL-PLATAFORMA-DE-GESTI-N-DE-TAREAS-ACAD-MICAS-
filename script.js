let tareas = [];

function agregarTarea() {
    let titulo = document.getElementById("titulo").value;
    let fecha = document.getElementById("fecha").value;

    if (titulo === "" || fecha === "") {
        alert("Completa todos los campos");
        return;
    }

    tareas.push({ titulo, fecha });
    mostrarTareas();

    document.getElementById("titulo").value = "";
    document.getElementById("fecha").value = "";
}

function mostrarTareas() {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    tareas.forEach((tarea, index) => {
        lista.innerHTML += `
        <li>
            <strong>${tarea.titulo}</strong> - ${tarea.fecha}
            <button onclick="editarTarea(${index})">Editar</button>
            <button onclick="eliminarTarea(${index})">Eliminar</button>
        </li>`;
    });
}

function eliminarTarea(indice) {
    tareas.splice(indice, 1);
    mostrarTareas();
}

function editarTarea(indice) {
    let nuevoTitulo = prompt("Editar tarea:", tareas[indice].titulo);

    if (nuevoTitulo) {
        tareas[indice].titulo = nuevoTitulo;
        mostrarTareas();
    }
}
