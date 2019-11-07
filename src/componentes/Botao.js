import React from 'react';
import './Botao.scss';
import {Link} from "react-router-dom";


const Botao = ({ text }) => {
    return (
        <div className="retabutton">
        <div className="botaocd">
       <Link to="cadastrarusuario"> <button className="botaozinho">{text}</button> </Link>
        </div>
        </div>
    )
}
export default Botao;