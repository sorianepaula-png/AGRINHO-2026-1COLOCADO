// CONTROLADOR DE NAVEGAÇÃO DE ABAS EXCLUSIVAS
function trocarAba(nomeAba) {
    // Esconde todas as abas e remove classe ativa dos botões
    document.querySelectorAll('.aba-container').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.menu-item').forEach(button => button.classList.remove('active'));
    
    // Ativa a aba clicada e seu respectivo botão correspondente
    document.getElementById(`tab-${nomeAba}`).classList.add('active');
    document.getElementById(`btn-${nomeAba}`).classList.add('active');
    
    // Atualização dinâmica de títulos idêntica ao projeto original
    const bibliotecaTitulos = {
        painel: ["Monitoramento de Impacto Agroecológico", "Tecnologia aplicada ao desenvolvimento sustentável da Escola do Campo rural."],
        agroecologia: ["Espaço de Capacitação Científica", "Visão detalhada e aprofundada das seis grandes diretrizes conservacionistas."],
        licoes: ["Quiz e Avaliação Continuada", "Fixação teórica através de blocos de múltipla escolha integrados."],
        materiais: ["Central de Recursos Didáticos", "Visualização integrada de acervos científicos públicos sem links externos."],
        desafios: ["Módulos de Gamificação Prática", "Lógica de computação e pareamento para memorização biológica ativa."],
        progresso: ["Painel de Métricas e Resultados", "Análise de evolução conceitual obtida nos simuladores computadorizados."]
    };
    
    if (bibliotecaTitulos[nomeAba]) {
        document.getElementById('page-title').innerText = bibliotecaTitulos[nomeAba][0];
        document.getElementById('page-subtitle').innerText = bibliotecaTitulos[nomeAba][1];
    }
    
    if (nomeAba === 'desafios') {
        inicializarJogo();
    }
}

// 1. SIMULADOR ORIGINAL (DIAGNÓSTICO RURAL)
function executarDiagnostico(event) {
    event.preventDefault();
    const cob = parseFloat(document.getElementById('cobertura').value);
    const div = parseInt(document.getElementById('diversidade').value);
    const qui = document.getElementById('quimicos').value;
    
    let nota = 0;
    if (cob >= 70) nota += 35;
    else if (cob >= 40) nota += 20;
    else nota += 5;
    
    if (div >= 4) nota += 35;
    else if (div >= 2) nota += 20;
    else nota += 5;
    
    if (qui === 'nenhum') nota += 30;
    else if (qui === 'medio') nota += 15;
    else nota += 0;
    
    const box = document.getElementById('resultado-diagnostico');
    box.classList.remove('hidden');
    
    if (nota >= 80) {
        box.className = "output-alert bom";
        box.innerHTML = `<strong>✨ Índice de Sustentabilidade: ${nota}% (Excelente)</strong><br>A propriedade adota manejos ideais, garantindo a conservação do solo, diversidade biológica e proteção dos recursos hídricos regionais.`;
    } else if (nota >= 50) {
        box.className = "output-alert alerta";
        box.innerHTML = `<strong>🌿 Índice de Sustentabilidade: ${nota}% (Regular)</strong><br>Bons passos foram dados. Recomenda-se aumentar a variedade de plantas de cobertura e reduzir gradualmente os insumos industriais.`;
    } else {
        box.className = "output-alert perigo";
        box.innerHTML = `<strong>⚠️ Índice de Sustentabilidade: ${nota}% (Alerta Crítico)</strong><br>Risco severo de degradação estrutural e erosão do solo. É urgente implementar curvas de nível e adubação verde imediatamente.`;
    }
}

