var myUniq = function(array) { 
  
  var resultArray = []; 
    
  var checkPresence = function(element) {
    if (resultArray.indexOf(element) === -1) {
        resultArray.push(element);    
    }
  };
  
  array.forEach(checkPresence);
  
  console.log(resultArray);
};


var twoSum = function(array) {
  var length = array.length;
  var sumPair = []
  for (i = 0; i < length; i++ ){
    for ( j = i + 1; j < length; j++){
      if ( array[i] + array[j] === 0) {
        sumPair.push([i, j]);
      }
    };
  };
  console.log(sumPair);
};


var myTranspose = function(array) {
  
  var numRows = array.length;
  var numCols = array[0].length;
  
  var newRow = function(colIndex, array) {
    var rowArray = [];
    for (j = 0; j < numRows; j++){
      rowArray.push(array[j][colIndex]);
    }
    return rowArray;
  } 
  
  var transposedArray = []
  for (i=0; i < numCols; i++){
    transposedArray.push(newRow(i, array));
  }
  
  console.log(transposedArray);  
};

var stockPicker = function(array) {
  var length = array.length;
  var diff = 0;
  var dayPair = [];
  
  for (i = 0; i < length; i++ ){
    for (j = i + 1; j < length; j++){
      if (array[j] - array[i] > diff){
        dayPair = [i, j];
        diff = array[j] - array[i];
      }  
    }
  };
  
  console.log(dayPair);
};
//
// var towerOfHanoi = function() {
//   var towers = [[1, 2, 3],[],[]];
//
//   var gameOver = function(towers) {
//     if(towers[1].length === 3 || towers[2].length === 3){
//       return true;
//     } else {
//       return false;
//     }
//   };
//
//   var validMove = function(towers) {
//     if (tower[toChoice].length === 0 ) {
//       return true;
//     } else if (towers[fromChoice][0] < towers[toChoice][0]){
//       return true;
//     } else {
//       return true;
//     }
//   };
//
//   while(!gameOver){
//     console.log(towers);
//     var fromChoice = prompt("Choose a tower to select from");
//     var toChoice = prompt("Choose a tower to move to");
//
//     if(validMove(towers)){
//
//
//     }
//
//   }
// }