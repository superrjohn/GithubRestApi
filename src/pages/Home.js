import React from 'react'

import { Form, Button, Stack } from 'react-bootstrap'

import { useNavigate, Outlet } from 'react-router-dom';

export default function Home() {

  let [userData, setUserData] = React.useState('')
  let  navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/user/${userData}`)
  }

  function handleChange(e){
    let name = e.target.value.split(' ').join('')
    setUserData(name)
  }

  return (
    <div>
    
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Stack direction="horizontal" gap={3}>
            <Form.Label>Search User</Form.Label>
            <Form.Control className="me-auto" type='text'
            placeholder="Please start searching for users" 
            onChange={handleChange}/>

            <Button variant="secondary" type='submit'>Submit</Button>
            <div className="vr" />
            <Button variant="outline-danger" type='reset'>Reset</Button>

          </Stack>
        </Form.Group>
      </Form>

      <Outlet/>
    </div>
  )
}