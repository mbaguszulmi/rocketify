let Game = class {
    constructor() {
        this.score = 0;
        this.obstacles = new Obstacles(6);
        this.rocket = new Rocket(60, height/2, rocketImg);
        this.rocket.setVelocity(createVector(0, 0));
        this.camXPos = 0;
    }

    draw() {
        if (this.rocket.isAlive()) {
            this.camXPos = -this.rocket.getPos().x + 60;
            this.obstacles.update(this.camXPos);
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

        }
        else {
            if (!soundSad.isPlaying()) {
                soundSad.loop();
            }
            if (soundHappy.isPlaying()) {
                soundHappy.stop();
            }
        }

        push();
            translate(this.camXPos, 0);
            this.rocket.onKeyDown();
            this.rocket.draw();
            this.obstacles.draw();
        pop();
        
        // push();
        fill(255);
        textSize(32);
        let scoreStr = `${this.score}`;
        let scoreWidth = textWidth(scoreStr);
        text(scoreStr, width - scoreWidth - 20, 52);
        // pop();
    }

    reset() {
        this.score = 0;
        this.obstacles = new Obstacles(6);
    }

    // onKeyPress() {
    //     this.rocket.onKeyPress();
    // }

    onKeyDown() {
        this.rocket.onKeyDown();
    }
}