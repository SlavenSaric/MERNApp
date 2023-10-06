import React, { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const werbsearchHandler = () => {
    const dataForUrl = props.title.replace(" ", "+");

    const url = `https://www.google.com/search?q=${dataForUrl}`;
    window.open(url, "_blank");
  };

  const showDeleteHandler = () => {
    setDeleteModal(true);
  };
  const cancelDeleteHandler = () => {
    setDeleteModal(false);
  };

  const confirmDeleteHandler = () => {
    console.log("deleting...");
    setDeleteModal(false)
  };

  return (
    <>
      
        <Modal
          show={deleteModal}
          onCancel={cancelDeleteHandler}
          header="Are you sure?"
          footerClass="place-item__modal-actions"
          footer={
            <>
              <Button inverese onClick={cancelDeleteHandler}>CANCEL</Button>
              <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
            </>
          }
        >
          <p>Do you want to procees and delete this place?</p>
        </Modal>
      
      <li className="place-item">
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
            <Button inverse onClick={werbsearchHandler}>
              WEBSEARCH
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger onClick={showDeleteHandler}>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
