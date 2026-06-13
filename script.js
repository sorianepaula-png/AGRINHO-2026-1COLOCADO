// ==========================================================================
// CONTROLADOR DE NAVEGAÇÃO DE ABAS EXCLUSIVAS (SINCRONIZADO COM O SEU HTML)
// ==========================================================================
function irParaAba(nomeAba) {
    // Esconde todas as abas funcionais (.view-pane) e desativa botões (.nav-btn)
    document.querySelectorAll('.view-pane').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(button => button.classList.remove('active'));
    
    // Ativa a aba atual e o botão correto
    const viewPane = document.getElementById(`view-${nomeAba}`);
    const navBtn = document.getElementById(`btn-tab-${nomeAba}`);
    
    if (viewPane) viewPane.classList.add('active');
    if (navBtn) navBtn.classList.add('active');
    
    // Biblioteca dinâmica de títulos da barra superior
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
    
    // Gatilhos automáticos ao entrar em abas específicas
    if (nomeAba === 'desafios') {
        inicializarJogo();
    }
}

// Inicializa o simulador logo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    executarDiagnostico();
});


// ==========================================================================
// 1. SIMULADOR DE DIAGNÓSTICO (AJUSTADO PARA OS SELECTS DO SEU HTML)
// ==========================================================================
function executarDiagnostico() {
    const solo = document.getElementById('solo').value;
    const agua = document.getElementById('agua').value;
    const insumos = document.getElementById('insumos').value;
    const biodiversidade = document.getElementById('biodiversidade').value;
    
    let nota = 0;
    
    // Pesos do Solo
    if (solo === 'excelente') nota += 25;
    else if (solo === 'alto') nota += 18;
    else if (solo === 'medio') nota += 10;
    else nota += 3;

    // Pesos da Água
    if (agua === 'excelente') nota += 25;
    else if (agua === 'alto') nota += 18;
    else if (agua === 'medio') nota += 10;
    else nota += 3;

    // Pesos do Insumos
    if (insumos === 'excelente') nota += 25;
    else if (insumos === 'alto') nota += 18;
    else if (insumos === 'medio') nota += 10;
    else nota += 3;

    // Pesos da Biodiversidade
    if (biodiversidade === 'excelente') nota += 25;
    else if (biodiversidade === 'alto') nota += 18;
    else if (biodiversidade === 'medio') nota += 10;
    else nota += 3;

    // Atualiza pontuação numérica
    document.getElementById('pontos-valor').innerText = nota;
    document.getElementById('metric-simulador').innerText = nota + "%";

    // Cálculos de sub-barras proporcionais para fins visuais
    document.getElementById('pct-cultivo').innerText = Math.round(nota * 0.9) + "%";
    document.getElementById('bar-cultivo').style.width = Math.round(nota * 0.9) + "%";
    
    document.getElementById('pct-ambiental').innerText = Math.round(nota * 1.0) + "%";
    document.getElementById('bar-ambiental').style.width = Math.round(nota * 1.0) + "%";

    document.getElementById('pct-gestao').innerText = Math.round(nota * 0.85) + "%";
    document.getElementById('bar-gestao').style.width = Math.round(nota * 0.85) + "%";

    // Atualiza status do crachá visual e descrição detalhada
    const badge = document.getElementById('status-badge');
    const detalheBox = document.getElementById('resultado-diagnostico-detalhe');
    detalheBox.style.display = "block";

    if (nota >= 80) {
        badge.className = "pill-status state-active"; 
        badge.innerText = "EXCELENTE";
        detalheBox.className = "output-alert bom";
        detalheBox.innerHTML = `<strong>✨ Índice Impecável: ${nota}%</strong><br>Propriedade modelo! Os manejos adotados conservam a macroestrutura rústica do solo e resguardam os mananciais locais.`;
    } else if (nota >= 50) {
        badge.className = "pill-status state-wait"; 
        badge.innerText = "REGULAR";
        detalheBox.className = "output-alert alerta";
        detalheBox.innerHTML = `<strong>🌿 Índice Intermediário: ${nota}%</strong><br>Atenção às recomendações técnicas. É viável expandir o plantio direto e diminuir defensivos pesados.`;
    } else {
        badge.className = "pill-status state-wait"; 
        badge.innerText = "ALERTA CRÍTICO";
        detalheBox.className = "output-alert perigo";
        detalheBox.innerHTML = `<strong>⚠️ Risco Severo Detectado: ${nota}%</strong><br>Alto índice de degradação estrutural e lixiviação. Implemente imediatamente curvas de nível e barramentos ecológicos.`;
    }
}


