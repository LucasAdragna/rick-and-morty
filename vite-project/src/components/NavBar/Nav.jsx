import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  
  return (
    <div className={style.container}>
      <ul>
      <Link to="/about"><li>ABOUT</li></Link>

      <Link to="/home"><li>HOME</li></Link>

      <Link to= "/favorites"><li><button className={style.boton}>FAVORITOS</button></li></Link>

      <SearchBar onSearch={props.onSearch} />
      </ul>
    </div>
  );
}

  /* <NavLink className={(isActive) => (isActive ? "active" : null)} to="/">
WELCOME
</NavLink> */

