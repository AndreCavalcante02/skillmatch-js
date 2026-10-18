
import { Candidato } from "./candidato.js";

export class CandidatoFrontEnd extends Candidato {
  constructor(nome, nivel, habilidades) {
    super(nome, "Front-End", nivel, habilidades);
    this.frameworkPrincipal = "React";
  }

  apresentar() {
    return `${super.apresentar()} | Framework principal: ${this.frameworkPrincipal}`;
  }

  recomendarEstudo() {
    if (!this.possuiHabilidade(this.frameworkPrincipal)) {
      return `Prioridade de estudo: ${this.frameworkPrincipal}`;
    }

    return `Continue aprofundando seus conhecimentos em ${this.frameworkPrincipal}.`;
  }
}
