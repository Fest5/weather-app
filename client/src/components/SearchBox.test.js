import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import SearchBox from './SearchBox'

it("renders correctly", () => {
    const {queryByTestId, queryByPlaceholderText } = render(<SearchBox/>)

    expect(queryByTestId("search-button")).toBeTruthy()
    expect(queryByPlaceholderText("Search a city...")).toBeTruthy()
})

describe("Input value", () => {
    it("updates on change", () => {
        const {queryByPlaceholderText} = render(<SearchBox/>)

        const searchInput = queryByPlaceholderText('Search a city...')

        fireEvent.change(searchInput, {target: {value: "test"}})

        expect(searchInput.value).toBe("test")
    })
})

