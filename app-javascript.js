// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
const listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]
let score = 0

let choix = prompt("Tapez 1 pour jouer avec les mots, ou 2 pour jouer avec les phrases");

while (choix !== "1" && choix !== "2")
    {
        choix = prompt("Tapez 1 pour jouer avec les mots, ou 2 pour jouer avec les phrases");
    }
if (choix == "1")
    {
        for (let i= 0 ; i < listeMots.length; i++){
    let motUtilisateur = prompt('Entrez le mot : ' + listeMots[i])
    if (motUtilisateur === listeMots[i]) {
    score++
    }
}

}
else {
    for (let i= 0 ; i < listePhrases.length; i++){
    let motUtilisateur = prompt('Entrez le mot : ' + listePhrases[i])
    if (motUtilisateur === listePhrases[i]) {
    score++
    }
}
}
// Affichage du score de l'utilisateur

if (choix == "1"){
     console.log("Votre score est de " + score + " sur "+ listeMots.length)
}else if (choix == "2")

console.log("Votre score est de " + score + " sur "+ liste.length)