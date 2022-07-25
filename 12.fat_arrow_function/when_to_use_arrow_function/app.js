var myTeam = 'Liverpool';
var PlayersName = ['Firmino', 'Mane', 'Salah'];

function displayTeam (callback) {
    return callback();
}

//Arrow function can't display the team because it doesn't get his own this.
// const team ={
//     myTeam :'FC Barcelona',
//     displayTeam : () => {
//         console.log(`${this.myTeam} is the best team in the world.`);
//     },
// };


// displayMyTeam can't display FC Barcelona Team because callback function is attached to global Team
// const team = {
//     myTeam :'FC Barcelona',
//     PlayersName : ['Dembele','Pique','Sergio'],
//     displayMyTeam : function() {
//         return displayTeam (function(){
//             const resultats = [];
//             for(let name of this.PlayersName){
//                 resultats.push(`${name} is a plyer of ${this.myTeam}.`);
//             }
//             return resultats;
//         });   
//     },
// };

// To solve it, we can use the variable self
// const team = {
//     myTeam :'FC Barcelona',
//     PlayersName : ['Dembele','Pique','Sergio'],
//     displayMyTeam : function() {
//         var self = this;
//         return displayTeam (function(){
//             const resultats = [];
//             for(let name of self.PlayersName){
//                 resultats.push(`${name} is a plyer of ${self.myTeam}.`);
//             }
//             return resultats;
//         });   
//     },
// };

// To solve it, we can also use bind
// const team = {
//     myTeam :'FC Barcelona',
//     PlayersName : ['Dembele','Pique','Sergio'],
//     displayMyTeam : function() {
//         return displayTeam (function(){
//             const resultats = [];
//             for(let name of this.PlayersName){
//                 resultats.push(`${name} is a plyer of ${this.myTeam}.`);
//             }
//             return resultats;
//         }.bind(this)
//         );   
//     },
// };


// We can also use Arrow Function
const team = {
    myTeam :'FC Barcelona',
    PlayersName : ['Dembele','Pique','Sergio'],
    displayMyTeam : function() {
        return displayTeam (()=>{
            const resultats = [];
            for(let name of this.PlayersName){
                resultats.push(`${name} is a plyer of ${this.myTeam}.`);
            }
            return resultats;
        });   
    },
};