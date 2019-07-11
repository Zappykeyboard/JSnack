//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
var arr1 = [1, "due", 3, 4, 5, 7, 8, 9, 10];
var arr2 = [6, 7, 8, 9, 10, 11, 12];

//determina il l'array più piccolo
function getSmaller(arr1, arr2){
  if (arr1.length < arr2.length){
    return arr1;
  } else{
    return arr2;
  }
}

function getBigger(arr1, arr2){
  if (arr1.length > arr2.length){
    return arr1;
  } else{
    return arr2;
  }
}

console.log(getSmaller(arr1, arr2));
console.log(getBigger(arr1, arr2));

if (arr1.length !== arr2.length){
  var small = getSmaller(arr1, arr2);
  var big = getBigger(arr1, arr2);
  var difference =big.length - small.length;
  console.log("Dimensione degli array: ", small.length,big.length);

  for (var i = 1; i <= difference; i++){
    small.push("nuovo elemento");
  }

  console.log(small);
  console.log("Dimensione degli array: ", small.length,big.length);
}