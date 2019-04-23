class Blocker {
  constructor() {
    this.top = random(height / 2);
    this.bottom = random(height / 2);
    this.x = width;
    this.blockerWidth = 20;
    this.speed = 5;

    this.show = () => {
      fill(255);
      rect(this.x, 0, this.blockerWidth, this.top);
      rect(this.x, height - this.bottom, this.blockerWidth, this.bottom);
    };

    this.update = () => {
      this.x -= this.speed;
    };
    this.offscreen = () => {
      return this.x < -this.blockerWidth;
    };
    this.collide = item => {
      if (item.x > this.x && item.x < this.x + this.blockerWidth) {
        if (item.y < this.top || item.y > height - this.bottom) {
          return true;
        }
      }
      return false;
    }
  }
}
