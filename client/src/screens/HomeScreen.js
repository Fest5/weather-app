import React, { useState, useEffect } from "react"
import axios from "axios"
import { ButtonGroup, Button, Container, Jumbotron } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
/* const ip = axios
        .get("/api/v1/ip")
        .then((res) => console.log('resuelto'))
        .catch((error) => console.log(error))    
 console.log(ip)
    
    if(ip) {
        const city = axios.get(`http://ip-api.com/json/${ip}`).then((res) => console.log(res))

}    */

const HomeScreen = () => {
  const [ipAdress, setIpAdress] = useState("")
  const [city, setCity] = useState("")

  const findIp = async () => {
      // Request the ip adress to the server
    try {
      const { data } = await axios.get("/api/v1/ip")
      setIpAdress(data)
    } catch (err) {
      console.log(err)
    }
  }

  const findCity = async (ip) => {
      // Find city by the ip adress
    try {
      const { data } = await axios.get(`http://ip-api.com/json/${ip}`)
      setCity(data.city)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    findIp()
    //console.log(ipAdress)
    findCity(ipAdress)
    //console.log(city)
  }, []) //No agregar la dependencia recomendada por eslint, ya que rompe la dirección ip

  return (
    <Jumbotron fluid className='text-center'>
      <Container>
        <h1>Get the weather of your city!</h1>
        <p>
          Press the button for which location you want to know the weather of
        </p>
        <ButtonGroup vertical className='mt-2'>
          <LinkContainer to={`/search/${city}`}>
            <Button variant='primary' size='lg' block>
              Your Location!
            </Button>
          </LinkContainer>

          <LinkContainer to={`/search/london`}>
            <Button variant='secondary' size='lg' block>
              London
            </Button>
          </LinkContainer>

          <LinkContainer to={`/search/berlin`}>
            <Button variant='success' size='lg' block>
              Berlin
            </Button>
          </LinkContainer>

          <LinkContainer to={`/search/moscu`}>
            <Button variant='warning' size='lg' block>
              Moscu
            </Button>
          </LinkContainer>

          <LinkContainer to={`/search/madrid`}>
            <Button variant='danger' size='lg' block>
              Madrid
            </Button>
          </LinkContainer>

          <LinkContainer to={`/search/new%20york`}>
            <Button variant='dark' size='lg' block>
              New York
            </Button>
          </LinkContainer>
        </ButtonGroup>
      </Container>
    </Jumbotron>
  )
}

export default HomeScreen
