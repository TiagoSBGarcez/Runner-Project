var groundImage, chao;
var runner, running, edges;
var meioFio, meioFio2;

function preload(){
  //imagens pré-carregadas
  groundImage = loadImage("path.png");
  running = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  chao = createSprite(200, 200, 200, 200);
  chao.addImage("solo", groundImage);
  chao.scale = 1.3;

  meioFio = createSprite(405, 200, 15, 400);
  meioFio2 = createSprite(5, 200, 15, 400);

  runner =  createSprite(50,160,20,50);
  runner.addAnimation("running", running);
  edges = createEdgeSprites();


  //tamanho e posição
  runner.scale = 0.07;
  runner.x = 200;
  runner.y = 200;

}

function draw() {
  background(0);

  chao.velocityY = 15;
  if(chao.y > 400){
    chao.y = chao.width / 3;
  }

  runner.collide(meioFio);
  runner.collide(meioFio2);
  runner.collide(edges);


  meioFio.visible = false;
  meioFio2.visible = false;

  console.log(runner.y);
  console.log(runner.x);

  control();
 drawSprites();
}


function control(){
  
  runner.velocityX = 0;
  runner.velocityY = 0;
  
  if(keyIsDown(UP_ARROW)){
    runner.velocityY = - 7;
  }
  if(keyIsDown(DOWN_ARROW)){
    runner.velocityY = 7; 
  }
  if(keyIsDown(RIGHT_ARROW)){
    runner.velocityX = 7; 
  }
  if(keyIsDown(LEFT_ARROW)){
    runner.velocityX = - 7; 
  }

}