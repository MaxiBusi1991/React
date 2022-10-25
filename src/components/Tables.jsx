import React from "react";
import Table from "react-bootstrap/Table";

//NO USAR EL MISMO NOMBRE DEL COMPONENTE Y DE LA CONSTANTE!!!
const Tables = (conferenciaAmericana, team) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Equipos</th>
            <th>Estado</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{team.Nombre}</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Tables;
