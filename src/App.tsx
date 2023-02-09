import { useEffect } from 'react'
import './App.css'
import Places from './features/location/Places'
import { useLocation } from './features/location/useLocation'
import WeatherInfo from './features/weather/WeatherInfo';

function App() {
  const {location, setLocation, setCurrentLocation} = useLocation();
  
  useEffect(() => {
    setCurrentLocation();
  }, [])

  return (
    <div className="App">
      <Places setLocation={setLocation} setCurrentLocation={setCurrentLocation}></Places>
      {location != undefined && <WeatherInfo location={location}></WeatherInfo>}
    </div>
  )
}

export default App
