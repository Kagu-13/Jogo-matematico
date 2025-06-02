/**
 * config.js
 * ------------------------------
 * Configurações centralizadas do jogo matemático com tema RPG
 * Contém constantes, textos e configurações que podem ser facilmente editadas
 */

// === CONFIGURAÇÕES GERAIS DO JOGO ===

/**
 * Configurações básicas do jogo
 * Altere estes valores para modificar o comportamento geral do jogo
 */
const CONFIG = {
    // Número de vidas (poções) iniciais do jogador
    VIDAS_INICIAIS: 3,
    
    // Número total de fases/reinos no jogo
    TOTAL_FASES: 5,
    
    // Número de questões necessárias para completar cada fase
    QUESTOES_POR_FASE: 5,
    
    // Dificuldade das questões (afeta a complexidade dos números)
    DIFICULDADE: {
        FACIL: {
            MIN_NUMERO: -5,
            MAX_NUMERO: 5,
            VARIACAO_DISTRATORES: 5
        },
        MEDIA: {
            MIN_NUMERO: -10,
            MAX_NUMERO: 10,
            VARIACAO_DISTRATORES: 10
        },
        DIFICIL: {
            MIN_NUMERO: -20,
            MAX_NUMERO: 20,
            VARIACAO_DISTRATORES: 15
        }
    },
    
    // Tempo de espera (ms) entre questões após resposta
    TEMPO_ENTRE_QUESTOES: 1500,
    
    // Tempo de espera (ms) para animações
    TEMPO_ANIMACAO: 500
};

// === TEXTOS E NARRATIVAS ===

/**
 * Informações sobre os reinos (fases)
 * Cada reino tem um nome, descrição e tipo de questões
 */
const REINOS = [
    {
        id: 1,
        nome: "Floresta Encantada",
        descricao: "Um lugar místico onde as árvores sussurram equações de 1º grau.",
        tipo: "equacao1"
    },
    {
        id: 2,
        nome: "Montanhas Nebulosas",
        descricao: "Picos nebulosos onde as funções de 1º grau determinam caminhos seguros.",
        tipo: "funcao1"
    },
    {
        id: 3,
        nome: "Cavernas Cristalinas",
        descricao: "Cavernas brilhantes onde cristais mágicos formam equações de 2º grau.",
        tipo: "equacao2"
    },
    {
        id: 4,
        nome: "Cidade Flutuante",
        descricao: "Uma cidade nas nuvens onde as funções de 2º grau controlam as trajetórias voadoras.",
        tipo: "funcao2"
    },
    {
        id: 5,
        nome: "Castelo do Conhecimento",
        descricao: "O lar do Grande Mago Algebrius, guardião de todos os tipos de conhecimento matemático.",
        tipo: "misto"
    }
];

/**
 * Narrativas para contextualizar as questões em cada reino
 * Cada reino tem múltiplas narrativas que são usadas para diferentes questões
 */
const NARRATIVAS = {
    // Floresta Encantada - Equações de 1º grau
    1: [
        "Ao adentrar a Floresta Encantada, você encontra uma árvore anciã que guarda o primeiro cristal. Ela sussurra um enigma matemático que você precisa resolver para prosseguir.",
        "Um grupo de fadas guardiãs bloqueia seu caminho. Para provar seu valor, elas pedem que você resolva uma equação mágica que controla o crescimento das plantas.",
        "Um riacho mágico corre pela floresta. Para atravessá-lo, você precisa calcular a quantidade exata de pedras para formar uma ponte segura.",
        "Um druida protetor da floresta testa seus conhecimentos. Ele desenha símbolos místicos que formam uma equação que você precisa decifrar.",
        "Diante do altar do cristal, uma última proteção mágica se revela. Resolva a equação inscrita no altar para liberar o primeiro Cristal do Conhecimento."
    ],
    
    // Montanhas Nebulosas - Funções de 1º grau
    2: [
        "Nas Montanhas Nebulosas, um velho cartógrafo explica que para encontrar o caminho seguro, você precisa entender como a altitude varia em função da distância.",
        "Uma ponte suspensa balança perigosamente sobre um abismo. Para atravessá-la com segurança, você precisa calcular o ângulo de inclinação em cada ponto.",
        "Um grupo de anões mineiros precisa de ajuda para calcular a profundidade de um novo túnel. Eles mostram um gráfico que você precisa interpretar.",
        "Uma águia gigante oferece ajuda para sobrevoar um trecho perigoso, mas você precisa calcular a trajetória ideal para que ela não se canse.",
        "No pico mais alto, onde o segundo cristal está guardado, você encontra um puzzle que relaciona a temperatura com a altitude. Resolva-o para obter o cristal."
    ],
    
    // Cavernas Cristalinas - Equações de 2º grau
    3: [
        "Nas Cavernas Cristalinas, cristais brilhantes formam padrões matemáticos. Um guardião de cristal pede que você resolva uma equação para harmonizar as energias.",
        "Um lago subterrâneo reflete formas geométricas perfeitas. Para atravessá-lo, você precisa calcular as raízes de uma equação que controla o nível da água.",
        "Estalactites e estalagmites crescem seguindo padrões matemáticos precisos. Descubra a equação que determina onde elas se encontrarão.",
        "Um antigo mecanismo de pedra bloqueia seu caminho. As engrenagens seguem uma relação quadrática que você precisa decifrar para ativá-lo.",
        "A câmara do terceiro cristal é protegida por um campo de força parabólico. Encontre os pontos fracos resolvendo a equação que o descreve."
    ],
    
    // Cidade Flutuante - Funções de 2º grau
    4: [
        "Na Cidade Flutuante, plataformas se movem em trajetórias parabólicas. Um sábio local pede que você calcule o ponto mais alto de uma delas para prosseguir.",
        "Pontes de luz conectam os edifícios flutuantes. Para ativar uma delas, você precisa determinar a função que descreve seu arco perfeito.",
        "Um inventor excêntrico criou um sistema de transporte que lança pequenas cápsulas entre torres. Ajude-o a calcular a trajetória ideal para uma entrega importante.",
        "O sistema de sustentação da cidade depende de cristais de energia posicionados em pontos específicos. Determine onde colocar um cristal substituto usando funções quadráticas.",
        "O quarto Cristal do Conhecimento está no centro da praça principal, protegido por um enigma que relaciona a altura das fontes de água com suas distâncias."
    ],
    
    // Castelo do Conhecimento - Mistura de todos os tipos
    5: [
        "No Castelo do Conhecimento, o Grande Mago Algebrius o recebe com um desafio que combina equações lineares e quadráticas em um único sistema.",
        "A biblioteca mágica do castelo tem estantes que se movem seguindo padrões matemáticos complexos. Desvende a lógica para encontrar o livro que procura.",
        "Na sala de artefatos, um espelho mágico mostra reflexos distorcidos por funções matemáticas. Determine a função correta para ver a imagem verdadeira.",
        "A torre do relógio do castelo marca o tempo através de complexas relações matemáticas. Resolva o enigma para sincronizar os ponteiros corretamente.",
        "Diante do altar do quinto e último Cristal do Conhecimento, o Grande Mago Algebrius apresenta seu desafio final, combinando todos os conhecimentos que você adquiriu."
    ]
};

