// ============================================================================
// 1. BANCO DE DADOS GLOBAL DA APLICAÇÃO (SIMULADOR E QUIZ DE DESAFIOS)
// ============================================================================
const itensQuizAgroecologico = [
    {
        pergunta: "O que a palha seca jogada sobre a horta ou lavoura faz pelo solo?",
        opcoes: [
            "Esquenta a terra até queimar a raiz da cultura comercial",
            "Funciona como uma cobertura protetora, guardando a umidade da água",
            "Impede que o adubo orgânico penetre e faça efeito",
            "Serve apenas para aglomerar insetos nocivos à lavoura"
        ],
        correta: 1,
        dica: "Dica: A palha age como barreira térmica, evitando que o sol evapore a água rapidamente."
    },
    {
        pergunta: "Qual a forma correta e recomendada de proteger uma mina d'água (nascente)?",
        opcoes: [
            "Permitir o acesso e pisoteio direto dos animais de grande porte na fonte",
            "Desmatar completamente o entorno para aumentar a incidência de luz solar",
            "Fazer o cercamento protetor completo em raio de 50m e manter a mata ciliar",
            "Canalizar e impermeabilizar totalmente o leito hídrico com concreto"
        ],
        correta: 2,
        dica: "Dica: O isolamento físico impede a contaminação mecânica e o assoreamento por enxurradas."
    },
    {
        pergunta: "O Manejo Integrado de Pragas (MIP) defende qual ação prioritária no campo?",
        opcoes: [
            "Aplicar defensivos químicos calendarizados preventivamente toda semana",
            "Monitorar a lavoura e utilizar inimigos naturais (controle biológico) antes do químico",
            "Eliminar toda e qualquer forma de vida animal da propriedade agrícola",
            "Substituir toda a lavoura por espécies ornamentais resistentes"
        ],
        correta: 1,
        dica: "Dica: No MIP, o controle químico pesado só é acionado quando o nível de dano econômico é atingido."
    }
];

