const contacts = [
    {
      id: 1,
      nom: 'Ebrottié',
      prenom: 'Claude',
      email: 'claude.ebrottie@gmail.com',
      age: 12,
    },
    {
      id: 2,
      nom: 'John',
      prenom: 'Peter',
      email: 'jp@gmail.com',
      age: 22,
    },
    {
      id: 3,
      nom: 'Rachel',
      prenom: 'Sea',
      email: 'rachel.sea@live.fr',
      age: 43,
    },
    {
      id: 4,
      nom: 'Marine',
      prenom: 'Julia',
      email: 'julia@yahoo.com',
      age: 12,
    },
  ];

  function creerLigne(contact){
      return `<tr><td>${contact.id}</td><td>${contact.nom}</td><td>${contact.prenom}</td><td>${contact.email}</td><td>${contact.age}</td></tr>`;
  }

  const corpDuTableau = document.querySelector('tbody');

  contacts.forEach((contact) => {
      const ligneContact =creerLigne(contact);

      //corpDuTableau.innerHTML += ligneContact;

      corpDuTableau.insertAdjacentHTML('beforeend', ligneContact);
  })