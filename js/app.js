const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name ); // ?

/* 
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Viene stampato in console la chiave name con scritto Double Cheese Burger

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
é stato creato un solo oggetto e cambiato solo la reference 
*/ 