import React from 'react';
import './Aside.scss';
import envelope from './imagens/envelope.png';


const Aside = () => {
  return (
    <div className="Aside">
        <div className="envelope">
            <img src={envelope} alt="" />
            <div className="texto">
            <p>SportCaieiras@gmail.com</p>
            </div>
        </div>
    </div>
  );
}

export default Aside;