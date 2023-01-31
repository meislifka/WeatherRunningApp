import React,{useState} from 'react'
import axios from 'axios'
 function App() {
 const [data,setData] = useState({})
 const [location,setLocation] = useState('')

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f4dcdc6133e75eeb912a6c8c07d42dd8`
 
 const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  
}
 }

  return (
    <div className="app">
      <div className="search">
        <input 
        
        value = {location}
        onChange={event => setLocation(event.target.value)}
        placeholder = 'Enter Location'
        onKeyPress={searchLocation}
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
            <div className="temp">
              {data.main ? <h1>{data.main.temp }°F</h1>: null}
             
            </div>
            <div className="description">
              {data.main ? <p>{data.weather[0].main}</p>: null}
              
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>{data.main.feels_like}</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>{data.main.feels_like}</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
        </div>    
      
      
    </div>
  );
}

export default App;
