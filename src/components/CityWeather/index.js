import React from 'react';

const CityWeather = (cityWeather) => {
    return (
        <div>
            <p>Tempreture is : {cityWeather.main.temp}</p>
            <p>Min Tempreture is : {cityWeather.main.temp_min}</p>
            <p> Max Tempreture is : {cityWeather.main.temp_max}</p>
            <p> Wind Speed : {cityWeather.wind.speed}</p>
        </div>
    );
};

export default CityWeather;