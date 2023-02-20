const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
}

controle.forEach((item) => {
  item.addEventListener("click", (event) => {
    manipulaDados(event.target.dataset.controle, event.target.parentNode)
    atualizaEstatisticas(event.target.dataset.peca)
  })
})

function manipulaDados(operacao, controle) {
  const contador = controle.querySelector("[data-contador]")

  if (operacao === "-") {
    contador.value = parseInt(contador.value) - 1
  } else {
    contador.value = parseInt(contador.value) + 1
  }
}

function atualizaEstatisticas(peca) {
  console.log(peca)

  estatisticas.forEach((elemento) => {
    console.log(elemento.dataset.estatistica)
    elemento.textContent =
      parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}

const imagens = [
  {
    tipo: "rosa",
    url: "../img/cores/rosa.png",
  },
  {
    tipo: "amarelo",
    url: "../img/cores/amarelo.png",
  },
  {
    tipo: "branco",
    url: "../img/cores/branco.png",
  },
  {
    tipo: "preto",
    url: "../img/cores/preto.png",
  },
  {
    tipo: "vermelho",
    url: "../img/cores/vermelho.png",
  },
  {
    tipo: "azul",
    url: "../img/cores/azul.png",
  },
]

function alteraImagem(){
  const random = Math.floor(Math.random() * imagens.length)
  const img = imagens[random].url
  document.querySelector(".robo").src=img
}


// somar.addEventListener("click", (evento) => {manipulaDados("somar")})

// subtrair.addEventListener("click", (evento) => {manipulaDados("subtrair")})
