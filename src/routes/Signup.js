import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { signIn } from '../redux/auth.slice'
import { signup } from '../services/authService'

import Heading from '../components/UI/Heading'
import Input from '../components/UI/Input'

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [statusMessage, setStatusMessage] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validate input fields
        if (!email || !password || !passwordConfirm) {
            setStatusMessage("Please fill in all the required fields.")
            return;
        }
        if (password !== passwordConfirm) {
            setStatusMessage("Passwords do not match.")
            return;
        }

        // Register the user and update the global state
        signup(email, password)
            .then(data => {
                dispatch(signIn(data))
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                setStatusMessage(err.message)
                return;
            })
    }

    return (
        <div className='flex items-center justify-end w-full h-screen bg-auth-hero bg-cover'>
            <div className='w-full lg:w-1/2 h-full flex flex-col items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'>

                <form className='flex flex-col w-10/12 mx-auto items-center' onSubmit={handleSubmit}>
                    <Heading className='text-white'>discover the beauty of the astroworld!</Heading>
                    <p className='mb-8 text-white text-xl font-tb'>Create an account and create a unique gallery of your favourite astronomy images.</p>
                    <Input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Input type="password" placeholder='Confirm Password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                    <Input className='cursor-pointer bg-brand text-white' type="submit" value="Sign Up" />
                    <p className='mb-8 text-brand text-xl font-tb'>{statusMessage}</p>
                </form>
            </div>
        </div>
    )
}

export default Signup