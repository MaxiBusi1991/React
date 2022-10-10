const conferenciaAmericana = [
  "bills",
  "dolplhins",
  "chiefs",
  "changers",
  "ravens",
  "bengals",
  "colts",
];

export const conferenciaNacional = [
  "eagles",
  "cowboys",
  "49ers",
  "rams",
  "vikings",
  "packers",
];

export default conferenciaAmericana;
//primero exporté por default a "conferenciaAmericana", luego para volver a exportar otro array ya no lo puedo hacer por default. Por ende tengo que desestructurar al segundo array. Eso lo hago en el componente en donde los quiero exportar. Ejemplo: import conferenciaAmericana, {
//   conferenciaNacional,
// } from "../components/Constant"; lo que va entre las llaves es lo que desestructuré!!!
