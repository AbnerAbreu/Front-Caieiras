import React from 'react';
import './Esportes.scss';
import ConteudoEsporte from './ConteudoEsporte.js';
import estadioFerracini from './imagens/estadioFerracini.jpg';
import piscina from './imagens/piscina.jpg';
import campinho from './imagens/campinho.jpg';



const Esportes = () => {
  return (
    <div className="Esportes">
       <ConteudoEsporte img={estadioFerracini} titulo="Estadio Municipal Carlos Ferracini" rua="Rua:Portugal 300" modalidade="Modalidade:Futebol" hora="horario 14:00" dia="08/11/2019"  />
       <ConteudoEsporte img={piscina} titulo="Estadio Municipal Carlos Ferracini" rua="Rua:Portugal 300" 
       modalidade="Modalidade: Natação"  hora="horario 17:00" dia="12/11/2019"  />
       <ConteudoEsporte img={campinho} titulo="Esporte Clube São Francisco" rua=" R São Pedro, 293  777"
       modalidade="Modalidade:Futebol" hora="horario 13:00" dia="15/11/2019"  />

    </div>
  );
}

export default Esportes;