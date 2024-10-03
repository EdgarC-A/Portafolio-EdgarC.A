import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Mynavba from "./components/navba";
import "./components/styles.css";
import Banner from "./components/Banner";
import NewSection from "./components/NewSection";
import MyFooter from "./components/MyFooter";
import Formul from "./components/Formul";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Mynavba />
      <Banner />
      <NewSection />
      <Formul />
      <MyFooter />
    </div>
  );
};

export default App;
