// write your tree code here. use a constructor function!
FRUIT_BEARING_AGE = 3;
MAX_AGE = 100;

function Tree() {
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
}

//This can also be:
var Tree = function() {
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
};

Tree.prototype.grow = function() {
  this.age += 1;
  this.height += 10;

  if (this.age >= FRUIT_BEARING_AGE) {
    this.orangeCount += Math.floor(Math.random()*10);
  }
  if (this.age > MAX_AGE) {
    this.isAlive = false;
  }
};

Tree.prototype.dropOrange = function () {
  if ((this.age >= FRUIT_BEARING_AGE) && this.isAlive) {
    this.orangeCount -= Math.floor(Math.random()*10);
    return this.orangeCount;
  }
};

function Orange() {
  this.diameter = Math.floor(Math.random()*10);
}

Tree.prototype.pickOrange = function () {

  return new Orange();
};
