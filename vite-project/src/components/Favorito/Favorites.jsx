import { filterCards, orderCards } from "../../redux/actions";
import {connect} from "react-redux";
import Card from "../Cards/Card";
import {useState} from "react";
import style from "./Favorites.module.css"


const Favorites=({myFavorites,orderCards,filterCards}) => {
  
  const[aux, setAux]= useState(false);
  
    const handleOrder=(e)=>{
      orderCards(e.target.value)
      setAux(!aux);
    };
    const handleFilter=(e)=>{
        filterCards(e.target.value)
    };
    
    return (

  <div className={style.select}>
<div className={style.selecciones}>
  <select onChange={handleOrder}>
      <option>ORDEN:</option>
      <option value="A">A</option>
      <option value="D">D</option>
</select>
<select onChange={handleFilter}>
    <option>GENDER:</option> 
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Genderless">Genderless</option>
    <option value="unknown">unknown</option>
</select>
</div>

       { myFavorites?.map((pj) => {
        return(
          <Card
            key={pj.id}
           id={pj.id}
            name={pj.name}
            species={pj.species}
            gender={pj.gender}
            status={pj.status}
            onClose={pj.onClose}
            image={pj.image}/>
            )
          })}
          
      </div>
    );
  }

const mapDispatchToProps=(dispatch)=>{
return {
  orderCards: (order)=>{dispatch(orderCards(order))},
  filterCards: (gender)=>{dispatch(filterCards(gender))}
}
}
const mapStateToProps=(state)=> {
    return {
        myFavorites: state.myFavorites,
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Favorites);