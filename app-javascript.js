const listeMots = ["Cachalot", "Pétunia", "Serviette"];
let score = 0;

let continuer = true;
while (continuer) {
    let motUtilisateur = prompt("Entrez le mot (ou tapez 'stop' pour arrêter) :");

    if (motUtilisateur === "stop") {
        continuer = false;
    } else if (listeMots.includes(motUtilisateur)) {
        score++;
        console.log("Bravo !");
    } else {
        console.log("Vous avez fait une erreur de frappe, recommencez !");
    }
    console.log("Score actuel :", score);
}
console.log("Score final :", score);