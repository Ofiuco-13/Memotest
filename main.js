const $seccion = document.querySelector("section");
const $vidasDelJugador = document.querySelector("span");
const vidasDelJugador = 10;

$vidasDelJugador.textContent = vidasDelJugador;

//generar datos
const obtenerDatos = () => [
  { imgSrc: "./images/beatles.jpeg", name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", name: "blink182" },
  { imgSrc: "./images/fkatwigs.jpeg", name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", name: "led zeppelin" },
  { imgSrc: "./images/metallica.jpeg", name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", name: "pink floyd" },
  { imgSrc: "./images/beatles.jpeg", name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", name: "blink182" },
  { imgSrc: "./images/fkatwigs.jpeg", name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", name: "led zeppelin" },
  { imgSrc: "./images/metallica.jpeg", name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", name: "pink floyd" },
];

const aleatorizar = () => {
  const datos = obtenerDatos();
  datos.sort(() => Math.random() - 0.5);
  return datos;
};

const generarCartas = () => {
  const datos = aleatorizar();
  datos.forEach((item) => {
    const $carta = document.createElement("div");
    const $cara = document.createElement("img");
    const $reves = document.createElement("div");
    $carta.classList = "carta";
    $cara.classList = "cara";
    $reves.classList = "reves";
    //adjuntar la información a las tarjetas
    $cara.src = item.imgSrc;
    $carta.setAttribute("name", item.name);

    $seccion.appendChild($carta);
    $carta.appendChild($cara);
    $carta.appendChild($reves);

    $carta.addEventListener("click", (e) => {
      $carta.classList.toggle("girarCarta");
      chequearCartas(e);
    });
  });
};

const chequearCartas = (e) => {
  console.log(e);
  const cartaClickeada = e.target;
  cartaClickeada.classList.add("girado");
  const cartasGiradas = document.querySelectorAll(".girado");

  if (cartasGiradas.length === 2) {
    if (
      cartasGiradas[0].getAttribute("name") ===
      cartasGiradas[1].getAttribute("name")
    ) {
      console.log("partida");
    } else {
      console.log("fallaste");
      cartasGiradas.forEach((carta) => {
        carta.classList.remove("girado");
        carta.classList.remove("girarCarta");
      });
    }
  }
};

generarCartas();
