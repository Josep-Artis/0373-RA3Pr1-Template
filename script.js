let alumnes = [];
//funciones
//funcion 1: validar formilario
function validarFormulari() {
    let nom = document.getElementById("nom").value;
    let examen = document.getElementById("examen").value;
    let practiques = document.getElementById("practiques").value;
    let actitud = document.getElementById("actitud").value; 
}
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
//funcion 2: calcular media
function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("examen").value);
    let nota2 = parseFloat(document.getElementById("practiques").value);
    let nota3 = parseFloat(document.getElementById("actitud").value);
    let notamedia = (nota1 * 0.6 + nota2 * 0.3 + nota3 * 0.1);
    return notamedia.toFixed(2);
}
function afegirAlumne() {
    let nom = document.getElementById("nom").value;
    let mitjana = calcularMedia();
    alumnes.push({ nom: nom, mitjana: mitjana });
    mostrarAlumnes();
}
function mostrarAlumnes() {
    let taula = document.getElementById("taulaAlumnes");
    taula.innerHTML = "<tr><th>Nom</th><th>Mitjana</th></tr>";
    alumnes.forEach(alumne => {
        let fila = `<tr><td>${alumne.nom}</td><td>${alumne.mitjana.toFixed(2)}</td></tr>`;
        taula.innerHTML += fila;
    });
}           
