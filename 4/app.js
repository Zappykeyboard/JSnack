/* JSnack #4:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */


var lista = [
  "Edoardo",
  "Giuseppe",
  "Maria",
  "Giacomo",
  "Giovanni",
  "Marco"
]

var mioNome = prompt("Inserisci il tuo nome");
console.log(mioNome);

var invitato = false;

for (var i = 0; i < lista.length; i++){
    if (lista[i.toLowerCase] === mioNome.toLowerCase){
    invitato = true;
  } 
}

console.log(invitato);

if (invitato){
  console.log("sei invitato!");
} else {
  console.log("non sei invitato!");
}