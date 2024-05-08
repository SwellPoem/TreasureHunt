
var waldoImage;
var margin = 25;
const waldoCoordinates = { x: 1189 , y: 464 };

function preload() {
    waldoImage = loadImage('./assets/waldo.jpg')
}

function setup() {
    createCanvas(waldoImage.width, waldoImage.height);
    frameRate(1);
}

function draw() {
    image(waldoImage,0, 0)
    // text(mouseX+ ', '+mouseY, 200, 200);
}

function mouseClicked() {
    if (mouseX > waldoCoordinates.x - margin && mouseX < waldoCoordinates.x + margin && mouseY > waldoCoordinates.y - margin && mouseY < waldoCoordinates.y + margin) {
        vittoria(false);
    }
}

function vittoriaSegreta() {
    vittoria(true);
}

function vittoria(segreta) {
    if (segreta) {
        window.open('./vittoria_segreta.html')
    } else {
        window.open('./vittoria.html')
    }
    noLoop();
} 