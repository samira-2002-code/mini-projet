const prompt = require("prompt-sync")();
let tache =[];
let idCounter =1;
let choix= "";


function afficherMenu(){
    function ajouterUnetache(){
        const description = prompt("Enter the description of a task : ");
        let choix= ""; 
        const nouvelleTache={
            Id:idCounter++,
            description:description,
            isDone:false
        };

        touches.push(nouvelleTache),
        console.log("task added !");
    }
    
    
} 

function ajouterTacher(){
    if(tache.length===0){
        console.log("no task for the moment");
    }else{
        console.log("list des taches");
        for(let t of tache){
            const statut=t.isDone?"complete":"pending"
            console.log(`${t.id}`)

        }
    }

}








