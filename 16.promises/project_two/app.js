//Creation of the promise
const promiseGetUsers = new Promise ((resolve, reject)=>{
    if (typeof USERS !== 'undefined'){
        resolve(USERS);
    }else{
        reject('Impossible to access to users.');
    }
});

//Retrieve the state of the promise

promiseGetUsers
    .then(u => {
        let list = '<ul>'
        for(let user of u){
           list += `<li>${user.name}</li>`;
        }
        list += '</ul>'
        document.querySelector('#users').innerHTML = list;
    })
    .catch(e => console.log(e));

    
//***************News***************//

//Creation of the promise
const promiseGetNews = new Promise (function(resolve, reject){
    if (typeof NEWS !== 'undefined'){
        resolve(NEWS);
    }else{
        reject('Impossible to access to news.');
    }
});

//Retrieve the state of the promise

promiseGetNews
    .then(function(n) {
        let list = '<ul>'
        for(let actu of n){
           list += `<li>${actu.title}</li>`;
        }
        list += '</ul>'
        document.querySelector('#news').innerHTML = list;
    })
    .catch(e => console.log(e));