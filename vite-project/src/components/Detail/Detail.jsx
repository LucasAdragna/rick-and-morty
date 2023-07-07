import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Detail() {

  const[character, setCharacter]= useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
    <div>
      <h1>Estoy en Detail</h1>
      <p>{character.name}</p>
      <h2>{character.species}</h2>
      <h2>{character.status}</h2>
      <img src={character.image} alt={character.name}></img>
    </div>
  );
}
