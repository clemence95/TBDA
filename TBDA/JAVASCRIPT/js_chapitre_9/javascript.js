//Exercice 1
var cube = prompt("ecrire un nombre");
var calc = prompt("ecrire un multiplicateur");
resultat1 = Number(cube) * Number(cube) * Number(cube)
resultat2 = Number(cube) * Number(calc);
document.getElementById("cube").innerHTML = ("Le cube de "+cube+" est égal à : "+resultat1);
document.getElementById("calcule").innerHTML = ("le produit de "+cube+" x "+calc+" est égal à : "+resultat2);

function produit(cube, calc){

}

function afficheImg(img){
var imagejavascript = document.createElement("img");
imagejavascript.src ="/home/stagiaire/Bureau/Travaux_TBDA/html/js_chapitre_9/papillon.png";
document.body.appendChild(imagejavascript);
}
afficheImg("/home/stagiaire/Bureau/Travaux_TBDA/html/js_chapitre_9/papillon.png");

//Exercice 2
function strtok(str1, str2, n){
    var phrase = str1.split(str2);
    console.log(phrase[n]);
}
str1 = "robert ;dupont ;amiens ;80000"
strtok(str1, ";", 2);
