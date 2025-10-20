const entreprise = {
  adresse:{
    rue: "34 rue de roi", ville: "Paris",codePostal: 1234 }
};

console.log(entreprise.adresse.ville);


const produits = [
  { nom: "Clavier", prix: 60, quantite: 19 },
  { nom: "Souris", prix: 27, quantite: 14 },
  { nom: "Écran", prix: 159, quantite: 5 }
];

let valeurTotale = 0;


for (let i = 0; i < produits.length-1; i++) {
  
   valeurTotale += produits[i].prix * produits[i].quantite;
}

console.log("Valeur totale en stock :", valeurTotale);

class Animal {
  constructor(nom, type) {
    this.nom = nom;
    this.type = type;
  }

  parler() {
    console.log(this.nom + " he did noise.");
  }
}

const chien = new Animal("kams", "Chien");
chien.parler();
