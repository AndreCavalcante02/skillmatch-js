
import { Candidato } from "./src/candidato.js";
import { carregarVagas } from "./src/vagas.js";
import { CandidatoFrontEnd } from "./src/candidatoFrontEnd.js";
import { criarAcompanhamentoEstudos } from "./src/acompanhamentoEstudos.js";


const candidato = new Candidato(
  "André",
  "Front-End",
  "Júnior",
  ["HTML", "CSS", "JavaScript"]
);

async function main() {
  try {
    const vagas = await carregarVagas();

    console.log("SkillMatch JS iniciado!");
    console.log(candidato.apresentar());
    console.log("Primeira habilidade:", candidato.habilidades[0]);
    console.log("Possui HTML?", candidato.possuiHabilidade("HTML"));
    console.log("Possui React?", candidato.possuiHabilidade("React"));
    console.log("Disponível:", candidato.estaDisponivel);
    console.log("Objetivo:", candidato.objetivo);
    
    
    const candidatoFrontEnd = new CandidatoFrontEnd(
      "André",
      "Júnior",
      ["HTML", "CSS", "JavaScript"]
    );
    
    console.log("Teste de herança:");
    console.log(candidatoFrontEnd.apresentar());
    console.log(candidatoFrontEnd.recomendarEstudo());
    console.log(
      "Possui método herdado?",
      candidatoFrontEnd.possuiHabilidade("JavaScript")
    );
    
    
    console.log("Vagas disponíveis:");
    
    vagas.forEach(vaga => {
      console.log(`${vaga.empresa} — ${vaga.cargo}`);
      console.log("Requisitos:", vaga.requisitos.join(", "));
    });
    
    
    console.log(
      "Habilidades faltantes para WebMais:",
      candidato.habilidadesFaltantes(vagas[1].requisitos)
    );
    
    
    console.log(
      "Compatibilidade com WebMais:",
      candidato.calcularCompatibilidade(vagas[1].requisitos) + "%"
    );
    
    
    const compatibilidadeWebMais =
      candidato.calcularCompatibilidade(vagas[1].requisitos);
    
    console.log(
      "Classificação WebMais:",
      candidato.classificarCompatibilidade(compatibilidadeWebMais)
    );
    
    
    
    console.log("Análise de todas as vagas:");
    
    const resultados = vagas.map(vaga => candidato.analisarVaga(vaga));
    
    resultados.forEach(resultado => {
      console.log(`Empresa: ${resultado.empresa}`);
      console.log(`Cargo: ${resultado.cargo}`);
      console.log(`Compatibilidade: ${resultado.compatibilidade}%`);
      console.log(`Classificação: ${resultado.classificacao}`);
      console.log(
        "Habilidades faltantes:",
        resultado.habilidadesFaltantes.length > 0
          ? resultado.habilidadesFaltantes.join(", ")
          : "Nenhuma"
      );
    });
    
    
    
    const melhorVaga = resultados.reduce((melhor, atual) => {
      return atual.compatibilidade > melhor.compatibilidade
        ? atual
        : melhor;
    });
    
    console.log("Melhor vaga para o candidato:");
    console.log(`${melhorVaga.empresa} — ${melhorVaga.cargo}`);
    console.log(`Compatibilidade: ${melhorVaga.compatibilidade}%`);
    
    
    
    const frequenciaHabilidades = resultados
      .flatMap(resultado => resultado.habilidadesFaltantes)
      .reduce((acumulador, habilidade) => {
        acumulador[habilidade] =
          (acumulador[habilidade] || 0) + 1;
    
        return acumulador;
      }, {});
    
    const recomendacoesEstudo = Object.entries(frequenciaHabilidades)
      .sort((a, b) => b[1] - a[1]);
    
    console.log("Recomendação de estudo:");
    
    if (recomendacoesEstudo.length === 0) {
      console.log("Nenhuma habilidade faltante nas vagas analisadas.");
    } else {
      recomendacoesEstudo.forEach(([habilidade, quantidade], indice) => {
        console.log(
          `${indice + 1}. Estudar ${habilidade} — exigida em ${quantidade} vaga(s)`
        );
      });
    }
    
    
    
    function percorrerRecomendacoes(recomendacoes, callback) {
      recomendacoes.forEach((recomendacao, indice) => {
        callback(recomendacao, indice);
      });
    }
    
    console.log("Teste de callback:");
    
    percorrerRecomendacoes(
      recomendacoesEstudo,
      (recomendacao, indice) => {
        console.log(
          `${indice + 1}. ${recomendacao[0]} — exigida em ${recomendacao[1]} vaga(s)`
        );
      }
    );
    
    
    const acompanhamento = criarAcompanhamentoEstudos();
    
    console.log("Teste de closure:");
    console.log(acompanhamento.registrarEstudo("React"));
    console.log(acompanhamento.registrarEstudo("Git"));
    console.log(
      "Total de estudos concluídos:",
      acompanhamento.obterTotal()
    );

  } catch (erro) {
    console.error("Erro ao carregar as vagas:", erro.message);
  }
}

main();
