const lista = document.querySelector("ul")

document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar")
})

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder")
})


// Nesse Código é possivel mostrar as tintas disponiveis e esconde-las utilizando data-attributes, para realizar o comportamento de sumir e mostrar, é aplicado no CSS com os seletores de data-attributes as propriedade de display: none e display: block