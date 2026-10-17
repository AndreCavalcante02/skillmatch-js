
import { Candidato } from "./src/candidato.js";

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
