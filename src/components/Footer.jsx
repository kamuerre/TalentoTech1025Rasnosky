import { textos } from '../i18n/textos';

function Footer({ idioma }) {
  const t = textos[idioma];

  return (
    <footer className="footer">
      <div className="footer-redes">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="icon-instagram"
          aria-label="Instagram"
        >
          <i className="fa fa-instagram"></i>
        </a>

        <a
          href="https://wa.me/5491112345678"
          target="_blank"
          rel="noreferrer"
          className="icon-whatsapp"
          aria-label="WhatsApp"
        >
          <i className="fa fa-whatsapp"></i>
        </a>
      </div>

      <p className="footer-texto">{t.footer.texto}</p>
    </footer>
  );
}

export default Footer;
