import {
  showLoading, createHistory,
} from './func';
import './style.css';
import img from './wp.png';
// 95137d96d3dd21f446c9da25b57a24be
// http://api.weatherstack.com/
// let weatherCurrentUrl = "http://api.weatherstack.com/current"


const access_key = '95137d96d3dd21f446c9da25b57a24be';
const chosenCity = document.getElementById('city');

// кнопки и блоки
const my_location = document.getElementById('my_location');
const my_history_btn = document.getElementById('history_show_btn');
const my_history_block = document.getElementsByClassName('history-block')[0];
const my_history_close_btn = document.getElementById('history_close_btn');
const my_history_clear_btn = document.getElementById('history_clear_btn');
const logo = document.getElementById('logo');
const my_city = document.getElementById("search_city");
logo.src = img;

// стартовый счетчик для нумерации id в localstorage
if (!localStorage.hasOwnProperty('counter')) {
  const storageNum = 0;
  localStorage.setItem('counter', JSON.stringify(storageNum));
}

// стартовый объект с данными в localstorage
if (!localStorage.hasOwnProperty('savedWeather')) {
  localStorage.setItem('savedWeather', JSON.stringify({}));
}



// преобразования для работы с данными
const objData = JSON.parse(localStorage.getItem('savedWeather'));


// определения полей выгрузки для выбранного города
const w_icon = document.getElementById('w_icon'); const // картинка
  city_name = document.getElementById('city_name'); const // город в тайтл
  tempr = document.getElementById('tempr'); const // температура знач
  feels_value = document.getElementById('feels_value');
const pressure_value = document.getElementById('pressure_value');
const wind_direction_value = document.getElementById('wind_direction_value');
const wind_speed_value = document.getElementById('wind_speed_value');
const humidity_value = document.getElementById('humidity_value');
const cloudcover_value = document.getElementById('cloudcover_value');
const descr = document.getElementById('descr');
const current_weather_disable = document.getElementsByClassName('current-weather-block')[0];

// //определения полей выгрузки для текущего местоположения
const w_icon_local = document.getElementById('w_icon_local');
// city_name_local = document.getElementById("city_name_local"),
const tempr_local = document.getElementById('tempr_local');
const feels_value_local = document.getElementById('feels_value_local');
const pressure_value_local = document.getElementById('pressure_value_local');
const wind_direction_value_local = document.getElementById('wind_direction_value_local');
const wind_speed_value_local = document.getElementById('wind_speed_value_local');
const humidity_value_local = document.getElementById('humidity_value_local');
const cloudcover_value_local = document.getElementById('cloudcover_value_local');
const descr_local = document.getElementById('descr_local');
const local_weather_disable = document.getElementsByClassName('local-weather-block')[0];


// проверки запроса

const status = function (response) {
  if (response.status == 200) {
    preloader.style.display = 'none';
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};
const inJson = function (response) {
  return response.json();
};


// получить погоду для выбранного города
my_city.onclick = function getWeather() {
  showLoading();
  const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${chosenCity.value}`;

  fetch(url)
    .then(status)
    .then(inJson)
    .then((data) => {
      // console.log(data);


      // вставка в поля
      city_name.innerText = `${data.location.name}, ${data.location.country}`;
      tempr.innerText = `${data.current.temperature}℃`;
      w_icon.src = data.current.weather_icons[0];
      descr.innerText = data.current.weather_descriptions[0];
      feels_value.innerText = `${data.current.feelslike}℃`;
      pressure_value.innerText = `${data.current.pressure}mb`;
      wind_direction_value.innerText = data.current.wind_dir;
      wind_speed_value.innerText = `${data.current.wind_speed}km/h`;
      humidity_value.innerText = `${data.current.humidity}%`;
      cloudcover_value.innerText = data.current.cloudcover;
      current_weather_disable.classList.add('show_weather');
      local_weather_disable.classList.remove('show_weather');


      // запись в localstorage
      let num = JSON.parse(localStorage.getItem('counter'));
      // objData[`Data_${num}`] = data; ключ из lacal.name
      objData[`${data.location.name}`] = data
      localStorage.setItem('savedWeather', JSON.stringify(objData));
      // вариант для добавления нового ключа localStorage.setItem(`savedWeather_${num}`, JSON.stringify(data));
      num++;
      localStorage.setItem('counter', JSON.stringify(num));
      console.log(localStorage);
      console.log(objData);
      console.log(Object.values(objData));




      createHistory(objData);
    });
}

my_location.onclick = function () {
  showLoading();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  function getPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${lat},${lon}`;

    fetch(url)
      .then(status)
      .then(inJson)
      .then((data) => {
        // console.log(data);
        city_name.innerText = `${data.location.name}, ${data.location.region}`;
        tempr_local.innerText = `${data.current.temperature}℃`;
        w_icon_local.src = data.current.weather_icons[0];
        descr_local.innerText = data.current.weather_descriptions[0];
        feels_value_local.innerText = `${data.current.feelslike}℃`;
        pressure_value_local.innerText = `${data.current.pressure}mb`;
        wind_direction_value_local.innerText = data.current.wind_dir;
        wind_speed_value_local.innerText = `${data.current.wind_speed}km/h`;
        humidity_value_local.innerText = `${data.current.humidity}%`;
        cloudcover_value_local.innerText = data.current.cloudcover;
        current_weather_disable.classList.remove('show_weather');
        local_weather_disable.classList.add('show_weather');

        // let num = JSON.parse(localStorage.getItem("counter"));
        // localStorage.setItem(`savedWeather_${num}`, JSON.stringify(data));
        // num++;
        // localStorage.setItem("counter",JSON.stringify(num));

        // запись в localstorage
        let num = JSON.parse(localStorage.getItem('counter'));
        // objData[`Data_${num}`] = data;
        objData[`${data.location.name}`] = data;
        localStorage.setItem('savedWeather', JSON.stringify(objData));
        // для добавления нового ключа localStorage.setItem(`savedWeather_${num}`, JSON.stringify(data));
        num++;
        localStorage.setItem('counter', JSON.stringify(num));


        createHistory(objData);
        console.log(localStorage);
      });
  }
};

//


my_history_btn.onclick = function () {
  createHistory(objData);
  my_history_block.style.display = 'flex';
};

my_history_close_btn.onclick = function () {
  my_history_block.style.display = 'none';
};

my_history_clear_btn.onclick = function () {
  localStorage.clear();
  location.reload();
};
