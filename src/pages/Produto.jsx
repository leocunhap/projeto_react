import { Container } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import { ListaProdutos } from "../Components/ListaProdutos";

function Produto() {
  return (
    <NavBar>
      <ListaProdutos />
    </NavBar>
  );
}

export { Produto };
