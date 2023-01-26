import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { signIn } from '../redux/auth.slice'
import { login } from '../services/authService'

import Heading from '../components/UI/Heading'
import Input from '../components/UI/Input'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [statusMessage, setStatusMessage] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validate input fields
        if (!email || !password) {
            setStatusMessage("Please fill in all the required fields.")
            return;
        }

        // Log the user in and update the global state
        login(email, password)
            .then(data => {
                dispatch(signIn(data))
                navigate('/')
            })
            .catch(err => {
                setStatusMessage(err.message)
            })
    }

    return (
        <div className='flex items-center w-full h-screen bg-auth-hero bg-cover'>
            <div className='w-full lg:w-1/2 h-full flex flex-col items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'>
                <form className='flex flex-col w-10/12 mx-auto items-center' onSubmit={handleSubmit}>
                    <Heading className='text-white'>welcome abroad!</Heading>
                    <p className='mb-8 text-white text-xl font-tb'>Enter your account credentials to view your favourite astronomy images.</p>
                    <Input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Input className='cursor-pointer bg-brand text-white' type="submit" value="Log In" />
                    <p className='mb-8 text-brand text-xl font-tb'>{statusMessage}</p>
                </form>
            </div>
        </div>
    )
}

export default Login