// ==========================================================================
// 2. INFOGRÁFICOS DO POPUP (CONTEÚDO DO ACERVO DIGITAL DA UFPR)
// ==========================================================================
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
        beneficios: ["Ciclagem profunda de nutrientes capturados por raíces arbóreas.", "Múltiplas fontes de renda na mesma área (madeira, frutas e grãos).", "Criação de microclimas amenos que protegem as plantas contra secas severas."],
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
        intro: "Técnicas milenares de engenharia rústica que consistem in identificar as linhas de mesma altitude em encostas e construir barreiras ou degraus para quebrar a força gravitacional de descida das enxurradas.",
        beneficios: ["Retém a água na lavoura, forçando sua infiltração lenta no lençol freático.", "Impeça o arraste da camada fértil superficial do solo.", "Elimina de forma absoluta a formação de voçorocas e sulcos erosivos."],
        exemplo: "Marcação de terrenos inclinados com pé-de-galinha ou nível de mangueira para construção de terraços de retenção."
    }
};

function mostrarModal(idAlvo) {
    const item = dadosEmbrapaPopups[idAlvo];
    if (!item) return;
    
    let bulletListHtml = "";
    item.beneficios.forEach(b => {
        bulletListHtml += `<li><i class="fa-solid fa-circle-check" style="color:var(--accent-lime); margin-right:6px;"></i> ${b}</li>`;
    });
    
    const layoutInjetado = `
        <div class="md-top-border" style="border-bottom:1px solid var(--border-gray); padding-bottom:12px; margin-bottom:16px;">
            <h2 style="color:var(--primary-green); font-weight:800;">${item.titulo}</h2>
        </div>
        <div class="md-intro-box" style="background:#f4f7f5; padding:14px; border-radius:8px; font-size:0.9rem; line-height:1.5; margin-bottom:16px; color:var(--text-dark);">${item.intro}</div>
        <div class="md-columns-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:20px;">
            <div class="md-col">
                <h4 style="color:var(--primary-green); margin-bottom:8px;"><i class="fa-solid fa-square-poll-horizontal"></i> Benefícios da Prática:</h4>
                <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:8px; font-size:0.85rem; color:var(--text-light);">${bulletListHtml}</ul>
            </div>
            <div class="md-col">
                <h4 style="color:var(--primary-green); margin-bottom:8px;"><i class="fa-solid fa-gears"></i> Como Funciona / Exemplo:</h4>
                <p style="font-size:0.85rem; line-height:1.4; color:var(--text-light);">${item.exemplo}</p>
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


// ==========================================================================
// 3. QUIZ DE FIXAÇÃO CONTINUADA (30 QUESTÕES DIVIDIDAS EM 3 NÍVEIS)
// ==========================================================================
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
        { q: "No plantio consorciado de milho e soja, qual a vantagem da soja?", o: ["Sombra excessiva", "Fornecimento biológico de nitrogênio", "Atrair lagartas", "Produzir sementes inférteis"], a: 1 },
        { q: "Qual a principal função do terraceamento em declives acentuados?", o: ["Facilitar o trânsito de pedestres", "Fracionar e reter o fluxo volumoso das enxurradas", "Aumentar a evaporação da água", "Estilizar a paisagem rústica"], a: 1 },
        { q: "O nível econômico de dano no MIP serve para determinar o quê?", o: ["O preço final do grão no mercado", "O momento exato em que a praga causa prejuízo real justificando intervenção", "O custo do combustível do trator", "A quantidade de adubo por hectare"], a: 1 },
        { q: "Qual elemento é central na transição agroecológica?", o: ["Uso massivo de sementes transgênicas", "Redução gradual de insumos sintéticos industriais", "Abandono total da rotação de culturas", "Aumento do desmatamento legal"], a: 1 },
        { q: "Que benefício os Corredores Ecológicos trazem às propriedades?", o: ["Isolamento completo dos animais", "Livre trânsito e fluxo gênico da fauna silvestre entre fragmentos florestais", "Facilidade para queimar os campos", "Aumento da erosão nas margens"], a: 1 },
        { q: "A 'cobertura morta' atua como barreira contra qual processo físico?", o: ["Compactação subterrânea pura", "Impacto direto das gotas de chuva evitando o selamento superficial", "Evaporação do lençol freático profundo", "Crescimento de raíces pivotantes"], a: 1 },
        { q: "Por que árvores nativas são mantidas em pastagens no modelo sustentável?", o: ["Para atrapalhar o maquinário", "Proporcionar conforto térmico ao gado e reciclar nutrientes profundos", "Secar o solo ao redor", "Impedir o nascimento do capim"], a: 1 },
        { q: "Qual destino correto deve ser dado às embalagens vazias de agrotóxicos?", o: ["Queimar nos fundos da propriedade", "Tríplice lavagem, perfuração e devolução nos centros credenciados", "Enterrar próximo ao riacho", "Reutilizar para guardar água de consumo"], a: 1 },
        { q: "O dessecamento excessivo sem palhada expõe o solo a qual dano?", o: ["Lixiviação extrema provocada pelo vento e lixiviação hídrica imediata", "Aumento excessivo de matéria orgânica", "Crescimento espontâneo de árvores", "Encharcamento perpétuo"], a: 0 },
        { q: "A compostagem transforma resíduos orgânicos em qual material?", o: ["Fertilizante químico solúvel", "Adubo estabilizado rico em húmus e nutrientes", "Defensivo sintético de alta potência", "Plástico biodegradável rígido"], a: 1 }
    ],
    dificil: [
        { q: "Qual enzima bacteriana é responsável pela quebra do triplo enlace do N2 na fixação biológica?", o: ["Amilase bacteriana", "Nitrogenase", "Polimerase II", "Celulase termoativa"], a: 1 },
        { q: "Como os Sistemas Agroflorestais mitigam as oscilações térmicas extremas no microclima?", o: ["Através do bombeamento hidráulico subterrâneo", "Pelo amortecimento térmico promovido pela densidade do dossel arbóreo", "Gerando correntes de vento térmicas", "Por reflexão total das radiações ultravioletas"], a: 1 },
        { q: "O selamento superficial do solo (compactação da camada zero) decorre de qual dinâmica?", o: ["Energia cinética do impacto direto das gotas de chuva sobre a terra desnuda", "Crescimento radicular lateral de monoculturas", "Uso prolongado de adubação orgânica líquida", "Falta de minerais magnéticos no subsolo"], a: 0 },
        { q: "Como a rotação de culturas altera as propriedades biológicas do solo?", o: ["Estilizando a estrutura molecular do oxigênio", "Exsudando compostos carbonados diversos que fomentam microbiota especializada benéfica", "Neutralizando permanentemente o pH natural", "Eliminando os macroorganismos decompositores"], a: 1 },
        { q: "Qual a justificativa físico-química para a tríplice lavagem de embalagens?", o: ["Limpar o rótulo para facilitar a leitura", "Desprender mais de 99,9% dos resíduos químicos impregnados maximizando a descontaminação", "Alterar a composição molecular do plástico", "Permitir o reuso doméstico seguro do vasilhame"], a: 1 },
        { q: "Na engenharia de solo, qual o princípio hidráulico das curvas de nível com terraços de retenção?", o: ["Acelerar o escoamento hídrico superficial direcionado", "Infiltrar a água por redução da energia potencial gravitacional do fluxo enxurrada", "Evaporar o excesso de chuva acumulada", "Drenar a umidade para fora da microbacia"], a: 1 },
        { q: "Qual a principal limitação ecológica no uso continuado de bioinseticidas à base de Bacillus thuringiensis (Bt)?", o: ["Eles volatilizam rapidamente abaixo de 10°C", "Seleção de populações de pragas resistentes caso manejados sem rotação de princípios ativos", "Intoxicação severa de polinizadores como abelhas melíferas", "Incompatibilidade mecânica com pulverizadores de barra"], a: 1 },
        { q: "A micorrização atua de qual forma nas raízes das culturas agrícolas?", o: ["Atacando tecidos celulares meristemáticos", "Expandindo a área de absorção hídrica e fosfática através de hifas fúngicas simbióticas", "Inibindo o crescimento de pelos absorventes", "Tornando as raízes impermeáveis"], a: 1 },
        { q: "O processo de lixiviação consiste em qual fenômeno pedológico?", o: ["Acúmulo de palhada densa na superfície do terreno", "Lavagem e transporte de nutrientes solúveis rumo às camadas profundas pelo fluxo hídrico descendente", "Fixação estável de minerais nas argilas superficiais", "Subida capilar de sais minerais em épocas de estiagem"], a: 1 },
        { q: "Qual a meta estrutural final de uma transição agroecológica complexa de nível 3?", o: ["Trocar um insumo comercial industrial por outro biológico isolado", "Redesenhar o agroecossistema para funcionar autonomamente mimetizando processos naturais", "Mecanizar totalmente as áreas de preservação florestal", "Substituir a lavoura por pastagem intensiva rotacionada"], a: 1 }
    ]
};

let nivelQuizAtual = 'facil';
let indiceQuestaoAtual = 0;
let totalAcertosQuiz = 0;

function mudarNivelQuiz(novoNivel) {
    nivelQuizAtual = novoNivel;
    indiceQuestaoAtual = 0;
    totalAcertosQuiz = 0;
    
    document.getElementById('lbl-nivel-atual').innerText = novoNivel;
    document.getElementById('btn-next-question').disabled = true;
    
    renderizarQuestaoQuiz();
}

function renderizarQuestaoQuiz() {
    const listaQuestoes = databaseQuestoes[nivelQuizAtual];
    const dadosQuestao = listaQuestoes[indiceQuestaoAtual];
    
    // Atualiza barras e textos de progresso
    const totalQ = listaQuestoes.length;
    const porcentagem = ((indiceQuestaoAtual + 1) / totalQ) * 100;
    document.getElementById('quiz-txt-progress').innerText = `Questão ${indiceQuestaoAtual + 1} de ${totalQ}`;
    document.getElementById('quiz-bar-fill').style.width = `${porcentagem}%`;
    
    // Injeta a pergunta
    document.getElementById('quiz-question-title').innerText = dadosQuestao.q;
    
    // Injeta alternativas
    const caixaOpcoes = document.getElementById('quiz-options-box');
    caixaOpcoes.innerHTML = "";
    
    dadosQuestao.o.forEach((opcao, indice) => {
        const btn = document.createElement('button');
        btn.innerText = opcao;
        btn.className = "input-label"; 
        btn.style.cssText = "width:100%; text-align:left; padding:12px 16px; border:1px solid var(--border-gray); border-radius:8px; background:#fff; cursor:pointer; font-weight:500; font-size:0.9rem; transition:all 0.2s; display:block;";
        
        btn.onmouseover = () => btn.style.background = "#f4f7f5";
        btn.onmouseout = () => btn.style.background = "#fff";
        
        btn.onclick = () => checarRespostaQuiz(indice, btn);
        caixaOpcoes.appendChild(btn);
    });
    
    document.getElementById('btn-next-question').disabled = true;
}

function checarRespostaQuiz(indiceSelecionado, elementoClicado) {
    const listaQuestoes = databaseQuestoes[nivelQuizAtual];
    const respostaCorreta = listaQuestoes[indiceQuestaoAtual].a;
    const todosBotoes = document.getElementById('quiz-options-box').querySelectorAll('button');
    
    // Bloqueia cliques posteriores nas alternativas
    todosBotoes.forEach(b => b.disabled = true);
    
    if (indiceSelecionado === respostaCorreta) {
        elementoClicado.style.background = "#e8f5e9";
        elementoClicado.style.borderColor = "#2e7d32";
        elementoClicado.style.color = "#2e7d32";
        elementoClicado.style.fontWeight = "700";
        totalAcertosQuiz++;
    } else {
        elementoClicado.style.background = "#ffebee";
        elementoClicado.style.borderColor = "#c62828";
        elementoClicado.style.color = "#c62828";
        
        // Revela a correta de forma sutil
        todosBotoes[respostaCorreta].style.background = "#e8f5e9";
        todosBotoes[respostaCorreta].style.borderColor = "#2e7d32";
    }
    
    // Atualiza aba de progresso global
    document.getElementById('metric-quiz').innerText = `${totalAcertosQuiz}/30 (Parcial)`;
    document.getElementById('btn-next-question').disabled = false;
}

function proximaQuestao() {
    const listaQuestoes = databaseQuestoes[nivelQuizAtual];
    indiceQuestaoAtual++;
    
    if (indiceQuestaoAtual < listaQuestoes.length) {
        renderizarQuestaoQuiz();
    } else {
        alert(`🎉 Concluído! Você acertou ${totalAcertosQuiz} de ${listaQuestoes.length} questões no nível ${nivelQuizAtual.toUpperCase()}.`);
        document.getElementById('metric-quiz').innerText = `${totalAcertosQuiz}/30 (Nível ${nivelQuizAtual})`;
        indiceQuestaoAtual = 0;
        renderizarQuestaoQuiz();
    }
}

// Executa a primeira carga automática
setTimeout(() => { if(document.getElementById('quiz-question-title')) renderizarQuestaoQuiz(); }, 500);


// ==========================================================================
// 4. CENTRAL DE MÍDIAS INTEGRADA (VIEWPORT FRAME ATUALIZADO E COMPATÍVEL COM UFPR)
// ==========================================================================
function abrirMidia(tipoMidia) {
    const container = document.getElementById('media-viewport-container');
    const box = document.getElementById('media-frame-box');
    const titulo = document.getElementById('media-viewport-title');
    
    container.style.display = "block";
    box.innerHTML = "";
    
    if (tipoMidia === 'pdf') {
        titulo.innerHTML = "📄 Livro Técnico: Conservando os Solos (Manual do Acervo Digital da UFPR)";
        // URL Oficial da UFPR passada pelo proxy seguro do gview para evitar bloqueios de iframe (X-Frame-Options)
        const urlPdf = "https://acervodigital.ufpr.br/xmlui/bitstream/handle/1884/85232/Conservando_os_solos.pdf?sequence=1&isAllowed=y";
        box.innerHTML = `<iframe src="https://docs.google.com/gview?url=${encodeURIComponent(urlPdf)}&embedded=true" style="width:100%; height:100%; border:none;"></iframe>`;
    } else if (tipoMidia === 'video') {
        titulo.innerHTML = "🎥 Videoaula Prática: Preservação de Nascentes Rurais";
        box.innerHTML = `<iframe src="https://www.youtube.com/embed/FHraCDyIhrI" style="width:100%; height:100%; border:none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    
    container.scrollIntoView({ behavior: 'smooth' });
}

