
const year = 2022;

const members = [
    { id:'1', nom :'Ebrottié', prenom:'Claude', birthYear:'1950'},
    { id:'2', nom :'Forgione', prenom:'Francesco', birthYear:'1988'},
    { id:'3', nom :'Pio', prenom:'Padre', birthYear:'1980'}
];

const tableContent = document.querySelector('#tableContent');

members
.map(function ({id, nom, prenom, birthYear}){
    return {id:id, nomComplet:`${prenom} ${nom}`, age:year-birthYear};
})
.forEach(function(member) {
    const ligneMember = createRow(member);
    tableContent.insertAdjacentHTML('beforeend', ligneMember);
});



function createRow({id, nomComplet, age}){
    return `<tr><td>${id}</td><td>${nomComplet}</td><td>${age}</td></tr>`;
}

let sumAge = 0;

const tableAges = members
.map(function({birthYear}){
    return year-birthYear;
})
tableAges.forEach(function(age){
    return sumAge += age;
});

const moyenneAges = sumAge/tableAges.length;

const moyenne = document.querySelector("#moyenne");

moyenne.innerText = Math.round(moyenneAges);



// formatMember.forEach(function(member) {
//     const ligneMember = createRow(member);
//     tableContent.insertAdjacentHTML('beforeend', ligneMember);
// })