// 2. INFOGRÁFICOS DO POPUP (CONTEÚDO DA IMAGEM DA EMBRAPA)
const dadosEmbrapaPopups = {
    rotacao: {
        titulo: "🔄 Rotação de Culturas e Cobertura",
        intro: "Prática baseada no plantio alternado e planejado de diferentes vegetações ao longo das safras na mesma área geográfica. Evita que o solo sofra exaustão por extração repetitiva dos mesmos micronutrientes.",
        beneficios: ["Interrompe o ciclo biológico reprodutivo de pragas e nematoides.", "Melhora significativamente a macroestrutura física do solo através de diferentes sistemas radiculares.", "Aumenta a infiltração de água e reduz drasticamente a erosão laminar."],
        exemplo: "1º Ano: Milho (explora o solo e gera palhada) → 2º Ano: Soja (fixa nitrogênio) → 3º Ano: Plantas de Cobertura (Braquiária, Milheto, Crotalária e Nabo Forrageiro)."
    },
    adubacao: {
        titulo: "🌱 Adubação Verde e Cobertura Viva",
        intro: "Utilização estratégica de plantas cultivadas, principalmente leguminosas, que realizam simbiose natural com bactérias fixadoras para capturar o nitrogênio presente na atmosfera e injetá-lo diretamente na terra.",
        beneficios: ["Fixação biológica de Nitrogênio puro a custo zero.", "Proteção mecânica contra o impacto direto das gotas de chuva (evita selamento superficial).", "Aumento expressivo no teor de matéria orgânica e carbono a longo prazo."],
        exemplo: "Semeadura direta de Crotalária ou Feijão-de-porco nas janelas de entressafras. Solo coberto, solo protegido!"
    },
    mip: {
        titulo: "🐞 MIP - Manejo Integrado de Pragas",
        intro: "Conjunto ecológico de tomada de decisões que monitora as populações de pragas econômicas. Só autoriza intervenção direta quando os danos ultrapassam o custo do controle, priorizando os inimigos naturais e bioinseticidas.",
        beneficios: ["Redução drástica no custo de aquisição de defensivos químicos sintéticos.", "Preservação de predadores benéficos (como joaninhas e tesourinhas).", "Reduz riscos de intoxicação na comunidade escolar e familiar."],
        exemplo: "Uso de armadilhas biológicas de feromônios e liberação assistida de microvespas parasitoides."
    },
    safs: {
        titulo: "🌳 Sistemas Agroflorestais (SAFs)",
        intro: "Abordagem produtiva pioneira que mimetiza a arquitetura e a dinâmica biológica de uma floresta nativa, integrando no mesmo arranjo árvores altas, frutíferas, culturas anuais e/ou criação animal.",
        beneficios: ["Ciclagem profunda de nutrientes capturados por raízes arbóreas.", "Múltiplas fontes de renda na mesma área (madeira, frutas e grãos).", "Criação de microclimas amenos que protegem as plantas contra secas severas."],
        exemplo: "Consórcio de linhas de eucalipto ou árvores nativas com faixas produtivas de café, milho ou pastagens."
    },
    nascentes: {
        titulo: "💧 Recuperação e Proteção de Nascentes",
        intro: "Intervenção mecânica imediata nas Áreas de Preservação Permanente (APPs) para blindar os olhos d'água contra fontes de contaminação e compactação severas causadas pelo livre trânsito de animais de grande porte.",
        beneficios: ["Garantia de vazão contínua e pureza física da água consumida.", "Retorno natural da vegetação ciliar nativa no entorno imediato.", "Evita o assoreamento de córregos e riachos da microbacia."],
        exemplo: "Instalação de cercas rígidas num raio mínimo de 50 metros e plantio manual de mudas nativas da região."
    },
    curvas: {
        titulo: "🚜 Curvas de Nível e Terraceamento",
        intro: "Técnicas milenares de engenharia rústica que consistem em identificar as linhas de mesma altitude em encostas e construir barreiras ou degraus para quebrar a força gravitacional de descida das enxurradas.",
        beneficios: ["Retém a água na lavoura, forçando sua infiltração lenta no lençol freático.", "Impede o arraste da camada fértil superficial do solo.", "Elimina de forma absoluta a formação de voçorocas e sulcos erosivos."],
        exemplo: "Marcação de terrenos inclinados com pé-de-galinha ou nível de mangueira para construção de terraços de retenção."
    }
};

