const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = { 
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
 
  controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
      const operacao = evento.target.dataset.controle;
      const controle = evento.target.parentNode;
      const peca = controle.querySelector("[data-contador]");
  
      manipulaDados(operacao, peca);
      atualizaEstatisticas(evento.target.dataset.peca, operacao);
    });
  });
  
  function manipulaDados(operacao, controle) {
    const pecaValue = parseInt(controle.value);
  
    if (operacao === "+") {
      controle.value = pecaValue + 1;
    } else if (operacao === "-") {
      controle.value = pecaValue - 1;
    }
  }
  
  function atualizaEstatisticas(peca, operacao) {
    estatisticas.forEach((elemento) => {
      const estatistica = elemento.dataset.estatistica;
      const valorAtual = parseInt(elemento.textContent);
      const valorEstatistica = pecas[peca][estatistica];
  
      if (valorEstatistica !== undefined) {
        if (operacao === "+") {
          elemento.textContent = valorAtual + valorEstatistica;
        } else if (operacao === "-") {
          elemento.textContent = valorAtual - valorEstatistica;
        }
      }
    });
  }
  