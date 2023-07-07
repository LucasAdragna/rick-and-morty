import React,{ useEffect, useState } from "react";
import style from "./App.module.css";
import Cards from"./components/Cards/Cards";
import Nav from "./components/NavBar/Nav";
import Detail from"./components/Detail/Detail";
import About from "./components/Vista/About";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import Form from "./components/Form/form";
import Favorites from "./components/Favorito/Favorites";

function App() {

  const [characters, setCharacters] = useState([]); 
  const[carId,setCarId]= useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "lucas2@gmail.com";
  const PASSWORD = "lucas123";

  function onSearch(id) {

    if (carId.includes(parseInt(id))) {
      window.alert('Ya Existe!');
      return;
   };
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({data}) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          setCarId([...carId, data.id]);
        } else {
            window.alert("¡No hay personajes con este ID!");
        }
      });
  };

  function onClose(id) {
  
    setCharacters(
      characters.filter((pj) => {
        return pj.id !== Number(id);
      })
    );
  }

  function login(userData) {
    if (userData.email === EMAIL && userData.password === PASSWORD ) {
      setAccess(true);
      navigate("/home");
    }
  }
  
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  
  const location = useLocation();

  return (

    <div className={style.App}>

    {location.pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>

        <Route path="/" element={<Form login={login}/>}/>

        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>

        <Route path="/favorites" element={<Favorites/>}/>

        <Route path="/about" element={<About/>}/>

        <Route path="/detail/:id" element={<Detail/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