function mostrarModal(idAlvo) {
    const item = dadosEmbrapaPopups[idAlvo];
    if (!item) return;
    
    let bulletListHtml = "";
    item.beneficios.forEach(b => {
        bulletListHtml += `<li><i class="fa-solid fa-circle-check"></i> ${b}</li>`;
    });
    
    const layoutInjetado = `
        <div class="md-top-border">
            <h2>${item.titulo}</h2>
        </div>
        <div class="md-intro-box">${item.intro}</div>
        <div class="md-columns-grid">
            <div class="md-col">
                <h4><i class="fa-solid fa-square-poll-horizontal"></i> Benefícios da Prática:</h4>
                <ul>${bulletListHtml}</ul>
            </div>
            <div class="md-col">
                <h4><i class="fa-solid fa-gears"></i> Como Funciona / Exemplo:</h4>
                <p>${item.exemplo}</p>
                <div style="margin-top:14px; padding:10px; border-radius:6px; background:#e8f5e9; color:#2e7d32; font-size:0.78rem; font-weight:bold;">
                    🌾 Mais vida no solo = Mais produtividade e estabilidade econômica!
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('modal-content-injector').innerHTML = layoutInjetado;
    document.getElementById('global-modal-overlay').classList.remove('hidden');
}

function ocultarModal() {
    document.getElementById('global-modal-overlay').classList.add('hidden');
}
function fecharModalPorCliqueFora(e) {
    if (e.target.id === 'global-modal-overlay') ocultarModal();
}

// 3. QUIZ EXPANDIDO INTEGRADO (30 QUESTÕES / 3 NÍVEIS)
const databaseQuestoes = {
    facil: [
        { q: "Qual o principal objetivo da rotação de culturas?", o: ["Desgastar o solo mais rápido", "Quebrar ciclos de pragas e doenças", "Usar apenas um tipo de adubo", "Aumentar o uso de químicos"], a: 1 },
        { q: "O que é adubação verde?", o: ["Pintar as plantas de verde", "Uso de plantas específicas para melhorar o solo", "Aplicar fertilizante sintético", "Irrigar com água tratada"], a: 1 },
        { q: "Qual inseto é um predador natural famoso no controle biológico (MIP)?", o: ["Lagarta-do-cartucho", "Joaninha", "Gafanhoto", "Cochonilha"], a: 1 },
        { q: "As curvas de nível servem principalmente para evitar o quê?", o: ["A erosão provocada pelas chuvas", "O crescimento das plantas", "A presença de pássaros", "O vento excessivo"], a: 0 },
        { q: "O que significa a sigla SAFs?", o: ["Sistemas Agroflorestais", "Sistemas de Adubação Forte", "Sustentabilidade Agrícola", "Associação de Produtores"], a: 0 },
        { q: "Qual a distância mínima recomendada para proteger uma nascente?", o: ["5 metros", "10 metros", "50 metros", "2 metros"], a: 2 },
        { q: "A palhada deixada sobre o solo ajuda a manter o quê?", o: ["O solo seco", "A umidade e a temperatura adequadas", "As pragas escondidas", "O solo compactado"], a: 1 },
        { q: "As plantas leguminosas ajudam a fixar qual elemento no solo?", o: ["Oxigênio", "Nitrogênio", "Ferro", "Cálcio"], a: 1 },
        { q: "O que o gado NÃO deve fazer na área de uma nascente protegida?", o: ["Ficar longe da cerca", "Pisotear e sujar a água", "Beber água fora da APP", "Sombra em árvores distantes"], a: 1 },
        { q: "A agroecologia busca imitar o funcionamento de qual sistema?", o: ["Uma fábrica industrial", "A própria natureza", "Um laboratório químico", "Uma cidade urbana"], a: 1 }
    ],
    medio: [
        { q: "No plantio consorciado de milho e soja, qual a vantagem da soja?", o: ["Fornecer sombra ao milho", "Fixar nitrogênio para o sistema", "Competir por água", "Substituir a colheita do milho"], a: 1 },
        { q: "O que caracteriza o Manejo Integrado de Pragas (MIP)?", o: ["Eliminar insetos antes de surgirem", "Monitorar a lavoura e usar o controle biológico antes do químico", "Aplicar defensivos semanalmente", "Ignorar as pragas da época"], a: 1 },
        { q: "Em terrenos muito inclinados (morros), qual a técnica mecânica ideal?", o: ["Plantio morro abaixo", "Queima dos resíduos", "Curvas de nível e terraceamento", "Desmatamento total"], a: 2 },
        { q: "Qual planta é muito utilizada como adubo verde no Paraná?", o: ["Eucalipto", "Crotalária ou Nabo Forrageiro", "Pinus", "Samambaia"], a: 1 },
        { q: "O que é uma APP na legislação ambiental brasileira?", o: ["Área de Produção Pesada", "Área de Preservação Permanente", "Associação de Produtores", "Atividade Agrícola Particular"], a: 1 },
        { q: "Os SAFs combinam quais elementos no mesmo espaço?", o: ["Apenas soja e milho", "Árvores, cultivos agrícolas e/ou animais", "Prédios e estufas", "Tratores e implementos"], a: 1 },
        { q: "O que causa a voçoroca no solo desprotegido?", o: ["Falta de sementes", "Erosão severa pela força da enxurrada", "Excesso de minhocas", "Uso de adubo orgânico"], a: 1 },
        { q: "Por que a diversificação melhora a segurança econômica do produtor?", o: ["Reduz as fontes de renda", "Depende de um único preço", "Gera múltiplas fontes de renda e reduz riscos", "Aumenta o custo com maquinário"], a: 2 },
        { q: "O que analisa o monitoramento do nível de dano econômico no MIP?", o: ["A quantidade no estoque", "Se o prejuízo da praga é maior que o custo de controle", "O preço do frete do grão", "A previsão do tempo"], a: 1 },
        { q: "Qual a função do cercamento nas nascentes?", o: ["Impedir o crescimento de árvores", "Evitar a entrada e pisotio de animais que destroem a fonte", "Enfeitar a propriedade", "Esconder a água"], a: 1 }
    ],
    dificil: [
        { q: "Como ocorre a quebra de ciclos de pragas na rotação de culturas?", o: ["As pragas ficam sem o hospedeiro específico e morrem", "O veneno dura mais tempo", "O solo impede a locomoção", "As plantas crescem mais rápido"], a: 0 },
        { q: "Quais são as estruturas nas raízes das leguminosas que realizam a fixação biológica?", o: ["Cloroplastos foliares", "Nódulos formados por bactérias Rhizobium", "Micorrizas superficiais", "Estômatos radiculares"], a: 1 },
        { q: "Qual a definição ecológica de resiliência sistêmica nos SAFs?", o: ["Capacidade do sistema resistir e se recuperar devido à alta biodiversidade", "Necessidade de irrigação constante", "Dependência extrema de fertilização", "Uniformidade genética"], a: 0 },
        { q: "No MIP, por que o uso indiscriminado de inseticidas de amplo espectro é prejudicial?", o: ["Elimina os inimigos naturais, gerando surtos secundários", "Deixa as folhas muito verdes", "Aumenta a população de minhocas", "Altera o pH da água"], a: 0 },
        { q: "Como o terraceamento mecânico altera a energia da enxurrada?", o: ["Aumenta a velocidade de descida", "Fraciona o comprimento da rampa, reduzindo velocidade e ampliando infiltração", "Direciona a água direto para as estradas", "Evapora a água instantaneamente"], a: 1 },
        { q: "Qual o papel das plantas de cobertura de raízes profundas na ciclagem?", o: ["Extrair água para a superfície e secar o lençol", "Recuperar nutrientes lixiviados nas camadas profundas e depositá-los na superfície", "Compactar o subsolo", "Bloquear a entrada de ar"], a: 1 },
        { q: "O que caracteriza a transição agroecológica numa propriedade?", o: ["Substituição imediata sem planejamento", "Processo gradual de redesenho, diminuindo insumos e ampliando autonomia", "Abandono por falta de lucro", "Uso exclusivo de transgênicos"], a: 1 },
        { q: "Como a palhada atua na proteção do solo contra o impacto inicial da chuva?", o: ["Absorve a energia cinética das gotas, evitando o selamento superficial", "Alimenta os pássaros", "Impede o nascimento de qualquer planta", "Acelera a evaporação"], a: 0 },
        { q: "O que é o controle etológico no âmbito do MIP?", o: ["Uso de tratores maiores", "Uso de armadilhas baseadas no comportamento das pragas (feromônios)", "Uso de fungos nas folhas", "Destruição manual de ninhos"], a: 1 },
        { q: "Qual o benefício a longo prazo do aumento da matéria orgânica via agroecologia?", o: ["Aumento da CTC do solo, retenção de água e estabilidade estrutural", "Acidificação extrema da terra", "Necessidade de maior calagem", "Redução da atividade biológica"], a: 0 }
    ]
};

let quizDificuldade = 'facil';
let quizIndex = 0;

function mudarDificuldadeQuiz(novaDif) {
    quizDificuldade = novaDif;
    quizIndex = 0;
    document.querySelectorAll('.lvl-toggle').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-lvl-${novaDif}`).classList.add('active');
    renderizarQuiz();
}

