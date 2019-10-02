let Asteroid = class {
    constructor(x, y, r, image) {
        this.pos = createVector(x, y);
        this.r = r;
        this.d = r*2;
        this.image = image;
    }

    draw() {
        push();
        fill(255);
        circle(this.pos.x, this.pos.y, this.d);
        image(this.image, this.pos.x - this.r, this.pos.y - this.r, this.d, this.d);
        pop();
    }

    getRad() {
        return this.r;
    }

    getPos() {
        return this.pos;
    }
}
