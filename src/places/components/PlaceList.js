import "./PlaceList.css";
import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card className="place-list-card">
          <h2>No places found, please add a place.</h2>
          <hr/>
          <i class="fas fa-plus"></i>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          imageUrl={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creatorId}
          coordinates={place.coordinates}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
