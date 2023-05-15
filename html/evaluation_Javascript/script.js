//Exercice 1 
let jeune = 0; //variable age inferieur à 20
let adulte = 0; // variable supérieure ou égale à 20 et 40
let centenaire= 0; // variable suprieure à 4
let age = parseInt(prompt("Saisir un age"));
while(age<100){

if(age<20){
    jeune++;
}
else if(age>=20 && age<=40){
    adulte++;
}
else{
    centenaire++;
}
 age = parseInt(prompt("Saisir un age"));
}
centenaire++;
document.write("Nombre de personnes de moins de 20 ans : " +jeune+"<br>");
document.write("Nombre de personnes entre 20 et 40 ans : " +adulte+"<br>");
document.write("Nombre de personnes de plus de 40 ans : " +centenaire+"<br><br>");

//Exercice 2
function TableMultiplication(nombre){
var i;
for (i=0; i<=11; i++){
    resultat = 5*i;
document.write(nombre+"*"+i+"="+nombre*i);
}
}




