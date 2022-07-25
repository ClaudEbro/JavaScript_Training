const loader = document.querySelector('.loader');

loader.style.visibility = 'hidden';

const btnAjax = document.querySelector('#btnAjax');

btnAjax.addEventListener('click', function() {

    toggleLoader(loader, 'visible');

    //$.get('https://jsonplaceholder.typicode.com/users', function (users) {
 
    //     toggleLoader(loader, 'hidden');
        
    //     const tableBody = document.querySelector('tbody');

    //     for (let user of users) {
    //         const ligneUser = createUserRow(user);
    //         tableBody.insertAdjacentHTML('beforeend', ligneUser);
    //     }
    //   })

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then(users=> {
            toggleLoader(loader, 'hidden');
            const tableBody = document.querySelector('tbody');
            for (let user of users) {
               const ligneUser = createUserRow(user);
                tableBody.insertAdjacentHTML('beforeend', ligneUser);
            }
        })
        .catch((err) => console.log(err));
    
});

function createUserRow (user) {
    const {id, name, email, address:{street, city, suite, zipcode, geo:{lat, lng}}, company:{name:companyName}} = user; //companyName est l'alias de name
    const adresse = `${street}, ${city}-${suite}, ${zipcode}`;
    const geoCordinates = `${lat},${lng}`;

    return `<tr><td>${id}</td><td>${name}</td><td>${email}</td><td>${adresse}</td><td>${geoCordinates}</td><td>${companyName}</td></tr>`;
}

function toggleLoader(loader, visibilityValue) {
    const {style} = loader;
    style.visibility = visibilityValue;
}