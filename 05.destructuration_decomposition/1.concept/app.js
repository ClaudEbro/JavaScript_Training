const moi = {
    nom : 'Ebrottié',
    prenom : 'Claude',
    pays : 'Côte d\'Ivoire',
    email : 'claude.ebrottie@gmail.com'
}

const {nom, prenom, pays, email} = moi;

//console.log(`Je suis ${nom} ${prenom}. Je suis de la ${pays} et mon email est ${email}.`);

function afficherDescriptiondeDeContact(contact) {
    return `Je suis ${contact.prenom} ${contact.nom}. Je suis de la ${contact.pays} et mon email est ${contact.email}.`;
}

function afficherDescriptiondeDeContact2({nom, prenom, pays, email}) {
    return`Je suis ${prenom} ${nom}. Je suis de la ${pays} et mon email est ${email}.`;
}

const descriptonContact = afficherDescriptiondeDeContact(moi);
console.log(descriptonContact);

const descriptionContact2 = afficherDescriptiondeDeContact2(moi);
console.log(descriptionContact2);