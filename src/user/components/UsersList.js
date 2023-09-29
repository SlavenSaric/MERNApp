import React from "react";
import "./UsersList.css";
import UsersItem from "./UserItem";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users Found</h2>
      </div>
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
