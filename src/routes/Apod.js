import React, { useEffect, useState } from 'react'
import { ReactComponent as FavouriteIcon } from '../assets/icons/favourite.svg'

import { useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import { getImageByDate } from '../services/apodService'
import { checkExisting, favourite } from '../services/favouritesService';

import Heading from '../components/UI/Heading';
import LoadingSpinner from '../components/UI/LoadingSpinner'
import Subheading from '../components/UI/Subheading';
import Button from '../components/UI/Button';

function Apod() {
    const [apod, setApod] = useState({})
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [loading, setLoading] = useState(false)
    const [existing, setExisting] = useState(false)
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        setImage(selectedDate)
    }, [])

    useEffect(() => {
        // Check if the selected image exists in the user's favourites, every time the user updates the date
        if (auth) {
            setLoading(true)
            checkExisting(apod, auth.user).then(exists => {
                setExisting(exists)
                setLoading(false)
            })
        }
    }, [apod])

    const handleFavourite = async () => {
        // Call the function responsible for adding the image to the user's favourites
        favourite(apod, auth.user)
            .then(() => {
                setExisting(!existing)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const setImage = (date) => {
        setLoading(true)
        // Get the APOD for a specific date
        getImageByDate(date)
            .then(res => {
                setApod(res)
                setSelectedDate(date)
                setLoading(false)
            })
            .catch(err => {
                alert(err)
                setLoading(false)
            })
    }

    return (
        <>
            <div className='mt-[5%] flex flex-col items-start lg:flex-row'>
                <div className='w-full lg:w-1/2 lg:mr-16 lg:ml-0'>
                    <Heading>Picture of the day</Heading>
                    <Subheading>{apod.title}</Subheading>
                    <p className='text-xl font-tb mb-2 text-body-gray'>
                        {apod.explanation}
                    </p>
                    <Subheading>Check a specific date's POTD</Subheading>
                    <DatePicker
                        className="w-full text-center text-xl py-2 px-8 mr-4"
                        selected={selectedDate}
                        onChange={setImage}
                        maxDate={new Date()}
                        onKeyDown={(e) => {
                            e.preventDefault();
                        }}
                    />
                </div>
                {
                    loading ? <LoadingSpinner /> :
                        <div className='w-full lg:w-auto'>
                            {
                                apod.media_type === "image" ?
                                    <>
                                        <div className='w-full relative'>
                                            <img src={apod.url} alt="apod" className='w-full min-h-[400px]' />
                                            <div className='w-full absolute bottom-8 right-8 flex items-center justify-end'>
                                                {
                                                    auth
                                                        ? <button onClick={handleFavourite} className={`mr-4 p-4 border-2 rounded-full ${existing ? "bg-white" : "bg-black bg-opacity-50 hover:bg-white hover:bg-opacity-20"}`}>
                                                            <FavouriteIcon width={32} height={32} />
                                                        </button>
                                                        : ""
                                                }
                                                <Button external href={apod.url} target="_blank">Open in New Tab</Button>
                                            </div>
                                        </div>
                                        <p className='text-xl font-tb text-body-gray mt-2'>{apod.date} by {apod.copyright ? apod.copyright : "Unknown"}</p>
                                    </>
                                    :
                                    <div>
                                        <p className='text-xl font-tb text-body-gray'>The requested POTD is of type video. Click the button below to see it.</p>
                                        <Button external href={apod.url} target="_blank" className="inline-block my-4 w-full text-center text-2xl font-tb font-medium">See Video</Button>
                                    </div>
                            }

                        </div>
                }
            </div>
        </>
    )
}

export default Apod