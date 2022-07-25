const fruits = ["apple", "mango", "banana", "pineapple", "orange", "lemon"];

const fruitsWithM = fruits.find((fruit)=>fruit.includes('ma'));

const numbers = [2,3,5,10,25,30,11,23];

const numbersOverFive = numbers.find((number) => number>5);

const users = [
    {id:1, name : 'Claudio', age:120},
    {id:2, name : 'Paulo', age:20},
    {id:3, name : 'Claudia', age:45},
    {id:4, name : 'Pirlo', age:50},
];

const user = users.find(({id}) => id == 1);
