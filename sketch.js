function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  somDoJogo.loop(); //.play executa uma vez //.loop executa varias vezes
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial,
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}