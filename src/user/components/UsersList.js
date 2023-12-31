import React from "react";
import "./UsersList.css";
import Card from "../../shared/components/UIElements/Card";
import UsersItem from "./UserItem";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card className="center">
        <h2>No users Found</h2>
      </Card>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((item) => (
        <UsersItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          placeCount={item.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
