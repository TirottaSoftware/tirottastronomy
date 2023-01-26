import React from 'react'
import Button from '../components/UI/Button'

function Home() {
    return (
        <div className='bg-home-hero top-0 left-0 -z-10 w-full h-screen py-[10%] lg:bg-center bg-left bg-cover'>
            <div className='w-10/12 mx-auto'>
                <h1 className='font-bold font-halvar uppercase lg:w-3/5 w-full text-5xl lg:text-7xl text-white'>Bring the Universe to Your Screen.</h1>
                <p className='w-full lg:w-2/5 text-xl my-4 text-body-gray font-tb font-medium'>Discover the wonders of the cosmos like never before with our collection of stunning images of astronomical objects. From the image of the day to location-based satellite images and images of Earth, we have it all. Experience the beauty of the universe in high-resolution and explore the vast expanse of space from the comfort of your own device.</p>
                <Button href="/apod" className='text-white font-normal font-tb text-2xl bg-brand py-4 px-16 inline-block mt-2'>Get Started</Button>
            </div>
        </div>
    )
}

export default Home