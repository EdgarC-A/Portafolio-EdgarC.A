import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-phone-input-2/lib/style.css";
import "./PhoneInput.css";

function PhoneSelector() {
  return (
    <PhoneInput
      country={"co"} // País por defecto, en este caso, Colombia (+57)
      value={""}
      onChange={(phone) => console.log(phone)}
      inputStyle={{
        width: "auto", // Ajusta el ancho según tu diseño

        height: "40px", // Ajusta la altura según tu diseño
      }}
    />
  );
}

export default PhoneSelector;
