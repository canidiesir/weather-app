import { useEffect } from 'react'
import './App.css'
import Places from './components/Places'
import { useLocation } from './hooks/useLocation'
import WeatherInfo from './components/WeatherInfo'

function App() {
  const {location, setLocation, setCurrentLocation} = useLocation();
  
  useEffect(() => {
    setCurrentLocation();
  }, [])

  return (
    <div className="App">
      <Places setLocation={setLocation} setCurrentLocation={setCurrentLocation}></Places>
      {location != undefined && <WeatherInfo lat={location.lat} lng={location.lng}></WeatherInfo>}
    </div>
  )
}

export default App
