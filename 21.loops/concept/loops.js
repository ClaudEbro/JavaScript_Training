//Loop FOR
for(let i=0; i<3; i+=1){
    console.log('Loop : ',i);
}

//Browse a table
let fruits = ['Apples', 'Mangoes', 'Bananas'];

console.log('--- For ---');
for(let i=0; i<fruits.length; i+=1){
    console.log(fruits[i]);
}

console.log('--- While ---');
let j = 0; 
while(j<fruits.length){
    console.log(fruits[j]);
    j += 1;
}

console.log('--- Do While ---');
let k = 0; 
do {
    console.log(fruits[k])
    k += 1;
} while(k<fruits.length);


//FOR IN : iterate on object's keys
let car = {mark: 'BMW', engine: 'disesel'}

console.log('--- For IN ---');
for(let k in car){
    console.log(k);
}

//FOR OF : iterate on table's values
let colours = ['blue', 'read', 'green'];

console.log('--- For OF ---');
for(let c of colours){
    console.log([c]);
}

    