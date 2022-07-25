const APIKEY = '73dbb746b1db7b6a4d8c08e324c8d002';

/*Call the API openWeath with town as a function parameter*/
let apiCall = function(city) {
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url)
    .then((response) =>
        response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°';
        document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'Km/h';
    })
)
.catch((err) => console.log('Error : ' + err));
};

/*Event lister on submit form*/
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let town = document.querySelector('#inputCity').value;

    apiCall(town);
});

//Default call on loading page
apiCall('Abidjan');


