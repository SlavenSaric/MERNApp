import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

export const DUMMY_PLACES = [
    {id: 'p1',
    title: 'Empire State Building', description: 'One of the most famous sky scrapers in the world.', image: 'https://image.stern.de/30507262/t/kK/v2/w1440/r1/-/empire-state-building.jpg', address: '20 W 34th St., New York, NY 10001, USA',
    location: {
        lat: '40.7484405',
        long: '-73.9856644'
    }, 
    creator: 'u1'
},
{id: 'p2',
    title: 'Emp. Building', description: 'One of the most famous sky scrapers in the world.', image: 'https://image.stern.de/30507262/t/kK/v2/w1440/r1/-/empire-state-building.jpg', address: '20 W 34th St., New York, NY 10001, USA',
    location: {
        lat: '40.7484405',
        long: '-73.9856644'
    }, 
    creator: 'u2'
}
]

const UserPlaces = () => {
    const [loadedPlaces, setLoadedPlaces] =useState()
    const {isLoading, error,sendRequest,clearError} = useHttpClient()
    const userId = useParams().userId
    
    useEffect(()=> {
        const fetchPlaces = async () => {
            try{
                const responseData = await sendRequest(`http://localhost:5000/api/places/user/${userId}`)
                setLoadedPlaces(responseData)
            }catch(err){
                
            }
        }
        fetchPlaces()
    }, [sendRequest, userId])
    
    console.log(loadedPlaces);


    return <>
    <ErrorModal error={error} onClear={clearError}/>
    {isLoading && <div className="center">
        <LoadingSpinner /></div>}
    {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} />}
    </>
}

export default UserPlaces