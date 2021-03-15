import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import {render, fireEvent, act} from '@testing-library/react'
import HomeScreen from './HomeScreen'

it("renders correctly", () => {
    const {queryByTestId, queryByPlaceholderText } = render( <Router><HomeScreen/></Router>)

    expect(queryByTestId("home-screen")).toBeTruthy()
})