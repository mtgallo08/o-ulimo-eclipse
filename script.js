// Menu para telas pequenas
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const aberto = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(aberto));
    menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // BANCO DE DADOS GLOBAL: Perguntas de TODOS os planetas
  const bancoDeTodosOsPlanetas = {
    mercurio: {
      1: { pergunta: "Os astronaltas finalmente chegaram ao planeta dos mercurianos. Qual característica torna Mercúrio único entre os planetas da missão?",
         alternativas: ["A) É o maior planeta do Sistema Solar.", "B) É o menor planeta do Sistema Solar.", "C) É o mais distante do Sol."], 
         correta: 1 },
      2: { pergunta: "Ao olhar de perto para a superfície de Mercúrio, os astronautas veem muitas marcas e buracos causados por impactos de objetos espaciais. Como se chamam esses buracos?", 
         alternativas: ["A) Vulcões de gelo ", "B) Crateras ", "C) Oceanos secos "], 
         correta: 1 },
      3: { pergunta: "Na sala de navegação da nave, os astronautas têm miniaturas em forma de globo para cada um dos planetas do Sistema Solar, de Mercúrio a Netuno. O que todos esses globos planetários têm em comum?", 
         alternativas: ["A) Representam corpos celestes que são planos.", "B) Representam a forma arredondada (aproximadamente esférica) dos planetas no espaço.", "C) Servem apenas para mostrar planetas que têm a forma quadrada."], 
         correta: 1 },
      4: { pergunta: "Durante a missão, os astronautas precisam confirmar se estão seguindo a ordem correta dos planetas a partir do Sol. Qual sequência está correta?", 
         alternativas: ["A) Mercúrio → Vênus → Terra → Marte.", "B) Vênus → Mercúrio → Terra → Marte.", "C) Mercúrio → Terra → Vênus → Marte."], 
         correta: 0 },
    },

    venus: {
      1: { pergunta: "Durante a viagem, os astronautas percebem algo muito estranho ao observar Vênus. O que torna a rotação desse planeta diferente da maioria dos outros planetas do Sistema Solar? ",
         alternativas: ["A) Ele não gira. ", "B) Ele gira mais rápido que todos os outros.", "C) Ele gira ao contrário. "], 
         correta: 2 },
      2: { pergunta: "Vênus é muitas vezes chamado de “irmão da Terra”. Por que razão ele recebeu esse nome? ", 
         alternativas: ["A) Porque tem o tamanho e a massa muito parecidos com os da Terra.", "B) Porque tem oceanos cheios de água como a Terra.", "C) Porque é coberto de plantas e florestas."], 
         correta: 0 },
      3: { pergunta: "Durante a noite, os astronautas observam o céu e percebem que alguns pontos brilhantes produzem sua própria luz, enquanto outros apenas refletem a luz que recebem. Qual deles é uma estrela?", 
         alternativas: ["A) Vênus.", "B) Lua.", "C) Sol."], 
         correta: 2 },
      4: { pergunta: "A Terra é o único planeta conhecido por possuir qual característica essencial para a vida?  ", 
         alternativas: ["A) Anéis de gelo.", "B) Água líquida.", "C) Tempestades de metano."], 
         correta: 1 },
    },

    terra: {
      1: { pergunta: "O movimento que a Terra faz girando ao redor de si mesma produz o quê?",
         alternativas: ["A) As estações do ano. ", "B) Os dias e as noites.", "C) As fases da Lua.  "], 
         correta: 1 },
      2: { pergunta: "Qual é a relação entre a Lua e a Terra?", 
         alternativas: ["A) A Lua é uma estrela e a Terra é um planeta.", "B) A Lua é um planeta e a Terra é uma estrela. ", "B) A Lua é um planeta e a Terra é uma estrela."], 
         correta: 2 },
      3: { pergunta: "Os astronautas recebem uma imagem de um corte da Terra. Na parte mais externa aparece uma camada sólida onde estão os continentes e os oceanos. Que camada é essa?", 
         alternativas: ["A) Manto.", "B) Núcleo.", "C) Crosta."], 
         correta: 2 },
      4: { pergunta: "Imagine que os astronautas façam uma viagem do espaço até o centro da Terra. Qual seria a ordem das principais camadas encontradas?", 
         alternativas: ["A) Atmosfera → Núcleo → Manto → Crosta.", "B) Crosta → Manto → Núcleo.", "C) Crosta → Núcleo → Manto."], 
         correta: 1 },
    },

    marte: {
      1: { pergunta: "Marte é conhecido como o “Planeta Vermelho”. O que dá essa coloração à sua superfície?",
         alternativas: ["A) Lava vulcânica.", "B) Óxidos de ferro, semelhantes à ferrugem, presentes no solo.", "C) Cristais vermelhos."], 
         correta: 1 },
      2: { pergunta: "Se os astronautas estiverem em Marte e quiserem chegar à Terra seguindo a ordem dos planetas em relação ao Sol, qual planeta encontrarão primeiro? ", 
         alternativas: ["A) Vênus ", "B) Júpiter ", "D) Saturno "], 
         correta: 0 },
      3: { pergunta: "Qual alternativa apresenta apenas planetas rochosos?", 
         alternativas: ["A) Terra, Marte, Júpiter e Saturno.", "B) Mercúrio, Vênus, Terra e Marte.", "C) Júpiter, Saturno, Urano e Netuno."], 
         correta: 1 },
      4: { pergunta: "Os astronautas observam várias estrelas no céu e percebem que algumas parecem formar um desenho quando vistas da Terra. Como esse conjunto pode ser chamado?", 
        alternativas: ["A) Constelação.", "B) Sistema Solar.", "C) Atmosfera."], 
        correta: 0 },
    },

    jupiter:{
      1: { pergunta: "Além de ser gigantesco, Júpiter tem uma “família” enorme a girar ao seu redor. O que são esses astros que giram à volta dele? ",
         alternativas: ["A) Anéis de fogo. ", "B) Satélites naturais (luas). ", "C) Estrelas cadentes."], 
         correta: 1 },
      2: { pergunta: "Um aluno diz: “O Sol não pode ser uma estrela porque ele é muito maior e mais brilhante do que as estrelas que vemos à noite.”   O que você responderia?",
         alternativas: ["A)  Ele está errado: o Sol é uma constelação.", "B) B) Ele está correto, porque o Sol é um satélite. ", "C) Ele está errado: o Sol também é uma estrela, mas está muito mais próximo da Terra."], 
         correta: 2 },
      3: { pergunta: "Júpiter é conhecido por ser o maior planeta do Sistema Solar. Qual é outra característica que o diferencia? ", 
         alternativas: ["A) Possui uma superfície sólida como a Terra.", "B) É um planeta gigante formado principalmente por gases. ", "C) Não possui nenhuma lua. "], 
         correta: 1 },
      4: { pergunta: "Durante a missão, os astronautas precisam identificar quais astros pertencem ao Sistema Solar. Qual alternativa apresenta apenas elementos que fazem parte dele?", 
         alternativas: ["A) Sol, planetas, luas e asteroides.", "B) Estrelas, constelações e galáxias.", "C) Apenas Sol e planetas. "], 
         correta: 0 },
    },

    saturno:{
      1: { pergunta: "Do que são feitos os famosos anéis de Saturno?",
         alternativas: ["A) Lava e magma. ", "B) Gelo, poeira e rochas. ", "C) Diamantes."], 
         correta: 1 },
      2: { pergunta: " O que influencia o movimento dos planetas ao redor do Sol?",
         alternativas: ["A) Os planetas ficam parados e o Sol gira ao redor deles.", "B) A Lua empurra os planetas pelo espaço.", "C) A gravidade do Sol influencia o movimento dos planetas."], 
         correta: 2 },
      3: { pergunta: "O Sol ocupa uma posição muito importante no Sistema Solar. Qual alternativa explica melhor por quê?",
         alternativas: ["A) Porque é o único planeta que possui luas.", "B) Porque é uma estrela e sua gravidade influencia o movimento dos planetas ao seu redor.", "C) Porque é o maior planeta do Sistema Solar."], 
         correta: 1 },
      4: { pergunta: "Os astronautas observam o céu durante o dia e durante a noite. Por que conseguimos observar estrelas durante a noite com mais facilidade?",
         alternativas: ["A) Porque as estrelas aparecem somente à noite.", "B) Porque a luz do Sol deixa de existir durante a noite.", "C) Porque a luz do Sol é muito intensa durante o dia e dificulta a observação das outras estrelas."], 
         correta: 2 },
    },

    urano:{
      1: { pergunta: "Durante a viagem, os astronautas observam que Urano se comporta de forma muito diferente dos outros planetas. O que torna sua rotação tão incomum? ",
         alternativas: ["A) Ele não gira em torno do Sol. ", "B) Ele gira “de lado”.  ", "C) Ele gira para trás. "], 
         correta: 1 },
      2: { pergunta: "Os planetas parecem estar sempre se movimentando no espaço. Qual movimento e os planetas fazem ao redor do Sol?",
         alternativas: ["A) Rotação.", "B) Translação.", "C) Inclinação."], 
         correta: 1 },
      3: { pergunta: "Qual alternativa apresenta corretamente a diferença entre uma estrela e um planeta?",
         alternativas: ["A) Estrelas possuem luz própria; planetas não produzem sua própria luz.", "B) Planetas possuem luz própria; estrelas apenas refletem luz.", "C) Estrelas são menores que todos os planetas."], 
         correta: 0 },
      4: { pergunta: "Se o Sol deixasse de existir, o que aconteceria com o Sistema Solar?",
         alternativas: ["A) Os planetas continuariam recebendo a mesma luz e calor.", "B) Os planetas deixariam de existir imediatamente.", "C) A luz e o calor fornecidos pelo Sol deixariam de chegar aos planetas."], 
         correta: 2 },
    },

    netuno:{
      1: { pergunta: "Netuno é classificado como qual tipo de planeta?",
         alternativas: ["A) Rochoso. ", "B) Gigante gelado. ", "C) Planeta anão. "], 
         correta: 1 },
      2: { pergunta: "Durante a viagem, os astronautas encontram um planeta muito próximo do Sol e outro muito distante. Qual afirmação está correta?",
         alternativas: ["A) Mercúrio está mais próximo do Sol do que Netuno. ", "B) Netuno está mais próximo do Sol do que Mercúrio.", "C) Todos os planetas estão à mesma distância do Sol."], 
         correta: 0 },
      3: { pergunta: "Os planetas não seguem caminhos aleatórios pelo Sistema Solar. Como são chamados os caminhos que eles percorrem ao redor do Sol?",
         alternativas: [" A) Constelações.", "B) Órbitas.", "C) Galáxias"], 
         correta: 1},
      4: { pergunta: "Se uma nave sair de Netuno e precisar chegar até Mercúrio passando pelos planetas na ordem correta, qual sequência deverá seguir?",
         alternativas: ["A) Netuno → Saturno → Urano → Júpiter → Marte → Terra → Vênus → Mercúrio", "B) Netuno → Urano → Saturno → Júpiter → Marte → Terra → Vênus → Mercúrio", "B) Netuno → Urano → Saturno → Júpiter → Marte → Terra → Vênus → Mercúrio"], 
         correta: 1 },
    },

    plutao:{
      1: { pergunta: "Por estar extremamente distante do Sol, como é o clima em Plutão? ",
         alternativas: ["A) Muito quente. ", "B) Temperado. ", "C) Muito frio. "], 
         correta: 2 },
      2: { pergunta: "Por que a luz solar demora tanto para chegar a Plutão? ", 
         alternativas: ["A) Porque Plutão fica muito distante do Sol. ", "B) Porque Plutão possui nuvens gigantes. ", "C) Porque Caronte bloqueia a luz. "], 
         correta: 0 },
      3: { pergunta: "Plutão já foi considerado qual posição entre os planetas do Sistema Solar? ", 
         alternativas: ["A) 5º planeta. ", "B) 9º planeta. ", "C) 12º planeta.  "], 
         correta: 1 },
      4: { pergunta: "Antigamente, Plutão era considerado um planeta do Sistema Solar. Em 2006, os cientistas mudaram sua classificação para: ", 
         alternativas: ["A) Estrela anã. ", "B) Planeta anão.  ", "C) Asteroide gigante,"], 
         correta: 1 },
    },

    geral: {
      1: { pergunta: "O Sol parece muito maior e mais brilhante no céu do que as outras estrelas principalmente porque:", 
        alternativas: ["A) É a maior estrela que existe.", "B) Está muito mais próximo da Terra do que as outras estrelas que vemos.", "C) As outras estrelas não possuem luz própria."], 
        correta: 1 },
      2: { pergunta: "Um astronauta afirma: “As estrelas de uma constelação estão todas muito próximas umas das outras no espaço.”  Essa afirmação está:", 
        alternativas: ["A) Correta, porque todas as estrelas de uma constelação ficam juntas.", "B) Errada, porque o desenho da constelação é uma forma como vemos as estrelas da Terra.", "C) Errada, porque constelações são formadas apenas por planetas."], 
        correta: 1 },
      3: { pergunta: "Durante uma observação do céu, os astronautas percebem que algumas estrelas parecem formar desenhos quando vistas da Terra. Esses agrupamentos são chamados de:", 
        alternativas: ["A) Galáxias.", "B) Órbitas", "C) Constelações."], 
        correta: 2 },
      4: { pergunta: " Durante a viagem, os astronautas observam a Lua acompanhando a Terra. Qual afirmação explica corretamente essa relação?", 
        alternativas: ["A) A Lua é um satélite natural que gira ao redor da Terra.", "B) A Lua é uma estrela que gira ao redor do Sol.", "C) A Lua é um planeta que gira ao redor de Marte."], 
        correta: 0 },
    }
  };

  // Identifica qual planeta está aberto na página atual pelo atributo data-planeta
  const mainTag = document.querySelector("main[data-planeta]");
  if (!mainTag) return;
  const nomePlaneta = mainTag.getAttribute("data-planeta");
  const perguntasPlaneta = bancoDeTodosOsPlanetas[nomePlaneta];

  if (!perguntasPlaneta) return;

  const botoesPerguntas = document.querySelectorAll(".btn-pergunta");
  const listaPerguntasDiv = document.getElementById("lista-perguntas");
  const painelQuiz = document.getElementById("painel-quiz");
  const textoPergunta = document.getElementById("texto-pergunta");
  const opcoesRespostas = document.getElementById("opcoes-respostas");
  const feedbackResposta = document.getElementById("feedback-resposta");
  const btnVoltar = document.getElementById("voltar-lista");

  // Ao clicar em uma pergunta da lista, abre o painel correspondente
  botoesPerguntas.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      
      // Verifica se a pergunta realmente existe no código para evitar erros
      if (!perguntasPlaneta[id]) {
        alert("Esta pergunta ainda não foi cadastrada para este planeta!");
        return;
      }

      listaPerguntasDiv.style.display = "none";
      painelQuiz.style.display = "block";
      carregarPergunta(id);
    });
  });

  function carregarPergunta(id) {
    const dados = perguntasPlaneta[id];
    if (!dados) return;

    textoPergunta.textContent = dados.pergunta;
    opcoesRespostas.innerHTML = "";
    feedbackResposta.textContent = "";
    btnVoltar.style.display = "none";

    dados.alternativas.forEach((alt, index) => {
      const optBtn = document.createElement("button");
      optBtn.className = "answer-option";
      optBtn.textContent = alt;
      optBtn.addEventListener("click", () => {
        const todasOpcoes = opcoesRespostas.querySelectorAll("button");
        todasOpcoes.forEach(o => o.disabled = true);

        if (index === dados.correta) {
          optBtn.classList.add("correct");
          feedbackResposta.textContent = "🎉 Resposta Correta! Missão cumprida!";
        } else {
          optBtn.classList.add("wrong");
          feedbackResposta.textContent = "❌ Resposta incorreta!";
          todasOpcoes[dados.correta].classList.add("correct");
        }

        btnVoltar.style.display = "inline-block";
      });
      opcoesRespostas.appendChild(optBtn);
    });
  }

  if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
      painelQuiz.style.display = "none";
      listaPerguntasDiv.style.display = "block";
    });
  }
});
