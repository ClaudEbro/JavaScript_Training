// REDUCE
const fruits =['pomme', 'mangue', 'orange', 'mandarine', 'citron'];

//MAP VS REDUCE
const fruitAuPluirelMap = fruits.map(function(fruit){
    return fruit + 's';
})

const fruitAuPluirelReduce = fruits.reduce(function(listeFruits, fruit){
    listeFruits.push(fruit + 's');
    return listeFruits;
},[]);


//FILTER VS REDUCE
const fruitsAvecMFilter = fruits.filter(function(fruit){
    return fruit.includes("m");
})

const fruitsAvecMReduce = fruits.reduce(function(listeFruits, fruit){
    if(fruit.includes("m")) listeFruits.push(fruit);
    return listeFruits;
},[]);


//FIND VS REDUCE
const premierFruitAvecMFind = fruits.find(function(fruit){
    return fruit.includes('m');
});

const premierFruitAvecMReduce = fruits.reduce(function (premierFruit, fruit){
    if(fruit.includes('m') && !premierFruit) premierFruit = fruit;
    return premierFruit;
},'');

const users = [
    {name: 'Pio', age:80},
    {name: 'Thérèse', age:50}
];

const sumAges = users.reduce(function(sumAge, {age}){
    sumAge += age;
    return sumAge;
},0)

