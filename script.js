let alumnes = [];
//funciones
//funcion 1: validar formilario
function validarFormulari() {
    let nom = document.getElementById("nom").value;
    let examen = parseFloat(document.getElementById("examen").value);
    let practiques = parseFloat(document.getElementById("practiques").value);
    let actitud = parseFloat(document.getElementById("actitud").value);
//parseFloat convierte el valor a un número decimal, en vez de un string.
// Comprobar nombre
    if (nom === '') {
        alert('El nom no pot estar buit');
        return false;
    }
    // Comprobar notas
    if (isNaN(examen) || examen < 0 || examen > 10) {
        alert('La nota de examen ha de ser entre 0 i 10');
        return false;
    }

    if (isNaN(practiques) || practiques < 0 || practiques > 10) {
        alert('La nota de pràctiques ha de ser entre 0 i 10');
        return false;
    }

    if (isNaN(actitud) || actitud < 0 || actitud > 10) {
        alert('La nota d\'actitud ha de ser entre 0 i 10');
        return false;
    }

    return true;
}
//funcion 2: calcular media
function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("examen").value);
    let nota2 = parseFloat(document.getElementById("practiques").value);
    let nota3 = parseFloat(document.getElementById("actitud").value);
    let notamedia = (nota1 * 0.6 + nota2 * 0.3 + nota3 * 0.1);
    return notamedia.toFixed(2);
}
// Función 3: Añadir alumno
function añadirAlumno() {       
    let nom = document.getElementById("nom").value;
    let examen = parseFloat(document.getElementById("examen").value);
    let practiques = parseFloat(document.getElementById("practiques").value);
    let actitud = parseFloat(document.getElementById("actitud").value);
    let mitjana = calcularMedia();
    // Creamos el objeto alumno con los valores obtenidos
    let alumne = {
        nom: nom,
        examen: examen,
        practiques: practiques,
        actitud: actitud,
        mitjana: parseFloat(mitjana)
    };
    alumnes.push(alumne);
    mostrarAlumnes();
    // Limpiar formulario
    document.getElementById("formulariAlumne").reset();
    alert('Alumne afegit!');
}
// Función 4: Mostrar alumnos en la tabla
function mostrarAlumnes() {
    let tbody = document.getElementById("cosTaula");
    tbody.innerHTML = "";
    
    for (let i = 0; i < alumnes.length; i++) {
        let alumne = alumnes[i];
        // Decidir si aprobado o suspendido
        let estat = '';
        if (alumne.mitjana >= 5) {
            estat = 'Aprovat';
        } else {
            estat = 'Suspès';
        }
        // Crear fila
        let fila = '<tr>';
        fila += '<td>' + alumne.nom + '</td>';
        fila += '<td>' + alumne.examen.toFixed(2) + '</td>';
        fila += '<td>' + alumne.practiques.toFixed(2) + '</td>';
        fila += '<td>' + alumne.actitud.toFixed(2) + '</td>';
        fila += '<td>' + alumne.mitjana.toFixed(2) + '</td>';
        fila += '<td>' + estat + '</td>';
        fila += '</tr>';
        tbody.innerHTML += fila;
    }
}
// Función 5: Ordenar alumnos
function ordenarAlumnes(ordre) {
    if (ordre === 'asc') {
        alumnes.sort(function(a, b) {
            return a.mitjana - b.mitjana;
        });
    } else {
        alumnes.sort(function(a, b) {
            return b.mitjana - a.mitjana;
        });
    }
    mostrarAlumnes();
}
// ===== EVENT LISTENERS =====
document.getElementById('formulariAlumne').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validarFormulari()) {
        añadirAlumno();
    }
});
document.getElementById('ordenarAsc').addEventListener('click', function() {
    ordenarAlumnes('asc');
});
document.getElementById('ordenarDesc').addEventListener('click', function() {
    ordenarAlumnes('desc');
});