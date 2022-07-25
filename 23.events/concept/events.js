//Select all rows of the table
let tabTr = document.querySelectorAll('tbody tr');

//Add an event listener at click on all rows of the table
for(let tr of tabTr){
    tr.addEventListener('click', function() {
        this.classList.toggle('grey');
    });
}

document.querySelector('a').addEventListener('click', function(e){
    e.preventDefault();
    let target = this.getAttribute('href');
    let response = confirm('Would like to quit the web site ?');

    if (response == true){
        window.location = target; //Redirection to other web site
    } else {
        alert('Thank you to visit us');
    }
});