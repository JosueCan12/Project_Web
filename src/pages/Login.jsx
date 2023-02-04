
import React, { useState } from 'react'
import Navbar from './../components/Navbar';

const Login = () => {
  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");

  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
      alert("Complete Los Datos Faltantes!!");
    }else{
      if(usu === "admin" && pas==="123"){
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      }else{
        setMiLogin("false");
        alert("Error De Usuario y/o Contraseña!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
        
      }
    }
  }
  return ( 

    <div>
      <form id="form_login">
         <div>
            <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
            <label htmlFor="txtusu"><strong>Username</strong></label>
            <input type="text" id="txtusu" style={{textAlign:"center"}}  onChange={ (e)=>setUsu(e.target.value) }  required/>
        </div>

        <div>
            <label htmlFor="txtpas"><strong>Password</strong></label>
            <input type="password" id="txtpas" style={{textAlign:"center"}}  onChange={ (e)=>setPas(e.target.value) }  required/>
        </div><br/>
        <input type="submit"   value="Login" onClick={ iniciarSesion }/>
      </form>
      {miLogin === "true" && <Navbar usu={usu}/> }
      </div>
   );
}
 
export default Login;