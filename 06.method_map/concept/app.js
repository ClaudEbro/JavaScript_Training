const fruits = ["pomme", "mangue", "banane","orange"];

// const fruitsMaj = [];
// const fruitPluriel =[];

// fruits.forEach(function(fruit){
//     fruitsMaj.push(fruit.toUpperCase());
//     fruitPluriel.push(fruit+"s");
// });

// console.log("Fruits Maj",fruitsMaj);
// console.log("Fruits Pluriel",fruitPluriel);


const fruitsMaj = fruits.map(function(fruit){
    return fruit.toUpperCase();
})
console.log("Fruits Maj",fruitsMaj);

const fruitPluriel = fruits.map(function(fruit){
    return fruit + "s";
})
console.log("Fruits Pluriel",fruitPluriel);


//Des nombres élévés au carré

const nombres = [2,3,4,5,6,7,8];


//const carreDesNombres = [];

//Avec forEach
// nombres.forEach(function (nombre){
//     carreDesNombres.push(Math.pow(nombre,2));
// });


//Avec map()
const carreDesNombres = nombres.map(function (nombre){
    return Math.pow(nombre,2);
});

const superieurACinq = nombres.map(function (nombre) {
    if (nombre > 5){
        return nombre;
    }
});

console.log("Nombres supérieur à 5 :",superieurACinq);
console.log("Carré des nombres :",carreDesNombres);