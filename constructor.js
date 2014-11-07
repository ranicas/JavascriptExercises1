function Kitten(catName, owner) {
  this.catName = catName;
  this.owner = owner;
}

Kitten.prototype.cuteStatement = function(){
  console.log(this.owner + " loves " + this.catName); 
};

var markov = new Kitten("Markov", "Ned");
var breakfast = new Kitten("Breakfast", "Ned");
var sprite = new Kitten("Sprite", "Somebody");

Kitten.prototype.cuteStatement = function(){
  console.log("Everyone loves " + this.catName + "!"); 
};

Kitten.prototype.meow = function(){
  console.log("meow");  
}

markov.meow = function(){
  console.log("MEOW IM ANGRY");  
}

