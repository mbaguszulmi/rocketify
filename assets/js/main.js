let font,
    page,
    menu,
    game,
    help,
    asteroidImg,
    rocketImg,
    soundHappy,
    soundSad;

function preload() {
    font = loadFont('./assets/fonts/nunito/ttf/Nunito-SemiBold.ttf');
    asteroidImg = [];
    for (let i = 0; i < 5; i++) {
        asteroidImg.push(loadImage(`./assets/images/game-image/obj${i+1}.png`))
    }
    rocketImg = loadImage('./assets/images/game-image/rocket.png');

    soundHappy = loadSound('./assets/audio/suweorajamu.wav');
    soundSad = loadSound('./assets/audio/mawwang.wav');
}

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.parent('game-container');
    frameRate(60);
    textFont(font);
    page = 0;
    menu = new Menu();
    game = new Game();
    help = new Help();
}

function keyPressed() {
    switch (page) {
        case 1:
            game.onKeyPress();
            break;
    
        default:
            break;
    }
}

function mouseClicked() {
    switch (page) {
        case 0:
            menu.onMouseClick();
            break;
        case 1:
            game.onMouseClick();
            break;
        case 2:
            help.onMouseClick();
            break;
    
        default:
            break;
    }
}

function mouseMoved() {
    switch (page) {
        case 0:
            menu.onMouseOver();
            break;
        case 1:
            game.onMouseOver();
            break;
        case 2:
            help.onMouseOver();
            break;
    
        default:
            break;
    }
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

        case 2 /** display help */:
            help.draw();
            break;
    
        default:
            break;
    }
}