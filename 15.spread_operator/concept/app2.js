const fruits = ['pommes','mangues','bananes'];
const fruits2 = fruits;
fruits2.push('ananas');//Pointe sur la même référence que fruits.

const fruits3 = [...fruits];
fruits3.push('orange');

const fruitVert = [...fruits, 'blablabla'];
const fruits4 = [fruits, 'blablabla'];
