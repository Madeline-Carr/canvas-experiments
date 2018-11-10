var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//My experimentation: The circles turn white when they hit the top or bottom walls and black when they hit the right or left.

function Circle(x, y, dx, dy, radius, chosenColor) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = chosenColor;
  this.draw = function() {
    c.beginPath();
    c.strokeStyle = this.color;
    c.fillStyle = this.color;
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.stroke();
    c.fill();
  };
  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
      this.color = "black";
      this.radius = this.radius / 1.2;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
      this.color = "white";
      this.radius = this.radius / 1.2;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

var circleArray = [];

for (let i = 0; i < 500; i++) {
  var radius = Math.floor(Math.random() * 30);
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 9;
  var y = Math.random() * innerHeight;
  var dy = (Math.random() - 0.5) * 9;
  var colors = ["#00ADB5", "#FFF4E0", "#393E46", "#F8B500", "#FC3C3C"];
  var colorNumber = Math.floor(Math.random() * 5);
  var chosenColor = colors[colorNumber];

  circleArray.push(new Circle(x, y, dx, dy, radius, chosenColor));
}
console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
