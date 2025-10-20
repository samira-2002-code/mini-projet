const etudiant={
firstname:"sarah",
age:21,
sePresenter: function(){
console.log(`Bonjour, je m’appelle ${this.name} et j’ai ${this.age }  ans `)
}
}
etudiant.sePresenter()

const personne={
    firstname: "mohammed",
    age: 27,
    ville: "rabat"
};
for(let cle in personne){ 
    console.log(cle, personne[cle]);
};


const classe = {
  etudiants: ["anis", "amin", "warda"],
  afficherEtudiants: function() {
    for (let nom of this.etudiants) {
      console.log(nom);
    }
  }
};
classe.afficherEtudiants();



const livre= [
    { titre: "Le Petit Prince", auteur: "Saint-Exupéry", annee: 1943 },
     {titre: "1984", auteur: "George Orwell", annee: 1949} ,
     { titre: "L’Étranger", auteur: "Albert Camus", annee: 1942 }
    ]


for (let livre of livre) {
  console.log(livre.titre);
} 

function trouverLivre(titre) {
  for (let livre of livre) {
    if (livre.titre === titre) {
      return livre;
    }
  }
  return null; 
}
 

const employes = [
  { nom: "anis", salaire: 3000 },
  { nom: "Amin", salaire: 800 },
  { nom: "naima", salaire: 15000 }
];

const salaireEleve = employes.filter(emp => emp.salaire > 3000);

console.log("Employés avec salaire > 3000 :");



for (let emp of salaireEleve) {
  console.log(emp.nom, "-", emp.salaire);
}
function cloner(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = { nom: "anis", age: 30 };
const copie = cloner(original);
console.log("Original :", original);
console.log("Copie :", copie);


