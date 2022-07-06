import axios from "axios"
import { useEffect, useState } from "react"

const DisplayCapitalWeather = ({ capitalName, capitalLatLng }) => {
    const [lat, lon] = capitalLatLng
    const [weather, setWeather] = useState({})

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                console.log(`Found weather for ${capitalName}`)
                const currentWeather = response.data
                setWeather({
                    temperature: (currentWeather.main.temp - 273.15).toFixed(1), // Kelvin to Celsius
                    iconLink: `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`,
                    iconDesc: currentWeather.weather[0].description,
                    windSpeed: currentWeather.wind.speed
                })
            })
    }, [])

    if (weather.temperature) {
        return (
            <>
                <h2>Weather in {capitalName}</h2>
                <p>temperature: {weather.temperature}° Celsius</p>
                <img src={weather.iconLink} title={weather.iconDesc} alt={weather.iconDesc} />
                <p>wind: {weather.windSpeed} m/s</p>
            </>
        )
    }
}

export default DisplayCapitalWeather