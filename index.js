const perguntas = [
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "variable",
        "var",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é utilizado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual operador é utilizado para comparar se dois valores são iguais em valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é utilizada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToInt()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual estrutura de controle é utilizada para executar um bloco de código repetidamente enquanto uma condição especificada for verdadeira?",
      respostas: [
        "if",
        "for",
        "while",
      ],
      correta: 2
    },
    {
      pergunta: "O que significa a sigla DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Document Oriented Model",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "addToEnd()",
        "append()",
        "push()",
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '++' faz em JavaScript?",
      respostas: [
        "Incrementa o valor em 1",
        "Decrementa o valor em 1",
        "Dobra o valor",
      ],
      correta: 0
    },
    {
      pergunta: "Como você comenta uma linha de código em JavaScript?",
      respostas: [
        "// Comentário",
        "# Comentário",
        "/* Comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um closure em JavaScript?",
      respostas: [
        "Uma função anônima",
        "Um objeto JavaScript",
        "A combinação de uma função e o ambiente em que ela foi declarada",
      ],
      correta: 2
    }
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