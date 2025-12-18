import { useEffect, useState, useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

function Productos({ busqueda }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const { agregarAlCarrito } = useContext(CarritoContext);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await fetch(
          'https://6942fd1069b12460f3137adc.mockapi.io/products'
        );

        if (!response.ok) {
          throw new Error('Error al cargar los productos');
        }

        const data = await response.json();
        setProductos(data);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los productos. Intentá más tarde.');
      }
    };

    obtenerProductos();
  }, []);

  const productosFiltrados = productos.filter((producto) =>
    producto.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2>Productos</h2>

      {error ? (
        <p style={{ color: 'red', textAlign: 'center' }}>
          {error}
        </p>
      ) : productos.length === 0 ? (
        <div style={{ textAlign: 'center' }}>
          <div className="spinner"></div>
          <p>Cargando productos...</p>
        </div>
      ) : (
        <ul>
          {productosFiltrados.map((producto) => (
            <li key={producto.id}>
              <img
                src={producto.image}
                alt={producto.name}
                width={100}
              />
              <p>{producto.name}</p>
              <p>${producto.price}</p>
              <button onClick={() => agregarAlCarrito(producto)}>
                Agregar al carrito
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Productos;
