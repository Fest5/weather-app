import React from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"

const WeatherCard = (props) => {
  //console.log(props.day)
  return (
    <Card data-testid="weather-card" className='text-center mt-4'>
      <Card.Body>
        {props.city && <Card.Title>Today's Weather of {props.city}</Card.Title>}
        <Card.Text>
          This is the weather for: {props.day ? props.day :(new Date(Date.now())).toDateString()}
        </Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>Today Weather: {props.main}</ListGroupItem>
        <ListGroupItem>Temperature: {props.temp}ºC</ListGroupItem>
        <ListGroupItem>Max temperature: {props.max}ºC</ListGroupItem>
        <ListGroupItem>Min temperature: {props.min}ºC</ListGroupItem>
        <ListGroupItem>Humidity: {props.hum}%</ListGroupItem>
        <ListGroupItem>Wind: {props.wind}km/h</ListGroupItem>
      </ListGroup>
    </Card>
  )
}

export default WeatherCard
