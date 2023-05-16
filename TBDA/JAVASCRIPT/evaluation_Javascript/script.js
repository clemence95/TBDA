//Exercice 1 
let jeune = 0;
let adulte = 0;
let centenaire = 0;
let age = 0;
while (age<41){
    age = parseInt(prompt("Saisir un age"));
    if (age < 20) {
        jeune++;
    }
    else if (age >= 20 && age <= 40) {
        adulte++;
    }
}
centenaire++;
document.write("Nombre de personnes de moins de 20 ans : " + jeune + "<br>");
document.write("Nombre de personnes entre 20 et 40 ans : " + adulte + "<br>");
document.write("Nombre de personnes de plus de 40 ans : " + centenaire + "<br>");

//Exercice 2
let i = 0;
let nb = parseInt(prompt("Saisir un nombre"));
let resultat;
function TableMultiplication(x) {
    for (i = 0; i <= 10; i++) {
        resultat=(i*x);
        document.write(x+"*"+i+"="+resultat+"<br>");
    }
}
TableMultiplication(nb);

//Exercice 3 
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var prenom = prompt("Saisir un prenom");
var tab1;
document.write(prenom+"<br>");

tab1 = tab.indexOf(prenom);

while ( tab1!= -1){
    tab.splice(tab1,1);
    prenom = prompt("Saisir un prenom");
    tab1=tab.indexOf(prenom);
    tab.splice(tab1,1);
    alert("Vous avez trouvé un prenom, félicitation !");
}
console.table(tab);
document.write("Ce prénom ne se trouve pas dans la liste"+"<br>");

//Exercice 4 
let pu = prompt("Entrer un prix unitaire");
let qtecom = prompt("Entrer la quantité");
let tot = pu*qtecom;
document.write("<br>Le prix total (produit+quantité) est de :"+tot+"€<br>");

//Remise
if(tot<=100){
    rem=0
}
else if((tot>=100) &&(tot<=200)){

}
else if(tot>200){
    rem=0.1;
}
totrem = tot - (tot*rem)
document.write("Le prix(produit+quantité) avec la remise est de : "+totrem+"<br>");

//port 
let port = 0;
if(totrem>500){
    port=0;
}
else if(totrem<=500){
    port=totrem*0.2
}
else if (port<6);
port=6;
document.write("Le total de la commande: "+totrem+"€<br>"+"plus les frais de port sont de :"+port+"€<br>"+"Le total est de :"
+(port+totrem)+"€");




