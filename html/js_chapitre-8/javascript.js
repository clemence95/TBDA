var prenom="prenom"; //type "chaine"
i = 0
while(prenom!="") // boucle while(condition vraie)
{// Si la condition (prenom strictement égale à "" Alors;)
    prenom=prompt("Entrez le prenom N°"+i);//Demande prenom n°1 à l'utilisateur
    i++; //(i=0)+(i=0) à chaque fois qu'un prenom est saisi
    console.log(i+prenom);// Afficher sur la console log
    if(prenom==null){// mais si prenom est égale à null alors
        alert("Annuler");
        break;
    }
}

