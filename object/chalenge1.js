const voiture={
    marque:"toyota",
    Modele:"corola",
    annee:2020,
}

console.log(voiture.marque);
console.log(voiture.annee);

voiture.annee=2024;
console.log(voiture);

voiture.couleur="rouge";
console.log(voiture);

delete voiture.Modele;
console.log(voiture);



