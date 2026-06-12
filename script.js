/* CONFIGURAÇÕES GLOBAIS E PALETA DE CORES AGRINHO */
:root {
    --primary-color: #2e7559;
    --primary-dark: #1e4d3a;
    --primary-light: #97cc52;
    --bg-app: #f4f7f5;
    --bg-card: #ffffff;
    --text-main: #1d2d24;
    --text-muted: #53695c;
    --border-color: #e2e9e4;
    --shadow-sm: 0 2px 4px rgba(0,0,0,0.04);
    --shadow-md: 0 8px 16px rgba(0,0,0,0.08);
}

* { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', sans-serif; }
body { background-color: var(--bg-app); color: var(--text-main); min-height: 100vh; overflow-x: hidden; }

/* LAYOUT E ESTRUTURA DASHBOARD */
.app-layout { display: flex; min-height: 100vh; }

.sidebar-container { 
    width: 280px; 
    background-color: #0f271c; 
    color: white; 
    padding: 24px; 
    display: flex; 
    flex-direction: column; 
    position: fixed; 
    height: 100vh; 
    z-index: 10;
}
.brand-wrapper { display: flex; align-items: center; gap: 12px; margin-bottom: 32px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); }
.brand-avatar { font-size: 1.8rem; }
.brand-title { font-size: 1.15rem; font-weight: 800; letter-spacing: -0.5px; }
.brand-subtitle { font-size: 0.8rem; color: var(--primary-light); display: block; font-weight: 500; }

.nav-list { display: flex; flex-direction: column; gap: 8px; flex-grow: 1; }
.nav-btn { 
    display: flex; 
    align-items: center; 
    gap: 12px; 
    background: none; 
    border: none; 
    color: #a4bdb0; 
    padding: 12px 16px; 
    border-radius: 8px; 
    font-size: 0.95rem; 
    font-weight: 600; 
    cursor: pointer; 
    text-align: left; 
    transition: all 0.2s; 
}
.nav-btn:hover { background: rgba(255,255,255,0.05); color: white; }
.nav-btn.active { background-color: var(--primary-light); color: #0f271c; font-weight: 700; }

.sidebar-footer { background: rgba(0,0,0,0.2); padding: 14px; border-radius: 8px; font-size: 0.8rem; }
.footer-tag { color: var(--primary-light); font-weight: 800; display: block; margin-bottom: 4px; }
.sidebar-footer p { color: #a4bdb0; line-height: 1.3; margin-bottom: 8px; }
.footer-status { display: inline-block; background: var(--primary-color); padding: 2px 8px; border-radius: 20px; font-weight: 700; color: white; font-size: 0.75rem; }

.main-content { margin-left: 280px; flex-grow: 1; padding: 32px; min-width: 0; }
.top-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; background: white; padding: 16px 24px; border-radius: 12px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); }
.header-info h1 { font-size: 1.4rem; font-weight: 800; color: var(--primary-dark); }
.header-info p { font-size: 0.9rem; color: var(--text-muted); }

.user-badge { display: flex; align-items: center; gap: 10px; }
.user-avatar { font-size: 1.5rem; background: var(--bg-app); padding: 6px; border-radius: 50%; }
.user-name { font-size: 0.85rem; font-weight: 700; display: block; }
.user-role { font-size: 0.75rem; color: var(--text-muted); }

/* CONTÊNERES DE CONTEÚDO */
.tab-content { display: none; animation: viewFadeIn 0.3s ease forwards; }
.tab-content.active { display: block; }
@keyframes viewFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

.card-box { background: var(--bg-card); border-radius: 12px; padding: 24px; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 24px; }
.card-header { margin-bottom: 24px; }
.card-header h3 { font-size: 1.2rem; font-weight: 800; color: var(--primary-dark); display: flex; align-items: center; gap: 8px; }
.card-header p { font-size: 0.9rem; color: var(--text-muted); margin-top: 4px; }

/* COMPONENTES DE FORMULÁRIO E BOTÕES NATIVOS */
.form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 20px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-size: 0.85rem; font-weight: 700; color: var(--text-main); }
.form-group input, .form-group select { padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-color); font-size: 0.95rem; outline: none; background: var(--bg-app); transition: border 0.2s; }
.form-group input:focus, .form-group select:focus { border-color: var(--primary-color); }

