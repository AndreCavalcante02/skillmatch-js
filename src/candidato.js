
export class Candidato {
  constructor(nome, area, nivel, habilidades) {
    this.nome = nome;
    this.area = area;
    this.nivel = nivel;
    this.habilidades = habilidades;
    this.experienciaMeses = 0;
    this.estaDisponivel = true;
    this.objetivo = "Conseguir uma vaga Front-End Júnior";
  }

  apresentar() {
    return `Candidato: ${this.nome} | Área: ${this.area} | Nível: ${this.nivel}`;
  }

  possuiHabilidade(habilidade) {
    return this.habilidades.includes(habilidade);
  }
}
