const images = document.querySelectorAll('#gallery img');
let imgActive = 0;
let interval; //Global variable to stock time interval
images[imgActive].classList.add('show');

//Hide all pictures except the first
for(let i=1; i<images.length; i+=1){
    images[i].classList.add('hidden');
}

//Click on next button
document.querySelector('#next').addEventListener('click', function(){
   next();
});

//Click on previous button
document.querySelector('#prev').addEventListener('click', function(){
    prev();
});


//Click on play button
document.querySelector('#play').addEventListener('click', function(){
     interval = setInterval(next, 2000); //Create time interval
});

//Click on pause button
document.querySelector('#pause').addEventListener('click', function(){
    clearInterval(interval); //Destroy time interval
});


//Function for next picture
const next = function() {
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive += 1;
    if(imgActive >= images.length){
        imgActive = 0;
    }
    images[imgActive].classList.remove('hidden');
     //Reveal transition
    setTimeout(() => {
        images[imgActive].classList.add('show');
    }, 300);
};


 
//Function for previous picture
const prev = function() {
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive -= 1;
    if(imgActive < 0 ){
        imgActive = images.length -1;
    }
    images[imgActive].classList.remove('hidden');
    //Reveal transition
    setTimeout(() => {
        images[imgActive].classList.add('show');
    }, 300);
};

//Manage keyboard arrow touch
window.addEventListener('keydown', function(e) {
    if(e.key == 'ArrowRight') {
        next();
    }
    if(e.key == 'ArrowLeft') {
        prev();
    }
});

