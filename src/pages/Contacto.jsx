function Contacto() {
  return (
    <section className="contacto">
      <form
        className="contacto-form"
        action="https://formspree.io/f/myzzgnqq"
        method="POST"
      >
        <h2>Consultas</h2>
        <p className="contacto-texto">
          Completando este formulario podés ponerte en contacto con nosotros
        </p>

        <fieldset>
          <legend>Datos personales</legend>

          <label>
            Nombre *
            <input type="text" name="nombre" required />
          </label>

          <label>
            Apellido *
            <input type="text" name="apellido" required />
          </label>

          <label>
            Fecha de nacimiento
            <input type="date" name="fecha_de_nacimiento" />
          </label>

          <label>
            Teléfono
            <input type="tel" name="tel" />
          </label>

          <label>
            Email *
            <input type="email" name="correo" required />
          </label>

          <label>
            Mensaje
            <textarea
              name="mensaje"
              placeholder="Escribí tu mensaje acá..."
              rows="4"
            />
          </label>

          <label className="checkbox">
            <input type="checkbox" name="terminos" required />
            Acepto los términos y condiciones
          </label>

          <button type="submit">Enviar</button>
        </fieldset>
      </form>
    </section>
  );
}

export default Contacto;