function renderizarQuiz() {
    const lista = databaseQuestoes[quizDificuldade];
    const questao = lista[quizIndex];
    
    document.getElementById('quiz-question-counter').innerText = `Pergunta ${quizIndex + 1} de ${lista.length}`;
    document.getElementById('quiz-progress-fill').style.width = `${((quizIndex + 1) / lista.length) * 100}%`;
    document.getElementById('quiz-question-display').innerText = questao.q;
    
    const boxOpcoes = document.getElementById('quiz-options-container');
    boxOpcoes.innerHTML = "";
    
    questao.o.forEach((itemOpcao, idx) => {
        const elementoBotao = document.createElement('button');
        elementoBotao.className = "quiz-row-option";
        elementoBotao.innerHTML = `<span class="quiz-letter-badge">${String.fromCharCode(65 + idx)}</span> <span>${itemOpcao}</span>`;
        elementoBotao.onclick = () => avaliarRespostaQuiz(idx, elementoBotao);
        boxOpcoes.appendChild(elementoBotao);
    });
    
    document.getElementById('quiz-btn-next').disabled = true;
    document.getElementById('quiz-msg-feedback').className = "quiz-feedback hidden";
}

function avaliarRespostaQuiz(opcaoEscolhida, botaoClicado) {
    const questao = databaseQuestoes[quizDificuldade][quizIndex];
    const todosBotoes = document.querySelectorAll('.quiz-row-option');
    
    todosBotoes.forEach(b => b.disabled = true);
    const boxFeedback = document.getElementById('quiz-msg-feedback');
    boxFeedback.classList.remove('hidden');
    
    if (opcaoEscolhida === questao.a) {
        botaoClicado.classList.add('right-answer');
        boxFeedback.className = "quiz-feedback sucesso";
        boxFeedback.innerHTML = "<i class='fa-solid fa-circle-check'></i> Resposta Correta! Conceito absorvido.";
    } else {
        botaoClicado.classList.add('wrong-answer');
        todosBotoes[questao.a].classList.add('right-answer');
        boxFeedback.className = "quiz-feedback falha";
        boxFeedback.innerHTML = `<i class='fa-solid fa-circle-xmark'></i> Incorreto. A correta é a ${String.fromCharCode(65 + questao.a)}.`;
    }
    document.getElementById('quiz-btn-next').disabled = false;
}

