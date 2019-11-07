import React from 'react';
import './Icone.scss'

const Icone = ({conteudo, imagem, titulo}) => {
  return (
    <div className="Icone">
      {/* <div className="icones"> */}
        <img src={imagem} alt="" />
        <h1>{titulo}</h1>
        <p>{conteudo}</p>
          </div>
      // </div>
  );
}

export default Icone;