// BANCO DE DADOS DE DETALHAMENTO DAS PRÁTICAS (SISTEMA INFOGRÁFICO INTERATIVO)
const dadosAgroecologiaPopup = {
    rotacao: {
        titulo: "Rotação e Diversificação de Culturas",
        icone: "🔄",
        funciona: "Consiste em alternar planejadamente diferentes espécies vegetais na mesma área a cada safra. Evita que as pragas encontrem sempre o mesmo hospedeiro e faz com que raízes de tamanhos diferentes explorem o solo de forma equilibrada.",
        beneficios: [
            "Quebra o ciclo reprodutivo de pragas e doenças sazonais.",
            "Melhora fisicamente a estrutura e aeração interna da terra.",
            "Aproveita melhor os adubos residuais de safras passadas.",
            "Diversifica e estabiliza a renda do pequeno produtor rural."
        ],
        especies: ["Milho", "Soja", "Trigo de Inverno", "Girassol", "Feijão"]
    },
    adubacao: {
        titulo: "Adubação Verde e Cobertura Viva",
        icone: "🌿",
        funciona: "Cultivo de plantas densas (geralmente leguminosas ou gramíneas) que cobrem o solo contra o impacto direto do sol e da chuva, sendo depois roçadas para virar adubação verde residual.",
        beneficios: [
            "Fixa Nitrogênio natural no solo através de simbiose radicular.",
            "Cria uma espessa camada física protetora contra erosões severas.",
            "Abafa e elimina o crescimento indesejado de ervas daninhas.",
            "Mantém a umidade térmica da terra por períodos prolongados."
        ],
        especies: ["Crotalária Spectabilis", "Nabo Forrageiro", "Ervilhaca", "Feijão-de-Porco"]
    },
    mip: {
        titulo: "MIP - Manejo Integrado de Pragas",
        icone: "🐞",
        funciona: "Acompanhamento rigoroso da lavoura através de vistorias periódicas. Só se aplica alguma correção química pesada quando o prejuízo financeiro causado pela praga supera o custo de aplicação.",
        beneficios: [
            "Economia financeira drástica pela redução do uso de agroquímicos.",
            "Preservação integral de abelhas e outros insetos polinizadores.",
            "Produção final de alimentos mais puros e saudáveis para consumo.",
            "Evita que as pragas desenvolvam resistência de variantes."
        ],
        especies: ["Joaninhas Predadoras", "Vespinhas Trichogramma", "Bactéria Biológica Bt"]
    },
    safs: {
        titulo: "Sistemas Agroflorestais (SAFs)",
        icone: "🌳",
        funciona: "Arranjo produtivo que une árvores nativas ou lenhosas, frutíferas e lavouras tradicionais na mesma área geográfica. Funciona imitando a mecânica equilibrada e cíclica de uma floresta.",
        beneficios: [
            "Recupera solos severamente exauridos ou degradados.",
            "Cria um microclima local fresco, reduzindo o estresse térmico.",
            "Gera colheitas variadas e contínuas em múltiplas estações do ano.",
            "Seqüestra e fixa altos níveis de carbono gasoso da atmosfera."
        ],
        especies: ["Café", "Banana", "Araucária (Pinhão)", "Palmeira Juçara", "Mandioca"]
    },
    nascentes: {
        titulo: "Proteção e Conservação de Nascentes",
        icone: "💧",
        funciona: "Isolamento da área do 'olho d'água' num raio mínimo de 50 metros utilizando cercas fortes para impedir o pisoteio do rebanho, associado ao replantio de mudas de matas ciliares nativas.",
        beneficios: [
            "Garante o fornecimento contínuo de água limpa para a propriedade.",
            "Evita o assoreamento, deslizamento ou soterramento da mina.",
            "Estimula o retorno de anfíbios e pássaros nativos da fauna.",
            "Regulariza a propriedade conforme as normas do Código Florestal brasileiro."
        ],
        especies: ["Ingá", "Aroeira Vermelha", "Ipê Amarelo", "Cedro-Rosa"]
    },
    curvas: {
        titulo: "Curvas de Nível e Terraceamento",
        icone: "⛰️",
        funciona: "Técnica de engenharia mecânica rústica onde o alinhamento do plantio acompanha as cotas de mesma altitude de um terreno inclinado, atuando como barreiras que travam as enxurradas.",
        beneficios: [
            "Retém a camada mais superficial e fértil da terra na lavoura.",
            "Obriga a água das chuvas fortes a se infiltrar profundamente no solo.",
            "Previne a abertura de valas e fendas erosivas profundas (voçorocas).",
            "Aumenta a estabilidade e segurança na operação de tratores rústicos."
        ],
        especies: ["Barreiras de Capim-Vetiver", "Terras em Nível", "Cordões de Pedra Contínuos"]
    }
};

// CONTROLE DE VARIÁVEIS DE JOGO E MIGRATION DE ESTADO
let indiceQuestaoQuiz = 0;
let acertosQuestaoQuiz = 0;
let bloqueioRespostaQuiz = false;

let recordeSimuladoPontos = 0;
let totalMissoesCompletas = 0;

// ============================================================================
// 2. SISTEMA DE POPUP / POPUP DOS CARDS DA ABA AGROECOLOGIA
// ============================================================================
function abrirDetalheAgro(idTecnica) {
    const dados = dadosAgroecologiaPopup[idTecnica];
    if (!dados) return;

    document.getElementById('info-icone').innerText = dados.icone;
    document.getElementById('info-titulo').innerText = dados.titulo;
    document.getElementById('info-funciona').innerText = dados.funciona;
    
    const boxBeneficios = document.getElementById('info-beneficios');
    boxBeneficios.innerHTML = "";
    dados.beneficios.forEach(b => {
        boxBeneficios.innerHTML += `<li>✅ ${b}</li>`;
    });
    
    const boxEspecies = document.getElementById('info-especies');
    boxEspecies.innerHTML = "";
    dados.especies.forEach(e => {
        boxEspecies.innerHTML += `<span class="popup-tag-tecnica">${e}</span>`;
    });
    
    document.getElementById('modal-agroecologia').classList.remove('hidden');
}

function fecharDetalheAgro() {
    document.getElementById('modal-agroecologia').classList.add('hidden');
}

