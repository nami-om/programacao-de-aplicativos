import "./ListaProdutos.css";

function ListaProdutos(props) {
    return (
        <ul className="ListaProdutos_root">
            {props.produtos.map((itemProduto, index) => {
                return (
                    <li key={index}>
                        {itemProduto}
                    </li>

                )
            })
            }
        </ul>
    )

};

export default ListaProdutos;