.primary-btn { background: var(--primary-color); color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: background 0.2s; display: inline-flex; align-items: center; gap: 8px; }
.primary-btn:hover:not(:disabled) { background: var(--primary-dark); }
.primary-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.sec-btn { background: white; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 10px 16px; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s; }
.sec-btn:hover { background: var(--primary-color); color: white; }

.resultado-box { margin-top: 20px; padding: 16px; border-radius: 8px; font-size: 0.95rem; line-height: 1.5; }
.resultado-box.excelente { background: #e8f5e9; color: #2e7d32; border-left: 4px solid #2e7d32; }
.resultado-box.regular { background: #fff3e0; color: #ef6c00; border-left: 4px solid #ef6c00; }
.resultado-box.critico { background: #ffebee; color: #c62828; border-left: 4px solid #c62828; }

/* GRID DE CARD AGROECOLOGIA */
.agro-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
.agro-card { background: var(--bg-app); border-radius: 10px; overflow: hidden; border: 1px solid var(--border-color); cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
.agro-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); border-color: var(--primary-color); }
.card-img-placeholder { background: #e2ede8; height: 120px; display: flex; align-items: center; justify-content: center; text-align: center; font-weight: 700; font-size: 0.9rem; color: var(--primary-dark); padding: 12px; border-bottom: 1px solid var(--border-color); }
.card-body { padding: 16px; }
.card-body h4 { font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; color: var(--primary-dark); }
.card-body p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 12px; }
.tag-label { display: inline-block; background: white; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; color: var(--primary-color); border: 1px solid var(--border-color); }

/* MODAL / POPUPS INTERATIVOS */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(15, 39, 28, 0.6); display: flex; align-items: center; justify-content: center; z-index: 100; padding: 20px; backdrop-filter: blur(4px); }
.modal-window { background: white; width: 100%; max-width: 680px; border-radius: 16px; padding: 32px; position: relative; box-shadow: var(--shadow-md); max-height: 90vh; overflow-y: auto; animation: scaleUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
.modal-close-btn { position: absolute; top: 20px; right: 20px; background: none; border: none; font-size: 1.5rem; color: var(--text-muted); cursor: pointer; }
.modal-close-btn:hover { color: #d62828; }
.hidden { display: none !important; }
@keyframes scaleUp { from { transform: scale(0.9) translateY(10px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }

/* INFOGRÁFICOS DO POPUP */
.info-popup-header { border-bottom: 2px solid var(--primary-light); padding-bottom: 12px; margin-bottom: 16px; }
.info-popup-header h2 { font-size: 1.4rem; color: var(--primary-dark); font-weight: 800; }
.info-desc-destaque { font-size: 1rem; line-height: 1.5; color: var(--text-main); margin-bottom: 20px; background: var(--bg-app); padding: 14px; border-radius: 8px; }
.info-bloco-colunas { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
@media (max-width: 550px) { .info-bloco-colunas { grid-template-columns: 1fr; } }
.col-beneficios h4, .col-pratica h4 { font-size: 0.95rem; font-weight: 800; color: var(--primary-dark); margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
.col-beneficios ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.col-beneficios li { font-size: 0.85rem; color: var(--text-main); display: flex; align-items: flex-start; gap: 8px; }
.col-beneficios li i { color: var(--primary-color); margin-top: 2px; }
.col-pratica p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.4; }

/* INTERFACE DO QUIZ (LIÇÕES DO CAMPO) */
.quiz-level-selector { display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }
.lvl-btn { background: var(--bg-app); border: 1px solid var(--border-color); padding: 10px 16px; border-radius: 8px; font-weight: 600; font-size: 0.9rem; color: var(--text-main); cursor: pointer; transition: all 0.2s; }
.lvl-btn.active { background: var(--primary-dark); color: white; border-color: var(--primary-dark); }

.quiz-container { background: var(--bg-app); border: 1px solid var(--border-color); border-radius: 10px; padding: 20px; }
.quiz-progress-wrapper { display: flex; flex-direction: column; gap: 6px; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 16px; }
.quiz-bar-bg { background: var(--border-color); height: 6px; border-radius: 3px; overflow: hidden; }
#quiz-bar-fill { background: var(--primary-color); height: 100%; width: 10%; transition: width 0.2s ease; }
#quiz-question-text { font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 16px; line-height: 1.4; }
.quiz-options-grid { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
.quiz-opt-row { display: flex; align-items: center; gap: 12px; background: white; border: 1px solid var(--border-color); padding: 12px 16px; border-radius: 8px; cursor: pointer; text-align: left; font-size: 0.95rem; font-weight: 500; transition: all 0.15s; }
.quiz-opt-row:hover:not(:disabled) { border-color: var(--primary-color); background: rgba(46,117,89,0.02); }
.opt-index { display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; background: var(--bg-app); border: 1px solid var(--border-color); border-radius: 4px; font-weight: 700; font-size: 0.8rem; }
.quiz-opt-row.correct-ans { background: #e8f5e9; border-color: #2e7d32; color: #1b5e20; font-weight: 600; }
.quiz-opt-row.correct-ans .opt-index { background: #2e7d32; color: white; border-color: #2e7d32; }
.quiz-opt-row.wrong-ans { background: #ffebee; border-color: #c62828; color: #b71c1c; }
.quiz-opt-row.wrong-ans .opt-index { background: #c62828; color: white; border-color: #c62828; }

.quiz-action-footer { display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap-reverse; }
.quiz-feedback-msg { padding: 10px 14px; border-radius: 6px; font-size: 0.9rem; font-weight: 600; display: flex; align-items: center; gap: 8px; }
.quiz-feedback-msg.ok { background: rgba(46,117,89,0.1); color: #2e7d32; }
.quiz-feedback-msg.err { background: rgba(198,40,40,0.1); color: #c62828; }

/* CENTRAL DE MATERIAIS DE APOIO */
.materials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 24px; }
.material-card { background: var(--bg-app); border: 1px solid var(--border-color); border-radius: 10px; padding: 20px; display: flex; flex-direction: column; gap: 10px; }
.mat-tag { font-size: 0.7rem; font-weight: 800; color: white; padding: 2px 6px; border-radius: 4px; width: max-content; }
.pdf-tag { background: #d62828; }
.video-tag { background: #0077b6; }
.material-card h4 { font-size: 1.1rem; font-weight: 700; }
.material-card p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.4; }
.material-card .sec-btn { margin-top: auto; }

.media-display-zone { background: var(--bg-app); border: 2px solid var(--primary-color); border-radius: 10px; overflow: hidden; margin-top: 20px; box-shadow: var(--shadow-md); }
.media-zone-header { display: flex; justify-content: space-between; align-items: center; padding: 12px 20px; background: white; border-bottom: 1px solid var(--border-color); }
.media-zone-header h4 { font-size: 0.95rem; font-weight: 700; color: var(--primary-dark); }
.close-zone-btn { background: none; border: none; font-size: 0.85rem; color: #c62828; cursor: pointer; font-weight: 700; }
.media-frame-target { width: 100%; height: 480px; background: #000; position: relative; }
.embedded-frame { width: 100%; height: 100%; border: none; }

/* JOGO DA MEMÓRIA */
.game-dashboard { display: flex; gap: 16px; align-items: center; margin-bottom: 20px; flex-wrap: wrap; background: var(--bg-app); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color); }
.game-stat-card { font-size: 0.9rem; font-weight: 700; background: white; padding: 8px 14px; border-radius: 6px; border: 1px solid var(--border-color); }
.memory-board { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; max-width: 580px; margin: 0 auto; }
@media (max-width: 480px) { .memory-board { grid-template-columns: repeat(3, 1fr); } }

.memory-card { height: 100px; position: relative; transform-style: preserve-3d; transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); cursor: pointer; }
.memory-card.flipped { transform: rotateY(180deg); }
.card-front, .card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; font-weight: 700; padding: 6px; font-size: 0.8rem; box-shadow: var(--shadow-sm); }
.card-back { background: #0f271c; border: 2px solid var(--primary-light); color: var(--primary-light); font-size: 1.5rem; }
.card-front { background: white; border: 2px solid var(--primary-color); color: var(--text-main); transform: rotateY(180deg); }
.card-front span { font-size: 1.4rem; margin-bottom: 4px; }
.memory-card.matched .card-front { background: #e8f5e9; border-color: var(--primary-light); color: #2e7d32; }

/* PROGRESSO EXTRA */
.progresso-metricas { background: var(--bg-app); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color); font-size: 0.9rem; line-height: 1.5; color: var(--text-muted); }