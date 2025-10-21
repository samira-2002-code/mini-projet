const prompt = require("prompt-sync")();
let taches = [];
let idCounter = 1;


function afficherMenu() {
  let choix = "";

  while (choix !== "8") {
    console.log("\n=== TO-DO LIST ===");
    console.log("1. Afficher les tâches");
    console.log("2. Ajouter une tâche");
    console.log("3. Rechercher une tâche");
    console.log("4. Modifier une tâche");
    console.log("5. Supprimer une tâche");
    console.log("6. Changer le statut d’une tâche");
    console.log("7. Afficher tâches terminées / en attente");
    console.log("8. Quitter");

    choix = prompt("Entrez un choix : ");

    switch (choix) {
      case "1":
        afficherTaches();
        break;
      case "2":
        ajouterTache();
        break;
      case "3":
        rechercherTache();
        break;
      case "4":
        modifierTache();
        break;
      case "5":
        supprimerTache();
        break;
      case "6":
        changerStatutTache();
        break;
      case "7":
        filtrerTaches();
        break;
      case "8":
        console.log(" Fin du programme.");
        break;
      default:
        console.log(" Choix invalide.");
    }
  }
}


function ajouterTache() {
  const description = prompt("Entrez la description d'une tâche : ");
  const nouvelleTache = {
    id: idCounter++,
    description: description,
    isDone: false
  };
  taches.push(nouvelleTache);
  console.log(" Tâche ajoutée !");
}


function afficherTaches() {
  if (taches.length === 0) {
    console.log("no task for the moment.");
  } else {
    console.log(" Liste des tâches :");
    for (let t of taches) {
      const statut = t.isDone ? "complete" : "pending";
      console.log(`${t.id}. ${t.description} [${statut}]`);
    }
  }
}


function rechercherTache() {
  const recherche = prompt("Mot-clé à rechercher : ").toLowerCase();
  const resultat = taches.filter(t => t.description.toLowerCase().includes(recherche));

  if (resultat.length === 0) {
    console.log("no task fond.");
  } else {
    console.log("Résultats :");
    for (let t of resultat) {
      const statut = t.isDone ? "complete" : "pending";
      console.log(`${t.id}. ${t.description} [${statut}]`);
    }
  }
}


function modifierTache() {
  const id = parseInt(prompt("ID de la tâche à modifier : "));
  const tache = taches.find(t => t.id === id);

  if (!tache) {
    console.log("Tâche introuvable.");
  } else {
    const nouvelleDesc = prompt("Nouvelle description : ");
    tache.description = nouvelleDesc;
    console.log("Task updated.");
  }
}


function supprimerTache() {
  const id = parseInt(prompt("ID de la tâche à supprimer : "));
  const index = taches.findIndex(t => t.id === id);

  if (index === -1) {
    console.log("Tâche introuvable.");
  } else {
    taches.splice(index, 1);
    console.log(" Tâche supprimée.");
  }
}


function changerStatutTache() {
  const id = parseInt(prompt("ID de la tâche : "));
  const tache = taches.find(t => t.id === id);

  if (!tache) {
    console.log(" Tâche non trouvée.");
  } else {
    tache.isDone = !tache.isDone;
    console.log(` Statut mis à jour : ${tache.isDone ? " terminée" : "en attente"}`);
  }
}


function filtrerTaches() {
  const choix = prompt("Afficher (1) terminées ou (2) en attente ? ");
  const filtres = taches.filter(t => choix === "1" ? t.isDone : !t.isDone);

  if (filtres.length === 0) {
    console.log("Aucune tâche trouvée.");
  } else {
    for (let t of filtres) {
      const statut = t.isDone ? " terminée" : " en attente";
      console.log(`${t.id}. ${t.description} [${statut}]`);
    }
  }
}
afficherMenu();
