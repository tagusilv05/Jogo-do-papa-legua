# 🏃‍♂️💨 Willi & o Coiote — Jogo do Papa-Léguas

Um jogo *endless runner* feito com **HTML, CSS e JavaScript puro**, inspirado no dinossauro do Chrome. Nele, o Papa-Léguas (Willi) corre sem parar e precisa pular para escapar do Coiote que surge no caminho. Quanto mais você sobrevive, mais pontos faz!

## 🎮 Como jogar

| Tecla | Ação |
|-------|------|
| `Espaço` | Iniciar o jogo / jogar novamente após o *Game Over* |
| `↑` (Seta para cima) ou `W` | Pular |

- A cada 100 ms de jogo você ganha 1 ponto.
- Se o Papa-Léguas colidir com o Coiote, o jogo termina e a pontuação final é exibida.
- Pressione `Espaço` para recomeçar.

## ✨ Funcionalidades

- Placar em tempo real
- Detecção de colisão entre o personagem e o obstáculo
- Animações em CSS: pulo, obstáculo em movimento, estrada infinita e nuvens
- Tela de *Game Over* com a pontuação final
- Cenário de fundo personalizado
- Layout responsivo para telas menores (até 768px)
- Fonte [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts

## 🛠️ Tecnologias

- **HTML5**
- **CSS3** (`@keyframes`, posicionamento absoluto e *media queries*)
- **JavaScript (ES6+)** (manipulação do DOM, `setInterval`, `setTimeout` e eventos de teclado)

Sem frameworks, sem bibliotecas e sem dependências.

## 📁 Estrutura do projeto

```
Jogo-do-papa-leguas/
├── index.html        # estrutura da página e elementos do jogo
├── styles.css        # estilos e animações
├── script.js         # lógica do jogo
└── imagens/
    ├── willi.png     # personagem (Papa-Léguas)
    ├── coyote.webp   # obstáculo (Coiote)
    ├── cloud01.png   # nuvens
    ├── road.png      # estrada
    ├── cenario.jpg   # imagem de fundo
    └── ...           # demais imagens de apoio (cacto, jerry, dino etc.)
```

## 🚀 Como executar

```bash
# 1. Clone o repositório
git clone https://github.com/tagusilv05/Jogo-do-papa-l-guas.git

# 2. Entre na pasta
cd Jogo-do-papa-l-guas
```

3. Abra o arquivo `index.html` no navegador (ou use a extensão **Live Server** do VS Code).
4. Pressione `Espaço` para começar!

## ⚙️ Como funciona

| Função | O que faz |
|--------|-----------|
| `iniciarJogo()` | Zera a pontuação, esconde o *Game Over*, ativa as animações (obstáculo, estrada e nuvem) e inicia os contadores |
| `iniciarPontuacao()` | Soma 1 ponto a cada 100 ms e atualiza o placar |
| `pular()` | Adiciona a classe `dinoActive`, que dispara a animação de pulo por 500 ms (ignora o comando se já estiver no ar) |
| `iniciarColisao()` | A cada 10 ms compara a altura do personagem (`bottom`) com a posição do obstáculo (`left`) |
| `finalizarJogo()` | Para os contadores e as animações e mostra a tela de *Game Over* com a pontuação |

A colisão acontece quando o obstáculo está entre `20px` e `80px` da esquerda **e** o personagem está abaixo de `100px` de altura.

## 🔧 Personalização

- **Dificuldade:** altere a duração de `animateBlock` no `styles.css` (`1.2s`). Quanto menor, mais rápido o Coiote.
- **Altura do pulo:** modifique o `bottom` em `@keyframes animateDino`.
- **Personagens e cenário:** troque as imagens em `imagens/` (por exemplo, use `cacto.webp` como obstáculo) e atualize o `src` no `index.html`.
- **Ritmo da pontuação:** ajuste o intervalo de `100` ms em `iniciarPontuacao()`.

## 💡 Ideias para o futuro

- [ ] Salvar o recorde com `localStorage`
- [ ] Aumentar a velocidade conforme a pontuação
- [ ] Obstáculos variados (Coiote, cacto etc.)
- [ ] Efeitos sonoros e música
- [ ] Controles por toque para celulares

## 👤 Autor

Desenvolvido por **[tagusilv05](https://github.com/tagusilv05)**.

## ⚠️ Aviso

Papa-Léguas e Coiote são personagens da Warner Bros. / Looney Tunes. Este é um projeto educacional, sem fins lucrativos, e os personagens pertencem aos seus respectivos detentores de direitos.