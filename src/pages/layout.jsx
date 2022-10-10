import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import conferenciaAmericana, {
  conferenciaNacional,
} from "../components/Constant";

const Layout = () => {
  //aqui va a EMPEZAR javascript
  const productos = [
    { id: "1", producto: "producto1", precio: "precio1" },
    { id: "2", producto: "producto2", precio: "precio2" },
    { id: "3", producto: "producto3", precio: "precio3" },
  ];
  //ejemplo para importar un array desde otro componente
  console.log(conferenciaAmericana);
  console.log(conferenciaNacional);

  const funcionPrueba = (texto) => {
    console.log(texto);
  };
  //primero creo el array de objetos
  const productosDos = [
    { id: "1", nombre: "producto1", precio: "precio1" },
    { id: "2", nombre: "producto2", precio: "precio2" },
    { id: "3", nombre: "producto3", precio: "precio3" },
  ];
  //aqui va a TERMINAR javascript
  return (
    <>
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <Header />
        <Hero />
        <Main
          productos={productos}
          funcionPrueba={funcionPrueba}
          //segundo le paso los datos al componente que quiera que vayan los props
          productosDos={productosDos}
        />
        <ItemListContainer />
        <ItemDetailContainer />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

//los componentes siempre empiezan con Mayusculas!
