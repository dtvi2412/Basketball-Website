import './App.css';
import ListBasketball from './Components/ListBasketball/ListBasketball';
import Skill from './Components/Skill/Skill';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
    return ( 
        <div className = "App" > 
        {/* Header */}
        <Header/>
        { /* List Basketball  */ }
        <div style={{paddingTop:"200px"}}>      
              <ListBasketball /> 
        </div>
 
         { /* Skill Basketball  */ } 
         <Skill />
        <Footer />
       
        </div>
    );
}

export default App;