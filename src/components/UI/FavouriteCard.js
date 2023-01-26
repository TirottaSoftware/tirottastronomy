import React from 'react'
import Button from './Button'

function FavouriteCard({ img, removeFavourite }) {
    return (
        <div className='bg-white shadow-favourite-card flex flex-col justify-between h-[700px] w-[400px] mx-auto lg:ml-0 lg:mr-8 mb-8 p-4'>
            <div className='w-full'>
                <img loading='lazy' src={img.imageUrl} className='w-full h-[400px]' />
            </div>
            <p className='w-full text-xl my-4 text-body-gray font-tb font-medium'>{img.title}</p>
            <div className='w-full my-4 flex flex-col items-center'>
                <Button className='lg:text-xl mb-4 w-full text-center' href={img.imageUrl} target="_blank">Open in New Tab</Button>
                <Button className='lg:text-xl w-full text-center' onClick={removeFavourite} target="_blank" type='ghost'>Remove from Favourites</Button>
            </div>
        </div>
    )
}

export default FavouriteCard