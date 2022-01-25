particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  for (let i = 0; i < 100; i++) {
    particles.push(new particle(10, 140,(-width/3) + i * 6, i / 50));
  }

  fill(255);
  stroke(255,200,0);
  strokeWeight(2);
}

function draw() {
  background(0,0,115);

  push();
  rotateX(60);
  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
  }
  pop();
}
class particle {
  constructor(v, s, z, r) {
      this.v = v;
      this.s = s;
      this.z = z;

      this.r = r;
      this.speed = 0.008;

      this.a = 1;
      this.speedA = 0.008;
  }

  display() {
      this.r += this.speed;
      push();
      rotateZ(noise(this.r) * 180);
      beginShape();
      for (let i = 0; i < 360; i += 360 / this.v) {
          var x = cos(i) * this.s;
          var y = sin(i) * this.s;
          vertex(x, y, this.z);
      }
      endShape(CLOSE);
      pop();
  }

  move() {
      this.a += this.speedA;
      this.v =  6 + noise(this.a) * 3;
  }
}
