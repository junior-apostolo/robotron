const botao = document.querySelector("#calcular")
const resultado = document.querySelectorAll(".resultado")

botao.addEventListener("click", () => {
  resultado.forEach((item) => {
    item.innerHTML = "Fui Clicado!!"
  })
})

// Nesse código é utilizado o evento de click do botão para inserir o conteudo de texto nos elementos de <h1></h1> e <h2></h2>