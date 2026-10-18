
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

  
  habilidadesFaltantes(requisitos) {
    return requisitos.filter(
      requisito => !this.possuiHabilidade(requisito)
    );
  }

  
  calcularCompatibilidade(requisitos) {
    const faltantes = this.habilidadesFaltantes(requisitos);
    const atendidos = requisitos.length - faltantes.length;

    return Math.round((atendidos / requisitos.length) * 100);
  }

  
  classificarCompatibilidade(percentual) {
    if (percentual >= 80) {
      return "Alta";
    }

    if (percentual >= 50) {
      return "Média";
    }

    return "Baixa";
  }


  analisarVaga(vaga) {
    const compatibilidade =
      this.calcularCompatibilidade(vaga.requisitos);

    return {
      empresa: vaga.empresa,
      cargo: vaga.cargo,
      compatibilidade,
      classificacao:
        this.classificarCompatibilidade(compatibilidade),
      habilidadesFaltantes:
        this.habilidadesFaltantes(vaga.requisitos)
    };
  }

}
