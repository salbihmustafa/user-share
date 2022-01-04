import "./PlaceItem.css";
import React from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/UIElements/Button";

const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-card">
        <div className="place-img">
          <img src={props.imageUrl} alt={props.title}></img>
        </div>
        <div className="place-info">
          <div>
            <h2>{props.title}</h2>
          </div>
          <div>
            <h3>{props.address}</h3>
          </div>
          <div>
            <p>{props.description}</p>
          </div>
        </div>
        <hr />
        <div className="place-btns">
          <Button inverse><i class="fas fa-map"></i></Button>
          <Button inverse to={`/places/${props.id}`}><i class="fas fa-edit"></i></Button>
          <Button danger><i class="fas fa-trash-alt"></i></Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
