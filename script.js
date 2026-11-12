// SELEÇÃO DOS ELEMENTOS DA TELA
const dino = document.querySelector('#dino')
const bloco = document.querySelector('#block')
const estrada = document.querySelector('#road img')
const nuvem = document.querySelector('#cloud img')
const placar = document.querySelector('#score')
const telaGameOver = document.querySelector('#gameOver')
//VARIÁVEIS DE CONTROLE DO JOGO
let jogoRodando = false
let estaPulando = false
let pontuacao = 0
let intervaloPontuacao
let intervaloColisao

//INICIAR O JOGO
function iniciarJogo() {
    if (jogoRodando) return
    jogoRodando = true
    pontuacao = 0
    placar.innerHTML = `Score <b>0</b>`
    telaGameOver.style.display = 'none'
// Ativa as animações
    bloco.classList.add('blockActive')
    estrada.style.animation = 'animateRoad 1s linear infinite'
    nuvem.style.animation = 'cloudMove 12s linear infinite'
    iniciarPontuacao()
    iniciarColisao()
}
//CONTADOR DE PONTOS
function iniciarPontuacao() {
    intervaloPontuacao = setInterval(() => {
        pontuacao++
        placar.innerHTML = `Score <b>${pontuacao}</b>`
    }, 100)
}
// PULO DO DINO
function pular() {
    if (!jogoRodando || estaPulando) return
    estaPulando = true
    dino.classList.add('dinoActive')
    setTimeout(() => {
        dino.classList.remove('dinoActive')
        estaPulando = false
    }, 500)
}
// DETECÇÃO DE COLISÃO
function iniciarColisao() {
    intervaloColisao = setInterval(() => {
        const dinoBaixo = parseInt(getComputedStyle(dino).bottom)
        const blocoEsquerda = parseInt(getComputedStyle(bloco).left)

        if (blocoEsquerda > 20 && blocoEsquerda < 80 && dinoBaixo < 100) {
            finalizarJogo()
        }
    }, 10)
}
//GAME OVER
function finalizarJogo() {
    jogoRodando = false
    clearInterval(intervaloPontuacao)
    clearInterval(intervaloColisao)
    bloco.classList.remove('blockActive')
    estrada.style.animation = 'none'
    nuvem.style.animation = 'none'
    telaGameOver.innerHTML = `
        Game Over
        <p>Pontuação: ${pontuacao}</p>
        <p>Pressione ESPAÇO para jogar novamente</p>
    `
    telaGameOver.style.display = 'block'
}
//CONTROLES DO TECLADO
window.addEventListener('keydown', (evento) => {
    // Iniciar o jogo
    if (evento.code === 'Space' && !jogoRodando) {
        iniciarJogo()
    }
    // Pular
    if ((evento.key === 'ArrowUp' || evento.key === 'w') && jogoRodando) {
        pular()
    }
})
