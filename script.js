

    const apiKey = "f7422f768363f1720be1fe3ad224622d";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    searchBox.addEventListener('keyup', function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        searchButton.click();
    }
});


    async function checkWeather (city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == "404"){
            document.querySelector(".error").style.display= "block";
            document.querySelector(".weather").style.display= "none";
        } else {

        var data  = await response.json();
        
        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        

        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"; 
        } else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    }

    searchButton.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })

    
