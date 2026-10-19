# SkillMatch JS

Simulador de compatibilidade entre o perfil de um candidato e vagas fictícias de Front-End Júnior, desenvolvido em JavaScript com Node.js.

## Objetivo

Comparar as habilidades do candidato com os requisitos das vagas, calcular a compatibilidade e recomendar quais habilidades devem ser estudadas prioritariamente.

## Funcionalidades

- Cadastro do perfil do candidato.
- Listagem de três vagas fictícias.
- Comparação entre habilidades do candidato e requisitos das vagas.
- Cálculo do percentual de compatibilidade.
- Classificação da compatibilidade como Alta, Média ou Baixa.
- Identificação de habilidades faltantes.
- Seleção da melhor vaga para o candidato.
- Recomendação de estudos com base na frequência das habilidades faltantes.
- Simulação de carregamento assíncrono das vagas.
- Tratamento de erros durante o carregamento.
- Registro de estudos concluídos usando closure.

## Tecnologias utilizadas

- JavaScript (ES Modules)
- Node.js
- Git e GitHub

## Como executar

### Pré-requisitos

- Node.js instalado.
- Git instalado (opcional, caso baixe o projeto como ZIP).

### Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/AndreCavalcante02/skillmatch-js.git
cd skillmatch-js
```

Execute o projeto:

```bash
npm start
```

## Fórmula de compatibilidade

O percentual é calculado pela quantidade de requisitos atendidos em relação ao total de requisitos da vaga.

**Fórmula:**

`Compatibilidade = (requisitos atendidos / total de requisitos) × 100`

O resultado é arredondado para o número inteiro mais próximo.

### Critérios de classificação

- **Alta:** de 80% a 100%.
- **Média:** de 50% a 79%.
- **Baixa:** de 0% a 49%.

## Métodos de array utilizados

- `map()`: analisa todas as vagas e gera os resultados de compatibilidade.
- `filter()`: identifica habilidades faltantes.
- `reduce()`: encontra a melhor vaga e contabiliza a frequência das habilidades faltantes.
- `forEach()`: percorre e exibe resultados.
- `flatMap()`: reúne habilidades faltantes de diferentes vagas.
- `sort()`: ordena as recomendações de estudo por frequência.

## Conceitos de orientação a objetos

- **Classes e construtores:** organizam os dados e comportamentos do candidato.
- **Atributos e `this`:** armazenam e acessam informações do objeto.
- **Métodos:** realizam verificações de habilidades e cálculos de compatibilidade.
- **Herança:** a classe `CandidatoFrontEnd` estende a classe `Candidato`.
- **`super`:** reutiliza o construtor e o método da classe base.

## Callback e closure

- **Callback:** uma função é passada como argumento para outra função, permitindo processar e exibir as recomendações de estudo.
- **Closure:** a função `criarAcompanhamentoEstudos()` mantém o contador de estudos concluídos em seu escopo, permitindo registrar e consultar o total sem expor diretamente a variável.

## Promise e programação assíncrona

A função `carregarVagas()` utiliza uma `Promise` e `setTimeout()` para simular o tempo de carregamento das vagas.

A função `main()` utiliza `async/await` para aguardar o carregamento. O bloco `try/catch` trata possíveis erros, como a falha no carregamento das vagas.

Essa simulação representa uma operação assíncrona semelhante à busca de dados em um servidor, mas não realiza uma requisição real à internet.

## Arquitetura cliente-servidor

Em uma aplicação web real, o cliente — normalmente o navegador — envia uma requisição ao servidor. O servidor processa a solicitação e retorna os dados, frequentemente em formato JSON.

Neste projeto, o Node.js executa a lógica do simulador localmente. A função assíncrona de carregamento apenas simula a espera por dados externos; não existe uma API ou servidor remoto implementado.

## Prioridade de estudo

A prioridade é definida pela frequência com que uma habilidade aparece entre os requisitos não atendidos das vagas analisadas.

No perfil atual, **React** é a primeira prioridade, pois aparece como habilidade faltante em duas vagas. **Git** aparece como habilidade faltante em uma vaga.

## Estrutura do projeto

```text
skillmatch-js/
├── src/
│   ├── candidato.js
│   ├── candidatoFrontEnd.js
│   ├── acompanhamentoEstudos.js
│   └── vagas.js
├── package.json
├── README.md
└── skillmatch.js
```


## 🔗 Links do Projeto

- **Repositório público no GitHub:** https://github.com/AndreCavalcante02/skillmatch-js
- **Quadro Kanban (Trello):** https://trello.com/invite/b/6ad3a179b950f8e98e74c3ca/ATTI22e3d217dfd7658918d8440df5c8977c39D8190E/skillmatch-js-mini-projeto-avaliativo
- **Vídeo de demonstração:**

## 🎥 Demonstração

O vídeo apresenta o funcionamento do SkillMatch JS, incluindo a execução do projeto e a análise de compatibilidade entre o perfil do candidato e as vagas disponíveis.


## Autor

**Aluno:** André Cavalcante Silva

**Curso:** Carreira Tech - Trilha Desenvolvimento de Software

**Instituição:** SCTEC - AVA/SENAI-SC

**Disciplina ou módulo:** Fundamentos da Programação com JavaScript - Módulo 01

**Projeto:** SkillMatch JS — Simulador de Compatibilidade com Vagas Front-End Júnior

Desenvolvido como atividade acadêmica para praticar JavaScript, programação assíncrona, orientação a objetos e controle de versão com Git e GitHub.