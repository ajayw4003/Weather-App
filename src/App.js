
import { useState } from 'react';
import './App.css';
import CityInput from "./components/CityInput/index"
import CityWeather from "./components/CityWeather/index"

function App() {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather]= useState({
    main:{temp:"",
          temp_min: "",
          temp_max: ""},
    wind:{speed:""}
  });
  const fetchCityWeather = ()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    )
    .then((response)=> response.json())
    .then((result)=>{
      console.log("data is",result)
        setCityWeather(result);
    });
  }
  return (
      <div  className= "p-5">
        <CityInput 
        city={city} 
        setCity ={setCity} 
        fetchCityWeather ={fetchCityWeather}/>
        <CityWeather {...cityWeather}/>
      </div>
  );
}

export default App;
