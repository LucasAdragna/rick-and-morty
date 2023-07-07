
import React, { useState } from "react";
import style from "./form.module.css";
import validate from "../Funciones/validation.js";

const Form=(props)=> {

  const [userData, setUserData] = useState({
    email:"",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handlChange = (event) => {
    const {name,value}= event.target;
    setUserData({...userData, [name]:value})
    setErrors(validate({...userData, [name]:value}))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (

    <div className={style.formContainer}>

      <form className={style.formulario} onSubmit={handleSubmit}>

        <label className={style.Label} htmlFor=""><b>EMAIL:</b> </label>
        <input className={style.inputUno} 
        type="text" value={userData.email} name="email" onChange={handlChange}></input> 
         <label className={style.Label} htmlFor=""><b>PASSWORD:</b> </label>
        <input className={style.inputDos} 
        type="text" value={userData.password} name="password" onChange={handlChange}></input>
        <br></br>
        <span className={style.error}>{errors.email}</span>
        <span className={style.error2}>{errors.password}</span>
       
        <button className={style.submit} type="submit">Submit</button>
      </form>


        
    </div>
  );
}

export default Form;