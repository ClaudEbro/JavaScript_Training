const fruits =['pomme', 'mangue', 'orange', 'mandarine', 'citron'];

//MAP VS REDUCE
const fruitAuPluirelMap = fruits.map((fruit) => fruit + 's');

const fruitAuPluirelReduce = fruits.reduce((listeFruits, fruit) => {
    listeFruits.push(fruit + 's');
    return listeFruits;
},[]);


//FILTER VS REDUCE
const fruitsAvecMFilter = fruits.filter((fruit) => fruit.includes("m"));

const fruitsAvecMReduce = fruits.reduce((listeFruits, fruit) =>{
    if(fruit.includes("m")) listeFruits.push(fruit);
    return listeFruits;
},[]);


//FIND VS REDUCE
const premierFruitAvecMFind = fruits.find((fruit) => fruit.includes('m'));

const premierFruitAvecMReduce = fruits.reduce((premierFruit, fruit) =>{
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

