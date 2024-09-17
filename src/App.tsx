import { useState, useEffect } from "react"; // Asegúrate de importar useState y useEffect
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Mynavba from "./components/navba";
import "./components/styles.css";
import Banner from "./components/Banner"; // Importa el componente Banner
import NewSection from "./components/NewSection";
import MyFooter from "./components/MyFooter";
import Formul from "./components/Formul";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 segundos de simulación de carga

    // Limpieza del efecto en caso de que el componente se desmonte antes de que se complete el tiempo
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Mynavba /> {/* Barra de navegación */}
      <Banner /> {/* Banner debajo de la barra de navegación */}
      <NewSection /> {/* section acerca de mi */}
      <Formul /> {/* Formulario */}
      <MyFooter /> {/* Footer final */}
    </div>
  );
};

export default App;
