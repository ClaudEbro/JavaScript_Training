const fruits = ["apple", "mango", "banana", "pineapple", "orange", "lemon"];

const fruitsAvecM = fruits.filter(function(fruit){
        return fruit.includes('m');
});

const nombres = [2,3,5,10,25,30,11,23];

const nombresSuperieurAcinq = nombres.filter(function(nombre){
    return nombre>5;
})

const users = [
    {nom : 'Claudio', age:120},
    {nom : 'Paulo', age:20},
    {nom : 'Claudia', age:45},
    {nom : 'Pirlo', age:50},
];

const userAgeInferieurAcinquante = users.filter(function({age}){
    return age<50;
})