import React from "react";

import Card from "../../shared/components/UIElements/Card";
import "./PlaceList.css";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card className="padd">
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.places.map((item) => (
        <PlaceItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          address={item.address}
          creatorId={item.creator}
          coordinates={item.location}
          onDelete={props.onDeletePlace}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