// ============================================================================
// 3. MOTOR LOGICO DO SIMULADOR DE SUSTENTABILIDADE (ABA 1)
// ============================================================================
function processarSimulacaoAgroecologica() {
    let p1 = parseInt(document.getElementById("sim-input-rotacao").value);
    let p2 = parseInt(document.getElementById("sim-input-cobertura").value);
    let p3 = parseInt(document.getElementById("sim-input-insumos").value);
    let p4 = parseInt(document.getElementById("sim-input-reserva").value);

    let somaPontos = p1 + p2 + p3 + p4;
    let indicePercentual = Math.round((somaPontos / 8) * 100);

    // Atualiza barra de progresso visual do indicador
    const elementoBarra = document.getElementById("radial-gauge-fill");
    const elementoTexto = document.getElementById("radial-gauge-value");
    
    if (elementoBarra) elementoBarra.style.width = `${indicePercentual}%`;
    if (elementoTexto) elementoTexto.innerText = `${indicePercentual}%`;

    // Atualiza Quadro de Feedbacks
    const txtTitulo = document.getElementById("txt-status-titulo");
    const txtCorpo = document.getElementById("txt-status-corpo");

    // Seletores laterais de diagnóstico
    const dErosao = document.getElementById("val-diag-erosao");
    const dCustos = document.getElementById("val-diag-custos");
    const dVida = document.getElementById("val-diag-vida");

    const iErosao = document.getElementById("ico-diag-erosao");
    const iCustos = document.getElementById("ico-diag-custos");
    const iVida = document.getElementById("ico-diag-vida");

    if (indicePercentual <= 25) {
        txtTitulo.innerText = "🚨 Alerta: Manejo Degradante Detectado";
        txtCorpo.innerText = "A propriedade opera em moldes de alta dependência química e monocultivo, gerando desgaste severo do solo e desproteção das águas.";
        
        dErosao.innerText = "Altíssimo Risco"; iErosao.innerText = "❌"; iErosao.className = "diagnostic-icon bg-soft-red";
        dCustos.innerText = "Prejudicado (Dependente)"; iCustos.innerText = "❌"; iCustos.className = "diagnostic-icon bg-soft-red";
        dVida.innerText = "Solo Estéril / Biologia Morta"; iVida.innerText = "❌"; iVida.className = "diagnostic-icon bg-soft-red";
    } else if (indicePercentual <= 75) {
        txtTitulo.innerText = "⚠️ Atenção: Transição Agroecológica Necessária";
        txtCorpo.innerText = "Existem práticas conservacionistas parciais, porém a dependência externa de adubos ou falhas no isolamento hídrico limitam a resiliência rural.";
        
        dErosao.innerText = "Moderado (Controlado)"; iErosao.innerText = "⚠️"; iErosao.className = "diagnostic-icon bg-soft-orange";
        dCustos.innerText = "Custo Operacional Alto"; iCustos.innerText = "⚠️"; iCustos.className = "diagnostic-icon bg-soft-orange";
        dVida.innerText = "Atividade Biológica Lenta"; iVida.innerText = "⚠️"; iVida.className = "diagnostic-icon bg-soft-orange";
    } else {
        txtTitulo.innerText = "🌿 Excelente: Propriedade Sustentável / Modelo";
        txtCorpo.innerText = "Parabéns! O ecossistema agrícola mimetiza o equilíbrio natural. O solo armazena carbono, as águas estão protegidas e a biodiversidade atua no controle biológico.";
        
        dErosao.innerText = "Erosão Zero / Protegido"; iErosao.innerText = "✅"; iErosao.className = "diagnostic-icon bg-soft-green";
        dCustos.innerText = "Independente (Alta Lucratividade)"; iCustos.innerText = "✅"; iCustos.className = "diagnostic-icon bg-soft-green";
        dVida.innerText = "Microbiologia Rica e Ativa"; iVida.innerText = "✅"; iVida.className = "diagnostic-icon bg-soft-green";

        // Liberação de conquista se atingiu 100% de sustentabilidade
        if (indicePercentual === 100) {
            let nodeSim = document.getElementById('node-ch-sim');
            if (nodeSim && !nodeSim.classList.contains('achieved')) {
                nodeSim.classList.add('achieved');
                document.getElementById('tag-ch-sim').innerText = "Concluído";
                document.getElementById('med-target-sim').classList.add('unlocked');
                totalMissoesCompletas++;
            }
        }
    }

    if (indicePercentual > recordeSimuladoPontos) {
        recordeSimuladoPontos = indicePercentual;
    }
    atualizarPainelProgressoGeral();
}