function proximaPergunta() {
    quizIndex++;
    const lista = databaseQuestoes[quizDificuldade];
    if (quizIndex < lista.length) {
        renderizarQuiz();
    } else {
        document.getElementById('quiz-question-counter').innerText = "Nível Concluído!";
        document.getElementById('quiz-question-display').innerText = "Excelente! Módulo de fixação encerrado.";
        document.getElementById('quiz-options-container').innerHTML = "<p style='padding:12px; color:var(--text-light); font-size:0.9rem;'>Parabéns por exercitar a lógica computacional do campo. Mude de nível nos botões superiores para continuar testando seus conhecimentos.</p>";
        document.getElementById('quiz-btn-next').disabled = true;
        document.getElementById('quiz-msg-feedback').className = "quiz-feedback hidden";
    }
}

// 4. CENTRAL DE MATERIAIS DE APOIO (VIEWPORT DE ARQUIVOS)
function loadMediaExternalLink(tipo) {
    // Função auxiliar mantida segura para referências futuras
}

function carregarMidia(tipoMidia) {
    const containerViewport = document.getElementById('media-viewport-container');
    const displayTitle = document.getElementById('media-viewport-title');
    const targetBox = document.getElementById('media-frame-box');
    
    containerViewport.classList.remove('hidden');
    targetBox.innerHTML = "";
    
    if (tipoMidia === 'pdf') {
        displayTitle.innerHTML = "<i class='fa-solid fa-file-pdf' style='color:#e63946'></i> Manual Científico Integrado (Embrapa)";
        targetBox.innerHTML = `<iframe src="https://cloud.embrapa.br/index.php/s/7Zgq6N9y6p8mZ4E/download" class="frame-object"></iframe>`;
    } else if (tipoMidia === 'video') {
        displayTitle.innerHTML = "<i class='fa-solid fa-circle-play' style='color:#457b9d'></i> Aula Experimental Interativa";
        targetBox.innerHTML = `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" class="frame-object" allowfullscreen frameborder="0"></iframe>`;
    }
    containerViewport.scrollIntoView({ behavior: 'smooth' });
}

