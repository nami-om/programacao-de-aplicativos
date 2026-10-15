import { Link } from "react-router-dom";
import "./Principal.css";

function Principal(props) {
  return (
    <main className="Principal_root">
      {props.returnTo && <Link to={props.returnTo}>{"<"}</Link>}
      <h3>{props.titulo}</h3>

      {props.children}
    </main>
  );
}

export default Principal;
