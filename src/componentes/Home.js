import React from 'react';
import './Home.scss';
import Header from './Header';
import Section from './Section';
import Aside from './Aside';
import Footer from './Footer';


const Home = () => {
  return (
    <div className="Home">
        <Header/>
        <Section/>
        <Aside/>
        <Footer/>
        
    </div>
  );
}

export default Home;