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