
export const vagas = [
  {
    empresa: "TechStart",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["HTML", "CSS", "JavaScript"]
  },
  {
    empresa: "WebMais",
    cargo: "Desenvolvedor Web Júnior",
    requisitos: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    empresa: "CodeNova",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["HTML", "CSS", "JavaScript", "Git", "React"]
  }
];


export function carregarVagas() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (vagas.length === 0) {
        reject(new Error("Nenhuma vaga disponível para carregar."));
        return;
      }

      resolve(vagas);
    }, 1000);
  });
}
