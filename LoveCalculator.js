function loveCalculator(){
 var yourName = prompt("Your Name");
 var otherName = prompt("His/Her name");
  var random = Math.random()*100;
  random = Math.floor(random)+1;

  if(random > 70){
    alert (yourName + " and " + otherName + " has a love percentage of = " + random + "% : You love each other like juliet and romeo");
  }
   if(random > 30 && random <= 70){
    alert (yourName + " and " + otherName + " has a love percentage of = " + random + "% : You two get going");
    }
   if(random <= 30){
    alert (yourName + " and " + otherName + " has a love percentage of = " + random + "%");
 }
}

loveCalculator();
