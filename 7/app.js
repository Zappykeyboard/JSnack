//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
var nomi = [
  "Edoardo",
  "Marco",
  "Lucia",
  "Mariella",
  "Sergio",
  "Giovanni",
];

var cognomi = [
  "D'Ambrosio",
  "Rossi",
  "Verdi",
  "Esposito",
  "Mattarella",
  "Sergi"
];

function generaLista(arrNomi, arrCognomi) {
  var listaFasulla = [];
  for (var i = 0; i < 11; i++) {
    var nome = arrNomi[Math.floor(Math.random() * (arrNomi.length))];
    var cognome = arrCognomi[Math.floor(Math.random() * (arrCognomi.length))];
    var nomeFasullo = nome + " " + cognome;
    if (listaFasulla.includes(nomeFasullo)) {
      console.log("Nome doppione!");
      i--
    } else {
      listaFasulla.push(nome + " " + cognome);
    }
  }
  return listaFasulla;
}

console.log(generaLista(nomi, cognomi));