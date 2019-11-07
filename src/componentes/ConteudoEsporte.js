import React from 'react';
import './ConteudoEsport.scss';


const ConteudoEsporte = ({img,titulo,rua,hora,nome,dia,modalidade}) => {
  return (
    <div className="ConteudoEsporte">
        <div className="imagem">
        <img src={img} alt=""></img>
        </div>

        <div className="local">
        <h1>{titulo}</h1>
        <p className="rua">{rua}</p>
         <p>{modalidade}</p>
        </div>
        <div className="conteudo">
         <p className="hora">{hora}</p>
        <h5 className="dia">{dia}</h5>
        </div>
         <input type="radio"></input>
        <label>Confirme sua presença</label>
         {/* <h2>{nome}</h2>  */}
        </div>
  );
}

export default ConteudoEsporte;