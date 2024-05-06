//esta funcion solo cambia la visual de la tarjeta en el ejemplo
//quitando los botones de una tarjeta

import React, { useState } from "react";

export function Cerrar({ imagenCerrar, setMostrarElementos, handleCerrarClick }) {
  const [moveDivider, setMoveDivider] = useState(false);

  const handleClick = () => {
    handleCerrarClick();
    setMostrarElementos(false);
    setMoveDivider(true); // Set the moveDivider state to true
  };

  return (
    <img src={imagenCerrar} alt="Cerrar" onClick={handleClick} />
  );
}

export default Cerrar;
