import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { textos } from '../i18n/textos';

function Header({ onBuscar, setIdioma, idioma }) {
  const [texto, setTexto] = useState('');
  const { carrito } = useContext(CarritoContext);
  const t = textos[idioma];

  const totalCantidad = carrito.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  return (
    <header>
      <nav>
        <Link to="/">{t.header.home}</Link>
        <Link to="/productos">{t.header.productos}</Link>
        <Link to="/carrito">🛒 {totalCantidad}</Link>
        <Link to="/contacto">{t.header.contacto}</Link>

        <button onClick={() => setIdioma('es')}>ES</button>
        <button onClick={() => setIdioma('en')}>EN</button>
        <button onClick={() => setIdioma('he')}>HE</button>

        <input
          type="text"
          placeholder={t.header.buscar}
          value={texto}
          onChange={(e) => {
            setTexto(e.target.value);
            onBuscar(e.target.value);
          }}
        />
      </nav>
    </header>
  );
}

export default Header;
