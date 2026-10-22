import { Link } from "react-router-dom";
import "./Principal.css";
import { SlArrowLeftCircle } from "react-icons/sl";

function Principal(props) {
  return (
    <main className="Principal_root">
      <div className="Principal_titulo">
        {props.returnTo && (
          <Link to={props.returnTo}>{<SlArrowLeftCircle />}</Link>
        )}
        <h3>{props.titulo}</h3>
      </div>
      {props.children}
    </main>
  );
}

export default Principal;
