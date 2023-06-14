import { Container } from "react-bootstrap";
import CarouselAnuncios from "../Components/CarouselAnuncios";
import { ListaProdutos } from "../Components/ListaProdutos";
import NavBar from "../Components/NavBar";

function Home() {
  return (
    <NavBar>
      <CarouselAnuncios />
      <ListaProdutos />
    </NavBar>
  );
}

export { Home };