import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()) {
            history.push(`/search/${keyword}`)
            setKeyword('')
        } else {
            history.push('/')
        }
    }

    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.target.value)} placeholder='Search a city...' className='mr-sm-2 ml-sm-5' value={keyword}>

            </Form.Control>
            <Button data-testid="search-button" type='submit' variant='outline-success' className='p-2'>Search</Button>
            
        </Form>
    )
}

export default SearchBox
