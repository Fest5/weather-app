import React from 'react'
import {render, cleanup} from '@testing-library/react'
import WeatherCard from './WeatherCard'
import "@testing-library/jest-dom"

afterEach(cleanup)

it("renders correctly", () => {
    const {queryByTestId } = render(<WeatherCard/>)

    expect(queryByTestId("weather-card")).toBeTruthy()
})

it("renders the title with city prop", () => {
    const {queryByTestId } = render(<WeatherCard city='london'/>)

    expect(queryByTestId("weather-card")).toHaveTextContent('london')
})