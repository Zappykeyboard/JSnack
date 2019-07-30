//Chiedere all’API 10 nomi da inserire in un array di invitati.
//Una volta generata la lista chiedere all’utente di dire il proprio nome. Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato
$(document).ready(function () {

  var url = "https://flynn.boolean.careers/exercises/api/random/name";
  var list = [];
  var name = prompt("inserisci il nome da controllare");

  for (var i = 0; i < 10; i++) {
    $.ajax({
      url: url,
      method: "GET",
      success: function (data) {

        if (data.success) {
          list.push(data.response);



          if (list.length === 10) {
            console.log(list);
            if (list.includes(name)) {
              alert("benvenuto!")
            } else {
              alert("non sei invitato")
            }
          }
        }



      },
      error: function (req, state, err) {
        alert("Qualcosa è andato storto");
        console.log(err);
      }

    });

  }








});