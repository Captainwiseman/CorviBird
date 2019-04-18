class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 60;

    this.gravity = 0.2;
    this.velocity = 0;
    this.flappines = -10

    this.show = () => {
      fill(255);
      ellipse(this.x, this.y, 32, 32);
    };
    this.update = () => {
      this.velocity += this.gravity;
      this.velocity *= 0.9;
      this.y += this.velocity;
      this.crashTestTopAndBottom();
    };

    this.flap = () => {
      this.velocity += this.flappines;
      console.log(this.velocity)
    }
    this.wha = () => {
      
    }
    this.crashTestTopAndBottom = () => {
      if (this.y > height) {
        this.y = height;
        this.velocity = 0;
      }
      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
      }
    };
  }
}
