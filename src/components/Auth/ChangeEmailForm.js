import React, { useState } from 'react'
import { changeEmail } from '../../services/authService'

import Button from '../UI/Button'
import Input from '../UI/Input'
import Subheading from '../UI/Subheading'

function ChangeEmailForm({ user }) {
    const [statusMessage, setStatusMessage] = useState('')
    const [emailInput, setEmailInput] = useState(user?.email)

    const handleEmailUpdate = () => {
        changeEmail(user, emailInput)
            .then(() => {
                setStatusMessage('Please follow the link in your (new) email to confirm the address change.')
            })
            .catch(err => {
                setStatusMessage(err.message)
                return;
            })
    }

    return (
        <>
            <Subheading>Email Address:</Subheading>
            <div className='flex lg:flex-row flex-col items-center mt-4'>
                <Input type='email' value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="Email" className='shadow-favourite-card w-full lg:w-auto mx-0 lg:ml-0 lg:mr-8' />
                <Button onClick={handleEmailUpdate} className="w-full lg:w-auto mx-0 text-center mt-4 lg:mt-0">Update</Button>
            </div>
            <p className='w-full text-xl mb-8 text-body-gray font-tb font-medium'>{statusMessage}</p>
        </>
    )
}

export default ChangeEmailForm