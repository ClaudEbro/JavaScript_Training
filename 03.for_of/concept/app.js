const fruits = ['pommes', 'mangues', 'bananes', 'oranges'];

const fruitsEnMajuscule = [];

//fruits.forEach((fruit, index)=> {
//  console.log(index,' ',fruit);
 //   fruitsEnMajuscule.push(fruit.toLocaleUpperCase());
//}
//)

for (let fruit of fruits) {
    fruitsEnMajuscule.push(fruit.toLocaleUpperCase());
    
}
console.log(fruitsEnMajuscule);