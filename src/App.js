
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Projet from './Components/Projet/Projet';
import Navbar from './Components/Navbar/Navbar';
import Calculatrice from './Components/Calculatrice/Calculatrice';
import Carousel from './Components/Caroussel/Caroussel';
import Weather from './Components/Weather/Weather-app';
import Convertisseur from './Components/Convertisseur/Convertisseur';
import Table from './Components/Table/Table';
import Drag from './Components/Drag/Drag-drop';
import Calendrier from './Components/Calendrier/Calendrier'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Navbar/>  
   
<Routes>
  <Route path= '/' element={<Home/>} />
  <Route path= '/Projet' element={<Projet/>} />
  <Route path= '/Calculatrice' element={<Calculatrice/>} />
  <Route path= '/Caroussel' element={<Carousel/>} />
  <Route path= '/Weather-app' element={<Weather/>} />
  <Route path= '/Convertisseur' element={<Convertisseur/>} />
  <Route path= '/Table' element={<Table/>} />
  <Route path= '/Drag' element={<Drag/>} />
  <Route path= '/Calendrier' element={<Calendrier/>} />
</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
