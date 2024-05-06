export function MiComponente() {
  // Obtener la fecha y hora actuales
  const ahora = new Date();

  // Formatear la fecha y hora
  const dia = String(ahora.getDate()).padStart(2, "0");
  const mes = String(ahora.getMonth() + 1).padStart(2, "0"); // Los meses en JavaScript empiezan en 0
  const año = ahora.getFullYear();

  const añoCorto = año.toString().slice(-2);

  return {
    fecha: `${dia}/${mes}/${añoCorto}`,
  };
}
