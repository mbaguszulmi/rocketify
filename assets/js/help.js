let Help = class {
    constructor() {
        this.backButton = new Button(width/2, height - 100, "Menu", color('#fe3745'), color('#f3f3f3'), 16, color('#ff0000'), color('#f3f3f3'));

    }

    draw() {
        push();
        fill(255);
        textSize(32);
        textAlign(CENTER);
        text("HELP", width/2, 40);

        textSize(16);
        textAlign(LEFT);
        text("SPACE key\t\t\t\t\t\t\t\t\t\t: Accelerate rocket", 40, 100);
        text("UP ARROW key\t\t\t\t\t : Move rocket angle up", 40, 120);
        text("DOWN ARROW key\t\t: Move rocket angle down", 40, 140);
        text("P key\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t: Toggle Pause and Resume game", 40, 160);

        this.backButton.draw();
        pop();
    }

    onMouseOver() {
        this.backButton.onMouseOver();
    }

    onMouseClick() {
        this.backButton.onMouseClick(() => {
            page = 0;
        });
    }
}