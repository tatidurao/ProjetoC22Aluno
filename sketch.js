var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação(loadAnimation) de fada (fairyImage1 e 2)

    //carregar loadSound pasta sound

}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada 
    //e ajustar scala

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
    background(bgImg);
   //add musica
   
//criar condicionais para fada se movimentar na tela quando
//apertamos as setas do teclado esquerda e direita.
   
//Quando apertamos para baixo a estrela cai
    if(keyDown("DOWN_ARROW")) {
        star.x = starBody.position.x;
        star.y = starBody.position.y;
        Matter.Body.setStatic(starBody,false);
    }

    //condicional para a estrela parar na mão da fada 
    //que esta no projeto
    
        

    drawSprites();
}

