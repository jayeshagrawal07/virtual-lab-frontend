import React, { useState, useEffect } from 'react'
import { Link ,useLocation } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import { useNavigate } from "react-router-dom";

function LoginScreen({  }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const redirect = location.search ? location.search.split('=')[1] : '/user/login'
    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate,userInfo,redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        setMessage('login successfull')
        dispatch(login(email, password ,name))
    }

    return (
        <FormContainer>
            <h1>log In </h1>
            {message && <Message variant='success'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Login
                </Button>
            </Form>
                 
            <Row className='py-3'>
                <Col>
                    New Customer? <Link
                        to='/signup'>Register</Link>
                </Col>
            </Row>
            

        </FormContainer>
    )
}

export default LoginScreen