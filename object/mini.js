const prompt = require("prompt-sync")();
let tache= [];
let idCounter=1;
function afficherMunu(){

do{
console.log(" ===to do list===")
console.log("1.Afficher les tâches ");
console.log("2.Ajouter une tâche ");
console.log("3. Rechercher une tâche ");
console.log("4.Modifier une tâche");
console.log("5.Supprimer une tâche");
console.log('6. Changer le statut  tâche');

console.log("7.Quitter");
let choix=prompt("Enter un choix: ");

switch(choix){
    case "1":

      afficherUnetache();
      break;

     case "2":
       ajouterUnetache();
      break;

    case "3":
        rechercherUnetache();
      break;

    case "4":
    ModifierUnetache();
       break;

    case "5":
    SupprimerUnetache();
       break;
    case "6":
        changerStatutTache();
        break;

    case "7":
        filtrerTaches()
        break;
    default:
        console.log("aucun choix") ;   

}

}while(choix!=="7")

}
afficherMunu()
//Choisissez une option : 2   
function ajouterUnetache (){
    const description=prompt("enter the description of a task : ");
    const nouvelleTache={
        id:idCounter++,
        description:description,
        isDone:false
    };
    tache.push(nouvelleTache)
    console.log("task added successfully");
};
function afficherUnetache () {
    if(tache.length===0){
        
        console.log("no tasks for the moment ");
    }
    else{
        console.log("===show a task===");
        for(let t of tache){
             const statut = t.isDone ? "completed" : "pending";
          console.log(`${tache.id}.${tache.description}.[${isDone ? "completed":"pending"}]`);  
        }
        

    }
};

function rechercherUnetache(){
    const rechercher=prompt("enter a name for recherche : ");
    const resultat= tache.filter(tache=>
        tache.description.toLowerCase().includes(rechercher.toLowerCase()))
      if (resultat.length===0){
    console.log("no tasks found ");
}else{
    console.log("===result of a task");
     console.log(`${tache.id}.${tache.description}.[${isDone ? "completed":"pending"}]`);
}  
   
};
function ModifierUnetache(){
    const id=prompt("enter the id of the task to edit : ");
    const tache= tache.find(tache=>tache.id===id);
    if(!tache){
        console.log("no task found");
        return;
    }else{
    const nouvelleDesc = prompt("new description : ");
  tache.description = nouvelleDesc;
  console.log(" Task updated.");}
};
function SupprimerUnetache(){
    const iddelet=prompt("enter the id of the task to delete :");
    const delet=tache.find(t=>t.id===iddelet)
    if(delet){
        tache.splice(delet,1);
        console.log("task deleted :")

    }else{
        console.log("invalid task :")
    }
};
function changerStatutTache(){
    const id =prompt("enter id of task :");
    const tache=tache.find(t=>t.id===id);
    if(!tache){
        console.log(" tache non trouvee");
        return;

    };
tache.isDone=!tache.isDone,
console.log("statut update: ", tache.isDone? "completed":"pending" );
};
function filtrerTaches() {
  const choix = prompt("show completed(1) or (2) pending ? ");
  const filtres = tache.filter(t =>
    choix === "1" ? t.isDone : !t.isDone
  );

  for (let t of filtres) {
    console.log(`${tache.id}. ${tache.description} [${tache.isDone ? "completed" : "pending"}]`);
  }
};







