// var weaponlist=["AK-47", "Gun", "Machete", "Knife"];
// var countries = ["Korea", "Japan","Greece", "Colombia"];
//
// var soldier = {
//   name: "Nicolas",
//   weapon: weaponlist[2],
//   country: countries[3],
//   isDead: false,
//   shoot: function(){
//     console.log("Pew pew pew");
//     },
//   sayHi: function(sargent){
//     console.log(" Hello " + sargent + " my name is " + this.name );
//     }
// };

// var age = prompt("How old are you?");
//
// if (age<18){
//   console.log("You can't drink");
// } else if (age>18 && age<45){
//   console.log("You are and adult");
// } else {
//   console.log("you are getting old");
// }
// }
//
//
//
//
//
//
//
//
//
// function multiply(chicken, potato){
//   return chicken*potato;
// }
// function division(lala, lolo){
//   return lala / lolo;
// }



$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function() {
      $(this).toggleClass("fa-heart-o");
      $(this).toggleClass("fa-heart heart-click");
  });

  var $comment = $(".comment");
  $comment.click(function() {
      $(this).toggleClass("fa-comment-o");
      $(this).toggleClass("fa-comment comment-click");
  });
});
