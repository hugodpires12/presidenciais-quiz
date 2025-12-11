/**
 * DADOS (Data Layer)
 */
const candidates = [
  {
    id: 'catarina_martins',
    name: 'Catarina Martins',
    description: 'Valorizas a justiça social e a intervenção do Estado na economia. Para ti, os serviços públicos devem ser universais e gratuitos. A tua visão política privilegia a esquerda radical e o combate às desigualdades.',
    image: 'https://images.unsplash.com/photo-1551941264-50999ccd0bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    id: 'jorge_pinto',
    name: 'Jorge Pinto',
    description: 'A ecologia e os direitos humanos são a tua prioridade. Acreditas que a emergência climática exige uma transformação profunda. A tua visão é de uma esquerda ecologista e progressista.',
    image: 'https://images.unsplash.com/photo-1567667563255-1a4cdb9f1871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    id: 'antonio_seguro',
    name: 'António José Seguro',
    description: 'Defendes o Estado Social clássico e uma política de centro-esquerda equilibrada. Acreditas numa sociedade solidária, mas pragmática. A tua visão política é moderada e socialista.',
    image: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    id: 'luis_mendes',
    name: 'Luís Marques Mendes',
    description: 'Valorizas a estabilidade institucional e a experiência política. Acreditas num Estado eficaz mas limitado. A tua visão política é moderada, social-democrata e pragmática.',
    image: 'https://images.unsplash.com/photo-1580129958560-c5e47d47a677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    id: 'joao_cotrim',
    name: 'João Cotrim Figueiredo',
    description: 'A liberdade individual e económica são os teus valores centrais. Defendes o mercado livre e menos impostos. A tua visão política é liberal e reformista.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    id: 'henrique_gouveia',
    name: 'Henrique Gouveia e Melo',
    description: 'Valorizas a competência, a eficiência e a autoridade. Acreditas na importância da ordem e da disciplina. A tua visão política privilegia a meritocracia e a defesa nacional.',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    id: 'andre_ventura',
    name: 'André Ventura',
    description: 'Defendes a identidade nacional, a segurança e valores conservadores. Acreditas que é preciso uma mudança radical e um líder forte. A tua visão política é nacionalista e conservadora.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  }
];

const originalQuestions = [
  {
    id: 1,
    question: "Como deve o Estado intervir na economia?",
    answers: [
      { text: "O Estado deve controlar os setores estratégicos e garantir serviços públicos universais", scores: { catarina_martins: 3 } },
      { text: "Economia verde com regulação ambiental forte e investimento público em sustentabilidade", scores: { jorge_pinto: 3 } },
      { text: "Manter o Estado Social mas com eficiência e equilíbrio orçamental", scores: { antonio_seguro: 2, luis_mendes: 2 } },
      { text: "Reduzir impostos e liberalizar a economia para estimular o empreendedorismo", scores: { joao_cotrim: 3 } },
      { text: "Proteger empresas nacionais e garantir soberania económica", scores: { andre_ventura: 2, henrique_gouveia: 1 } }
    ]
  },
  {
    id: 2,
    question: "Qual deve ser a prioridade no sistema de saúde?",
    answers: [
      { text: "SNS totalmente público, sem parcerias privadas", scores: { catarina_martins: 3 } },
      { text: "SNS forte com investimento em prevenção e saúde ambiental", scores: { jorge_pinto: 2, antonio_seguro: 2 } },
      { text: "SNS robusto complementado por setor privado regulado", scores: { luis_mendes: 2, antonio_seguro: 1 } },
      { text: "Sistema misto com vouchers de saúde e liberdade de escolha", scores: { joao_cotrim: 3 } },
      { text: "Eficiência e gestão rigorosa dos recursos existentes", scores: { henrique_gouveia: 3 } }
    ]
  },
  {
    id: 3,
    question: "Como deve Portugal lidar com a imigração?",
    answers: [
      { text: "Acolhimento com integração social e direitos plenos", scores: { catarina_martins: 3, jorge_pinto: 2 } },
      { text: "Política de integração humanista e europeia", scores: { antonio_seguro: 2, luis_mendes: 1 } },
      { text: "Imigração qualificada que contribua para a economia", scores: { joao_cotrim: 2, luis_mendes: 1 } },
      { text: "Controlo rigoroso das fronteiras e quotas nacionais", scores: { andre_ventura: 3 } },
      { text: "Gestão eficiente com foco em segurança e ordem pública", scores: { henrique_gouveia: 2, andre_ventura: 1 } }
    ]
  },
  {
    id: 4,
    question: "Qual a tua posição sobre impostos?",
    answers: [
      { text: "Impostos progressivos altos sobre rendimentos e patrimónios elevados", scores: { catarina_martins: 3, jorge_pinto: 1 } },
      { text: "Fiscalidade verde - taxar poluição e consumos prejudiciais", scores: { jorge_pinto: 3 } },
      { text: "Sistema fiscal equilibrado que proteja classes médias", scores: { antonio_seguro: 3, luis_mendes: 2 } },
      { text: "IRS único (flat tax) e redução drástica da carga fiscal", scores: { joao_cotrim: 3 } },
      { text: "Menos impostos para famílias portuguesas, mais para grandes empresas", scores: { andre_ventura: 2 } }
    ]
  },
  {
    id: 5,
    question: "Que modelo de educação defendes?",
    answers: [
      { text: "Escola pública universal, gratuita e laica", scores: { catarina_martins: 3 } },
      { text: "Educação ambiental obrigatória e sustentabilidade no currículo", scores: { jorge_pinto: 3 } },
      { text: "Valorização dos professores e reforço da escola pública de qualidade", scores: { antonio_seguro: 3, luis_mendes: 1 } },
      { text: "Liberdade educativa com cheque-ensino e concorrência", scores: { joao_cotrim: 3 } },
      { text: "Disciplina, mérito e valores tradicionais na educação", scores: { andre_ventura: 2, henrique_gouveia: 1 } },
      { text: "Eficiência e excelência com gestão profissional", scores: { henrique_gouveia: 2, luis_mendes: 1 } }
    ]
  },
  {
    id: 6,
    question: "Como deve Portugal posicionar-se na União Europeia?",
    answers: [
      { text: "Defender os trabalhadores contra políticas neoliberais da UE", scores: { catarina_martins: 3 } },
      { text: "Liderar a transição ecológica europeia e o federalismo verde", scores: { jorge_pinto: 3 } },
      { text: "Participação ativa e solidária no projeto europeu", scores: { antonio_seguro: 3, luis_mendes: 2 } },
      { text: "Aproveitar o mercado único mas preservar autonomia fiscal", scores: { joao_cotrim: 2, luis_mendes: 1 } },
      { text: "Portugal primeiro - renegociar termos que prejudicam o país", scores: { andre_ventura: 3 } },
      { text: "Soberania estratégica em defesa e segurança", scores: { henrique_gouveia: 3 } }
    ]
  },
  {
    id: 7,
    question: "Qual a tua prioridade ambiental?",
    answers: [
      { text: "Justiça climática - as empresas pagam, não os trabalhadores", scores: { catarina_martins: 2, jorge_pinto: 1 } },
      { text: "Emergência climática - transformação total do modelo económico", scores: { jorge_pinto: 3 } },
      { text: "Transição energética equilibrada com apoio social", scores: { antonio_seguro: 2, luis_mendes: 2 } },
      { text: "Soluções de mercado - inovação e incentivos privados", scores: { joao_cotrim: 3 } },
      { text: "Ambiente sim, mas sem prejudicar economia e empregos", scores: { andre_ventura: 2 } },
      { text: "Gestão eficiente de recursos naturais e segurança energética", scores: { henrique_gouveia: 2 } }
    ]
  },
  {
    id: 8,
    question: "Como combater a criminalidade?",
    answers: [
      { text: "Combater desigualdade social que gera crime", scores: { catarina_martins: 3, jorge_pinto: 1 } },
      { text: "Reintegração social e justiça restaurativa", scores: { jorge_pinto: 2, antonio_seguro: 1 } },
      { text: "Polícia de proximidade e prevenção comunitária", scores: { antonio_seguro: 2, luis_mendes: 2 } },
      { text: "Profissionalização das forças de segurança e mais meios", scores: { luis_mendes: 2, henrique_gouveia: 1 } },
      { text: "Tolerância zero - penas mais duras e prisão perpétua", scores: { andre_ventura: 3 } },
      { text: "Autoridade, ordem e disciplina nas forças de segurança", scores: { henrique_gouveia: 3, andre_ventura: 1 } }
    ]
  },
  {
    id: 9,
    question: "Habitação: como resolver a crise?",
    answers: [
      { text: "Controlo de rendas e habitação pública em massa", scores: { catarina_martins: 3 } },
      { text: "Habitação sustentável e eficiente energeticamente com apoio público", scores: { jorge_pinto: 2, antonio_seguro: 1 } },
      { text: "Construção pública e programas de habitação acessível", scores: { antonio_seguro: 3 } },
      { text: "Liberalizar construção e reduzir burocracia urbanística", scores: { joao_cotrim: 3 } },
      { text: "Dar prioridade a famílias portuguesas no acesso à habitação", scores: { andre_ventura: 2 } }
    ]
  },
  {
    id: 10,
    question: "Que visão tens sobre direitos sociais?",
    answers: [
      { text: "Expandir direitos laborais - semana de 4 dias, salário mínimo mais alto", scores: { catarina_martins: 3 } },
      { text: "Direitos humanos universais e igualdade de género radical", scores: { jorge_pinto: 3, catarina_martins: 1 } },
      { text: "Proteger conquistas sociais e garantir dignidade no trabalho", scores: { antonio_seguro: 3 } },
      { text: "Flexibilidade laboral que beneficie trabalhadores e empresas", scores: { luis_mendes: 2, joao_cotrim: 1 } },
      { text: "Liberdade contratual entre empregador e empregado", scores: { joao_cotrim: 3 } },
      { text: "Foco na família tradicional e valores cristãos", scores: { andre_ventura: 3 } }
    ]
  },
  {
    id: 11,
    question: "Como melhorar a Justiça?",
    answers: [
      { text: "Democratizar a justiça e combater corrupção empresarial", scores: { catarina_martins: 2, jorge_pinto: 1 } },
      { text: "Justiça ambiental - crimes ecológicos devem ser punidos", scores: { jorge_pinto: 2 } },
      { text: "Reformar o sistema com mais meios e menos morosidade", scores: { antonio_seguro: 2, luis_mendes: 3 } },
      { text: "Justiça eficiente e independente, sem corporativismo", scores: { joao_cotrim: 2, henrique_gouveia: 1 } },
      { text: "Combate implacável à corrupção política", scores: { andre_ventura: 2, henrique_gouveia: 1 } },
      { text: "Gestão eficiente dos tribunais e autoridade do Estado", scores: { henrique_gouveia: 3 } }
    ]
  },
  {
    id: 12,
    question: "Cultura e identidade nacional:",
    answers: [
      { text: "Cultura deve ser acessível a todos, democratizada e pública", scores: { catarina_martins: 3 } },
      { text: "Promover diversidade cultural e multiculturalismo", scores: { jorge_pinto: 3, antonio_seguro: 1 } },
      { text: "Apoiar cultura portuguesa e lusofonia", scores: { antonio_seguro: 2, luis_mendes: 2 } },
      { text: "Cultura deve ser livre, sem financiamento público excessivo", scores: { joao_cotrim: 3 } },
      { text: "Defender tradições portuguesas e identidade nacional", scores: { andre_ventura: 3 } },
      { text: "Preservar património histórico e valores nacionais", scores: { henrique_gouveia: 2, andre_ventura: 1 } }
    ]
  },
  {
    id: 13,
    question: "Política de defesa e segurança nacional:",
    answers: [
      { text: "Reduzir despesas militares e investir em cooperação internacional", scores: { catarina_martins: 3 } },
      { text: "Defesa europeia comum e desmilitarização gradual", scores: { jorge_pinto: 3 } },
      { text: "Manter compromissos NATO e participação em missões de paz", scores: { antonio_seguro: 2, luis_mendes: 3 } },
      { text: "Defesa profissional e eficiente sem gastos excessivos", scores: { joao_cotrim: 2 } },
      { text: "Fortalecer forças armadas e autonomia estratégica nacional", scores: { henrique_gouveia: 3, andre_ventura: 1 } },
      { text: "Portugal forte e soberano, fora de influências externas", scores: { andre_ventura: 2 } }
    ]
  },
  {
    id: 14,
    question: "Transportes e mobilidade:",
    answers: [
      { text: "Transportes públicos gratuitos e universais", scores: { catarina_martins: 3 } },
      { text: "Investimento massivo em transportes limpos e ferrovia", scores: { jorge_pinto: 3 } },
      { text: "Modernizar transportes públicos com tarifários sociais", scores: { antonio_seguro: 3, luis_mendes: 1 } },
      { text: "Liberalizar setor e permitir concorrência privada", scores: { joao_cotrim: 3 } },
      { text: "Eficiência na gestão e infraestruturas estratégicas", scores: { henrique_gouveia: 2 } }
    ]
  },
  {
    id: 15,
    question: "Que tipo de liderança pretendes?",
    answers: [
      { text: "Liderança coletiva e participativa, de base popular", scores: { catarina_martins: 3 } },
      { text: "Liderança ecologista, feminista e europeísta", scores: { jorge_pinto: 3 } },
      { text: "Experiência política e estabilidade institucional", scores: { antonio_seguro: 2, luis_mendes: 3 } },
      { text: "Competência técnica e visão liberal reformista", scores: { joao_cotrim: 3 } },
      { text: "Autoridade, eficiência e liderança não-partidária", scores: { henrique_gouveia: 3 } },
      { text: "Líder forte que defenda Portugal sem medo", scores: { andre_ventura: 3 } }
    ]
  }
];

/**
 * STATE MANAGEMENT
 */
const state = {
    currentView: 'landing', // landing, quiz, results
    scores: {},
    questions: [],
    currentQuestionIndex: 0,
    selectedAnswerIndices: [], 
    superPowerCount: 3,        
    superPowerActive: false    
};

// DOM Elements
const app = document.getElementById('app');

/**
 * CORE FUNCTIONS
 */

function init() {
    renderLanding();
}

function startQuiz() {
    // Reset state
    state.scores = {};
    state.currentQuestionIndex = 0;
    state.selectedAnswerIndices = [];
    state.superPowerCount = 3;
    state.superPowerActive = false;
    
    // LÓGICA DE ALEATORIEDADE DUPLA:
    // 1. Baralha a ordem das perguntas
    // 2. Para cada pergunta, baralha a ordem das respostas
    state.questions = [...originalQuestions]
        .sort(() => Math.random() - 0.5) // Baralha perguntas
        .map(question => {
            // Cria uma cópia profunda da pergunta para não alterar a original
            return {
                ...question,
                // Baralha as respostas desta pergunta específica
                answers: [...question.answers].sort(() => Math.random() - 0.5)
            };
        });
    
    // Render
    state.currentView = 'quiz';
    renderQuiz();
}

/**
 * LÓGICA DO SUPER PODER
 */
function toggleSuperPower() {
    if (state.selectedAnswerIndices.length > 0 && !state.superPowerActive) return;
    if (state.superPowerCount <= 0 && !state.superPowerActive) return;

    state.superPowerActive = !state.superPowerActive;
    state.selectedAnswerIndices = []; 
    renderQuiz();
}

/**
 * LÓGICA DE PULAR PERGUNTA
 */
function skipQuestion() {
    if (state.superPowerActive && state.selectedAnswerIndices.length > 0) return;
    state.selectedAnswerIndices = []; 
    goToNextQuestion();
}

/**
 * LÓGICA DE SELEÇÃO DE RESPOSTA
 */
function selectAnswer(answer, index) {
    if (state.selectedAnswerIndices.includes(index)) return;

    if (!state.superPowerActive) {
        if (state.selectedAnswerIndices.length > 0) return; 

        state.selectedAnswerIndices = [index];
        renderQuiz(); 
        addScores(answer.scores);

        setTimeout(() => {
            goToNextQuestion();
        }, 400);
    } 
    else {
        state.selectedAnswerIndices.push(index);
        addScores(answer.scores);

        if (state.selectedAnswerIndices.length === 1) {
            renderQuiz(); 
        } 
        else if (state.selectedAnswerIndices.length === 2) {
            state.superPowerCount--; 
            state.superPowerActive = false; 
            renderQuiz(); 

            setTimeout(() => {
                goToNextQuestion();
            }, 500);
        }
    }
}

function addScores(scoresObj) {
    Object.entries(scoresObj).forEach(([candidateId, points]) => {
        state.scores[candidateId] = (state.scores[candidateId] || 0) + points;
    });
}

function goToNextQuestion() {
    if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
        state.selectedAnswerIndices = [];
        state.superPowerActive = false; 
        renderQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    state.currentView = 'results';
    renderResults();
}

/**
 * RENDERERS (VIEW LAYER)
 */

function renderLanding() {
    app.innerHTML = `
        <div class="max-w-2xl w-full fade-enter fade-enter-active">
            <div class="bg-white rounded-lg shadow-2xl p-8 md:p-12 border-4 border-slate-200 relative overflow-hidden">
                <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-600 via-red-600 to-green-600"></div>
                
                <div class="text-center space-y-6">
                    <h1 class="text-3xl md:text-4xl font-bold text-slate-800">Quem é o teu Candidato Ideal?</h1>
                    <p class="text-slate-600 text-lg max-w-lg mx-auto">Descobre a tua afinidade política em 15 perguntas.</p>
                    
                    <div class="py-6">
                        <div class="relative inline-block">
                            <svg class="w-24 h-24 mx-auto text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                            <div class="absolute -bottom-1 -right-1 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center border-2 border-white">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <button onclick="startQuiz()" class="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2">
                        <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                        Começar a Votar
                    </button>
                    
                    <p class="text-slate-400 text-sm mt-8">Este quiz é apenas para fins educativos e de entretenimento</p>
                </div>
            </div>
        </div>
    `;
    setTimeout(() => { document.querySelector('.fade-enter').classList.add('fade-enter-active'); }, 10);
}

function renderQuiz() {
    const question = state.questions[state.currentQuestionIndex];
    const progress = ((state.currentQuestionIndex + 1) / state.questions.length) * 100;
    
    // Estados visuais
    const isSuperActive = state.superPowerActive;
    const canUseSuper = state.superPowerCount > 0;
    
    // Estilos dinâmicos do botão redondo
    let superBtnStyles = "shadow-lg transition-all duration-300 transform active:scale-95";
    
    if (isSuperActive) {
        // Ativo: Pulsar e brilhar
        superBtnStyles += " bg-gradient-to-r from-purple-500 to-pink-500 ring-4 ring-purple-300 scale-110";
    } else if (canUseSuper) {
        // Disponível: Cor normal
        superBtnStyles += " bg-slate-800 hover:bg-slate-700 group-hover:scale-105";
    } else {
        // Esgotado: Cinzento
        superBtnStyles += " bg-slate-200 cursor-not-allowed opacity-50 grayscale";
    }

    const answersHtml = question.answers.map((ans, idx) => {
        const isSelected = state.selectedAnswerIndices.includes(idx);
        
        // Bloqueio de interação
        const isInteractionLocked = (!isSuperActive && state.selectedAnswerIndices.length === 1) || 
                                    (isSuperActive && state.selectedAnswerIndices.length === 2);

        const opacityClass = (isInteractionLocked && !isSelected) ? 'opacity-50' : '';
        
        let borderClass = 'border-slate-200 bg-white hover:border-green-400 hover:shadow-md hover:bg-slate-50';
        if (isSelected) {
            borderClass = isSuperActive 
                ? 'border-purple-500 bg-purple-50 shadow-md scale-[0.99]' 
                : 'border-green-600 bg-green-50 shadow-md scale-[0.99]';
        }
            
        const safeText = ans.text.replace(/'/g, "\\'");
        
        return `
            <button 
                onclick="selectAnswer(state.questions[state.currentQuestionIndex].answers[${idx}], ${idx})"
                ${isInteractionLocked ? 'disabled' : ''}
                class="w-full text-left p-3 md:p-4 rounded-lg border-2 transition-all duration-200 ${borderClass} ${opacityClass} group active:scale-[0.98] touch-manipulation"
            >
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full border-2 mt-0.5 transition-all flex items-center justify-center ${isSelected ? (isSuperActive ? 'border-purple-500 bg-purple-500' : 'border-green-600 bg-green-600') : 'border-slate-300 group-hover:border-green-400'}">
                        ${isSelected ? '<div class="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white radio-selected"></div>' : ''}
                    </div>
                    <span class="flex-1 text-sm md:text-base leading-snug ${isSelected ? (isSuperActive ? 'text-purple-900 font-medium' : 'text-green-900 font-medium') : 'text-slate-700'}">
                        ${ans.text}
                    </span>
                </div>
            </button>
        `;
    }).join('');

    app.innerHTML = `
        <div class="max-w-3xl w-full">
            <div class="mb-6">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-slate-600 text-sm font-medium">Pergunta ${state.currentQuestionIndex + 1} de ${state.questions.length}</span>
                    <span class="text-slate-600 text-sm font-medium">${Math.round(progress)}%</span>
                </div>
                <div class="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-green-600 to-green-700 transition-all duration-500 ease-out" style="width: ${progress}%"></div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-2xl border-4 border-slate-200 relative overflow-hidden slide-enter slide-enter-active">
                <div class="h-2 bg-gradient-to-r from-green-600 via-red-600 to-green-600"></div>
                
                <div class="p-8 md:p-10 relative">
                    
                    <div class="flex justify-end mb-4 relative z-30">
                        <div class="relative group">
                            <div class="tooltip-content absolute right-full mr-4 top-1/2 -translate-y-1/2 w-48 bg-slate-800 text-white text-xs p-3 rounded-lg shadow-xl pointer-events-none origin-right z-50">
                                <p class="font-bold text-purple-300 mb-1 border-b border-slate-600 pb-1">Super Poder</p>
                                <p class="leading-relaxed">Ativa para poderes selecionar <span class="text-yellow-300 font-bold">2 opções</span> nesta pergunta.</p>
                                <div class="absolute top-1/2 -right-1 -mt-1 w-2 h-2 bg-slate-800 rotate-45"></div>
                            </div>

                            <button onclick="toggleSuperPower()" class="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white relative ${superBtnStyles}">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                
                                <div class="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] md:text-xs font-bold h-5 w-auto min-w-[20px] md:h-6 md:min-w-[24px] px-1.5 flex items-center justify-center rounded-full border-2 border-white shadow-sm z-40">
                                    ${state.superPowerCount}/3
                                </div>
                            </button>
                        </div>
                    </div>

                    <div class="mb-6 flex items-start gap-3">
                        <div class="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold mt-1">
                            ${state.currentQuestionIndex + 1}
                        </div>
                        <h2 class="text-xl md:text-2xl font-bold text-slate-800 flex-1 leading-tight">${question.question}</h2>
                    </div>

                    <div class="space-y-3">
                        ${answersHtml}
                    </div>

                    <div class="mt-8 pt-4 border-t-2 border-dashed border-slate-200 text-center">
                        <button onclick="skipQuestion()" class="text-slate-400 hover:text-slate-600 text-sm font-medium underline underline-offset-4 transition-colors p-2">
                            Não tenho opinião / Não entendi a pergunta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderResults() {
    const totalScore = Object.values(state.scores).reduce((a, b) => a + b, 0);
    
    const sortedCandidates = candidates.map(cand => {
        const score = state.scores[cand.id] || 0;
        return {
            ...cand,
            score: score,
            percentage: totalScore === 0 ? 0 : Math.round((score / totalScore) * 100)
        };
    }).sort((a, b) => b.score - a.score);

    const winner = sortedCandidates[0];

    if (typeof gtag === 'function') {
        gtag('event', 'quiz_completed', {
            'event_category': 'Engagement',
            'event_label': winner.name,
            'value': winner.percentage
        });
    }

    window.handleShare = async () => {
        const shareText = `O meu candidato ideal é ${winner.name} com ${winner.percentage}% de afinidade!`;
        const btn = document.getElementById('shareBtn');
        
        if (navigator.share) {
            try { await navigator.share({ title: 'Resultado', text: shareText }); } catch (err) {}
        } else {
            try {
                await navigator.clipboard.writeText(shareText);
                const originalText = btn.innerText;
                btn.innerText = 'Copiado!';
                setTimeout(() => btn.innerText = originalText, 2000);
            } catch (e) { alert(shareText); }
        }
    };

    const listHtml = sortedCandidates.map(cand => `
        <div class="flex items-center gap-3 mb-3">
            <span class="text-slate-700 w-32 md:w-48 text-sm md:text-base font-medium truncate text-right">${cand.name}</span>
            <div class="flex-1 h-8 bg-slate-100 rounded-full overflow-hidden relative">
                <div class="h-full flex items-center justify-end pr-2 transition-all duration-1000 ease-out ${cand.id === winner.id ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-slate-300'}" style="width: ${cand.percentage}%">
                    ${cand.percentage > 5 ? `<span class="text-white text-xs font-bold">${cand.percentage}%</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');

    app.innerHTML = `
        <div class="max-w-3xl w-full fade-enter fade-enter-active">
            <div class="bg-white rounded-lg shadow-2xl border-4 border-slate-200 overflow-hidden">
                <div class="h-3 bg-gradient-to-r from-green-600 via-red-600 to-green-600"></div>
                
                <div class="p-8 md:p-12">
                    <div class="text-center mb-8">
                        <h2 class="text-slate-600 mb-2 font-medium">O teu candidato ideal é:</h2>
                        
                        <div class="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-green-600 shadow-xl my-6">
                            <img src="${winner.image}" alt="${winner.name}" class="w-full h-full object-cover">
                        </div>
                        
                        <h1 class="text-3xl font-bold text-green-700 mb-2">${winner.name}</h1>
                        <div class="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full font-bold">
                            ${winner.percentage}% de afinidade
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-lg p-6 border-2 border-slate-200 mb-8">
                        <h3 class="text-slate-700 mb-3 font-bold flex items-center gap-2">
                            <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>
                            Porquê?
                        </h3>
                        <p class="text-slate-700 leading-relaxed text-sm md:text-base">${winner.description}</p>
                    </div>

                    <div class="mb-8">
                        <h4 class="text-slate-600 mb-4 text-center font-medium">Todas as tuas afinidades:</h4>
                        ${listHtml}
                    </div>

                    <div class="flex flex-col sm:flex-row gap-3 justify-center">
                        <button onclick="startQuiz()" class="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                            Recomeçar Quiz
                        </button>
                        <button id="shareBtn" onclick="handleShare()" class="px-6 py-3 bg-white text-slate-700 border-2 border-slate-300 font-bold rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
                            Partilhar Resultado
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    setTimeout(() => { document.querySelector('.fade-enter').classList.add('fade-enter-active'); }, 10);
}

/**
 * LÓGICA DO CHATBOT (AI)
 */

function toggleChat() {
    const window = document.getElementById('chat-window');
    window.classList.toggle('hidden');
}

function handleEnter(e) {
    if (e.key === 'Enter') sendMessage();
}

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const messagesDiv = document.getElementById('chat-messages');
    const text = input.value.trim();
    
    if (!text) return;

    // 1. Mostrar mensagem do utilizador
    appendMessage(text, 'user');
    input.value = '';
    input.disabled = true;

    // 2. Mostrar indicador de "A escrever..."
    const loadingId = appendMessage('...', 'bot', true);

    try {
        // 3. Chamar a nossa Netlify Function
        const response = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            body: JSON.stringify({ message: text })
        });

        const data = await response.json();
        
        // 4. Remover loading e mostrar resposta
        document.getElementById(loadingId).remove();
        appendMessage(data.reply || "Desculpa, ocorreu um erro.", 'bot');

    } catch (error) {
        document.getElementById(loadingId).remove();
        appendMessage("Erro de conexão. Tenta novamente.", 'bot');
    } finally {
        input.disabled = false;
        input.focus();
    }
}

function appendMessage(text, sender, isLoading = false) {
    const messagesDiv = document.getElementById('chat-messages');
    const div = document.createElement('div');
    const id = 'msg-' + Date.now();
    div.id = id;
    
    // Estilos diferentes para user vs bot
    const baseClasses = "p-2 rounded-lg max-w-[85%] text-sm break-words";
    const userClasses = "bg-blue-600 text-white self-end rounded-tr-none ml-auto";
    const botClasses = "bg-slate-200 text-slate-700 self-start rounded-tl-none";
    
    div.className = `${baseClasses} ${sender === 'user' ? userClasses : botClasses}`;
    div.innerText = text;
    
    if (isLoading) div.classList.add('animate-pulse');

    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    return id;
}

// Iniciar Aplicação

init();
