import React from "react"
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Navbar, Container } from "react-bootstrap"
import SearchBox from './SearchBox'

const Header = () => {
  return (
    <header data-testid="header">
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
        <Link to='/'>
            <Navbar.Brand>Weather App &#127780;</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history}></SearchBox>}></Route>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
