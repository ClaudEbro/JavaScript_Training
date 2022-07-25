function sum(...numbers){
    console.log(numbers);
    return numbers.reduce((somme,number) => somme+number,0);
}

const tb = ['apple', 'banana', 'orange'];
const tb2 = [...tb];

const myFamily = ['Claude', 'Pierre', 'Ambroise'];

//Spread
const myCompleteFamily = [...myFamily,'Thérèse'];
const myFamilyFake = [myFamily, 'Toto'];

//Rest
const [me, ...others] = myFamily;

const family = {nom:'Ebrottié', country:'Ivory Coast', town :'Abidjan'};

//Spread
const familySuite = { ...family, ageMax:120};