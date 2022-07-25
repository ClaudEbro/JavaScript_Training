let form = document.querySelector('#loginForm');

//Listen updating of email
form.email.addEventListener('change', function(){
    validEmail(this);
})

//Listen updating of password
form.password.addEventListener('change', function(){
    validPassword(this);
})

//Listen the form submission
form.addEventListener('change', function(e){
    e.preventDefault();
    if (validEmail(form.email) && (validPassword(form.password))) {
        form.submit();
    }
});

// ********************* EMAIL Validation ********************
const validEmail = function(inputEmail) {
    //Create the reg exp for email validation
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
    );

    //We retrieve the tag SMALL
    let small = inputEmail.nextElementSibling;
    
    //We test the reg exp
    if (emailRegExp.test(inputEmail.value)) {
        small.innerHTML = 'Valid address';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }
    else {
        small.innerHTML = 'Invalid address';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};

// ********************* PASSWORD Validation ********************
const validPassword = function(inputPassword) {
    let msg;
    let valid = false;

    //At least 3 characters
    if (inputPassword.value.length < 3){
        msg = 'The password must contain at least 3 characters.';
    }

    //At least 1 uppercase letter
    else if (!/[A-Z]/.test(inputPassword.value)) {
        msg = 'The password must contain at least 1 uppercase letter.';
    }

    //At least 1 lowercase letter
    else if (!/[a-z]/.test(inputPassword.value)) {
        msg = 'The password must contain at least 1 lowercase letter.';
    } 

    //At least 1 number
    else if (!/[0-9]/.test(inputPassword.value)) {
        msg = 'The password must contain at least 1 number.';
    }
    
    //Valid Password
    else {
        msg = 'Valid Password';
        valid =true;
    }

    //We retrieve the tag SMALL
    let small = inputPassword.nextElementSibling;
    
    //We test the reg exp
    if (valid) {
        small.innerHTML = 'Valid Password';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }
    else {
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }

    console.log(msg);
};