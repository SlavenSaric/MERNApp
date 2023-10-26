import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import { AuthContext } from "../../shared/context/auth-context";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import "./PlaceItem.css";
import { useHttpClient } from "../../shared/hooks/http-hook";

const PlaceItem = (props) => {
  const {isLoading, error, sendRequest, clearError} = useHttpClient()
  const auth = useContext(AuthContext)
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

  const confirmDeleteHandler = async () => {
    setDeleteModal(false)
    try{
      await sendRequest(`http://localhost:5000/api/places/${props.id}`, 'DELETE', null, {Authorization: 'Bearer ' + auth.token})
      props.onDelete(props.id)
    }catch(err){

    }
  };

  return (
    <>
        <ErrorModal error={error} onClear={clearError} />
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
          {isLoading  && <LoadingSpinner asOverlay />}
          <div className="place-item__image">
            <img src={`http://localhost:5000/${props.image}`} alt={props.title} />
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
            {}
            {auth.userId === props.creatorId && <Button to={`/places/${props.id}`}>EDIT</Button>}
            {auth.userId === props.creatorId && <Button danger onClick={showDeleteHandler}>DELETE</Button>}
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
