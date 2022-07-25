function User (
lastname, 
firstname, 
age, 
country='Ivory Coast',
id=Math.floor(Math.random()*new Date)
)
{
    this.lastname = lastname;
    this.firstname = firstname;
    this.age = age;
    this.country = country;
    this.id = id;
}

const moi = new User('Claude', 'Ebrottié', 102,);

const maSoeur = new User('Rosine', 'Ebrottié', 100, 'Los Angeles');