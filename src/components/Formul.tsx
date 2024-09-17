import PhoneSelector from "./PhoneSelector";
import "./Formul.css";

const Formul = () => {
  return (
    <div className="all">
      <section className="contactos">
        <div className="card-form">
          <form
            className="form1"
            action="https://formspree.io/f/xvgpyvvb"
            method="POST"
          >
            <div id="redirection-form" className="p-contact">
              <h1>¡Contáctame!</h1>
              <p>
                Para consultar sobre mis servicios y recibir más información,
                por favor complete el formulario a continuación. Me pondré en
                contacto con usted a la mayor brevedad para explorar cómo puedo
                ayudarle a alcanzar sus objetivos.
              </p>
            </div>
            <div className="row">
              <div className="col">
                <input
                  required
                  id="inp1"
                  type="text"
                  className="form-control"
                  placeholder="Nombre:"
                  name="nombre"
                  aria-label="Name"
                />

                <div className="col">
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Apellidos:"
                    name="apellidos"
                    aria-label="Apellidos"
                  />
                  <div className="col">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="email:"
                      name="correo"
                      aria-label="email"
                    />
                  </div>
                  <div className="col">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Pais:"
                      name="pais"
                      aria-label="Pais"
                    />
                  </div>
                  <div className="col">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Ciudad"
                      name="ciudad"
                      aria-label="Ciudad"
                    />

                    <div className="form-group">
                      <p>Numero de telefono:</p>
                      <PhoneSelector />
                      <div className="col">
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Escriba su numero:"
                          name="numero"
                          aria-label="Tel"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary btn-env">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Formul;
