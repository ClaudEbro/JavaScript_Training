document.querySelector('#cp').addEventListener('input', function(){
    if(this.value.length == 5) {
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;

    fetch(url)
        .then((response) =>
            response.json()
        .then((data) => {
            console.log(data);
            let display = '<ul>';
            for (let town of data) {
                display += `<li><strong>${town.nom}<strong> - ${town.population} habitants</li>`;
            }
            display += '</ul>';
            document.querySelector('#towns').innerHTML = display;
        })
    )
    .catch((err)=> console.log('Error : ' + err));
    }
});