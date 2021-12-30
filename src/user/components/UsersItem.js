import "./UsersItem.css";
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";
import Avatar from "../../shared/components/UIElements/Avatar";

const UsersItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <Avatar
            image={props.image}
            alt={props.name}
            className="user-item__avatar"
          />
          <div className="user-item__info">
            <h3>{props.name}</h3>
            <h4>
              {props.places} {props.places === 1 ? "Place" : "Places"}
            </h4>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UsersItem;
