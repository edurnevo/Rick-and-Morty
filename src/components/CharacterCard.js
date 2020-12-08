import React from "react";
import "../stylesheet/CharacterCard.scss";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <li className="card">
      <Link
        to={`/user/${props.item.id}`}
        className="link_btn"
        title="Character Details"
      >
        <img
          className="card-img"
          src={props.item.image}
          alt="Character"
          title={`Foto de ${props.item.name}`}
        ></img>
        <div className="cards_text">
          <h4 className="card_title">{props.item.name}</h4>
          <p className="card_name">{props.item.species}</p>
        </div>
      </Link>
    </li>
  );
};

export default CharacterCard;
