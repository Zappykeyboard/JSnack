// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
var numArray = [ 9, 8, 7, 6, 5, 4, 3, 2];

function sumOddNums(arr){
  var sum = 0;

  for (var i = 0; i < arr.length; i++){
    
    if (i%2 !== 0){
      console.log("posizione: "+ i, "valore: " + arr[i]);
      sum += arr[i];
    }

  }

  return sum;
}

console.log(sumOddNums(numArray));