import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheet/CharacterList.scss";
import { Link } from "react-router-dom";

const CharacterList = (props) => {
  const itemsDetails = props.items.map((item) => {
    return <CharacterCard key={item.id} id={item.id} item={item} />;
  });

  return (
    <section className="sections_cards">
      {props.items.length === 0 ? (
        <>
        <p className="not_found">No matches found</p>
        <Link to="/#" className="parpadea_not_found_btn">
        <span>Go Back</span>
        </Link>
        </> 
      ) : (
        <ul className="cards">{itemsDetails}</ul>
      )}
    </section>
  );
};

export default CharacterList;