// ============================================================================
// 4. MOTOR DO QUIZ INTERATIVO (ABA 5 - TOPO)
// ============================================================================
function carregarQuestaoQuiz() {
    bloqueioRespostaQuiz = false;
    document.getElementById('quiz-txt-dica').style.display = "none";
    
    let dadosQuestao = itensQuizAgroecologico[indiceQuestaoQuiz];
    document.getElementById('quiz-score-badge').innerText = `Questão: ${indiceQuestaoQuiz + 1} / 3`;
    document.getElementById('quiz-txt-pergunta').innerText = dadosQuestao.pergunta;

    const conteinerOpcoes = document.getElementById('quiz-container-opcoes');
    conteinerOpcoes.innerHTML = "";

    dadosQuestao.opcoes.forEach((opcao, idx) => {
        const botao = document.createElement('button');
        botao.className = "quiz-opt-btn";
        botao.innerText = opcao;
        botao.onclick = () => avaliarRespostaQuiz(idx, botao);
        conteinerOpcoes.appendChild(botao);
    });
}

function avaliarRespostaQuiz(indiceSelecionado, botaoClicado) {
    if (bloqueioRespostaQuiz) return;
    bloqueioRespostaQuiz = true;

    let dadosQuestao = itensQuizAgroecologico[indiceQuestaoQuiz];
    const dicaBox = document.getElementById('quiz-txt-dica');

    if (indiceSelecionado === dadosQuestao.correta) {
        botaoClicado.classList.add('correct-ans');
        acertosQuestaoQuiz++;
    } else {
        botaoClicado.classList.add('wrong-ans');
        // Pinta a alternativa que era a correta de verde para fins didáticos
        const todosBotoes = document.getElementById('quiz-container-opcoes').children;
        todosBotoes[dadosQuestao.correta].classList.add('correct-ans');
    }

    dicaBox.innerText = dadosQuestao.dica;
    dicaBox.style.display = "block";

    setTimeout(() => {
        indiceQuestaoQuiz++;
        if (indiceQuestaoQuiz < itensQuizAgroecologico.length) {
            carregarQuestaoQuiz();
        } else {
            alert(`🎉 Teste concluído! Você acertou ${acertosQuestaoQuiz} de 3 questões.`);
            
            // Liberação de medalha caso feche com acerto perfeito (3/3)
            if (acertosQuestaoQuiz === 3) {
                let nodeQuiz = document.getElementById('node-ch-quiz');
                if (nodeQuiz && !nodeQuiz.classList.contains('achieved')) {
                    nodeQuiz.classList.add('achieved');
                    document.getElementById('tag-ch-quiz').innerText = "Concluído";
                    document.getElementById('med-target-quiz').classList.add('unlocked');
                    totalMissoesCompletas++;
                }
            }
            // Reseta o loop do Quiz pedagógico
            indiceQuestaoQuiz = 0;
            acertosQuestaoQuiz = 0;
            carregarQuestaoQuiz();
        }
        atualizarPainelProgressoGeral();
    }, 4500);
}

// ============================================================================
// 5. NOVO: LÓGICA DO JOGO DA MEMÓRIA AGRINHO NATIVO (ABA 5 - BASE)
// ============================================================================
const itensMemoria = [
    { id: 1, emoji: "🔄" }, { id: 1, emoji: "🔄" },
    { id: 2, emoji: "🌿" }, { id: 2, emoji: "🌿" },
    { id: 3, emoji: "🐞" }, { id: 3, emoji: "🐞" },
    { id: 4, emoji: "🌳" }, { id: 4, emoji: "🌳" },
    { id: 5, emoji: "💧" }, { id: 5, emoji: "💧" },
    { id: 6, emoji: "⛰️" }, { id: 6, emoji: "⛰️" }
];

let cartasViradas = [];
let movimentosMemoria = 0;
let paresEncontrados = 0;
let cronometroMemoria;
let tempoSegundos = 0;
let jogoIniciado = false;

