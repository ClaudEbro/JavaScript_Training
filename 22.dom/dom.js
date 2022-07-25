//To display the width of the screen
console.log('Width of the screen : ' + window.innerWidth+ 'px');

//Path of file
console.log('Path of the file : ' +document.documentURI);

//Select an element by his ID
let title = document.getElementById('title');

//Retrieve only the TEXT
console.log(title.innerText);

//Retrieve only the HTML
console.log(title.innerHTML);

//Update the content TEXT
title.innerText = "<em>NEW</em> TITLE";

//Update the content HTML
title.innerHTML = "<em>NEW</em> TITLE";


//Select an element by his CLASS
let citation = document.getElementsByClassName('citation');
console.log(citation); //Retrieve all elemnts
console.log(citation[1]); //Retrieve element on index 1

//Select an element by his BALISES
let paragraph = document.getElementsByTagName('p');
console.log(paragraph); //Retrieve all elemnts
console.log(paragraph[0].innerHTML); //Retrieve the content HTML of the fisrt paragraph
console.log(paragraph[0].innerText); //Retrieve the content TEXT of the fisrt paragraph

//Retrieve the CSS selector
console.log(document.querySelector('#title')); //By id
console.log(document.querySelectorAll('.citation'));

//Retrieve an HTML Attribute
let a = document.querySelector('a');
console.log(a.getAttribute('href')); //Retrieve only the value
a.setAttribute('href', 'https://www.mozilla.fr'); //Update the href attribute


//Retrieve the CSS
console.log(document.querySelector('p').style);
//Update the CSS
//document.querySelector('p').style.backgroundColor = "#aaa";

//Retrieve the CSS classes of an element HTML
console.log(document.querySelector('p').classList);

//Add a CSS Class to an element HTML
document.querySelector('p').classList.add('greenFont');

//Delete a CSS Class to an element HTML
document.querySelector('p').classList.remove('greenFont');

//Select peer elements
let tabLi = document.querySelectorAll('ul li:nth-child(even)');
console.log(tabLi);
for(let li of tabLi){
    li.classList.add('greenFont');
}

//Check existence of CSS Class on an element HTML
if (document.querySelector('li:nth-child(2)').classList.contains('greenFont')){
    console.log('green class is found');
}

//Check an existing of CSS Class on an element HTML
document.querySelector('p').classList.toggle('greenFont');

//Move an existing of CSS Class
document.querySelector('p').appendChild(document.querySelector('h1'));


