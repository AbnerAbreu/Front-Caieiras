import React from 'react';
import './Footer.scss';
import facebook from './imagens/facebook.png';
import whats from './imagens/whatsapp.png';
import insta from './imagens/instagram.png';

const Footer = () => {
  return (
    <div className="Footer">
        <div className="icones">
          <img src={facebook} alt="Facebook" />
          <img src={whats} alt="Whatsapp" />
          <img src={insta} alt="Instagram" />
        </div>
    </div>
  );
}

export default Footer;