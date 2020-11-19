import './App.css';
import ListBasketball from './Components/ListBasketball/ListBasketball';
import Skill from './Components/Skill/Skill';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import React from 'react';

function App() {

    return ( 
        <div className = "App" > 
        {/* Header */}
        <Header/>
        {/* Banner */}
        <Banner/>
        { /* List Basketball  */ }
        <div style={{paddingTop:"200px"}}>      
              <ListBasketball /> 
        </div>
 
         { /* Skill Basketball  */ } 
         <Skill />
        <Footer />

        {/* <div className="backToTop" onClick={()=>window.scrollTo(0,0)}>BACK TO TOP</div> */}
      
        </div>
    );
}

export default App;