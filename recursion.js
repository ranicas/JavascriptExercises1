var range = function(startNum, endNum) {
  var numArray = []
  if (startNum > endNum) {
    return numArray; 
  } else {
    return [startNum].concat(range(startNum + 1, endNum));
  }
}
//
// var exp = function(base, pow){
//   if (pow === 0 || pow === 1){
//     return base;
//   } else {
//     return base * exp(base, pow - 1);
//   }
// }

var exp = function(base, pow){
  if (pow === 0){
    return 1;
  } else if (pow === 1){
    return base;    
  } else if (pow % 2 === 0){
    num = exp(base, pow / 2);
    return num * num;
  } else {
    pow -= 1;
    num = exp(base, pow / 2);
    return base * num * num;
  }  
}

var fib = function(num) {
  var fibArray = [];
  
  if(num <= 2){
    return [0, 1].slice(0, num);
  } else {
    var lastFib = fib(num - 1);
    lastFib.push(lastFib.slice(-1)[0] + lastFib.slice(-2)[0]);
    return lastFib;
  }
}

var bsearch = function(array, target){
  var length = array.length;
  var midpoint = Math.floor(length / 2);
  
  if (length === 0) {
    return "BAD ARRAY";
  } else if (length === 1 && array[0] !== target) {
    return null;
  } else if (array[midpoint] === target) {
    return midpoint;
  } else if (array[midpoint] > target) {
    return bsearch(array.slice(0, midpoint), target);
  } else {
    var next_search = bsearch(array.slice(midpoint, length), target);
    
    if (next_search === null){
      return null;
    } else {
      return midpoint + next_search;
    }
  }
}

var subsets = function(array){    
  if ( array.length === 0){
    return [[]];
  } else {
    last_sub = subsets(array.slice(0, array.length- 1));
    return last_sub.concat(
      last_sub.map(function(el){
        return el.concat(array.slice(-1));
      });
    );
  }
}