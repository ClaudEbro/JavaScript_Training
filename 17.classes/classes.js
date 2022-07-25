// function Users(firstname, lastname, age) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
// }

// Users.prototype.getfullName = function () {
//     return `${this.fisrtname} ${this.lastname}`;
// }

// Users.prototype.sayHello = function sayHello(){
//     return `Hello World`;
// }

class User {
    constructor(fisrtname, lastname, age){
        this.fisrtname = fisrtname;
        this.lastname = lastname;
        this.age = age;
    }

    getfullName (){
        return `${this.fisrtname} ${this.lastname}`;
    }

    sayHello(){
        return `Hello World`;
    }
}

const me = new User('Claudio', 'Ebrottié', 107);
const her = new User('Pierre','Paul', 102);