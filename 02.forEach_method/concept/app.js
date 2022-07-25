const fruits = ['Pomme','Mangue','Banane','Orange' ];

const fruitMaj = [];

for(let i=0; i<fruits.length; i++) {
    fruitMaj.push(fruits[i].toUpperCase());
}

fruits.forEach(function (fruit, index) {
    console.log(index, ':', fruit);
})

console.log(fruitMaj);