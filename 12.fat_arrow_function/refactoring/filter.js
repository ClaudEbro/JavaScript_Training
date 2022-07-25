const fruits = ["apple", "mango", "banana", "pineapple", "orange", "lemon"];

const fruitsAvecM = fruits.filter((fruit) => fruit.includes('m'));

const nombres = [2,3,5,10,25,30,11,23];

const nombresSuperieurAcinq = nombres.filter((nombre) =>nombre>5);

const users = [
    {nom : 'Claudio', age:120},
    {nom : 'Paulo', age:20},
    {nom : 'Claudia', age:45},
    {nom : 'Pirlo', age:50},
];

const userAgeInferieurAcinquante = users.filter(({age}) => age<50);