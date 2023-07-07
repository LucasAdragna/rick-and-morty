
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css"
import { connect } from "react-redux";
import { addFav,removeFav } from "../../redux/actions";


const Card=({name,species,gender,onClose,status,image,id,addFav,removeFav,myFavorites}) => {
  
  const [isFav, setIsFav]= useState(false);

  const handleFavorite=()=>{
        isFav ? removeFav(id) : addFav({name,species,gender,onClose,status,image,id});
        setIsFav(!isFav)
        console.log({name,species,gender,onClose,status,image,id})
      };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
  }, [myFavorites]);
  
  return (

    <div className={style.cardContainer}>
      <div className={style.corazon}>
    {
        isFav ? (
      <button onClick={handleFavorite}>❤️</button>
     ) : (
      <button onClick={handleFavorite}>🤍</button>
     )
    }
    </div>
      <button className={style.closeButton} onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
      <img className={style.cardImg} src={image} alt={name}></img> 
      <p className={style.cardName}>{name}</p> </Link>
      <div className={style.cardInf}>
      <h2 className={style.cardInfo}>{species}</h2>
      <h2 className={style.cardInfo}>{status}</h2>
      </div>
      <h2 className={style.cardInfo}>{gender}</h2>
    </div>
  
  );
};

const mapDispatchToProps=(dispatch)=>{
return {
      addFav: (pj) => dispatch(addFav(pj)),
      removeFav: (id) =>  dispatch(removeFav(id))
}
};

const mapStateToProps=(state)=>{
  return{
    myFavorites: state.myFavorites
  }
};



export default connect( mapStateToProps, mapDispatchToProps)(Card);