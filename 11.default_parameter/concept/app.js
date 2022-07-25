function multiplier (number1, number2){
    number2=(typeof number2 != 'undefined')?number2 : 4;
    return number1*number2;
}

function multiplierES6(number1, number2=4){
    return number1*number2;
}

const product = multiplier(12,2);
const productES6 = multiplier(12,6);