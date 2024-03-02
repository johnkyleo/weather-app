import { IoRainySharp } from "react-icons/io5";
import './App.css';



function App() {
  return (
<div className="main">
   <div className="container">
      <div className="search__container">
         <p className="search__title">
                Go ahead, hover over search
         </p>
         <input className="search__input" type="text" placeholder="Search"></input>
      </div>
      </div>
      <div className="panel">
        <div className="city">
           <h2>Manila, Philippines</h2>
        </div>

        <div className="weather">
        <IoRainySharp  className="rain"/>
        <h1>46 °C</h1>
        </div>

        <div className="date">
          <h2>Saturday 11:11</h2>
          <h2>Moderate Rain</h2>
        </div>

        <div className="wind">
          <h2>Wind 11.01 mph</h2>
          <h2>Humidity 85%</h2>
        </div>
           
    </div>

    
</div>
  );
}

export default App;

