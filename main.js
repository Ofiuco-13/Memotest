const $seccion = document.querySelector("section");
const $vidasDelJugador = document.querySelector("span");
let vidasDelJugador = 10;

$vidasDelJugador.textContent = vidasDelJugador;

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

const aleatorizar = () => {
  const datos = obtenerDatos();
  datos.sort(() => Math.random() - 0.5);
  return datos;
};

const chequearCartas = (e) => {
  const cartaClickeada = e.target;
  cartaClickeada.classList.add("girado");
  const cartasGiradas = document.querySelectorAll(".girado");
  const girarCarta = document.querySelectorAll(".girarCarta");
  if (cartasGiradas.length === 2) {
    if (
      cartasGiradas[0].getAttribute("name") ===
      cartasGiradas[1].getAttribute("name")
    ) {
      cartasGiradas.forEach((carta) => {
        carta.classList.remove("girado");
        carta.style.pointerEvents = "none";
      });
    } else {
      cartasGiradas.forEach((carta) => {
        carta.classList.remove("girado");
        setTimeout(() => carta.classList.remove("girarCarta"), 1000);
      });
      vidasDelJugador--;
      $vidasDelJugador.textContent = vidasDelJugador;
      if (vidasDelJugador === 0) {
        perder();
        resetear();
      }
    }
  }
  if (girarCarta.length === 16) {
    ganar();
    resetear();
  }
};

function perder() {
  alert("Perdiste");
}

function ganar() {
  alert("Ganaste");
}

const resetear = () => {
  let datos = aleatorizar();
  let caras = document.querySelectorAll(".cara");
  let cartas = document.querySelectorAll(".carta");
  $seccion.style.pointerEvents = "none";
  datos.forEach((item, index) => {
    cartas[index].classList.remove("girarCarta");
    setTimeout(() => {
      cartas[index].style.pointerEvents = "all";
      cartas[index].setAttribute("name", item.name);
      caras[index].src = item.imgSrc;
      $seccion.style.pointerEvents = "all";
    }, 1000);
  });
  vidasDelJugador = 10;
  $vidasDelJugador.textContent = vidasDelJugador;
};

generarCartas();
