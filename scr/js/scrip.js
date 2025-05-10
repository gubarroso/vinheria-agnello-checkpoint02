// Funções reutilizáveis
function pedirInformacao(mensagem) {
  let valor;
  do {
    valor = prompt(mensagem);
  } while (valor === null || valor.trim() === '');
  return valor.trim();
}

function validarNumero(mensagem, condicaoExtra) {
  let valor;
  do {
    valor = pedirInformacao(mensagem);
  } while (isNaN(valor) || !condicaoExtra(Number(valor)));
  return Number(valor);
}
function classificarSafra(safra) {
  if (safra >= 2020) {
    return "Vinho jovem";
  } else if (safra >= 2015) {
    return "Vinho amadurecido";
  } else {
    return "Vinho antigo";
  }
}

function estoqueBaixo(qtd) {
  return qtd < 5;
}

function exibirDados(nome, tipo, safra, estoque, classificacao, statusEstoque) {
  alert("Veja os detalhes no console");
  console.log("======= Cadastro de Vinho =======");
  console.log("Nome: " + nome);
  console.log("Tipo: " + tipo);
  console.log("Safra: " + safra + " (" + classificacao + ")");
  console.log("Quantidade em estoque: " + estoque);
  if (statusEstoque) {
    console.log("⚠️ ESTOQUE BAIXO");
  } else {
    console.log("Estoque adequado");
  }
  console.log("");
}