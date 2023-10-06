import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import './PlaceItem.css'

const PlaceItem = (props) => {

    const werbsearchHandler = () => {
        
        const dataForUrl = props.title.replace(' ', '+') 
        
        const url = `https://www.google.com/search?q=${dataForUrl}`
        window.open(url, '_blank')
    }

    return <li className="place-item">
        <Card className="place-item__content">
        <div className="place-item__image">
            <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h2>{props.address}</h2>
            <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
            <Button inverse onClick={werbsearchHandler}>WEBSEARCH</Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
        </div>
        </Card>
    </li>
}

export default PlaceItem