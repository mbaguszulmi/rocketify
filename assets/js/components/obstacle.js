let Obstacle = class {
    constructor(x, minGap, maxGap, minDiameter) {
        this.x = x;
        this.gap = Math.random() * (maxGap - minGap) + minGap;

        let diameter = Math.random() * ((height/2) - minDiameter) + minDiameter;
        this.maxR = diameter/2;
        let imageIdx = Math.floor(Math.random() * 5);
        this.asteroid1 = new Asteroid(x, (diameter/2) - (diameter*Math.random()*0.06), diameter/2, asteroidImg[imageIdx]);

        let topArea = this.asteroid1.getPos().y + this.asteroid1.getRad() + this.gap;
        diameter = height - topArea;
        diameter = Math.random() * ((diameter*1.06) - diameter) + diameter;
        if (this.maxR < diameter/2) this.maxR = diameter/2;
        imageIdx = Math.floor(Math.random() * 5);
        this.asteroid2 = new Asteroid(x, topArea + (diameter/2), diameter/2, asteroidImg[imageIdx]);
    }

    draw() {
        this.asteroid1.draw();
        this.asteroid2.draw();
    }

    getMaxR() {
        return this.maxR;
    }

    getPosX() {
        return this.x;
    }

    isHitted(pos, rad) {
        if (pos.dist(this.asteroid1.getPos()) <= rad + this.asteroid1.getRad()) {
            return true;
        }
        else if (pos.dist(this.asteroid2.getPos()) <= rad + this.asteroid2.getRad()) {
            return true;
        }

        return false;
    }
}