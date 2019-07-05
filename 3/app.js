/* Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while
 */
var array = [];

 for (var i = 0; i < 5; i++){
  var num = parseInt(prompt("inserisci un numero"));
  array.push(num);
}

console.log(array);

// variabile per conservare la somma
var sum = 0;

//versione con for loop;
/* for (var i = 0; i < array.length; i++){
  sum = sum + array[i];
} */

//versione con while
var i = 0;
while (i < array.length){
  sum = sum + array[i];
  i++
}

console.log("somma: " + sum);