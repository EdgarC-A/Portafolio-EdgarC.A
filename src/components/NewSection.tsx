import React from "react";
import "./NewSection.css";
import mokup1 from "./img/EDGARCA-JURIS.png";
import mokup2 from "./img/edgar-volant.png";
import mokup3 from "./img/linda.png";
import mokup4 from "./img/reha.png";
import logo from "../components/img/IMG_9952-Photoroom.png";
import mokup5 from "./img/edgar-pagjulio.png";

const NewSection: React.FC = () => {
  return (
    <div id="redirection1" className="overflow-x-hidden new-section">
      <section id="Aboutme" className="container-aboutme">
        <div className="texto-aboutme">
          <div className="description">
            <h2 className="title-about">Acerca de mí</h2>
          </div>
          <p className="text-about">
            Soy un desarrollador front-end con una sólida formación en
            ingeniería de sistemas y un título en desarrollo de software. Mi
            experiencia principal se centra en el desarrollo front-end, aunque
            también tengo conocimientos básicos en backend. He liderado equipos
            y coordinado proyectos, y cuento con habilidades en HTML, CSS,
            JavaScript, React, Bootstrap, TypeScript y Tailwind CSS. He
            desarrollado una variedad de proyectos, desde páginas web
            responsivas y portafolios hasta una tienda virtual e-commerce en
            curso. Me apasiona crear soluciones digitales efectivas y seguir
            aprendiendo nuevas tecnologías para ofrecer siempre lo mejor en cada
            proyecto.
          </p>
        </div>
        <div className="about-me-container">
          <div className="image-wrapper">
            <img src={logo} alt="Tu nombre" className="profile-image" />
            <div className="mask"></div>
          </div>
        </div>
      </section>
      <div className="section-content">
        <div className="left-side">
          <h2 className="title-1">Estudios</h2>
          <p className="text-11">
            Como desarrollador web especializado en frontend, me dedico a
            diseñar e implementar interfaces de usuario para sitios y
            aplicaciones web. Mi enfoque se centra en garantizar una experiencia
            de usuario fluida y en contribuir al éxito general del producto
            mediante soluciones innovadoras y eficaces.
          </p>
          <div className="botton-proyect">
            <a href="#redirection-form">
              <button type="button" className="btn btn-primary btn-contact1">
                Contactame
              </button>
            </a>
          </div>
        </div>
        <div className="right-side">
          <h2 className="title-2">Mis habilidades</h2>

          <button
            type="button"
            className="btn btn-success btnhabiliti-1"
            data-mdb-ripple-init
          >
            HTML
          </button>
          <button
            type="button"
            className="btn btn-danger btnhabiliti-1"
            data-mdb-ripple-init
          >
            CSS
          </button>
          <button
            type="button"
            className="btn btn-warning btnhabiliti-1"
            data-mdb-ripple-init
          >
            JavaScript
          </button>
          <button
            type="button"
            className="btn btn-info btnhabiliti-1"
            data-mdb-ripple-init
          >
            React
          </button>

          <button
            type="button"
            className="btn btn-bootst btnhabiliti-1"
            data-mdb-ripple-init
          >
            Bootstrap
          </button>

          <button
            type="button"
            className="btn btn-nodes btnhabiliti-1"
            data-mdb-ripple-init
          >
            Nodes.js
          </button>
          <button
            type="button"
            className="btn btn-nodes btnhabiliti-1"
            data-mdb-ripple-init
          >
            TypeScript
          </button>
          <button
            type="button"
            className="btn btn-nodes btnhabiliti-1"
            data-mdb-ripple-init
          >
            tailwind css
          </button>
        </div>
      </div>
      <section className="container-skill2">
        <div className="container-skill">
          <div className="skill1">
            <h2>Diseño</h2>
            <p>
              Creo interfaces personalizadas basadas en sus necesidades y
              sugerencias, ya sea desde cero o rediseñando estructuras
              existentes, manteniendo una consulta continua durante todo el
              proceso.
            </p>
          </div>
          <div className="skill2">
            <h2>Desarrollo</h2>
            <p>
              Transformo sus ideas en soluciones digitales efectivas,
              desarrollando sitios y aplicaciones web según sus
              especificaciones, con asesoría continua a lo largo del desarrollo.
            </p>
          </div>
        </div>
        <div className="skill3">
          <h2>Mantenimiento</h2>
          <p>
            Ofrezco mantenimiento para garantizar el correcto funcionamiento de
            su sitio o aplicación, incluyendo actualizaciones y corrección de
            errores, con soporte continuo. Estos ajustes mejoran la claridad y
            mantienen un tono profesional.
          </p>
        </div>
      </section>
      <header className="header-heading">
        <h1 id="Developed-Projects" className="heading">
          Proyectos
        </h1>
        <p className="text-heading">
          Aquí podrás ver los proyectos que he desarrollado y los que están en
          progreso. Explora cada uno para conocer los objetivos y tecnologías
          que he utilizado.
        </p>
      </header>
      <section className="proyectos">
        <div className="container-mkp">
          <div className="mk1">
            <img src={mokup1} alt="" />
          </div>

          <div className="mk2">
            <h1 className="text-1">JurisInvestment</h1>
            <p className="text-1">
              Una firma de abogados establecida en la ciudad de Cartagena
              encargada de ejercer diferentes servicios jurídicos.
            </p>
            <div className="btn-uso">
              <a
                href="http://forestgreen-loris-810935.hostingersite.com"
                target="black"
              >
                <button type="button" className="btn btn-primary">
                  ESTUDIO DE CASO
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="proyectos">
        <div className="container-mkp">
          <div className="mk1">
            <img src={mokup2} alt="" />
          </div>

          <div className="mk2">
            <h1 className="text-1">Volantis-TCG</h1>
            <p className="text-1">
              Empresa de desarrollo a la medida, con un papel innovador en el
              mercado.
              <li>Web</li>
              <li>E-Commerce</li>
              <li>App web</li>
              <li>Software a la medida</li>
            </p>
            <div className="btn-uso">
              <a
                href="http://lightsalmon-lyrebird-295224.hostingersite.com"
                target="blank"
              >
                <button type="button" className="btn btn-primary">
                  ESTUDIO DE CASO
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="proyectos">
        <div className="container-mkp">
          <div className="mk1">
            <img src={mokup4} alt="" />
          </div>

          <div className="mk2">
            <h1 className="text-1">Rehabilitar Dental Club</h1>
            <p className="text-1">
              Rehabilitar Dental Club es una clínica odontológica especializada
              en diplomados. Nuestro equipo ofrece atención general.
            </p>
            <div className="btn-uso">
              <a
                href="http://blue-chamois-492445.hostingersite.com"
                target="_blank"
              >
                <button type="button" className="btn btn-primary">
                  ESTUDIO DE CASO
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="div-contact">
        <a
          href="https://wa.me/3024449598?text=Hola,%20estoy%20interesado%20en%20tus%20servicios%20quiero%20saber%20más"
          target="_blank"
        >
          <button type="button" className="btn btn-success btn-whap">
            Contactar por WhatsApp
          </button>
        </a>
        <a href="tel: +57 302 444 9598">
          <button type="button" className="btn btn-warning btn-blue">
            Llamar
          </button>
        </a>
      </div>
      <header>
        <h1 id="Projects-Progress" className="head2">
          Proximos proyectos
        </h1>
      </header>
      <section className="proyectos">
        <div className="container-mkp">
          <div className="mk1">
            <img src={mokup3} alt="" />
          </div>

          <div className="mk2">
            <h1 className="text-1">Dra.Linda K</h1>
            <p className="text-1">
              clínica odontológica especializada en ortodoncia, odontología
              estética y rehabilitación oral.
            </p>
            <div className="pront">
              <a href="#">
                <button
                  className="btn btn-primary btn-pronto"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-grow spinner-grow-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status">Muy Pronto</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="container-mkp">
          <div className="mk1">
            <img src={mokup5} alt="" />
          </div>

          <div className="mk2">
            <h1 className="text-1">Dr.Julio V</h1>
            <p className="text-1">
              clínica odontológica especializada en ortodoncia, odontología
              estética y rehabilitación oral.
            </p>
            <div className="pront">
              <a href="#">
                <button
                  className="btn btn-primary btn-pronto"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-grow spinner-grow-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status">Muy Pronto</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewSection;
