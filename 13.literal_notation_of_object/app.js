
//Before ES6
// const me = {
//     firstName:'Claude',
//     lastName:'Ebrottié',
//     age: 50,
//     getCompleteName: function() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     myFatherAge: function(){
//         return this.age*3;
//     },
// }

//After ES6
const me = {
    firstName:'Claude',
    lastName:'Ebrottié',
    age: 50,
    getCompleteName() {
        return `${this.firstName} ${this.lastName}`
    },
    myFatherAge(){
        return this.age*3;
    },
}


