const perguntas = [
    {
      pergunta: "Qual clube brasileiro é conhecido como 'Mengão'?",
      respostas: [
        "Palmeiras",
        "Santos",
        "Flamengo",
      ],
      correta: 2
    },
    {
      pergunta: "Em que estado está localizado o estádio Beira-Rio, casa do Internacional?",
      respostas: [
        "São Paulo",
        "Rio de Janeiro",
        "Rio Grande do Sul",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o maior artilheiro da história da seleção brasileira de futebol (até 2022)?",
      respostas: [
        "Pelé",
        "Neymar",
        "Ronaldo",
      ],
      correta: 0
    },
    {
      pergunta: "Quantos títulos da Copa do Brasil o Cruzeiro possui até o momento (até 2022)?",
      respostas: [
        "3",
        "5",
        "6",
      ],
      correta: 2
    },
    {
      pergunta: "Qual clube venceu a primeira edição da Copa Libertadores da América?",
      respostas: [
        "Santos",
        "Boca Juniors",
        "Independiente",
      ],
      correta: 2
    },
    {
      pergunta: "Em que ano o Brasil sediou a Copa do Mundo de Futebol pela primeira vez?",
      respostas: [
        "1950",
        "1962",
        "1970",
      ],
      correta: 0
    },
    {
      pergunta: "Qual jogador é conhecido como 'O Fenômeno'?",
      respostas: [
        "Zico",
        "Romário",
        "Ronaldo",
      ],
      correta: 2
    },
    {
      pergunta: "Qual clube ganhou mais títulos do Campeonato Brasileiro até 2022?",
      respostas: [
        "Palmeiras",
        "São Paulo",
        "Flamengo",
      ],
      correta: 0
    },
    {
      pergunta: "Qual foi o primeiro clube brasileiro a vencer a Copa Libertadores?",
      respostas: [
        "Santos",
        "Flamengo",
        "Cruzeiro",
      ],
      correta: 0
    },
    {
      pergunta: "Quantos títulos da Copa do Mundo a seleção brasileira conquistou até 2022?",
      respostas: [
        "4",
        "5",
        "6",
      ],
      correta: 1
    },
  ];
  
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //Loop ou Laço de Repetiçao
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)//cloando o template
    quizItem.querySelector('h3').textContent = item.pergunta//modificando o h3
  
  //Nova estrutura de repetição para as respostas
    for(let resposta of item.respostas) { 
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      //Ele busca os dt que são filhos do dl
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      //No código acima demos um valor para cada uma das respostas e diferencianado cada uma por pergunta, como se cada pergunta fosse uma casa e as respostas seus moveis, não misturando elas com as outras
  
      dt.querySelector('input').onchange = (event) => {
        //isso me dara uma resposta buliana
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  //remove o "Resposta A" localizado no HTML
    quizItem.querySelector('dl dt').remove()
    
  
  
  //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }