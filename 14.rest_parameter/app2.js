function afficherMesTitresAcademiques(noms, ...titres) {
    console.log(titres);
    console.log(`Je suis ${noms}`);
    titres.forEach((titre) => {
        console.log(`- ${titres}`);
    });
}

function displayConfigMaterial(computer, ...config) {
    console.log(computer);
    config.forEach((conf) => console.log(`-${conf}`));
}