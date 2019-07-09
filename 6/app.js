//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

function printNum() {
  var n = parseInt(prompt("inserisci un numero"));

  if (n % 2 === 0) {
    console.log(n);
  } else {
    console.log(n + 1);
  }
}

printNum();