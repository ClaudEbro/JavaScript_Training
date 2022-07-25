/*Execute instruction in certain time
window.setInterval(function() {
    console.log("setimeout")
}, 1000);*/

//Set the date today
//let date = new Date();

//Retrieve hours, minutes and seconds
const clock = function() {

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (seconds < 10){
        seconds = '0' + seconds;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }

    let displayTime = hours + ":" + minutes + ":" + seconds;

    document.querySelector('#clok').innerText = displayTime;
};

window.setInterval(clock, 1000);