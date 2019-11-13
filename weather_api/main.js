//95137d96d3dd21f446c9da25b57a24be
//http://api.weatherstack.com/
// let weatherCurrentUrl = "http://api.weatherstack.com/current"
let access_key = "95137d96d3dd21f446c9da25b57a24be";
let chosenCity = document.getElementById("city");


// let search = document.getElementById("search_city");
let w_icon = document.getElementById("w_icon");//картинка
let city_name = document.getElementById("city_name");//город в тайтл
let tempr = document.getElementById("tempr");//температура знач
let feels_value = document.getElementById("feels_value");
let pressure_value = document.getElementById("pressure_value");
let wind_direction_value = document.getElementById("wind_direction_value");
let wind_speed_value = document.getElementById("wind_speed_value");
let humidity_value = document.getElementById("humidity_value");
let cloudcover_value = document.getElementById("cloudcover_value");
let descr = document.getElementById("descr");
let current_weather_disable = document.getElementsByClassName("current-weather-block")[0];

function getWeather() {

    let url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${chosenCity.value}`;
    let status = function (response) {
        if (response.status == 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    };
    let inJson = function (response) {
        return response.json();
    };
    fetch(url)
        .then(status)
        .then(inJson)
        .then(function (data) {
            console.log(data);
            let name_region = data.request.query;
            let d_feelslike = data.current.feelslike;
            let d_pressure = data.current.pressure;
            let d_wind_dir = data.current.wind_dir;
            let d_description = data.current.weather_descriptions[0];
            let d_wind_sp = data.current.wind_speed;
            let d_humidity = data.current.humidity;
            let d_cloudcover = data.current.cloudcover;
            let d_w_icon = data.current.weather_icons[0];
            let d_tempr = data.current.temperature;
            let span_arr = document.getElementsByTagName("span");//очистка формы
            for(let s = 0; s < span_arr.length; s++){
                span_arr[s].innerText = "";
            }

            city_name.append(document.createTextNode(name_region));
            tempr.append(document.createTextNode(d_tempr + "℃"));
            w_icon.src = d_w_icon;
            descr.append(document.createTextNode(d_description));
            feels_value.append(document.createTextNode(d_feelslike + "℃"));
            pressure_value.append(document.createTextNode(d_pressure + "mb"));
            wind_direction_value.append(document.createTextNode(d_wind_dir));
            wind_speed_value.append(document.createTextNode(d_wind_sp + "km/h"));
            humidity_value.append(document.createTextNode(d_humidity + "%"));
            cloudcover_value.append(document.createTextNode(d_cloudcover + "%"));

            current_weather_disable.classList.add("show_weather");


            console.log(document.getElementsByTagName("span"))
        });

};

