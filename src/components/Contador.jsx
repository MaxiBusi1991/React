import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Contador({ product }) {
  const [contador, setContador] = useState(1);

  const add = () => {
    setContador(contador + 1);
  };

  const sub = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  const botonSumar = { backgroundColor: "red" };
  return (
    <>
      <Button
        disabled={contador > 1 ? false : true}
        onClick={() => sub()}
        className="mx-2"
        variant="primary"
      >
        -
      </Button>
      <div className="mt-2">{contador}</div>
      <Button
        disabled={contador < 10 ? false : true}
        onClick={() => add()}
        className="mx-2"
        variant="primary"
        style={botonSumar}
      >
        +
      </Button>
    </>
  );
}

export default Contador;
