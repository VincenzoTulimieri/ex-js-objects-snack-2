// Snack 1
// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); // Double Cheese Burger
// console.log(secondBurger.name ); // Double Cheese Burger

/* 
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Viene stampato in console la chiave Name con scritto Double Cheese Burger

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
é stato creato un solo oggetto e cambiato solo la reference 
*/ 

// Snack 2
// const hamburger = { 
// 	name: "Cheese Burger", 
// 	weight: 250,
// 	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
// };

// const secondBurger = {...hamburger};
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // salad
// console.log(secondBurger.ingredients[0]); // salad


/*
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Viene stampato ad entrambi in console la chiave Name con valore Salad che viene cambiato ad entrembi gli array dentro gli oggetti

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
Sono stati creati 2 oggetti dove secondBurgher è la copia con spreed di hamburger
*/ 


// Snack 3 

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);


/*
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
sono sati creati 3 oggetti con dentro altri 2 oggetti un totle di 9 oggetti,
structuredClone() crea una copia degli oggetti con anche gli oggetti annidati
 */

// Snack 4

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

/*
Qual è il metodo migliore per clonare l’oggetto chef, e perché?
in questo caso lo spread operetor perchè copia anche la funzione 

Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
in questo caso è lo structuredClone() perche permette di copiare anche gli oggetti particolari come new date
*/