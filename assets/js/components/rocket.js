let Rocket = class {
    constructor(x, y, image) {
        this.startX = x;
        this.pos = createVector(x, y);
        this.distancePassed = 0;
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.alive = true;
        this.minSpeed = 1;
        this.rad = 20;
        this.rocketImg = image;
    }

    setAcceleration(a) {
        this.acceleration = a;
    }

    setVelocity(v) {
        this.velocity = v;
    }

    draw() {
        push();
        translate(this.pos.x, this.pos.y);
        // circle(0, 0, this.rad*2);
        image(this.rocketImg, -74.169/2, -20, 74.169, 40);
        pop();
    }

    update() {
        this.velocity.add(this.acceleration);
        if (this.velocity.x < this.minSpeed) {
            this.velocity.x = this.minSpeed;
        }

        this.pos.add(this.velocity);
        this.distancePassed = Math.round(this.pos.x - this.startX);

        if (this.pos.y + this.rad > height) {
            this.pos.y = height - this.rad;
        }
        else if (this.pos.y - this.rad < 0) {
            this.pos.y = this.rad;
        }
    }

    jump() {
        this.velocity = createVector(this.velocity.x, -6.5);
    }

    onKeyDown() {
        if (keyIsDown(UP_ARROW)) {
            this.velocity.y = -1.5;
        }
        else if (keyIsDown(DOWN_ARROW)) {
            this.velocity.y = 1.5;
        }
        else {
            this.velocity.y = 0;
        }
        
        if (keyIsDown(32)) {
            this.acceleration.x = 0.1;
        }
        else {
            this.acceleration.x = -0.3;
        }
    }

    getPos() {
        return this.pos;
    }

    getRad() {
        return this.rad;
    }

    destroy() {
        this.alive = false;
    }

    isAlive() {
        return this.alive;
    }

    getDistance() {
        return Math.floor(this.distancePassed/100);
    }
}