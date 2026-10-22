
export function criarAcompanhamentoEstudos() {
  let estudosConcluidos = 0;

  return {
    registrarEstudo(habilidade) {
      estudosConcluidos++;

      return `Estudo concluído: ${habilidade}`;
    },

    obterTotal() {
      return estudosConcluidos;
    }
  };
}
