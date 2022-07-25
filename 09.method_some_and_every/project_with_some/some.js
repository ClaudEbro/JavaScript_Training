const email = document.querySelector('#email');
const names = document.querySelector('#names');
const pwd = document.querySelector('#pwd');
const message = document.querySelector('#message');

const formFields = [email, names, pwd];
const form  = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    message.innerText = ' ';
    
    const atLeatOneFieldFilled = formFields.some(function(field){
        return !field.value;
    });

    if(atLeatOneFieldFilled){
        message.innerText = 'Some fields are empty. Please, fill them !';
        message.setAttribute('class', 'error');
    }
    else{
        message.innerText = 'Congratulations ! Data sent to server.';
        message.removeAttribute('class');
        message.setAttribute('class','success');

        setTimeout(function(){
            message.innerText = ' ';
            message.removeAttribute('class');
        }, 4000);
    }
})