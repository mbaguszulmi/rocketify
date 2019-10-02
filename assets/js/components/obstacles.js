let Obstacles = class {
    constructor(maxObs) {
        this.minGap = 100;
        this.maxGap = 130;
        this.lastX = 200;
        this.obstacleArray = [];

        for (let i = 0; i < maxObs; i++) {
            let obstacle = new Obstacle(this.lastX, this.minGap, this.maxGap, 70);
            this.obstacleArray.push(obstacle);
            this.lastX += obstacle.getMaxR()*2;
        }
    }

    draw() {
        this.obstacleArray.forEach(obstacle => {
            obstacle.draw();
        });
    }

    update(curPos) {
        let obstacle = this.obstacleArray[0];
        if (obstacle.getPosX() + curPos + obstacle.getMaxR() <= 0) {
            this.obstacleArray.shift();
            obstacle = new Obstacle(this.lastX, this.minGap, this.maxGap, 70);
            this.obstacleArray.push(obstacle);
            this.lastX += obstacle.getMaxR()*2;
        }
    }

    isHitted(pos, rad) {
        for (let i = 0; i < this.obstacleArray.length; i++) {
            const obstacle = this.obstacleArray[i];
            if (obstacle.isHitted(pos, rad)) {
                return true;
            }   
        }

        return false;
    }
}
