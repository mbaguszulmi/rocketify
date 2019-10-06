let Menu = class {
    constructor() {
        this.score = 0;
        this.highScore = 0;
        this.playButton = new Button(width/2, height/2 - 25, "Play", color('#fe3745'), color('#f3f3f3'), 16, color('#ff0000'), color('#f3f3f3'));
        this.helpButton = new Button(width/2, height/2 + 25, "Help", color('#ffb258'), color('#f3f3f3'), 16, color('#fe9418'), color('#f3f3f3'));
    }

    draw() {
        if (!soundHappy.isPlaying()) {
            soundHappy.loop();
        }
        if (soundSad.isPlaying()) {
            soundSad.stop();
        }
        
        this.playButton.draw();
        this.helpButton.draw();
    }

    onMouseOver() {
        this.playButton.onMouseOver();
        this.helpButton.onMouseOver();
    }

    onMouseClick() {
        this.playButton.onMouseClick(() => {
            page = 1;
        });
    }
}