/**
 * Textos para as diferentes telas do jogo
 * Facilmente editáveis para personalização
 */
const TEXTOS = {
    // Tela de introdução
    INTRODUCAO: {
        TITULO: "O Início da Aventura",
        CONTEUDO: [
            "Em um mundo onde números e equações controlam a magia, você é um jovem aprendiz de mago com um talento especial para matemática.",
            "O Grande Mago Algebrius convocou você para uma missão importante: recuperar os 5 Cristais do Conhecimento que foram roubados e escondidos em 5 reinos diferentes.",
            "Cada cristal está protegido por enigmas matemáticos que apenas um verdadeiro mestre pode resolver.",
            "Sua jornada começa na Floresta Encantada, onde o primeiro cristal aguarda..."
        ],
        BOTAO: "Começar Jornada"
    },
    
    // Tela de como jogar
    COMO_JOGAR: {
        TITULO: "Como Jogar",
        CONTEUDO: [
            "Bem-vindo à Jornada Matemática, aventureiro!",
            "Neste mundo mágico, você usará seus conhecimentos matemáticos para superar desafios e atravessar 5 reinos diferentes.",
            "Regras:",
            "• Você começa com 3 poções de vida",
            "• Cada resposta incorreta consome uma poção",
            "• Acerte 5 desafios para avançar ao próximo reino",
            "• Complete todos os 5 reinos para se tornar o Mestre da Matemática",
            "Reinos:",
            "• Floresta Encantada: Equações de 1º grau",
            "• Montanhas Nebulosas: Funções de 1º grau",
            "• Cavernas Cristalinas: Equações de 2º grau",
            "• Cidade Flutuante: Funções de 2º grau",
            "• Castelo do Conhecimento: Desafios mistos"
        ],
        BOTAO: "Voltar ao Menu"
    },
    
    // Tela de créditos
    CREDITOS: {
        TITULO: "Créditos",
        CONTEUDO: [
            "A Jornada Matemática",
            "Um jogo educativo que combina matemática e aventura",
            "Desenvolvido: Tulio e Jose Levi",
            "Beta Testers: Ximenes e Francisco Fernandes",
            "Versão: 2.5",
        ],
        BOTAO: "Voltar ao Menu"
    },
    
    // Tela de game over
    GAME_OVER: {
        TITULO: "Sua Jornada Terminou...",
        CONTEUDO: [
            "Infelizmente suas poções acabaram e você não conseguiu completar sua missão.",
            "Mas não desista! Todo grande mago falha antes de alcançar a maestria.",
            "Deseja tentar novamente?"
        ],
        BOTAO_TENTAR: "Tentar Novamente",
        BOTAO_MENU: "Voltar ao Menu"
    },
    
    // Tela de vitória
    VITORIA: {
        TITULO: "Vitória!",
        CONTEUDO: [
            "Parabéns, grande mago! Você recuperou todos os 5 Cristais do Conhecimento!",
            "Sua maestria em matemática impressionou até mesmo o Grande Mago Algebrius.",
            "Os reinos agora estão seguros graças ao seu conhecimento e coragem.",
            "Sua lenda será contada por gerações!"
        ],
        BOTAO_JOGAR: "Jogar Novamente",
        BOTAO_MENU: "Voltar ao Menu"
    },
    
    // Feedback para respostas
    FEEDBACK: {
        CORRETO: "Correto! A magia flui através de você! ✨",
        INCORRETO: "Incorreto! Você perdeu uma poção mágica! 💔"
    }
};

// Exporta as configurações para uso em outros arquivos
window.CONFIG = CONFIG;
window.REINOS = REINOS;
window.NARRATIVAS = NARRATIVAS;
window.TEXTOS = TEXTOS;
