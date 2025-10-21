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
        console.log(" end of programme.");
        break;
      default:
        console.log(" invalide choise.");
    }
  }
}


function ajouterTache() {
  const description = prompt("Enter the description of a task : ");
  const nouvelleTache = {
    id: idCounter++,
    description: description,
    isDone: false
  };
  taches.push(nouvelleTache);
  console.log(" task added !");
}


function afficherTaches() {
  if (taches.length === 0) {
    console.log("no task for the moment.");
  } else {
    console.log(" Liste des taches :");
    for (let t of taches) {
      const statut = t.isDone ? "complete" : "pending";
      console.log(`${t.id}. ${t.description} [${statut}]`);
    }
  }
}


function rechercherTache() {
  const recherche = prompt("enter name of reserch : ").toLowerCase();
  const resultat = taches.filter(t => t.description.toLowerCase().includes(recherche));

  if (resultat.length === 0) {
    console.log("no task fond.");
  } else {
    console.log("Resultats :");
    for (let t of resultat) {
      const statut = t.isDone ? "complete" : "pending";
      console.log(`${t.id}. ${t.description} [${statut}]`);
    }
  }
}


function modifierTache() {
  const id = parseInt(prompt("Id of task  : "));
  const tache = taches.find(t => t.id === id);

  if (!tache) {
    console.log("Task not found.");
  } else {
    const nouvelleDesc = prompt("Nouvelle description : ");
    tache.description = nouvelleDesc;
    console.log("Task updated.");
  }
}


function supprimerTache() {
  const id = parseInt(prompt("Id de la tach a supprimer : "));
  const index = taches.findIndex(t => t.id === id);

  if (index === -1) {
    console.log("Task not found.");
  } else {
    taches.splice(index, 1);
    console.log(" Task deleted.");
  }
}


function changerStatutTache() {
  const id = parseInt(prompt("Id de la tache : "));
  const tache = taches.find(t => t.id === id);

  if (!tache) {
    console.log(" Tache non trouvee.");
  } else {
    tache.isDone = !tache.isDone;
    console.log(` Statut update : ${tache.isDone ? " complete" : "pending"}`);
  }
}


function filtrerTaches() {
  const choix = prompt("show (1) complete or (2) pending ? ");
  const filtres = taches.filter(t => choix === "1" ? t.isDone : !t.isDone);

  if (filtres.length === 0) {
    console.log("Aucune tache trouvée.");
  } else {
    for (let t of filtres) {
      const statut = t.isDone ? " complete" : " pending";
      console.log(`${t.id}. ${t.description} [${statut}]`);
    }
  }
}
afficherMenu();
