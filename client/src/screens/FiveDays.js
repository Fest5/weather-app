import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Row, Col, Container, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import axios from "axios"
import Loader from "../components/Loader"
import WeatherCard from "../components/WeatherCard"

const CityWeather = ({ match, history }) => {
  const city = match.params.city
  const lat = new URLSearchParams(useLocation().search).get("lat")
  const lon = new URLSearchParams(useLocation().search).get("lon")

  //console.log(lat, lon)

  const [days, setDays] = useState({})

  const searchFiveDays = async (lat, lon) => {
    try {
      const fiveDays = await axios.get(
        `/api/v1/search/${city}/fivedays?lat=${lat}&lon=${lon}`
      )

      setDays(await fiveDays.data)
      //console.log(fiveDays)
    } catch (err) {
      alert(err.message)
      history.push('/')
    }
  }

  useEffect(() => {
    searchFiveDays(lat, lon)
  }, [lat, lon])

  const newDate = (index) => {
    const i = index + 1
    let tomorrow = new Date()
    tomorrow.setDate(new Date().getDate() + i)
    return tomorrow
  }

  return (
    <Container>
      <LinkContainer to={`/search/${city}`}>
              <Button variant='secondary'>Go Back</Button>
      </LinkContainer>
      {days.daily ? (
        <>
          <h2 className='text-center'>
            This is the Weather of {days.all.timezone.includes('GMT') ? `(not a city) ${days.all.timezone}` : days.all.timezone.split('/').pop().split('_').join(' ')} in the next 5 days.
          </h2> 
          <Row>
            {days.daily.map((day, i) => (
              <Col key={day.dt} sm={12} md={6} lg={4} xl={3}>
                <WeatherCard
                  day={newDate(i).toDateString()}
                  hum={day.humidity}
                  temp={day.temp.day}
                  min={day.temp.min}
                  max={day.temp.max}
                  main={day.weather[0].main}
                  wind={day.wind_speed}
                />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <Loader></Loader>
      )}
    </Container>
  )
}

export default CityWeather
