import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Contador from "../components/Contador";

const Layout = () => {
  //aqui va a EMPEZAR javascript
  const productos = [
    { id: "1", producto: "producto1", precio: "precio1" },
    { id: "2", producto: "producto2", precio: "precio2" },
    { id: "3", producto: "producto3", precio: "precio3" },
  ];
  //ejemplo para importar un array desde otro componente
  // console.log(conferenciaAmericana);
  // console.log(conferenciaNacional);

  // const funcionPrueba = (texto) => {
  //   console.log(texto);
  // };
  //primero creo el array de objetos
  // const productosDos = [
  //   { id: "1", nombre: "producto1", precio: "precio1" },
  //   { id: "2", nombre: "producto2", precio: "precio2" },
  //   { id: "3", nombre: "producto3", precio: "precio3" },
  // ];

  // const conferenciaAmericana = [
  //   { Nombre: "bills", Estado: "Buffalo", Puntos: "25" },
  //   { Nombre: "dolplhins", Estado: "Miami", Puntos: "22" },
  //   { Nombre: "chiefs", Estado: "Kansas", Puntos: "20" },
  //   { Nombre: "changers", Estado: "Los Ángeles", Puntos: "16" },
  // ];
  //aqui va a TERMINAR javascript
  return (
    <>
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <Header />
        <Hero />
        <Main
          productos={productos}
          // funcionPrueba={funcionPrueba}
          //segundo le paso los datos al componente que quiera que vayan los props
          // productosDos={productosDos}
        />
        <table />
        <ItemListContainer />
        <ItemDetailContainer />
        <Contador />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

//los componentes siempre empiezan con Mayusculas!

//para volver a exportar otro array ya no lo puedo hacer por default. Por ende tengo que desestructurar al segundo array. Eso lo hago en el componente en donde los quiero exportar. Ejemplo: import conferenciaAmericana, {conferenciaNacional,} from "../components/Constant"; lo que va entre las llaves es lo que desestructuré!!!
