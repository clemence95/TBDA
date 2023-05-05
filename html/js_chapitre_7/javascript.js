var nombre = prompt("Saisir un nombre");
if (nombre % 2 == 0) {
    alert("Nombre pair");
}
else {
    alert("Nombre impair");
}
var année = prompt("Saisir l'année de naissance");
if (année <= 2005) {

    alert("l'utilisateur est majeur");
}
else {
    alert("l'utilisateur est mineur");
}

var nombre = prompt("saisir un nombre entier");
var nombre2 = prompt("Saisir un nombre entier");
var opérateur = prompt("Saisir un opérateur (+,-,*(pour multiplication),/(division).");
switch (opérateur) {
    case "+": alert("voici ce que vous avez saisi:\n\nvotre nombre:"+nombre+"\nVotre nombre2:"+nombre2+"\nvotre resultat:"+(Number(nombre)+Number(nombre2)));
    break;
    case "-": alert("Voici ce que vous avez saisi:\n\nVotre nombre:"+nombre+"\nVotre nombre2:"+nombre2+"\nVotre resultat:"+(Number(nombre)-Number(nombre2)));
    break;
    case "*": alert("Voici ce que vous avez saisi:\n\nVotre nombre:"+nombre+"\nVotre nombre2:"+nombre2+"\nVotre resultat:"+(Number(nombre)*Number(nombre2)));
    break;
    case '/' : resultat=nombre/nombre2;
             if(nombre&nombre2!=0);
    else{
        alert("la division par 0 est impossible");
    }

}
