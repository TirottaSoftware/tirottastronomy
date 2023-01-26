import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";

import LoadingSpinner from '../components/UI/LoadingSpinner';
import Heading from '../components/UI/Heading';
import Subheading from '../components/UI/Subheading';

import { getEpicObject, getAvailableDates } from '../services/epicService'

import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

function EpicTest() {
    const [epicObject, setEpicObject] = useState({})
    const [availableDates, setAvailableDates] = useState([])
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState(new Date())

    useEffect(() => {
        setLoading(true)

        // Get the list of available dates and pass it to the DatePicker component
        getAvailableDates()
            .then(res => {
                setAvailableDates(res);
                setDate(res[0])
            })

    }, [])

    const setDate = (date) => {
        setSelected(date)
        setLoading(true)

        // Get details about a specific date's EPIC
        getEpicObject(date)
            .then(res => {
                setEpicObject(res)
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            })
    }

    return (
        <>
            <div className='mt-[5%] flex items-start'>
                <div className='w-1/2 mr-16'>
                    <Heading>EPIC</Heading>
                    <Subheading>Date: {loading ? "" : selected.toISOString().split("T")[0]}</Subheading>
                    <p className='text-xl font-tb text-body-gray'>Imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument. Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope.</p>
                    <p className='text-lg font-light text-body-gray mt-4 mb-2'>{epicObject.caption}</p>
                    <h2 className='text-3xl font-halvar my-4'>Choose from the available dates:</h2>
                    {
                        loading ? <LoadingSpinner /> :
                            <div>
                                <DatePicker
                                    className="w-full text-center text-xl py-2 px-8 mr-4"
                                    selected={selected}
                                    onChange={setDate}
                                    includeDates={availableDates}
                                    onKeyDown={(e) => {
                                        e.preventDefault();
                                    }}
                                />
                            </div>
                    }
                </div>
                <div className='w-1/2 grid place-items-center'>
                    {
                        loading ? <LoadingSpinner /> :
                            <div className='w-full relative'>
                                <img loading='lazy' src={epicObject.imageUrl} alt="apod" className='w-full' />
                                <Button href={epicObject.imageUrl} external target="_blank" className="my-4 w-full inline-block text-center">Open Image in New Tab</Button>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default EpicTest