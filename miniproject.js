const prompt = require('prompt-sync')();
console.log("Bienvenue dans la calculatrice");
function add(a, b) {
    return a + b;
}
function Soustraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    if (b === 0) {
        return "Erreur : division par zéro !";
    }
    return a / b;
}
function Puissance(a, b) {
    return Math.pow(a, b);
}
function Racinecarree(a) {
    if (a < 0) {
        return "Erreur : racine d’un nombre négatif !";
    }
    return Math.sqrt(a);
}
function Factorielle(a) {
    if (a < 0 || !Number.isInteger(a)) {
        return "Erreur : factorielle non définie pour les nombres négatifs ou décimaux.";
    }
    let resultat = 1;
    for (let i = 1; i <= a; i++) {
        resultat *= i;
    }
    return resultat;
}


function menu() {
    console.log("\n===== MENU =====");
    console.log("1. Addition (+)");
    console.log("2. Soustraction (-)");
    console.log("3. Multiplication (*)");
    console.log("4. Division (/)");
    console.log("5. Puissance (^)");
    console.log("6. Racine carrée");
    console.log("7. Factorielle");
    console.log("8. Historique des calculs");
    console.log("0. Quitter");

    let choice = Number(prompt("Choisissez une option (0-8) : "));
    let a, b, resultat;

    switch (choice) {
        case 0:
            console.log("Au revoir !");
            process.exit(); 
            break;

        case 1:
            a = parseFloat(prompt("Entrez le premier nombre : "));
            b = parseFloat(prompt("Entrez le deuxième nombre : "));
            resultat = add(a, b);
            console.log("Résultat :", resultat);
            break;

        case 2:
            a = parseFloat(prompt("Entrez le premier nombre : "));
            b = parseFloat(prompt("Entrez le deuxième nombre : "));
            resultat = Soustraction(a, b);
            console.log("Résultat :", resultat);
            break;

        case 3:
            a = parseFloat(prompt("Entrez le premier nombre : "));
            b = parseFloat(prompt("Entrez le deuxième nombre : "));
            resultat = multiplication(a, b);
            console.log("Résultat :", resultat);
            break;

        case 4:
            a = parseFloat(prompt("Entrez le numérateur : "));
            b = parseFloat(prompt("Entrez le dénominateur : "));
            resultat = division(a, b);
            console.log("Résultat :", resultat);
            break;

        case 5:
            a = parseFloat(prompt("Entrez la base : "));
            b = parseFloat(prompt("Entrez l'exposant : "));
            resultat = Puissance(a, b);
            console.log("Résultat :", resultat);
            break;

        case 6:
            a = parseFloat(prompt("Entrez un nombre : "));
            resultat = Racinecarree(a);
            console.log("Résultat :", resultat);
            break;

        case 7:
            a = parseFloat(prompt("Entrez un entier positif : "));
            resultat = Factorielle(a);
            console.log("Résultat :", resultat);
            break;

        case 8:
         
            resultat = undefined;
            break;

        default:
            console.log(" Option invalide. Veuillez choisir entre 0 et 8.");
            resultat = undefined;
    }
    return resultat;
}

let historique = [];
let decision;

do {
    const menu_result = menu();

    if (menu_result !== undefined && typeof menu_result !== "string") {
        historique.push(menu_result);
    }

    decision = prompt("Voulez-vous continuer ? (yes/no) : ");
} while (decision.toLowerCase() === "yes");


console.log("Historique des calculs :");
if (historique.length === 0) {
    console.log("Aucun calcul effectué.");
} else {
    for (let i = 0; i < historique.length; i++) {
        console.log(`${i + 1}. Résultat : ${historique[i]}`);
    }
}
