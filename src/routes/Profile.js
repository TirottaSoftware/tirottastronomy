import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { getFavourites, removeFromFavourites } from '../services/favouritesService';

import FavouriteCard from '../components/UI/FavouriteCard';
import Subheading from '../components/UI/Subheading'
import Heading from '../components/UI/Heading'
import ChangeEmailForm from '../components/Auth/ChangeEmailForm';

function Profile() {
    const auth = useSelector((state) => state.auth);
    const [favourites, setFavourites] = useState([])
    const navigate = useNavigate()

    const removeFavourite = (img) => {
        // Remove the image from the user's favourites and reload the page to apply the changes to the DOM
        removeFromFavourites({ url: img.imageUrl }, auth.user).then(() => navigate(0))
    }

    useEffect(() => {
        // Get the user's list of favourite images and update the state accordingly
        getFavourites(auth.user)
            .then(data => {
                setFavourites(data)
            })
    }, [])

    return (
        <div>
            <Heading className='mt-8'>Welcome back, {auth.user.email.toString().split('@')[0]}</Heading>
            <p className='w-full text-xl mb-8 text-body-gray font-tb font-medium'>Account created at: {auth.user.created_at.toString().split('T')[0]}</p>

            <ChangeEmailForm user={auth.user} />

            <Subheading>Your Favourite Images:</Subheading>
            <div className='w-full flex items-center lg:items-start flex-wrap my-8'>
                {
                    favourites.length > 0 ? favourites.map((img, index) => {
                        return <FavouriteCard removeFavourite={() => removeFavourite(img)} img={img} key={index} />
                    })
                        : <div>
                            <p className='w-full text-xl text-body-gray font-tb font-medium'>You have no favourite images.</p>
                            <Link to='/apod' className='underline text-brand text-xl font-medium'>Visit the APOD page to add to your list.</Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default Profile