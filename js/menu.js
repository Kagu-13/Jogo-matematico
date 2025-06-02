/**
 * menu.js
 * ------------------------------
 * Gerenciamento do menu principal e navegação entre telas do jogo matemático RPG
 * Responsável por inicializar o jogo, controlar transições entre telas e gerenciar o estado global
 * 
 * Dependências: config.js, utils.js
 */

// === ESTADO GLOBAL DO JOGO ===

// Estado global do jogo, acessível por todos os módulos
let gameState;

/**
 * Inicializa o estado do jogo
 * Carrega estado salvo ou cria um novo
 */
function initializeGameState() {
    // Tenta carregar um estado salvo
    const savedState = utils.loadGameState();
    
    // Se existir um estado salvo, usa ele; caso contrário, cria um novo
    gameState = savedState || utils.createNewGameState();
    
    // Torna o estado acessível globalmente
    window.gameState = gameState;
}

// === GERENCIAMENTO DE TELAS ===

/**
 * Inicializa o menu principal e configura eventos dos botões
 */
function initializeMenu() {
    // Elementos do menu
    const menuScreen = document.getElementById('menu-screen');
    const startButton = document.getElementById('start-button');
    const howToPlayButton = document.getElementById('how-to-play-button');
    const creditsButton = document.getElementById('credits-button');
    
    // Elementos de outras telas
    const introScreen = document.getElementById('intro-screen');
    const howToPlayScreen = document.getElementById('how-to-play-screen');
    const creditsScreen = document.getElementById('credits-screen');
    const gameOverScreen = document.getElementById('game-over-screen');
    const victoryScreen = document.getElementById('victory-screen');
    
    // Botões de retorno ao menu
    const backButtons = document.querySelectorAll('.back-to-menu');
    
    // Configura evento do botão de início
    if (startButton) {
        startButton.addEventListener('click', function() {
            // Esconde o menu e mostra a introdução
            utils.fadeOut(menuScreen, CONFIG.TEMPO_ANIMACAO, function() {
                // Reinicia o estado do jogo
                gameState = utils.createNewGameState();
                window.gameState = gameState;
                utils.saveGameState(gameState);
                
                // Mostra a tela de introdução
                utils.fadeIn(introScreen, CONFIG.TEMPO_ANIMACAO);
            });
        });
    }
    
    // Configura evento do botão "Como Jogar"
    if (howToPlayButton) {
        howToPlayButton.addEventListener('click', function() {
            utils.fadeOut(menuScreen, CONFIG.TEMPO_ANIMACAO, function() {
                utils.fadeIn(howToPlayScreen, CONFIG.TEMPO_ANIMACAO);
            });
        });
    }
    
    // Configura evento do botão de créditos
    if (creditsButton) {
        creditsButton.addEventListener('click', function() {
            utils.fadeOut(menuScreen, CONFIG.TEMPO_ANIMACAO, function() {
                utils.fadeIn(creditsScreen, CONFIG.TEMPO_ANIMACAO);
            });
        });
    }
    
    // Configura eventos dos botões de retorno ao menu
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Identifica a tela atual
            const currentScreen = button.closest('.screen');
            
            // Esconde a tela atual e mostra o menu
            utils.fadeOut(currentScreen, CONFIG.TEMPO_ANIMACAO, function() {
                utils.fadeIn(menuScreen, CONFIG.TEMPO_ANIMACAO);
            });
        });
    });
    
    // Configura evento do botão de começar jornada na introdução
    const startJourneyButton = document.getElementById('start-journey');
    if (startJourneyButton) {
        startJourneyButton.addEventListener('click', function() {
            utils.fadeOut(introScreen, CONFIG.TEMPO_ANIMACAO, function() {
                // Carrega a primeira fase
                loadPhase(1);
            });
        });
    }
    
    // Configura eventos dos botões da tela de game over
    const tryAgainButton = document.getElementById('try-again-button');
    const gameOverMenuButton = document.getElementById('game-over-menu-button');
    
    if (tryAgainButton) {
        tryAgainButton.addEventListener('click', function() {
            utils.fadeOut(gameOverScreen, CONFIG.TEMPO_ANIMACAO, function() {
                // Reinicia o estado do jogo
                gameState = utils.createNewGameState();
                window.gameState = gameState;
                utils.saveGameState(gameState);
                
                // Atualiza a exibição de vidas antes de carregar a fase
                if (window.updateLivesDisplay) {
                    window.updateLivesDisplay();
                }
                
                // Carrega a primeira fase
                loadPhase(1);
            });
        });
    }
    
    if (gameOverMenuButton) {
        gameOverMenuButton.addEventListener('click', function() {
            utils.fadeOut(gameOverScreen, CONFIG.TEMPO_ANIMACAO, function() {
                utils.fadeIn(menuScreen, CONFIG.TEMPO_ANIMACAO);
            });
        });
    }
    
    // Configura eventos dos botões da tela de vitória
    const playAgainButton = document.getElementById('play-again-button');
    const victoryMenuButton = document.getElementById('victory-menu-button');
    
    if (playAgainButton) {
        playAgainButton.addEventListener('click', function() {
            utils.fadeOut(victoryScreen, CONFIG.TEMPO_ANIMACAO, function() {
                // Reinicia o estado do jogo
                gameState = utils.createNewGameState();
                window.gameState = gameState;
                utils.saveGameState(gameState);
                
                // Atualiza a exibição de vidas antes de carregar a fase
                if (window.updateLivesDisplay) {
                    window.updateLivesDisplay();
                }
                
                // Carrega a primeira fase
                loadPhase(1);
            });
        });
    }
    
    if (victoryMenuButton) {
        victoryMenuButton.addEventListener('click', function() {
            utils.fadeOut(victoryScreen, CONFIG.TEMPO_ANIMACAO, function() {
                utils.fadeIn(menuScreen, CONFIG.TEMPO_ANIMACAO);
            });
        });
    }
}

