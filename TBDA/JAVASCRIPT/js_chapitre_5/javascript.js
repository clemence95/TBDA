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
var bouton2= document.getElementById("Id_btn2");
bouton2.addEventListener("click",clickbtn2);

function clickbtn2(){

    var nombre = prompt("Saisir un nombre");
    if(nombre==null){
        alert("Annuler");
        return;
    }
    var nombre2 = prompt ("Saisir un nombre");
    if(nombre==null){
        alert("Annuler");
        return;
    }
    alert("voici ce que vous avez saisi:\n\nvotre nombre :"+nombre+"\nvotre nombre2:"+nombre2+"\nvotre resultat:"+(Number(nombre)+Number(nombre2)));
}
var bouton3= document.getElementById("Id_btn3");
bouton3.addEventListener("click",clickbtn3);

 function clickbtn3(){
    var temperature = parseInt(prompt("Saisir Temperature"));
if(isNaN (temperature)){
    alert("Veuillez saisir une temperature correcte!!");
    return;
}
var fahrenheit = (temperature * 1.8) +32    
  alert("Voici ce que vous avez saisi :\n\Votre temperature en celcius : "+temperature+"\nVotre temperature en fahrenheit : "+fahrenheit); 
}


