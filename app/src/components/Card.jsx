import React from "react";

const Card = ({ userData }) => {
  const { name, email, description, age } = userData;
  return (
    <div className="box">
      <div className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="./avatar.jpg" alt="avatar" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <strong>My name is {name}</strong>
            <br />
            Email: {email}
            <br />
            About me: {description}
            <br />
            My age: {age}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