function fecharMidia() {
    document.getElementById('media-viewport-container').classList.add('hidden');
    document.getElementById('media-frame-box').innerHTML = ""; 
}

// 5. JOGO DA MEMÓRIA COM ENGENHARIA REVERSA FISHER-YATES
const cartasMemoriaOriginais = [
    { nome: "Rotação", icone: "🔄" }, { nome: "Rotação", icone: "🔄" },
    { nome: "MIP", icone: "🐞" }, { nome: "MIP", icone: "🐞" },
    { nome: "SAFs", icone: "🌳" }, { nome: "SAFs", icone: "🌳" },
    { nome: "Nascentes", icone: "💧" }, { nome: "Nascentes", icone: "💧" },
    { nome: "Curvas de Nível", icone: "🚜" }, { nome: "Curvas de Nível", icone: "🚜" },
    { nome: "Adubação", icone: "🌱" }, { nome: "Adubação", icone: "🌱" }
];

let vetorTemporarioCartas = [];
let jogadasEfetuadas = 0;
let segundosPassados = 0;
let timerIdInterv = null;
let flagJogoRodando = false;

function iniciarTimerJogo() {
    if (flagJogoRodando) return;
    flagJogoRodando = true;
    segundosPassados = 0;
    timerIdInterv = setInterval(() => {
        segundosPassados++;
        const m = String(Math.floor(segundosPassados / 60)).padStart(2, '0');
        const s = String(segundosPassados % 60).padStart(2, '0');
        document.getElementById('timer-val').innerText = `${m}:${s}`;
    }, 1000);
}

function inicializarJogo() {
    clearInterval(timerIdInterv);
    flagJogoRodando = false;
    jogadasEfetuadas = 0;
    vetorTemporarioCartas = [];
    document.getElementById('timer-val').innerText = "00:00";
    document.getElementById('moves-val').innerText = "0";
    
    // Duplica e embaralha via Fisher-Yates
    const matrizEmbaralhada = [...cartasMemoriaOriginais];
    for (let i = matrizEmbaralhada.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [matrizEmbaralhada[i], matrizEmbaralhada[j]] = [matrizEmbaralhada[j], matrizEmbaralhada[i]];
    }
    
    const areaCanvas = document.getElementById('memory-board-canvas');
    areaCanvas.innerHTML = "";
    
    matrizEmbaralhada.forEach((item) => {
        const blocoCarta = document.createElement('div');
        blocoCarta.className = "memory-tile";
        blocoCarta.innerHTML = `
            <div class="tile-back">?</div>
            <div class="tile-front"><span>${item.icone}</span>${item.nome}</div>
        `;
        blocoCarta.onclick = () => processarGiroCarta(blocoCarta, item);
        areaCanvas.appendChild(blocoCarta);
    });
}

function processarGiroCarta(elementoCarta, objetoDado) {
    if (elementoCarta.classList.contains('flipped') || elementoCarta.classList.contains('matched') || vetorTemporarioCartas.length >= 2) return;
    
    iniciarTimerJogo();
    elementoCarta.classList.add('flipped');
    vetorTemporarioCartas.push({ el: elementoCarta, d: objetoDado });
    
    if (vetorTemporarioCartas.length === 2) {
        jogadasEfetuadas++;
        document.getElementById('moves-val').innerText = jogadasEfetuadas;
        
        if (vetorTemporarioCartas[0].d.nome === vetorTemporarioCartas[1].d.nome) {
            vetorTemporarioCartas[0].el.classList.add('matched');
            vetorTemporarioCartas[1].el.classList.add('matched');
            vetorTemporarioCartas = [];
            
            if (document.querySelectorAll('.memory-tile.matched').length === cartasMemoriaOriginais.length) {
                clearInterval(timerIdInterv);
                setTimeout(() => { alert(`🎉 Vitória! Missão computacional completada em ${jogadasEfetuadas} jogadas!`); }, 400);
            }
        } else {
            setTimeout(() => {
                vetorTemporarioCartas[0].el.classList.remove('flipped');
                vetorTemporarioCartas[1].el.classList.remove('flipped');
                vetorTemporarioCartas = [];
            }, 900);
        }
    }
}

// TRIGGER DE INICIALIZAÇÃO DA DOM
document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById('quiz-question-display')) renderizarQuiz();
});