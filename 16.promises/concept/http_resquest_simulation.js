const request = (URL) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [{id:1, names:"Claude Ebrottié"},{id:2, names:"Fransceco Forgione"}],
                '/users/1':{ id:1, names:"Claude Ebrottié"},
                '/users/2':{ id:2, names:"Fransceco Forgione"},
            };

            if(pages[URL]){
                resolve({
                    status:200,
                    data : pages[URL]
                });
            } else {
                reject({
                    status : 404,
                    message :'not found'
                })
            }
        }, 4000);

    });
};


console.log('First');
//Error
request('/toto')
.then(res=>console.log(res))
.catch(error=>console.log(error));

//Code 200
request('/users')
.then(res=>console.log(res))
.catch(error=>console.log(error));
console.log('Second');