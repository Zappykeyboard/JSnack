//Creare due div; uno conterrà numeri dispari di colore rosso e l’altro conterrà numeri pari in verde. Ad ogni click di un bottone chiedere all’API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.

$(document).ready(function () {

  var url = "https://flynn.boolean.careers/exercises/api/random/int";

  var source = $("#template").html();
  var template = Handlebars.compile(source);


  $("#button").click(function () {
    $.ajax({
      url: url,
      method: "GET",
      success: function (data) {

        if (data.success) {
          myNum = data.response;
          var context = { num: myNum };
          var html = template(context);

          if (myNum % 2 === 0) {
            $("#pari").append(html);
          } else {
            $("#dispari").append(html);
          }
        }

      },
      error: function (req, state, err) {
        alert("Qualcosa è andato storto");
        console.log(err);
      }

    })
  })





});