const PI = 3.14;
let age = 87;

if (true){
    let noms = "Claude Ebrottié";
}
console.log(noms);

for (let i=0; i<3; i++){
    console.log('In the loop',i);
}

console.log('out of the loop',i);

//Declaration
let person = {
    firstName: 'Claude',
    age: 37,
    address: {
        street: '87 Street of Business',
        town: 'Abidjan'
    }
};

//Display key's value
console.log(person.firstName);
console.log(person['firstName']);
console.log(person.address.town);

let a = 5;
let b = 2;

//Sum
console.log(a+b);

//Subtraction
console.log(a-b);

//Multiplication
console.log(a*b);

//Division
console.log(a/b);

//Modulo
console.log(a % b);

//Incrementation
a += 1 //a++ equals to : a = a+1 
console.log(a);

//Decrementation
b -= 1 //b-- equals to : b = b-1 
console.log(b);