function fecharMidia() {
    const container = document.getElementById('media-viewport-container');
    const box = document.getElementById('media-frame-box');
    container.style.display = "none";
    box.innerHTML = "";
}


// ==========================================================================
// 5. JOGO DA MEMÓRIA COM EMBALAGEM REVERSA FISHER-YATES
// ==========================================================================
const cartasMemoriaOriginais = [
    { nome: "Plantio Direto", icone: "🚜" }, { nome: "Plantio Direto", icone: "🚜" },
    { nome: "Adubação Verde", icone: "🌿" }, { nome: "Adubação Verde", icone: "🌿" },
    { nome: "Rotação Culturas", icone: "🔄" }, { nome: "Rotação Culturas", icone: "🔄" },
    { nome: "Controle Biológico", icone: "🐞" }, { nome: "Controle Biológico", icone: "🐞" },
    { nome: "Mata Ciliar", icone: "🌳" }, { nome: "Mata Ciliar", icone: "🌳" },
    { nome: "Cerca de Proteção", icone: "💧" }, { nome: "Cerca de Proteção", icone: "💧" }
];

let vetorTemporarioCartas = [];
let jogadasEfetuadas = 0;
let segundosJogo = 0;
let timerIdInterv = null;
let jogoIniciado = false;

function embaralharFisherYates(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function iniciarTimerJogo() {
    if (jogoIniciado) return;
    jogoIniciado = true;
    segundosJogo = 0;
    clearInterval(timerIdInterv);
    timerIdInterv = setInterval(() => {
        segundosJogo++;
        const mins = String(Math.floor(segundosJogo / 60)).padStart(2, '0');
        const secs = String(segundosJogo % 60).padStart(2, '0');
        document.getElementById('timer-val').innerText = `${mins}:${secs}`;
    }, 1000);
}

function inicializarJogo() {
    clearInterval(timerIdInterv);
    document.getElementById('timer-val').innerText = "00:00";
    document.getElementById('moves-val').innerText = "0";
    jogadasEfetuadas = 0;
    jogoIniciado = false;
    vetorTemporarioCartas = [];
    
    const cartasEmbaralhadas = embaralharFisherYates([...cartasMemoriaOriginais]);
    const canvas = document.getElementById('canvas-tabuleiro-memoria');
    canvas.innerHTML = "";
    
    cartasEmbaralhadas.forEach(item => {
        const bloco = document.createElement('div');
        bloco.className = "memory-tile"; 
        
        bloco.innerHTML = `
            <div class="tile-back">🌱</div>
            <div class="tile-front" style="display:none; flex-direction:column; align-items:center; justify-content:center; height:100%; font-weight:700;">
                <span style="font-size:1.6rem; margin-bottom:4px;">${item.icone}</span>
                <span style="font-size:0.75rem; color:var(--primary-green); text-align:center;">${item.nome}</span>
            </div>
        `;
        
        bloco.onclick = () => virarCartaTabuleiro(bloco, item);
        canvas.appendChild(bloco);
    });
}

function virarCartaTabuleiro(elementoCarta, objetoDado) {
    if (elementoCarta.classList.contains('flipped') || elementoCarta.classList.contains('matched') || vetorTemporarioCartas.length >= 2) return;
    
    iniciarTimerJogo();
    
    // Logica Visual do Card
    elementoCarta.classList.add('flipped');
    elementoCarta.querySelector('.tile-back').style.display = "none";
    elementoCarta.querySelector('.tile-front').style.display = "flex";
    
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
                vetorTemporarioCartas[0].el.querySelector('.tile-back').style.display = "flex";
                vetorTemporarioCartas[0].el.querySelector('.tile-front').style.display = "none";
                
                vetorTemporarioCartas[1].el.classList.remove('flipped');
                vetorTemporarioCartas[1].el.querySelector('.tile-back').style.display = "flex";
                vetorTemporarioCartas[1].el.querySelector('.tile-front').style.display = "none";
                
                vetorTemporarioCartas = [];
            }, 900);
        }
    }
}