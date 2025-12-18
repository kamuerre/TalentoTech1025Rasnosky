import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

function Carrito() {
  const {
    carrito,
    sumarCantidad,
    restarCantidad,
    eliminarProducto,
    vaciarCarrito,
  } = useContext(CarritoContext);

  const total = carrito.reduce(
    (acc, prod) => acc + prod.price * prod.cantidad,
    0
  );

  // 🔗 Mercado Pago (modo demostración)
  const linkMercadoPago =
    'https://www.mercadopago.com.ar/checkout/v1/redirect';

  if (carrito.length === 0) {
    return <p style={{ textAlign: 'center' }}>El carrito está vacío</p>;
  }

  return (
    <div>
      <h2>Carrito</h2>

      <ul>
        {carrito.map((prod) => (
          <li key={prod.id}>
            <img src={prod.image} alt={prod.name} />

            <p><strong>{prod.name}</strong></p>
            <p>Precio: ${prod.price}</p>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => restarCantidad(prod.id)}>-</button>
              <span>{prod.cantidad}</span>
              <button onClick={() => sumarCantidad(prod.id)}>+</button>
            </div>

            <p>Subtotal: ${prod.price * prod.cantidad}</p>

            <button onClick={() => eliminarProducto(prod.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <h3>Total: ${total}</h3>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button onClick={vaciarCarrito}>Vaciar carrito</button>

        <a
          href={linkMercadoPago}
          target="_blank"
          rel="noreferrer"
        >
          <button>Comprar con Mercado Pago</button>
        </a>
      </div>

      <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '1rem' }}>
        * El pago se redirige a Mercado Pago (modo demostración)
      </p>
    </div>
  );
}

export default Carrito;

