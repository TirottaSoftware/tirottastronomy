import React, { useEffect, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import LoadingSpinner from '../components/UI/LoadingSpinner'
import Heading from '../components/UI/Heading'

import { getImageByLocation, getLocation } from '../services/earthService'

function Earth() {
    const [earth, setEarth] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);

        // Get the user's current location, or use the default one
        getLocation()
            .then((res) => {
                return getImageByLocation(res.lon, res.lat)
            })
            .then(res => {
                setLoading(false);
                setEarth(res)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    },
        [])

    return (
        <>
            <div className='mt-[5%] flex flex-col items-center'>
                <div className='w-full mb-4'>
                    <Heading>EARTH</Heading>
                    <p className='text-xl font-tb text-body-gray my-2'>Landstat 8 imagery of your current location. Use the scroll wheel to zoom in and out.</p>
                </div>
                <div className='w-full'>
                    {
                        loading ? <LoadingSpinner /> :
                            <>
                                {!earth
                                    ? <p className='text-xl font-tb text-red-600 my-2'>Network Error. Could not load image. Check the logs for error details.</p>
                                    : <div className='mb-16'>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <div className='w-full cursor-grab min-h-[90vh] relative bg-brand bg-opacity-25'>
                                                    <img src={earth.url} alt="earth" />
                                                </div>
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                                }
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default Earth