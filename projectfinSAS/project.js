const prompt = require("prompt-sync")();
let livre = [];
let IdLivre = 1;
let choise = "";
// Introduire un livre:
function IntroduireUnlivre() {

    const titre = prompt("entrez le titre du livre :");
    const année = parseInt(prompt("entrez l'année de publication :"));
    const auteur = parseInt(prompt("entrez le nom d'auteur:"));

    livre.push({ Id: IdLivre++, titre: titre, auteur: auteur, année: année, statut: true });

};

//Ajouter plusieurs livres :


function AjouterPlusieurLivre() {
    const number = parseInt(prompt("entrez le number de livre a ajouter : "));
    for (let i = 0; i < livre.length; i++) {
        console.log(`number of book ${i + 1} :`);
    };

};
//Afficher tous les livres :

function afficherToutLivre() {
    if (livre.length == 0) {
        console.log("auccun livre pour le moment ");
    } else
        console.log("list des livres ");
    for (let i = 0; i < livre.length; i++) {
        aff = livre[i];
        console.log(`id : ${aff.Id} ${aff.titre} ${aff.auteur} ${aff.lannee}. ${aff.statut}`);
    }


};

//Trier les livres par titre (ascendant/descendant):

function TrierLesLivres() {
    console.log = prompt("Trier les livres par titre : (1) Ascendant ou (2) Descendant ? ");
    livre.sort(function (a, b) {
        if (a.titre < b.titre) return -1;
        if (a.titre > b.titre) return 1;
        return 0;
    });

    for (let i = 0; i < livre.length; i++) {
        console.log(livre[i].titre);
    }


    livre.sort(function (a, b) {
        if (a.titre < b.titre) return 1;
        if (a.titre > b.titre) return -1;
        return 0
    }
    )
};

//Trier les livres par année de publication:

function trierUnlivreParannne() {

    livre.sort((a, b) => a.année - b.année);
    console.log(livre);
};

//Afficher uniquement les livres disponibles:
  

function  livredispuni(){
    if(livre.length==0){
        console.log("la bib et vide");  
    }
    for (let i = 0; i< livre.length; i++) {
      if (livre) {
        
      }
       
    }

}







function menuPrincipale() {

    while (choise !== 7) {



        console.log("===MENU===");
        console.log("1.Introduire un livre ");
        console.log("2.Ajouter plusieurs livres ");
        console.log("3.Afficher tous les livres ");
        console.log("4.Trier les livres par titre (ascendant/descendant) ");
        console.log("5. Trier les livres par année de publication ");
        console.log("6.Afficher uniquement les livres disponibles ");
        console.log("7.Rechercher un livre par ID_livre ");
        console.log("0.quiter ");
        choise = prompt("enter a choise :");

        if (choise == 0) {
            console.log("bye")
            break;
        }

        switch (choise) {

            case "1":
                IntroduireUnlivre();
                break;
            case "2":
                AjouterPlusieurLivre();
                break;
            case "3":
                afficherToutLivre();
                break;
            case "4":
                TirerUnlivre();
                break;
            case "5":
                trierUnlivreParannne()
                break;
        }



    }
}

menuPrincipale();




