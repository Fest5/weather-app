import React from 'react'
import {render} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'

it("renders correctly", () => {
    const {queryByTestId } = render(<Router><Header/></Router>)

    expect(queryByTestId("header")).toBeTruthy()
})