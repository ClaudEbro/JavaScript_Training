const fruits = ["pomme", "mangue", "banane","orange"];

const fruitsMaj = fruits.map((fruit)=> fruit.toUpperCase());
console.log("Fruits Maj : ",fruitsMaj);

const fruitPluriel = fruits.map((fruit) => fruit + "s");
console.log("Fruits au Pluriel : ",fruitPluriel);


//Des nombres élévés au carré

const nombres = [2,3,4,5,6,7,8];


const carreDesNombres = nombres.map((nombre) => {
    return Math.pow(nombre,2);
});

const superieurACinq = nombres.map((nombre) => {
    if (nombre > 5){
        return nombre;
    }
});

console.log("Nombres supérieur à 5 :",superieurACinq);
console.log("Carré des nombres :",carreDesNombres);