let font,
    page,
    menu,
    game,
    asteroidImg;

function preload() {
    font = loadFont('./assets/fonts/nunito/ttf/Nunito-SemiBold.ttf');
}

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.parent('game-container');
    frameRate(60);
    textFont(font);
    page = 0;
    asteroidImg = [];
    for (let i = 0; i < 5; i++) {
        asteroidImg.push(loadImage(`./assets/images/game-image/obj${i+1}.png`))
    }
    menu = new Menu();
    game = new Game();
}

function mouseClicked() {
    menu.onMouseClick();
}

function mouseMoved() {
    menu.onMouseOver();
}

function draw() {
    background(26, 43, 99);

    switch (page) {
        case 0 /** halaman menu */:
            isPlaying = false;
            menu.draw();
            break;
        
        case 1 /** bermain game */:
            isPlaying = true;
            game.draw();
            break;
    
        default:
            break;
    }
}