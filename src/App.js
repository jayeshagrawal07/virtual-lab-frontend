import './App.css';
import NavBar from "./components/NavBar"
import {BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import HomeScreen from './screen/HomeScreen'
import AboutScreen from './screen/AboutScreen';
import ExperimentScreen from './screen/ExperimentScreen'
import ContactusScreen from './screen/ContactusScreen'
import SimulationScreen  from "./screen/SimulationScreen"
import RegisterScreen from "./screen/RegisterScreen"
import LoginScreen from "./screen/LoginScreen"
import FeedBackScreen from "./screen/FeedBackScreen"
import ExperimentDetails from "./Experiments/ExperimentDetails"

import Footer from './components/Footer'

function App() {
  return (
    <>
  <Router>
    <NavBar/> 
 <Routes>
     <Route  path ="/" element={<HomeScreen/>} />
     <Route  path ="/about" element={<AboutScreen/>} />
     <Route  path ="/contactus" element={<ContactusScreen/>} />
     <Route  path ="/experiments" element={<ExperimentScreen/>} />
     <Route  path="/signup" element={<RegisterScreen/>}/>
     <Route  path ="/user/login" element ={<LoginScreen/>} />
     <Route  path ="/simulation" element ={<SimulationScreen/>} />
     <Route  path ="/feedback" element ={<FeedBackScreen/>} /> 
     <Route  path ="/experiment/:id" element={<ExperimentDetails/>} />
                            
 </Routes>
 

      </Router>
  
  
   <Footer/>

   
    
  
    </> 

   



  );
}

export default App;
