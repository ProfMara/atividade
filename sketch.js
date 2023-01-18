var titulo, subtitulo, texto;
var brilho;
var grupo;

function preload(){
    //carrega as imagens
    brilho = loadImage("a.png");


}
function setup() {
    createCanvas(windowWidth,windowHeight);
    //cria grupos
    grupo = new Group();
    //cria a sprite
    var sprite = createSprite(500, 500);
    //adiciona a imagem
    sprite.addImage(brilho);
    //define o tamanho
    sprite.scale = 0.1;
    //define tempo de vida
    sprite.lifetime = 20;

}

function draw() {
    background("black");
    //códigos que serão executados ao longo de todo o jogo


    drawSprites();
}

function mouseClicked(){
    //clicou com o mouse
    var sprite = createSprite(mouseX, mouseY);
    sprite.addImage(brilho);
    sprite.scale = 0.1;
    sprite.lifetime = 20;
    grupo.add(sprite);
}

function mouseReleased(){ 
    //soltou o mouse


}
