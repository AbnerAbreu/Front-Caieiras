import React, {useState}  from 'react';
import './Section.scss';
import Icone from './Icone.js';
import icone1 from "./imagens/icon1.png";
import icone2 from "./imagens/icon2.png";
import icone3 from "./imagens/icon3.png";
import icone4 from "./imagens/boxing.png";
import icone5 from "./imagens/tennis.png";
import icone6 from "./imagens/natacao.png";

import { Link } from 'react-router-dom';
import Botao from './Botao';



const Section = () => {

  const [sport, setSport] = useState(false)

  const mostrarSport = () =>{
    setSport(!sport)
  }
  
  return (
    <div className="Section">
        <Icone imagem={icone1}  titulo="Basquete" />
        <Botao text="Participe"/>
        <Icone imagem={icone2} titulo="Futebol" />
        <Botao text="Participe"/>
        <Icone imagem={icone3} titulo="Volei"  />
        <Botao text="Participe"/>
        <div style={!sport ? {display: 'none'} : {display: 'block'}} className="divIcone">
         <Icone imagem={icone4} titulo={"Luta"}  />
         <Botao text="Participe"/>
         <Icone imagem={sport ? icone5 : ""} titulo={sport ? "Tênis" : ""} />
         <Botao text="Participe"/>
         <Icone imagem={sport ? icone6 : ""} titulo={sport ? "Natação" : ""} />
         <Botao text="Participe"/>
          </div>
        <div className="botao">
       <button onClick={mostrarSport}>{!sport ? "ver mais" : "ver menos"} </button>
        </div>
        </div>
  
    
  );
}

export default Section;