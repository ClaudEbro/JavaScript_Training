const lastname = document.querySelector('#nom');
const firstname = document.querySelector('#prenom');
const age = document.querySelector('#age');
const country = document.querySelector('#pays');
const form = document.querySelector('#employeeForm');

function Employe(
    lastname,
    firstname, 
    age, 
    country, 
    id=Math.floor(Math.random()*new Date())
    )
    {
    this.lastname = lastname;
    this.firstname = firstname;
    this.age = age;
    this.country = country;
    this.id = id;
};

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const employee = new Employe(
        lastname.value, 
        firstname.value, 
        parseInt(age.value), 
        country.value
    );
    console.log(employee);
})


