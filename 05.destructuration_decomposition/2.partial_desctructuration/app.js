const moi = {
    nom : 'Ebrottié',
    prenom : 'Claude',
    age : 120,
    pays : 'Côte d\'Ivoire',
    email : 'claude.ebrottie@gmail.com'
}

//const {pays, email, ...rest} = moi;
//console.log(rest);

const {pays, email, ...prenoms} = moi;
console.log(prenoms);





