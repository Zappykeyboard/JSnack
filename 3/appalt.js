/* Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while
 */

 //versione senza array di appoggio

 var sum = 0;
 var num;

//versione for loop
/* for (var i = 0; i <5; i++){
  num = parseInt(prompt("scegli un numero"));
  sum = sum + num;
}
 */

//versione while
var i = 0;
while (i < 5){
  num = parseInt(prompt("scegli un numero"));
  sum = sum + num;
  i++
}

console.log("somma: " + sum);