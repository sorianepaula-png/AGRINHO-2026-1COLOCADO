#  Raízes do Amanhã — Monitoramento de Impacto Agroecológico
> **Projeto Interativo de Sustentabilidade Rústica e Pensamento Computacional** > *Submetido ao Concurso Agrinho 2026 — Categoria:  Programação

---

##  Sobre o Projeto
O **Raízes do Amanhã** é uma plataforma digital desenvolvida para conectar estudantes, técnicos e produtores rurais da **Escola do Campo (Antônio Olinto - PR)** às melhores práticas agroecológicas recomendadas pela **Embrapa**. 

O sistema foi arquitetado em um ambiente de aplicação única (SPA - *Single Page Application*), combinando automações dinâmicas em JavaScript nativo com uma interface visual minimalista, adaptada e inspirada na identidade do campo paranaense.

---

## Tecnologias Utilizadas
Para garantir leveza, alta performance e compatibilidade em computadores de laboratórios escolares tradicionais, o projeto utiliza puramente tecnologias nativas da Web:

* **HTML5 Estrutural:** Tags semânticas para acessibilidade e organização lógica de dados.
* **CSS3 Customizado:** Design responsivo, estilização baseada em variáveis (`root`), transições suaves e grid estruturado para telas de diferentes resoluções.
* **Vanilla JavaScript (ES6+):** Motor do sistema. Controla o estado das abas exclusivas, executa o motor do simulador, manipula os modais e gerencia a lógica de jogos.
* **Font Awesome Icons & Google Fonts:** Tipografia arredondada de leitura fluida (*Plus Jakarta Sans*) e iconografia técnica.

---

## ⚙️ Funcionalidades Implementadas

### 1. Simulador de Diagnóstico Computacional
Um algoritmo matemático que processa as respostas de manejo da propriedade (cobertura de palhada, variedade anual de culturas e uso de insumos químicos) e calcula instantaneamente o **Índice de Sustentabilidade da Lavoura**, emitindo alertas visuais categorizados em três níveis de criticidade (Excelente, Regular e Alerta Crítico).

### 2. Manual Técnico Interativo (Pilares Embrapa)
Seis blocos visuais dedicados às práticas mecânicas e ecológicas essenciais:
* Rotação e Diversificação de Culturas
* Adubação Verde e Cobertura Viva
* Manejo Integrado de Pragas (MIP)
* Sistemas Agroflorestais (SAFs)
* Recuperação e Proteção de Nascentes
* Curvas de Nível e Terraceamento

> **Comportamento Dinâmico:** Ao clicar em qualquer card, um modal em camada (*Backdrop Overlay*) renderiza os benefícios e as aplicações práticas de campo daquela categoria.

### 3. Quiz de Fixação Continuada
Um banco de dados estruturado contendo **30 questões** divididas metodologicamente por complexidade:
* **🌱 Nível Fácil:** Questões de 1 a 10 (Conceitos básicos)
* **🌿 Nível Médio:** Questões de 11 a 20 (Dinâmicas regulatórias e manejos)
* **🌳 Nível Difícil:** Questões de 21 a 30 (Bioquímica e engenharia de solo)
Apresenta correção em tempo real, travamento de cliques após a escolha e barra de progresso responsiva.

### 4. Jogo da Memória Computacional
Módulo gamificado que utiliza o algoritmo de embaralhamento reverso **Fisher-Yates** para dispor cartas de conceitos agroecológicos no tabuleiro. Inclui contadores automáticos de movimentos (`moves`) e um cronômetro síncrono.

### 5. Central de Mídias Integrada
Visualizador interno embutido (*Viewport Frame*) capaz de carregar e projetar manuais científicos em formato PDF e vídeos educativos diretamente na interface, dispensando a necessidade de redirecionar o usuário para abas externas do navegador.

---

##  Estrutura de Arquivos do Projeto
```text
├── index.html       # Estrutura HTML5 semântica e esqueleto das abas
├── style.css        # Identidade visual rústica verde-escura, grids e modais
└── script.js        # Lógica, coleções de dados, quiz e regras do simulador