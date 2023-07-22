/** @format */

import React, { useEffect, useState } from "react";
import style from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/NavBar/Nav";
import Detail from "./components/Detail/Detail";
import About from "./components/Vista/About";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./components/Form/form";
import Favorites from "./components/Favorito/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [carId, setCarId] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  //const EMAIL = "lucas2@gmail.com";
  //const PASSWORD = "lucas123";

  async function onSearch(id) {
    try {
      if (carId.includes(parseInt(id))) {
        return window.alert("Ya Existe!");
      }
      const url = `http://localhost:3001/character/${id}`;
      const { data } = await axios(url);
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
        setCarId([...carId, data.id]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log("hola");
      return { error: error.message };
    }
  }

  function onClose(id) {
    setCharacters(
      characters.filter((pj) => {
        return pj.id !== Number(id);
      })
    );
  }

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/user/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    });
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const location = useLocation();

  return (
    <div className={style.App}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
