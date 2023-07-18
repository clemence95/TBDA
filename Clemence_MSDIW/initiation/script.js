console.log('connecté !');
/*document.getElementById('titre').style.color = "green"; */
/* Selection de l'élément à partir de son id puis accès à la propriété color et enfin la nouvelle valeur (green) */
/* document.getElementById('titre') */
/* const titre = document.getElementById('titre'); */
/* Mise en place de l'élément dans une mémoire temporaire appelée ici "titre" */
/* ATTENTION il ne peut pas y avoir deux variables du même nom */
/* titre.style.color = "green" */
/* deux façons d'initialiser (de créer) une variable : let et const. */
/* let = une veriable qui doit changer de valeur ET const une variable qui ne doit pas changer de valeur */
let titre = document.getElementById('titre');
titre.style.color = "green";
titre = 2;
console.log(titre);
