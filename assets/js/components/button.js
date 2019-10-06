let Button = class {
    constructor(x, y, textDisp, fillColor = 255, fontColor = 0, rad = 0, fillHover = undefined, fontHover = undefined, strokeW = 0, strokeColor = 0) {
        this.x = x;
        this.y = y;
        this.textDisp = textDisp;
        this.fillColorDefault = fillColor;
        this.fillColor = fillColor;
        this.fontColorDefault = fontColor;
        this.fontColor = fontColor;
        this.rad = rad;
        this.strokeW = strokeW;
        this.strokeColor = strokeColor;
        this.area = undefined;
        this.fillHover = fillHover;
        this.fontHover = fontHover;
        this.disabled = false;
    }

    draw() {
        push();

        if (this.strokeW > 0) {
            strokeWeight(this.strokeW);
            stroke(this.strokeColor);
        }
        else {
            noStroke();
        }

        let paddingV = 10;
        let paddingH = 20;
        let fontSize = 22;
        textSize(fontSize + 2);
        let textW = textWidth(this.textDisp);
        let bHeight = fontSize + 2*paddingV;
        let bWidth = textW + 2*paddingH;

        fill(this.fillColor);
        rect(this.x - (bWidth / 2), this.y - (bHeight / 2), bWidth, bHeight, this.rad);

        fill(this.fontColor);
        text(this.textDisp, this.x - (textW / 2), this.y + (fontSize / 2));
        
        pop();

        this.area = [this.x - (bWidth / 2), this.y - (bHeight / 2), this.x + (bWidth/2), this.y + (bHeight/2)]
    }

    onMouseOver() {
        if (!this.disabled) {
            if (this.area !== undefined && mouseX >= this.area[0] && mouseX <= this.area[2] && mouseY >= this.area[1] && mouseY <= this.area[3]) {
                if (this.fillHover) {
                    this.fillColor = this.fillHover;
                }
    
                if (this.fontHover) {
                    this.fontColor = this.fontHover
                }
            }
            else {
                this.fillColor = this.fillColorDefault;
                this.fontColor = this.fontColorDefault;
            }
        }
    }

    onMouseClick(callback) {
        if (!this.disabled && this.area !== undefined && mouseX >= this.area[0] && mouseX <= this.area[2] && mouseY >= this.area[1] && mouseY <= this.area[3]) {
            callback();
        }
    }

    disable() {
        this.disabled = true;
    }

    enable() {
        this.disabled = false;
    }
}
