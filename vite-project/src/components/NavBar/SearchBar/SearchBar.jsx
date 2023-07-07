
import React, { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  
  const [id, setId] = useState("");

  const handleChange = (evento) => {
    // console.log("funciona el handle", evento.target.value);
    evento.preventDefault()
    setId(evento.target.value);
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        placeholder="Busca un personaje"
        onChange={handleChange}
        value={id}
      />
      <button
        className={style.button}
        onClick={(e) => {
  e.preventDefault()
  props.onSearch(id);}}>Agregar </button>

    </div>
  );
}

// input.addEventListener("on change", function(evento){ })
