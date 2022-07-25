function User(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

User.prototype.completeName = function(){
    return`${this.firstname} ${lastname}`;
};
User.prototype.sayHello = function() {
    return 'Hello';
}

const me = new User('Claude', 'Ebrottié', 107);
const her = new User('Thérèse', 'Martin', 27);

//pure heritage
const Person = {
    fname : 'Default',
    lname : 'Default',
    getFullName : function (){
        return `${this.fname} ${this.lname}`;
    },
}

const myBrother = Object.create(Person);
myBrother.fname = 'David';
myBrother.lname = 'Marie'; 