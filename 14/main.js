//Creare due div; uno conterrà numeri dispari di colore rosso e l’altro conterrà numeri pari in verde. Ad ogni click di un bottone chiedere all’API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.

$(document).ready(function () {

  var url = "https://flynn.boolean.careers/exercises/api/random/sentence";

  var source = $("#template").html();
  var template = Handlebars.compile(source);


  $("#send").click(function () {
    
    $("#the-chat").append(template({
      owner: "user",
      message: $("#input").val()
    }));

    $.ajax({
      url: url,
      method: "GET",
      success: function (data) {


        if (data.success) {
          var context = {
            owner: "contact",
            message: data.response
          }
          $("#the-chat").append(template(context)); 
        }

      },
      error: function (req, state, err) {
        alert("Qualcosa è andato storto");
        console.log(err);
      }

    })
  })





});