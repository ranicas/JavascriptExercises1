

var doubleArray = function(array){
  
  for(i = 0; i < array.length; i++){
    array[i] = array[i] * 2;
  }
  
  return array;
}

Array.prototype.myEach = function(newFunction){
  
  for(i = 0; i < this.length; i++){
    newFunction(this[i]);
  }

}
//
// Array.prototype.myMap0 = function(newFunction){
//   var newArray = this;
//   for(i = 0; i < newArray.length; i++){
//     newArray[i] = newFunction(newArray[i]);
//   }
//
//   return newArray;
// }

Array.prototype.myMap = function(newFunction){
  var newArray = [];
  
  // var buildNewArray = function(el) {
  //   newArray.push(newFunction(el))
  // }
  //
  // this.myEach(buildNewArray)
  
  this.myEach(function (el) {
    newArray.push(newFunction(el))
  })
  return newArray;
}

Array.prototype.myInject = function(newFunction){
  var accumulator = this[0]

  restArray = this.slice(1)

  restArray.myEach(function (el){
    accumulator = newFunction(accumulator, el); 
  })
  
  return accumulator;
}

var adder = function(array){
  return array.myInject(function(accum, el){
    return accum + el;
  })  
  
  
}

var double2 = function(array){
  var double = function(element) {
    return element * 2;
  }
  console.log(array.myMap(double));
}



