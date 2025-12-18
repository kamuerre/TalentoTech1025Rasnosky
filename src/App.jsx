import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import Fotocopias from './pages/Fotocopias';
import Impresiones from './pages/Impresiones';
import Impresion3D from './pages/Impresion3D';




function App() {
  const [busqueda, setBusqueda] = useState('');
  const [idioma, setIdioma] = useState('es');

  return (
    <BrowserRouter>
      <Header onBuscar={setBusqueda} setIdioma={setIdioma} idioma={idioma} />


      <main>
        <Routes>
          <Route path="/" element={<Home idioma={idioma} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos busqueda={busqueda} />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/fotocopias" element={<Fotocopias />} />
          <Route path="/impresiones" element={<Impresiones />} />
          <Route path="/impresion-3d" element={<Impresion3D />} />


        </Routes>
      </main>
      <Footer idioma={idioma} />
    </BrowserRouter>
  );
}

export default App;
