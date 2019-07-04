// due parole, stampa prima più corta, poi più lunga
var parola1, parola2;

parola1 = prompt("inserisci parola");
parola2 = prompt("inserisci seconda parola");



if (parola1.length <= parola2.lenght){
  console.log(parola1);
  console.log(parola2);
} else {
  console.log(parola2);
  console.log(parola1);
}