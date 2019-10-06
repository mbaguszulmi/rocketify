let Rocket = class {
    constructor(x, y, image) {
        this.startX = x;
        this.pos = createVector(x, y);
        this.distancePassed = 0;
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.alive = true;
        this.minSpeed = 1;
        this.rad = 15;
        this.rocketImg = image;
        this.angleSpeed = 1.5;
        this.angle = 0;
        this.maxAngle = 82;
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
        rotate(radians(this.angle));
        image(this.rocketImg, -74.169/2, -20, 74.169, 40);
        pop();
    }

    update() {
        this.velocity.add(this.acceleration);
        if (this.velocity.x < this.minSpeed) {
            this.velocity.x = this.minSpeed;
        }

        let curV = p5.Vector.fromAngle(radians(this.angle), this.velocity.mag());
        this.pos.add(curV);
        this.distancePassed = Math.round(this.pos.x - this.startX);

        if (this.pos.y + this.rad > height) {
            this.pos.y = height - this.rad;
        }
        else if (this.pos.y - this.rad < 0) {
            this.pos.y = this.rad;
        }
    }

    onKeyDown() {
        if (keyIsDown(UP_ARROW)) {
            this.angle -= this.angleSpeed;
        }
        else if (keyIsDown(DOWN_ARROW)) {
            this.angle += this.angleSpeed;
        }

        if (this.angle > this.maxAngle) {
            this.angle = this.maxAngle;
        }
        else if (this.angle < -this.maxAngle) {
            this.angle = -this.maxAngle;
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