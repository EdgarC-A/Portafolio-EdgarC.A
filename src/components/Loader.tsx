import "./Loader.css";
import logo from "./img/volantis.png";
const Loader = () => {
  return (
    <div className="loader-container overflow-x-hidden">
      <img src={logo} alt="Logo" className="logo-loader" />
    </div>
  );
};

export default Loader;
