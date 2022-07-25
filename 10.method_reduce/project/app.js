const contacts = [
    {
      id: 1,
      lastname: 'Ebrottié',
      firstname: 'Claude',
      email: 'claude.ebrottie@gmail.com',
      age: 12,
    },

    {
      id: 2,
      lastname: 'John',
      firstname: 'Paul',
      email: 'jp@gmail.com',
      age: 22,
    },

    {
      id: 3,
      lastname: 'Rachel',
      firstname: 'Sea',
      email: 'rachel.sea@yahoo.fr',
      age: 43,
    },
    
    {
      id: 4,
      lastname: 'Jaricot',
      firstname: 'Pauline',
      email: 'jaricot@yahoo.com',
      age: 12,
    },
  ];

function creerLigne({id, lastname, firstname, email, age}){
    return `<tr><td> ${id } </td><td> ${lastname} </td><td> ${firstname} </td><td>  ${email} </td><td> ${age} </td></tr>`;
}

const tableContent = document.querySelector('tbody');

// for (let contact of contacts){
//     const ligneContact = creerLigne(contact); 
//     tableContent.insertAdjacentHTML('beforeend', ligneContact);
// }  
  

//METHOD 1
tableContent.innerHTML = contacts.reduce(function(stringHtml, contact){
    stringHtml += creerLigne(contact);
    return stringHtml;
}, ''); 

//METHOD 2
tableContent.insertAdjacentHTML(
    'beforeend',
    contacts.reduce(function(stringHtml, contact){
        stringHtml += creerLigne(contact);
        return stringHtml;
 }, '')
)
    