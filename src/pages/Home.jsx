import { textos } from '../i18n/textos';
import { Link } from 'react-router-dom';

function Home({ idioma }) {
  const t = textos[idioma];

  return (
    <section className="home" dir={idioma === 'he' ? 'rtl' : 'ltr'}>
      <h1 className="home-title">{t.home.titulo}</h1>
      <p className="home-text">{t.home.descripcion}</p>

      <div className="home-cards">
        <Link to="/fotocopias" className="home-card">
          {t.home.servicios.fotocopias}
        </Link>

        <Link to="/impresiones" className="home-card">
          {t.home.servicios.impresiones}
        </Link>

        <Link to="/impresion-3d" className="home-card">
          {t.home.servicios.impresion3d}
        </Link>
      </div>
    </section>
  );
}

export default Home;
