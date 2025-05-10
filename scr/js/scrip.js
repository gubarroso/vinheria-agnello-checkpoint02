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

// Início do programa
alert("Bem-vindo ao gerenciador de estoque da Agnello's");
  
let continuar = true;
let contador = 0;
let estoqueBaixoCount = 0;

let nomeMaisAntigo = "";
let safraMaisAntiga = null;

while (continuar) {
  contador++;

  // Cadastro
  alert("Cadastro #" + contador);

  const nome = pedirInformacao("Digite o nome do vinho:");

  let tipo;
  do {
    tipo = pedirInformacao("Digite o tipo do vinho (Tinto, Branco ou Rosé):").toLowerCase();
  } while (tipo !== "tinto" && tipo !== "branco" && tipo !== "rosé" && tipo !== "rose");
  tipo = tipo.charAt(0).toUpperCase() + tipo.slice(1);

  const safra = validarNumero("Digite o ano da safra:", valor => valor > 0);
  const estoque = validarNumero("Digite a quantidade em estoque:", valor => valor >= 0);

  const classificacao = classificarSafra(safra);
  const estaComEstoqueBaixo = estoqueBaixo(estoque);
  }