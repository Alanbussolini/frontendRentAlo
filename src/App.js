
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css' 

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from "./components/layout/Footer";

import ContactoPage from './pages/ContactoPage';
import DestinosPage from "./pages/DestinosPage";
import NosotrosPage from "./pages/NosotrosPage";
import HomePage from "./pages/HomePage";
import NovedadesPage from "./pages/NovedadesPage";

import SantadeptosPage from "./components/destinos/santadeptosPage";
import PinadeptosPage from "./components/destinos/pinadeptosPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Nav />
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/contacto" exact Component={ContactoPage} />
          <Route path="/destinos" exact Component={DestinosPage} />
          <Route path="/nosotros" exact Component={NosotrosPage} />
          <Route path="/novedades" exact Component={NovedadesPage} />

          <Route path="/destinos/santadeptos" exact Component={SantadeptosPage} />
          <Route path="/destinos/pinadeptos" exact Component={PinadeptosPage} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;
