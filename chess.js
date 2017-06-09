$(document).ready(function(){
//Board
var board = $('.container');
var color;
function makeSquare(color) {
  board.append('<div class="square ' + color +'" ></div>');
}

function chooseColor(num) {
   row = Math.floor(num/ 8);
   color = "";
  if (row % 2 === 0) {
    if (num % 2 === 0) {
      color = "brown";
    }
    else {
      color = "tan";
    }
  }
  else {
    if (num % 2 === 0) {
      color = "tan";
    }
    else {
      color = "brown";
    }
  }


  return color;
}
for (var i = 0; i < 64; i++) {
  color = chooseColor(i);
  makeSquare(color)
}
//Tiles Position
var rook1 = 1;
var rook2 = 8;
var king = 4;
var queen = 5;
var knight1 = 2;
var knight2 = 7;
var bishop1 = 3;
var bishop2 = 6;
//FischerRandom
function kingPosition () {
   king = Math.ceil(Math.random()*6)+1;
};
kingPosition();
function rook1Position (){
    rook1 = Math.ceil(Math.random()*(king-1));
};
rook1Position();
function rook2Position (){
    rook2 = Math.ceil(Math.random()*(8-king))+(king);
};
rook2Position();
function bishop1Position () {
    bishop1 = Math.floor(Math.random()*4)*2+1;
    if (bishop1 == rook1 || bishop1 == rook2 || bishop1 == king) {
    bishop1Position ();
    }
    else {}
}
bishop1Position ();
function bishop2Position () {
    bishop2 = Math.ceil(Math.random()*4)*2;
    if (bishop2 == rook1 || bishop2 == rook2 || bishop2 == king) {
    bishop2Position ();
    }
    else {}
}
bishop2Position ();
function knight1Position () {
 knight1 = Math.ceil(Math.random()*8);
 if (knight1 == rook1 || knight1 == rook2 || knight1 == king || knight1 == bishop2 || knight1 == bishop1) {
 knight1Position ();
 }
 else {}
}
knight1Position ();
function knight2Position () {
 knight2 = Math.ceil(Math.random()*8);
 if (knight2 == rook1 || knight2 == rook2 || knight2 == king || knight2 == bishop2 || knight2 == bishop1 || knight2 == knight1) {
 knight2Position ();
 }
 else {}
}
knight2Position ();
 function queenPosition () {
     queen = 36 -king -knight1 -knight2 -rook1 -rook2 -bishop1 -bishop2;
 }
queenPosition ();
//White pieces
$("div.bord > div:nth-child(n+9):nth-child(-n+16)").append('<span class="glyphicon glyphicon-pawn piece white" ></span>');
$("div.bord > div:nth-child("+ rook2 +")").append('<span class="glyphicon glyphicon-tower piece white" ></span>');
$("div.bord > div:nth-child("+ rook1 +")").append('<span class="glyphicon glyphicon-tower piece white" ></span>');
$("div.bord > div:nth-child("+ king +")").append('<span class="glyphicon glyphicon-king piece white" ></span>');
$("div.bord > div:nth-child("+ queen +")").append('<span class="glyphicon glyphicon-queen piece white" ></span>');
$("div.bord > div:nth-child("+ knight1 +")").append('<span class="glyphicon glyphicon-knight piece white" ></span>');
$("div.bord > div:nth-child("+ knight2 +")").append('<span class="glyphicon glyphicon-knight piece white" ></span>');
$("div.bord > div:nth-child("+ bishop1 +")").append('<span class="glyphicon glyphicon-bishop piece white" ></span>');
$("div.bord > div:nth-child("+ bishop2 +")").append('<span class="glyphicon glyphicon-bishop piece white" ></span>');
//Black Pieces
var rook1B = rook1 + 56;
var rook2B = rook2 + 56;
var kingB = king + 56;
var queenB = queen + 56;
var knight1B = knight1 + 56;
var knight2B = knight2+ 56;
var bishop1B = bishop1+ 56;
var bishop2B = bishop2 + 56;
$("div:nth-child(n+49):nth-child(-n+56)").append('<span class="glyphicon glyphicon-pawn piece" ></span>');
$("div:nth-child("+ rook2B +")").append('<span class="glyphicon glyphicon-tower piece" ></span>');
$("div:nth-child("+ rook1B +")").append('<span class="glyphicon glyphicon-tower piece" ></span>');
$("div:nth-child("+ kingB +")").append('<span class="glyphicon glyphicon-king piece" ></span>');
$("div:nth-child("+ queenB +")").append('<span class="glyphicon glyphicon-queen piece" ></span>');
$("div:nth-child("+ knight1B +")").append('<span class="glyphicon glyphicon-knight piece" ></span>');
$("div:nth-child("+ knight2B +")").append('<span class="glyphicon glyphicon-knight piece" ></span>');
$("div:nth-child("+ bishop1B +")").append('<span class="glyphicon glyphicon-bishop piece" ></span>');
$("div:nth-child("+ bishop2B +")").append('<span class="glyphicon glyphicon-bishop piece" ></span>');
//Temporal Randomizer
$(".randomize").click(function(){
    location.reload();
})
})
