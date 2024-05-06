import React, { useState } from "react";

export function Cambio({ foto1, foto2, onImageChange }) {
  const [imageSrc, setImageSrc] = useState(foto1);
  const [isCambioActive, setIsCambioActive] = useState(false);

  // Función para manejar el clic en la imagen
  const toggleImage = () => {
    setIsCambioActive(true); // Set flag to true before image change
    const newSrc = imageSrc === foto1 ? foto2 : foto1;
    setImageSrc(newSrc);
    onImageChange(newSrc);
    setIsCambioActive(false); // Reset flag after image change
  };

  return (
    <img src={imageSrc} alt="" width={45} height={45} onClick={toggleImage} disabled={isCambioActive} /> // Disable image while cambio is active
  );
}
