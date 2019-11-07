import React, { useState } from "react";
import {Link} from "react-router-dom";  
import sport from './imagens/esporte.png';
import "./Navbar.scss";




const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);
  console.log(menuAtivo)
  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };
  const fecharMenu = () =>{
    setMenuAtivo(false)
  }

  return (
    <div className="Navbar">
      <nav>
      <div className="titulo">
         <img src={sport} alt="sport" />
      </div>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span className={menuAtivo ? "tiro1" : ""}></span>
          <span className={menuAtivo ? "tiro2" : ""}></span>
          <span className={menuAtivo ? "tiro3" : ""}></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/" >Home</Link>
        <Link onClick={fecharMenu} to="/cadastre-se" >Cadastre-se</Link>
        <Link onClick={fecharMenu} to="/esportes" >Esportes</Link>
        <Link onClick={fecharMenu} to="/sobre" >Sobre Nós</Link>
        <Link onClick={fecharMenu} to="/patrocinador" >Patrocinador</Link>

      </section>
  
    </div>
  );
};
export default Navbar;
