const fruits = ['Apples', 'Mangoes', 'Pineapples', 'Bananas'];

const listFruits = document.querySelector('#fruits');

for(let fruit of fruits){
    const element = document.createElement('p');
    element.setAttribute("id", fruit);
    element.appendChild(document.createTextNode(fruit));
    listFruits.appendChild(element);
}

const btnResearch = document.querySelector('#btnSearch');
const searchTerm = document.querySelector('#searchTerm');

btnResearch.addEventListener('click', function(){
   if(fruits.includes(searchTerm.value)){
        const element = document.querySelector(`#${searchTerm.value}`);
        element.setAttribute('class','selected');
   } else {
    for(let fruit of listFruits.children){
        fruit.removeAttribute('class');
    }
   }
});