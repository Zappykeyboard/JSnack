//Crea un array vuoto. chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array

var array = [];
var num;

for (var i = 1; i < 7; i++){
  num = parseInt(prompt("inserisci un numero"));

  if (num % 2 !== 0){
    array.push(num);
  }
}

console.log(array);