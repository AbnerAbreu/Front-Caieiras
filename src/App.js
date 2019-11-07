import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar.js';
import Header from './componentes/Header.js';
import Home from './componentes/Home.js';
import Cadastrar from './componentes/Cadastrar.js';
import CadastroColaborador from './componentes/CadastroColaborador.js';
import CadastrarUsuario from './componentes/CadastroUsuario.js';
import Section from './componentes/Section.js';
import Aside from './componentes/Aside.js';
import Footer from './componentes/Footer.js';
import Esportes from './componentes/Esportes.js';
import Sobre from './componentes/Sobre.js';






const App = () => {
  return (


    <BrowserRouter>
    
      <Navbar/>
      <Route  path="/" exact component={Home} />
      <Route path="/cadastrarusuario" exact component={Cadastrar} />
      <Route path="/cadastrarusuario" exact component={CadastrarUsuario} />
      <Route path="/cadastrarcolaborador" component={CadastroColaborador} />
      <Route path="/esportes" exact component={Esportes} />
      <Route path="/sobre" component={Sobre} />

    </BrowserRouter>
  );

}
export default App;
