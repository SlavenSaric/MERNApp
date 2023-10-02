import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

export const DUMMY_PLACES = [
    {id: 'p1',
    title: 'Empire Building', description: 'One of the most famous sky scrapers in the world.', image: 'https://image.stern.de/30507262/t/kK/v2/w1440/r1/-/empire-state-building.jpg', address: '20 W 34th St., New York, NY 10001, USA',
    location: {
        lat: '40.7484405',
        long: '-73.9856644'
    }, 
    creator: 'u1'
},
{id: 'p2',
    title: 'Empire Building', description: 'One of the most famous sky scrapers in the world.', image: 'https://image.stern.de/30507262/t/kK/v2/w1440/r1/-/empire-state-building.jpg', address: '20 W 34th St., New York, NY 10001, USA',
    location: {
        lat: '40.7484405',
        long: '-73.9856644'
    }, 
    creator: 'u2'
}
]

const UserPlaces = () => {
    const params = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === params)

    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces