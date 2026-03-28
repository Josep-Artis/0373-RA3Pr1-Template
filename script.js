let alumnes = [];
function calcularMitjana() {
    let nom = document.getElementById("nom").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    return (nota1 * 0.6 + nota2 * 0.3 + nota3 * 0.1);
}
function afegirAlumne() {
    let nom = document.getElementById("nom").value;
    let mitjana = calcularMitjana();
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
