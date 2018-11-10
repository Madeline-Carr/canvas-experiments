var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
/*
c.fillStyle = "rgba(255, 140, 250 ,0.5)";
c.fillRect(300, 30, 100, 100);
c.fillStyle = "rgba(155, 140, 150 ,0.5)";
c.fillRect(400, 30, 100, 100);
//c.fillRect(550, 100, 100, 100);
//c.fillRect(200, 400, 400, 300);
console.log(canvas);

//Lines
c.beginPath();
c.moveTo(50, 300);
c.lineTo(100, 500);
c.lineTo(400, 800);
c.strokeStyle = "#333";
c.stroke();


//Arcs and Circles
c.beginPath();
c.strokeStyle = "aliceblue";
c.arc(300, 400, 30, 0, Math.PI * 2, false);
c.stroke();

//Making many circles
for (let i = 0; i < 50; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.strokeStyle = "aliceblue";
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.stroke();
}

//Chalk line
var x = 200;
function animate() {
  requestAnimationFrame(animate);
  c.beginPath();
  c.strokeStyle = "aliceblue";
  c.arc(x, 400, 30, 0, Math.PI * 2, false);
  c.stroke();
  x += 2;
}
animate();

//Adding circle movement
var x = 200;
var dx = 1;
var y = 200;
var dy = 4;
var radius = 30;
function animate() {
  c.clearRect(0, 0, innerWidth, innerHeight);
  requestAnimationFrame(animate);
  c.beginPath();
  c.strokeStyle = "aliceblue";
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.stroke();
  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}
animate();

//Adding circle movement in diffrent directions and speeds
var x = Math.random() * innerWidth;
var dx = (Math.random() - 0.5) * 9;
var y = Math.random() * innerHeight;
var dy = (Math.random() - 0.5) * 9;
var radius = 30;
function animate() {
  c.clearRect(0, 0, innerWidth, innerHeight);
  requestAnimationFrame(animate);
  c.beginPath();
  c.strokeStyle = "aliceblue";
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.stroke();
  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}
animate();

//Object Circles

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.draw = function() {
    c.beginPath();
    c.strokeStyle = "aliceblue";
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.stroke();
  };
  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

var circleArray = [];

for (let i = 0; i < 100; i++) {
  var radius = 30;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 9;
  var y = Math.random() * innerHeight;
  var dy = (Math.random() - 0.5) * 9;
  circleArray.push(new Circle(x, y, dx, dy, radius));
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


//My experimentation: I added fill colors and the radius is randomly generated.

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
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
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
*/
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
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
      this.color = "white";
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
