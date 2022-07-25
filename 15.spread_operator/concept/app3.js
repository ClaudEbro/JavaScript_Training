const myFamily = {nom:'EBROTTIE', country:'Ivory Coast'};
const myFamilyReferenceCopy = myFamily;
const myFamily2 = {...myFamily};

const me = {...myFamily, prenom:'Claude', age:120};
const myBrother = {...myFamily, prenom:'Christian', age:150};