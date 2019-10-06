let Game = class {
    constructor() {
        this.score = 0;
        this.highScore = 0;
        this.obstacles = new Obstacles(6);
        this.rocket = new Rocket(60, height/2, rocketImg);
        this.rocket.setVelocity(createVector(1, 0));
        this.camXPos = 0;
        this.pauseButton = new Button(width - 60, height - 30, "Pause", color('#fe3745'), color('#f3f3f3'), 16, color('#ff0000'), color('#f3f3f3'));
        this.resumeButton = new Button(width/2 + 5, height/2 + 100, "Resume", color('#fe3745'), color('#f3f3f3'), 16, color('#ff0000'), color('#f3f3f3'));
        this.restartButton = new Button(width/2 - 125, height/2 + 100, "Restart", color('#fe3745'), color('#f3f3f3'), 16, color('#ff0000'), color('#f3f3f3'));
        this.menuButton = new Button(width/2 + 125, height/2 + 100, "Menu", color('#fe3745'), color('#f3f3f3'), 16, color('#ff0000'), color('#f3f3f3'));

        this.resumeButton.disable();
        this.restartButton.disable();
        this.menuButton.disable();

        this.isPaused = false;
    }

    draw() {
        if (this.rocket.isAlive() && !this.isPaused) {
            this.camXPos = -this.rocket.getPos().x + 60;
            this.obstacles.update(this.camXPos);
            this.rocket.onKeyDown();
            this.rocket.update();
            this.score = this.rocket.getDistance();
            if (this.obstacles.isHitted(this.rocket.getPos(), this.rocket.getRad())) {
                this.rocket.destroy();
            }

            if (!soundHappy.isPlaying()) {
                soundHappy.loop();
            }
            if (soundSad.isPlaying()) {
                soundSad.stop();
            }

            this.resumeButton.disable();
            this.restartButton.disable();
            this.menuButton.disable();
            this.pauseButton.enable();
        }
        else if (!this.rocket.isAlive()) {
            if (!soundSad.isPlaying()) {
                soundSad.loop();
            }
            if (soundHappy.isPlaying()) {
                soundHappy.stop();
            }

            if (this.highScore < this.score) {
                this.highScore = this.score;
            }

            this.pauseButton.disable();
            this.restartButton.enable();
            this.menuButton.enable();
        }
        else if (this.isPaused) {
            this.pauseButton.disable();
            this.restartButton.enable();
            this.menuButton.enable();
            this.resumeButton.enable();
        }

        push();
            translate(this.camXPos, 0);
            this.rocket.draw();
            this.obstacles.draw();
        pop();
        
        push();
            fill(255);
            textSize(32);
            let scoreStr = `${this.score}`;
            let scoreWidth = textWidth(scoreStr);
            text(scoreStr, width - scoreWidth - 20, 52);
        pop();

        this.pauseButton.draw();

        if (this.isPaused || !this.rocket.isAlive()) {
            push();
                noStroke();
                fill('rgba(0,0,0, 0.6)');
                let w = 400, h = 270;
                rect(width/2 - w/2, height/2 - h/2, w, h, 16);

                fill(255);
                textSize(16);

                text("Your Score", width/2 - textWidth("Your Score")/2, 100);
                text("Highscore", width/2 - textWidth("Highscore")/2, 190);

                textSize(32);
                text(scoreStr, width/2 - scoreWidth/2, 135);

                scoreWidth = textWidth(`${this.highScore}`);
                text(`${this.highScore}`, width/2 - scoreWidth/2, 225);

                if (this.isPaused) this.resumeButton.draw();
                this.restartButton.draw();
                this.menuButton.draw();
            pop();
        }
    }

    reset() {
        this.score = 0;
        this.obstacles = new Obstacles(6);
        this.rocket = new Rocket(60, height/2, rocketImg);
        this.rocket.setVelocity(createVector(1, 0));
        this.camXPos = 0;
        this.isPaused = false;

        this.resumeButton.disable();
        this.restartButton.disable();
        this.menuButton.disable();
        this.pauseButton.enable();
    }

    getHighScore() {
        return this.highScore;
    }

    onMouseOver() {
        this.pauseButton.onMouseOver();
        this.resumeButton.onMouseOver();
        this.restartButton.onMouseOver();
        this.menuButton.onMouseOver();
    }

    onMouseClick() {
        this.pauseButton.onMouseClick(() => {
            this.isPaused = true;
        });

        this.resumeButton.onMouseClick(() => {
            this.isPaused = false;
        });

        this.restartButton.onMouseClick(() => {
            this.reset();
        });

        this.menuButton.onMouseClick(() => {
            this.reset();
            page = 0;
        });
    }

    onKeyPress() {
        switch (keyCode) {
            case 80:
                if (this.rocket.isAlive()) {
                    this.isPaused = !this.isPaused;
                }
                break;
        
            default:
                break;
        }
    }
}