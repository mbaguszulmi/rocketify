let Game = class {
    constructor() {
        this.score = 0;
        this.obstacles = new Obstacles(6);
        this.rocket = new Rocket(60, height/2);
        this.rocket.setVelocity(createVector(0, 0));
        this.camXPos = 0;
    }

    draw() {
        if (this.rocket.isAlive()) {
            this.camXPos = -this.rocket.getPos().x + 60;
            this.obstacles.update(this.camXPos);
            this.rocket.update();
            if (this.obstacles.isHitted(this.rocket.getPos(), this.rocket.getRad())) {
                this.rocket.destroy();
            }
        }

        translate(this.camXPos, 0);
        this.rocket.onKeyDown();
        this.rocket.draw();
        this.obstacles.draw();
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