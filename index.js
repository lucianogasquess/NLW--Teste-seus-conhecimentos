const perguntas = [
  {
    pergunta: "Qual país venceu mais Copas do Mundo de Futebol?",
    respostas: [
      "Brasil",
      "Alemanha",
      "Argentina",
     ],
     correta: 0
   },
   {
    pergunta: "Qual é o jogador com mais gols marcados na história da Copa do Mundo?",
    respostas: [
      "Pelé",
      "Lionel Messi",
      "Cristiano Ronaldo",
     ],
     correta: 0
   },
   {
    pergunta: "Qual é o clube mais vitorioso na Liga dos Campeões da UEFA?",
    respostas: [
      "Real Madrid",
      "FC Barcelona",
      "Bayern de Munique",
     ],
     correta: 0
   },
   {
    pergunta: "Qual jogador ganhou o prêmio de Melhor do Mundo da FIFA em 2021?",
    respostas: [
      "Lionel Messi",
      "Robert Lewandowski",
      "Neymar Jr.",
     ],
     correta: 0
   },
   {
    pergunta: "Qual é o recorde de gols marcados em uma única edição da Copa do Mundo por um jogador?",
    respostas: [
      "13 gols",
      "10 gols",
      "8 gols",
     ],
     correta: 0
   },
   {
    pergunta: "Em que ano o Brasil sediou a Copa do Mundo pela primeira vez?",
    respostas: [
      "1950",
      "1962",
      "1970",
     ],
     correta: 0
   },
   {
    pergunta: "Qual jogador tem o recorde de mais gols marcados em uma única edição da Liga dos Campeões da UEFA?",
    respostas: [
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Neymar Jr.",
     ],
     correta: 0
   },
   {
    pergunta: "Qual é o estádio de futebol mais conhecido do mundo?",
    respostas: [
      "Maracanã",
      "Camp Nou",
      "Old Trafford",
     ],
     correta: 0
   },
   {
    pergunta: "Qual país sediou a Copa do Mundo de Futebol de 2018?",
    respostas: [
      "Rússia",
      "Brasil",
      "França",
     ],
     correta: 0
   },
   {
    pergunta: "Quantos jogadores compõem uma equipe de futebol em campo durante uma partida?",
    respostas: [
      "11 jogadores",
      "10 jogadores",
      "12 jogadores",
     ],
     correta: 0
   }
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}