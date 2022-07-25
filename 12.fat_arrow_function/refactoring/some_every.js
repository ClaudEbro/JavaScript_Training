// Minimum configuration Fifa 20
// 8Gb RAM
// 50 Gb free 

const computers = [
    {mark: 'Acer', model: 'Nitro 5', ram: 24, freespace: 500},
    {mark: 'Hp', model: 'ProBook', ram: 4, freespace: 30},
    {mark: 'Lenovo', model: 'Idepad', ram: 8, freespace: 60},
];

const allComputerOk = computers.every(({ram, freespace}) => ram >=8 && freespace >=50);

if(!allComputerOk){
    console.log("Sorry, all computer can't support Fifa 20");
}
else {
    console.log("Bravo ! All computers are OK");
}

const atLeastOneComputerIsOK = computers.some(({ram, freespace}) => ram >=8 && freespace >=50);

const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const peerNumbers = numbers.every((number) => number % 2 == 0)

// 1 - Dire si ce tableau contient au moins un nombre premier.
// 2 - Dire si ce tableau ne contient que des nombres pairs.