var bouton1= document.getElementById("Id_btn1");
bouton1.addEventListener("click",clickbtn1);

function clickbtn1(){

    var Nom = prompt("Saisir votre nom");
    if(Nom==null){
        alert("Annuler");
        return;
    }
    var Prenom = prompt("Saisair votre prénom");
if (Prenom==null){
    alert("Annuler");
    return;
}

    alert("voici ce que vous avez saisi :\n\nvotre Nom :"+Nom+"\nvotre prenom :" +Prenom);

}
function clickbtn2(){

    var nombre = prompt ("Saisir deux nombre")
    if(nombre==null){
        alert("Annuler");
        return;
    }
}
