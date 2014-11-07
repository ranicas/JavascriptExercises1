var bubbleSort = function(array){
  var length = array.length;
  var sorted = false;
  while (!sorted) {
    sorted = true;    
    for(i = 0; i < length - 1; i++){
      if (array[i] > array[i + 1]){
        value = array[i];
        array[i] = array[i + 1];
        array[i + 1] = value;      
        sorted = false;
      }
    }
  }
  return array
}

var substrings = function(string) {
  var subArray = [];
  var length = string.length
  
  for (i = 0; i < length; i++) {
    for (j = i + 1; j <= length; j++){
      if (subArray.indexOf(string.slice(i, j)) < 0) {
        subArray.push(string.slice(i, j))
      }
    }
  }
  
  return subArray;
}