function inicializarJogoMemoria() {
    const grid = document.getElementById('grid-jogo-memoria');
    if (!grid) return;
    
    grid.innerHTML = "";
    cartasViradas = [];
    movimentosMemoria = 0;
    paresEncontrados = 0;
    tempoSegundos = 0;
    jogoIniciado = false;
    clearInterval(cronometroMemoria);
    
    document.getElementById('memoria-movimentos').innerText = "0";
    document.getElementById('memoria-pares').innerText = "0 / 6";
    document.getElementById('memoria-tempo').innerText = "00:00";

    // Embaralhamento aleatório (algoritmo rústico)
    const cartasEmbaralhadas = [...itensMemoria].sort(() => Math.random() - 0.5);

    cartasEmbaralhadas.forEach((item, index) => {
        const elementoCarta = document.createElement('div');
        elementoCarta.className = "carta-memoria";
        elementoCarta.dataset.id = item.id;
        elementoCarta.dataset.index = index;
        elementoCarta.innerText = item.emoji;
        elementoCarta.addEventListener('click', virarCartaMemoria);
        grid.appendChild(elementoCarta);
    });
}

function virarCartaMemoria() {
    // Inicia o cronômetro do jogo no primeiro clique do aluno
    if (!jogoIniciado) {
        jogoIniciado = true;
        cronometroMemoria = setInterval(() => {
            tempoSegundos++;
            const min = String(Math.floor(tempoSegundos / 60)).padStart(2, '0');
            const seg = String(tempoSegundos % 60).padStart(2, '0');
            document.getElementById('memoria-tempo').innerText = `${min}:${seg}`;
        }, 1000);
    }

    const cartaSelecionada = this;
    if (cartaSelecionada.classList.contains('virada') || cartaSelecionada.classList.contains('combinada') || cartasViradas.length >= 2) return;

    cartaSelecionada.classList.add('virada');
    cartasViradas.push(cartaSelecionada);

    if (cartasViradas.length === 2) {
        movimentosMemoria++;
        document.getElementById('memoria-movimentos').innerText = movimentosMemoria;
        checarParMemoria();
    }
}

function checarParMemoria() {
    const [carta1, carta2] = cartasViradas;
    
    if (carta1.dataset.id === carta2.dataset.id) {
        carta1.classList.add('combinada');
        carta2.classList.add('combinada');
        paresEncontrados++;
        document.getElementById('memoria-pares').innerText = `${paresEncontrados} / 6`;
        cartasViradas = [];
        
        if (paresEncontrados === 6) {
            clearInterval(cronometroMemoria);
            setTimeout(() => { 
                alert(`🏆 Excelente! Você descobriu todos os pares de técnicas agroecológicas do Agrinho em ${movimentosMemoria} movimentos!`); 
            }, 400);
        }
    } else {
        setTimeout(() => {
            carta1.classList.remove('virada');
            carta2.classList.remove('virada');
            cartasViradas = [];
        }, 1000);
    }
}

// ============================================================================
// 6. SISTEMA DE RELATÓRIO E SINCRONIZAÇÃO DE PROGRESSO (ABA 6)
// ============================================================================
function atualizarPainelProgressoGeral() {
    document.getElementById('meta-txt-missoes').innerText = `${totalMissoesCompletas} / 2`;
    
    let precisaoCalculada = Math.round((acertosQuestaoQuiz / 3) * 100);
    if (precisaoCalculada > 0) {
         document.getElementById('meta-txt-quiz').innerText = `${precisaoCalculada}%`;
    }
    
    document.getElementById('meta-txt-sim').innerText = recordeSimuladoPontos > 0 ? `${recordeSimuladoPontos}/100` : "--";
}

// ROTEADOR DE NAVEGAÇÃO DE ABAS
function irParaAba(nomeAba) {
    document.querySelectorAll('.view-pane').forEach(aba => aba.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    const abaAlvo = document.getElementById(`view-${nomeAba}`);
    const btnAlvo = document.getElementById(`btn-tab-${nomeAba}`);

    if (abaAlvo) abaAlvo.classList.add('active');
    if (btnAlvo) btnAlvo.classList.add('active');
}

// BOOTSTRAP / INICIALIZAÇÃO DA APLICAÇÃO
document.addEventListener("DOMContentLoaded", () => {
    processarSimulacaoAgroecologica();
    carregarQuestaoQuiz();
    inicializarJogoMemoria();
});