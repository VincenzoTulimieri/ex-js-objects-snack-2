// Snack 1
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // Double Cheese Burger
console.log(secondBurger.name ); // Double Cheese Burger

/* 
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Viene stampato in console la chiave Name con scritto Double Cheese Burger

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
é stato creato un solo oggetto e cambiato solo la reference 
*/ 

// Snack 2
const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // salad
console.log(secondBurger.ingredients[0]); // salad


/*
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Viene stampato ad entrambi in console la chiave Name con valore Salad che viene cambiato ad entrembi gli array dentro gli oggetti

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
Sono stati creati 2 oggetti dove secondBurgher è la copia con spreed di hamburger
*/ 
