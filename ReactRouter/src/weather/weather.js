import React, { useState, useEffect } from 'react';
import img from './wp.png';
// import './style.css';

// 95137d96d3dd21f446c9da25b57a24be
// http://api.weatherstack.com/





// // получить погоду для выбранного города
// my_city.onclick = function getWeather() {
//   showLoading();
//   const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${chosenCity.value}`;
//
//   fetch(url)
//     .then(status)
//     .then(inJson)
//     .then((data) => {
//       // console.log(data);
//
//
//
// my_location.onclick = function () {
//   showLoading();
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(getPosition);
//   }
//
//   function getPosition(position) {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${lat},${lon}`;
//
//

export const Weather = () => {
// стартовый объект с данными в localstorage
  if (!localStorage.hasOwnProperty('savedWeather')) {
    localStorage.setItem('savedWeather', JSON.stringify({}));
  }
  // преобразования для работы с данными
  const objData = JSON.parse(localStorage.getItem('savedWeather'));




  const access_key = '95137d96d3dd21f446c9da25b57a24be';
  const [city, setCity] = useState({
    name: ''
  });
  const [state, setState] = useState({
    data: '',
    isLoaded: false,

  });


  const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${city.name}`;
  //утечки памяти
  useEffect(() => {
    // const fetchData = () =>
    if (city.name !== '') {
      fetch(url)
        .then(response => response.json())
        .then(result => setState({
          data: result,
          isLoaded: true,
          isLoading: false
        }))

    }

    // fetchData();


  }, [city.name]);//при изменении этого состояния - фетч
console.log(state)

//regeneratorRuntime is not defined
  // React.useEffect(() => {
  //   //   const fetchData = async () => {
  //   //     const res = await fetch(url);
  //   //     const json = await res.json();
  //   //     setState(json);
  //   //   };
  //   //   fetchData();
  //   // }, []);

//утечки памяти
  if (state.isLoaded) {


    return (
      <div className="wrapper">
        <img src="" alt="" id="logo"/>
        <div className="container">
          <input
            type="text"
            onKeyPress={event => {
              if (event.key === 'Enter') {
                if(city.name !== ''){
                  setState({ isLoading: true })
                }else {setState({ isLoading: false })}
                setCity({
                  name: event.target.value
                });
                event.target.value = ''

              }

            }}
          />

          <div className="infoWeatherBlock">
            <h3>CITY:{state.data.location.name + ', ' + state.data.location.country}</h3>
            <ul>
              <li>Current temperature:{state.data.current.temperature}</li>
              <li>Wind direction:{state.data.current.wind_dir}</li>
              <li>Pressure:{state.data.current.pressure}</li>
            </ul>


          </div>

        </div>
      </div>


    )
  } else if (state.isLoading) {
    return (
      <div className="wrapper">
        <img src="" alt="" id="logo"/>
        <div className="container">
          <input
            type="text"
            onKeyPress={event => {
              if (event.key === 'Enter') {
                if(city.name !== ''){//со 2 раза
                  setState({ isLoading: true })
                }else {setState({ isLoading: false })}
                setCity({
                  name: event.target.value
                });
                event.target.value = '';

              }
            }}
          />
          <p>Loading...</p>
        </div>

      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <img src="" alt="" id="logo"/>
        <div className="container">
          <input
            type="text"
            onKeyPress={event => {
              if (event.key === 'Enter') {
                if(city.name !== ''){
                  setState({ isLoading: true })//утечки памяти, срабатывает на 2 раз
                }else {setState({ isLoading: false })}
                setCity({
                  name: event.target.value
                });
                event.target.value = ''

              }
            }}
          />
        </div>

      </div>
    )
  }

};

