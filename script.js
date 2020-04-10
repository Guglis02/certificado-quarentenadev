function gerar() {
  nome = inputNome.value
  cont = 0
  while (cont < 1000000) {
    cert = emitirCertificado(nome)
    cont++
  }
  
  listaLink = [
    "https://codepen.io/guglis02/pen/MWwdJOE",
    "https://codepen.io/guglis02/pen/abOrpVa",
    "https://codepen.io/guglis02/pen/RwPmKxb",
    "https://codepen.io/guglis02/pen/mdedmrV",
    "https://codepen.io/guglis02/pen/OJVYWqR",
    "https://codepen.io/guglis02/pen/gOpVBBv",
    "https://codepen.io/guglis02/pen/yLYBeXo",
    "https://codepen.io/guglis02/pen/jObOyWX",
    "https://codepen.io/guglis02/pen/KKpLWpo"
  ]
  
  var listaHTML
  contalink=0
  while(contalink<9){
    link = listaLink[contalink]
    listaHTML += `<li>${link}</li>`
    contalink++
  }

  document.body.innerHTML = 
    `${cert} 
    <ol>
    ${listaHTML}
    </ol>`
}
