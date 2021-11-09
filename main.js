const $seccion = document.querySelector("section");
const $vidasDelJugador = document.querySelector("span");
const vidasDelJugador = 10;

$vidasDelJugador.textContent = vidasDelJugador;

//generar datos
const obtenerDatos = () => [
  { imgSrc: ".../images.beatles.jpeg", name: "beatles" },
  { imgSrc: ".../images.blink182.jpeg", name: "blink182" },
  { imgSrc: ".../images/fkatwigs.jpeg", name: "fka twigs" },
  { imgSrc: ".../images/fleetwood.jpeg", name: "fleetwood" },
  { imgSrc: ".../images.joy-division.jpeg", name: "joy division" },
  { imgSrc: ".../images.ledzep.jpeg", name: "led zeppelin" },
  { imgSrc: ".../images.metallica.jpeg", name: "metallica" },
  { imgSrc: "...images.pinkfloyd.jpeg", name: "pink floyd" },
  { imgSrc: ".../images.beatles.jpeg", name: "beatles" },
  { imgSrc: ".../images.blink182.jpeg", name: "blink182" },
  { imgSrc: ".../images/fkatwigs.jpeg", name: "fka twigs" },
  { imgSrc: ".../images/fleetwood.jpeg", name: "fleetwood" },
  { imgSrc: ".../images.joy-division.jpeg", name: "joy division" },
  { imgSrc: ".../images.ledzep.jpeg", name: "led zeppelin" },
  { imgSrc: ".../images.metallica.jpeg", name: "metallica" },
  { imgSrc: "...images.pinkfloyd.jpeg", name: "pink floyd" },
];

const aleatorizar = () => {
  const datos = obtenerDatos();
  datos.sort( () => Math.random() - 0.5);
  console.log(datos);
};

aleatorizar();
