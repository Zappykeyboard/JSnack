// inserisci 2 numeri, spampa il maggiore
var label = document.getElementById("label");
var num1, num2;

num1= parseInt(prompt("inserisci il primo numero"));
num2= parseInt(prompt("inserisci il secondo numero"));


if (num1 === num2){
  label.innerHTML = "i numeri sono uguali";
} else if (num1 > num2){
  label.innerHTML = "il primo numero è più grande";
} else{
  label.innerHTML = "il secondo numero è più grande";

}