/**
 * Mostra a tela de game over
 */
function showGameOver() {
    const gameScreen = document.getElementById('game-screen');
    const gameOverScreen = document.getElementById('game-over-screen');
    
    utils.fadeOut(gameScreen, CONFIG.TEMPO_ANIMACAO, function() {
        utils.fadeIn(gameOverScreen, CONFIG.TEMPO_ANIMACAO);
    });
}

/**
 * Mostra a tela de vitória
 */
function showVictory() {
    const mapScreen = document.getElementById('map-screen');
    const victoryScreen = document.getElementById('victory-screen');
    
    utils.fadeOut(mapScreen, CONFIG.TEMPO_ANIMACAO, function() {
        utils.fadeIn(victoryScreen, CONFIG.TEMPO_ANIMACAO);
    });
}

/**
 * Mostra uma tela específica e oculta as demais
 * @param {string} screenId - O ID da tela a ser exibida
 */
function showScreen(screenId) {
    // Oculta todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.style.display = 'none';
    });

    // Exibe a tela desejada
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.style.display = 'block';
    } else {
        console.error(`Tela com ID "${screenId}" não encontrada.`);
    }
}

// Exemplo de uso: Vincular botões às telas
document.getElementById('start-button').addEventListener('click', () => {
    showScreen('intro-screen');
});

document.getElementById('how-to-play-button').addEventListener('click', () => {
    showScreen('how-to-play-screen');
});

document.getElementById('credits-button').addEventListener('click', () => {
    showScreen('credits-screen');
});

document.querySelectorAll('.back-to-menu').forEach(button => {
    button.addEventListener('click', () => {
        showScreen('menu-screen');
    });
});

// === INICIALIZAÇÃO DO JOGO ===

/**
 * Inicializa o jogo quando o DOM estiver carregado
 */
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o estado do jogo
    initializeGameState();
    
    // Inicializa o menu
    initializeMenu();
    
    // Inicializa o mapa
    if (typeof window.mapFunctions !== 'undefined' && 
        typeof window.mapFunctions.initializeMap === 'function') {
        window.mapFunctions.initializeMap();
    }
    
    // Exporta funções para uso global
    window.showGameOver = showGameOver;
    window.showVictory = showVictory;
});
