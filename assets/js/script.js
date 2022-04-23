const preco = [];
let tabela = document.querySelector("tbody#tabela");
let produto = document.getElementById("item");
let valor = document.getElementById("valor");
let total = document.getElementById("soma");

  
document.getElementsByTagName("button")[0].addEventListener("click", function(){
  if (produto.value == ""  || valor.value == "" ||
  isNaN(valor.value)){
    return alert("Insira o item e o preço.")
  } else {
  preco.push(valor.value);
  teste();
  soma()
  }
});

function soma(){
  let somar = 0;
    for (let i = 0; i < preco.length; i++) {
     somar += Number(preco[i]);
    }
  total.innerHTML = "Total: " + somar + "R$";
}

function teste(){
  tabela.innerHTML += "<tr><td>"+produto.value+"</td>"+"<td>"+ valor.value +"</td></tr>";
  produto.value = "";
  valor.value = "";
  produto.focus();
}




