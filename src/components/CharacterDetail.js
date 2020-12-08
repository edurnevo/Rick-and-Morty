import React from "react";
import "../stylesheet/CharacterDetail.scss";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <section className="details_card">
      <img className="card_img" src={props.image} alt="Character"></img>
      <div className="detailed_card">
        <Link to="/" className="back_btn">
          <span>Go Back</span>
        </Link>
        <ul className="list_name">
          <li>{props.name}</li>
          <li>{props.species}</li>
          <li>{props.status}</li>
          <li>{`Appears in ${props.episodes.length} episodes`}</li>
          <li>{`From planet "${props.origin}"`}</li>
        </ul>
      </div>
    </section>
  );
};

export default CharacterDetail;
