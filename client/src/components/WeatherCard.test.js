import React from 'react'
import {render} from '@testing-library/react'
import WeatherCard from './WeatherCard'

it("renders correctly", () => {
    const {queryByTestId } = render(<WeatherCard/>)

    expect(queryByTestId("weather-card")).toBeTruthy()
})