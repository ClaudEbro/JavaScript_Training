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

  function creerLigne(contact){
      return('<tr><td>' + contact.id + '</td><td>' + contact.lastname + '</td><td>' + contact.firstname + '</td><td>' + contact.email + ' </td><td>' + contact.age + '</td></tr>');
  }

  const tableContent = document.querySelector('tbody');
  const searchTerm = document.querySelector("#searchTerm");

  populateTbody(contacts, tableContent);

  searchTerm.addEventListener ('input', function() {
    tableContent.innerHTML =" ";
    const tableFiltered = contacts
    .map(function ({id, lastname, firstname, email, age,}) {
      return {lastname:lastname.toLowerCase(), firstname:firstname.toLowerCase(), email:email, id:id, age:age};
    })
    .filter(function ({email, lastname, firstname}) {
      return (
        email.includes(searchTerm.value.toLowerCase()) || 
        lastname.includes(searchTerm.value.toLowerCase()) ||
        firstname.includes(searchTerm.value.toLowerCase())
      );
    });
    populateTbody(tableFiltered, tableContent);
  });

  function populateTbody(contacts, tbody) {
    let htmlBodyString = ' ';
    contacts.forEach((contact) => {
      htmlBodyString += creerLigne(contact);   
  })
    tbody.insertAdjacentHTML('beforeend', htmlBodyString);
  }