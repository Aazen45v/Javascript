function loveCalculator(){
 var yourName = prompt("Your Name");
 var otherName = prompt("His/Her name");
  var random = Math.random()*100;
  random = Math.floor(random)+1;
  alert (yourName + "and" + otherName + "has a love percentage of = " + random + "%");
}

loveCalculator();
