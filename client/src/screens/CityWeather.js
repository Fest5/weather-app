import React, { useState, useEffect } from "react"
import { Button, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import axios from "axios"
import Loader from "../components/Loader"
import WeatherCard from "../components/WeatherCard"

const CityWeather = ({ match, history }) => {
  const city = match.params.city

  const [weather, setWeather] = useState({})

  const searchWeather = async (city) => {
    try {
      const currentWeather = await axios.get(`/api/v1/search/${city}`)
      setWeather(await currentWeather.data)
      //console.log(currentWeather)
    } catch (err) {
      alert('City not found, search for a real city')
      history.push('/')
    }
  }

  useEffect(() => {
    searchWeather(city)
  }, [city])

  return (
    <Container>
      <LinkContainer to='/'>
              <Button variant='secondary'>Go Back</Button>
      </LinkContainer>
      {weather.coord ? (
        <>
            
          <WeatherCard
            city={weather.name}
            main={weather.todayWeather.main}
            temp={weather.main.temp}
            max={weather.main.temp_max}
            min={weather.main.temp_min}
            hum={weather.main.humidity}
            wind={weather.wind.speed}
          ></WeatherCard>

          <LinkContainer
            to={`/search/${city}/fiveDays?lat=${weather.coord.lat}&lon=${weather.coord.lon}`}
          >
            <Button variant='success' block>Next Five days weather</Button>
          </LinkContainer>
        </>
      ) : (
        <Loader>loading</Loader>
      )}
    </Container>
  )
}

export default CityWeather
