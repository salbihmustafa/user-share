import "./PlaceItem.css";
import React, { useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/UIElements/Button";
import Modal from "../../shared/components/UIElements/Modal";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>THE MAP!</h2>
        </div>
      </Modal>
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
            <Button inverse onClick={openMapHandler}>
              <i class="fas fa-map"></i>
            </Button>
            <Button inverse to={`/places/${props.id}`}>
              <i class="fas fa-edit"></i>
            </Button>
            <Button danger>
              <i class="fas fa-trash-alt"></i>
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
