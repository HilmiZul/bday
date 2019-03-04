class Ballon {
  constructor() {
    this.r = random(90, 150);
    this.pos = createVector(random(width), random(height, height + random(300, 700)));
    this.upStep = random(4, 6);
    this.red = random(100, 255);
    this.green = random(100, 255);
    this.blue = random(100, 255);
    this.lineLen = random(150, 250);
  }

  show() {
    // line
    push();
    stroke(255);
    strokeWeight(2);
    line(this.pos.x, this.pos.y + this.r / 2 + 10, this.pos.x, this.pos.y + this.lineLen);
    pop();

    push();
    // balloon
    fill(this.red, this.green, this.blue, 170);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r, this.r + 10);
    // balloon tie
    ellipse(this.pos.x, this.pos.y + this.r / 2 + 10, 10, 7);
    pop();
  }

  up() {
    this.pos.y -= this.upStep;
  }

  checkEdge() {
    if (this.pos.y < 0 + this.r / 2 + 5) {
      this.pos.y = 0 + this.r / 2 + 5;
    }
  }

  mouseHover() {
    if (this.pos.x + this.r / 2 > mouseX && this.pos.x - this.r / 2 < mouseX) {
      if (this.pos.y + this.r / 2 > mouseY && this.pos.y - this.r / 2 < mouseY) {
        return true;
      }
    } else {
      return false;
    }
  }
}