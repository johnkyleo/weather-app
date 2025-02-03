import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState('Manila');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setCity(e.target.value);

    e.preventDefault();
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c9584abf0bac496fb7d121930240403&q=${city}&aqi=no`);
        const resultData = await response.json();

        if (!response.ok) {
          setError(true);
        } else {
          setError(false);
          setData(resultData);
        }
      } catch (e) {
        console.log("Error fetching data:", e);
        setError(true);
        console.log(error)
      }
    };

    fetchData();
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c9584abf0bac496fb7d121930240403&q=${city}&aqi=no`);
        const resultData = await response.json();

        setError(false);
        setData(resultData);
      } catch (e) {
        console.log("Error fetching data:", e);
        setError(true);
        console.log(error)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="container">
         <div className="search__container">
            <p className="search__title">
                  Go ahead, hover over to search a City
            </p>
            
              <input className="search__input" type="text" placeholder="Search" value={city} onChange={handleChange} />
            
         </div>
      </div>
      {error ? (<div><h2>Invalid City</h2></div>):
      (<div className="panel">
          <div className="city">
            <h2>{data.location?.name}, {data.location?.country}</h2>
          </div>

          <div className="weather">
          <img className="weather-img" alt="img" src={data.current?.condition?.icon}/>
          <h1>{data.current?.temp_c}°C</h1>
          </div>

          <div className="date">
            <h2>{data.location?.localtime}</h2>
            <h2>{data.current?.condition?.text}</h2>
          </div>

          <div className="wind">
            <h2>Wind {data.current?.wind_kph} mph</h2>
            <h2>Humidity {data.current?.humidity}%</h2>
          </div>
      </div>)}
        
    </div>
  );
}

export default App;