import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";
import logo from "../../assets/download.jpg";

function Cabecalho() {
  return (
    <header className="Cabecalho_root">
      <img
        src={logo}
        style={{
          width: "24px",
          height: "24px",
        }}
      />

      <Avatar nome="Mariom" />
    </header>
  );
}

export default Cabecalho;
