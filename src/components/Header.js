import React from "react";
import "../stylesheet/Header.scss";
import title from "../images/title.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
          <img className="title" src={title} alt="Title Rick And Morty" />
      </header>
    );
  }
}

export default Header;
