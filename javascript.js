var precTotal = 0
var qtItens = 0

function codigoProduto() {
  let codProduto = document.getElementById("codigo").value

  switch (codProduto) {
    case "1":
      window.alert("Coca Cola R$ 8,90")
      var prodCocaCola2l = "Coca Cola2L"
      var prec = 8.90
      res.innerHTML += `${++qtItens} ${prodCocaCola2l} ${prec.toLocaleString("pr-br", { style: "currency", currency: "BRL" })}<br>`
      soma()
      preco.innerHTML = `${precTotal.toLocaleString("pr-br", { style: "currency", currency: "BRL" })}`
      document.getElementById("codigo").value = ""
      break;
    case "2":
      window.alert("Contra Filé R$ 40,00")
      var a = prompt("Digite o peso!")
      var prodContraFile = "Contra Filé"
      var precContraFile = 0.04
      var prec = precContraFile * parseFloat(a)
      res.innerHTML += `${++qtItens} ${prodContraFile} ${prec.toLocaleString("pr-br", { style: "currency", currency: "BRL" })}<br>`
      soma()
      preco.innerHTML = `${precTotal.toLocaleString("pr-br", { style: "currency", currency: "BRL" })}`
      document.getElementById("codigo").value = ""
      break;

    default:
      alert("Produto não cadastrado!")
      document.getElementById("codigo").value = ""
  }
  function soma() {
    precTotal += prec
  }
}