const email = document.querySelector('#email');
const names = document.querySelector('#names');
const pwd = document.querySelector('#pwd');
const message = document.querySelector('#message');

const formFields = [email, names, pwd];
const form  = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    message.innerText = ' ';
    
    const allFieldFilled = formFields.every(function(field){
        return field.value;
    });

    if(!allFieldFilled){
        message.innerText = 'Please, you have to fill all fields.';
        message.setAttribute('class', 'error');
    }
    else{
        message.innerText = 'Congratulations ! Data sent to server.';
        message.removeAttribute('class');
        message.setAttribute('class','success');
    }
})