
import { Candidato } from "./src/candidato.js";
import { vagas } from "./src/vagas.js";


const candidato = new Candidato(
  "André",
  "Front-End",
  "Júnior",
  ["HTML", "CSS", "JavaScript"]
);

console.log("SkillMatch JS iniciado!");
console.log(candidato.apresentar());
console.log("Primeira habilidade:", candidato.habilidades[0]);
console.log("Possui HTML?", candidato.possuiHabilidade("HTML"));
console.log("Possui React?", candidato.possuiHabilidade("React"));
console.log("Disponível:", candidato.estaDisponivel);
console.log("Objetivo:", candidato.objetivo);


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

console.log("\nRecomendação de estudo:");

if (recomendacoesEstudo.length === 0) {
  console.log("Nenhuma habilidade faltante nas vagas analisadas.");
} else {
  recomendacoesEstudo.forEach(([habilidade, quantidade], indice) => {
    console.log(
      `${indice + 1}. Estudar ${habilidade} — exigida em ${quantidade} vaga(s)`
    );
  });
}
