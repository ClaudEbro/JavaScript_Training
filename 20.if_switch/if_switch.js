// IF condition
/*let age = prompt('Write your age');

if(age < 18 ){
    alert('You are a minor.');
} else if (age > 70 ) {
    alert('You are a senior.');
}else {
    alert('You are a major.');
}*/


//Switch
let car = prompt('What car would you get ? Peugeot, BMW, Ferrari').toLowerCase();
let km = prompt('How many KM would you get ?');

const price = {
    peugeot: 0.4,
    bmw: 0.6,
    ferrari: 0.8
};

switch (car) {
    case 'peugeot': {
        alert('You will pay : ' +price.peugeot * km +' $');
        break;
    }
    case 'bmw': {
        alert('You will pay : ' +price.bmw * km +' $');
        break;
    }
    case 'ferrai': {
        alert('You will pay : ' +price.ferrari * km +' $');
        break;
    }
    default : {
        alert('Please select a car.');
    }
}


