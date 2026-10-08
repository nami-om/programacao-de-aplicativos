import "./Principal.css";

function Principal(props) {
  return (
    <main className="Principal_root">
      <h3>{props.titulo}</h3>

      {props.children}
    </main>
  );
}

export default Principal;
