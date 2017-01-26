'use strict';
// require('./assets/scripts/index.js');
// require('./assets/styles/index.scss');
const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
 setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

const authEvents = require('./auth/events.js');

// On document ready
$(() => {
 authEvents.addHandlers();


 let board = $('#board'),
     $squares = $('.sq'),
     $reset = $('#reset');
// 'x' Starts the game
let turn = "X";
let moves = 0;

// change turn function
let changeTurn = function() {
 if (turn === "X") {
   turn = "O";
 } else {
   turn = "X";
 }
};

// reset board
let resetGame = function() {
 // reset the board itself
 $squares.text('');
 $squares.removeClass("X")
 $squares.removeClass("O");

 turn = "X";
 moves = 0;
};

//Winning functions
let allThree = function(player, square1, square2, square3) {
  return ($(square1).text() === player) && ($(square2).text() === player) && ($(square3).text() === player);
};

// Wins - diagonals
let winsDiagonal = function(player) {
 return allThree(player, $squares.get(0), $squares.get(4), $squares.get(8)) ||
        allThree(player, $squares.get(2), $squares.get(4), $squares.get(6));
};

// Wins - columns
let winsColumn = function(player) {
 return allThree(player, $squares.get(0), $squares.get(3), $squares.get(6)) ||
        allThree(player, $squares.get(1), $squares.get(4), $squares.get(7)) ||
        allThree(player, $squares.get(2), $squares.get(5), $squares.get(8));
};

// Wins- rows
let winsRow = function(player) {
 return allThree(player, $squares.get(0), $squares.get(1), $squares.get(2)) ||
        allThree(player, $squares.get(3), $squares.get(4), $squares.get(5)) ||
        allThree(player, $squares.get(6), $squares.get(7), $squares.get(8));
};

let winnerIs = function(player) {
 return winsRow(player) || winsColumn(player) || winsDiagonal(player);
};

// check for winner
let getWinner = function() {
 if (winnerIs("X")) {
   return "X";
 }
 else if (winnerIs("O")) {
   return "O";
 }
 else {
   return null;
 }
};

$squares.on('click', function() {
 if ($(this).text() === "") {
   $(this).text(turn);
   $(this).addClass(turn);
   moves += 1;

   // check  winner
   let winner = getWinner();
   if (winner) {
     alert("Player " + winner + " won!");
     resetGame();
   } else if (moves < 9) {
     changeTurn();
   } else {
     alert("Neither player wins!");
     resetGame();
   }
 }
});
// listen for clicks on `reset` button to reset the board
$reset.on('click', function () {
 resetGame();
});

});



// const checkWins = function () {
//   if( board[0]=== player1 && board[1]=== player1 && board[2]=== player1 ||
//       board[3]=== player1 && board[4]=== player1 && board[5]=== player1 ||
//       board[6]=== player1 && board[7]=== player1 && board[8]=== player1 ||
//       board[0]=== player1 && board[4]=== player1 && board[8]=== player1 ||
//       board[2]=== player1 && board[4]=== player1 && board[6]=== player1 ||
//       board[0]=== player1 && board[3]=== player1 && board[6]=== player1 ||
//       board[1]=== player1 && board[4]=== player1 && board[7]=== player1 ||
//       board[2]=== player1 && board[5]=== player1 && board[8]=== player1){
//  $('win').text('x wins');
//  } else if (
//    board[0]=== player1 &&
//        board[1]=== player2 &&
//        board[2]=== player2 ||
//        board[3]=== player2 &&
//        board[4]=== player2 &&
//        board[5]=== player2 ||
//        board[6]=== player2 &&
//        board[7]=== player2 &&
//        board[8]=== player2 ||
//        board[0]=== player2 &&
//        board[4]=== player2 &&
//        board[8]=== player2 ||
//        board[2]=== player2 &&
//        board[4]=== player2 &&
//        board[6]=== player2 ||
//        board[0]=== player2 &&
//        board[3]=== player2 &&
//        board[6]=== player2 ||
//        board[1]=== player2 &&
//        board[4]=== player2 &&
//        board[7]=== player2 ||
//        board[2]=== player2 &&
//        board[5]=== player2 &&
//        board[8]=== player2) {
//     $('win').text('o wins');
//  } else {
//    console.log("it is a tie");
//  }

//
// let currentPlayer = player1;
// const movesAgain = function(){
//   if(currentPlayer === player1){
//     currentPlayer = player2;
//   } else if (currentPlayer === player2){
//     currentPlayer = player1;
//   } else {
//     return currentPlayer;
//   }
// };

// // Defining the players- Global Scope
// let shot = 'X';
// let computerShot = 'O';
// //Array with options-Global Scope
// let shots = ["#", "#", "#", "#", "#", "#", "#", "#", "#" ];
// //
// let gameStart = false;
// let count = 0;
//
// function reset(){
//   shots = ["#", "#", "#", "#", "#", "#", "#", "#", "#" ];
//   count = 0;
//   $('.sq').text("#");
//   gameStart = false;
// }
// //Switching shots(opportunities)
// $('#X').onclick(function(){
//   shot = 'O';
//   computerShot = 'X';
//   $('#X').removeClass('btn-primary');
//   $('#O').addClass('btn-primary');
//   reset();
// });
//
// $('#O').onclick(function() {
//   shot = 'X';
//   computerShot = 'O';
//   $('#O').removeClass('btn-secondary');
//   $('#X').addClass('btn-secondary');
//   reset();
// });
//
// function compStep() {
//   let unavailable = false;
//   while(unavailable === false && count!== 7){
//     let computersShot = (Math.random()*10).toFixed();
//     let step = $(# + computersShot).text();
//     if (step === '#'){
//       $('#' + computersShot).text(compStep);
//       unavailable = true;
//       shots[computersShot] = compStep;
//     }
//   }
// }
//
// function playerShot(shot, id) {
//   let sqUnavailable = $('# + id').text();
//   if (sqUnavailable === '#') {
//     count++;
//     shots[id] = shot;
//     $('#' + id).text(shot);
//     winRule(shots, shot);
//     if (gameStart === false) {
//       computerShot();
//       winRule (shots, computerShot);
//     }
//   }
// }
//
// function winRule(shotsArray, presentShot) {
//   if (shotsArray[0] === presentShot && shotsArray[1] === presentShot && shotsArray[2] === presentShot) {
//     gameStart = true;
//     reset();
//     console.log ("Contester " + presentShot + " killed it!");
//   } else if (shotsArray[3] === presentShot && shotsArray[4] === presentShot && shotsArray[5] === presentShot) {
//     gameStart = true;
//     reset();
//     console.log ("Contester " + presentShot + " killed it!");
//   } else if (shotsArray[6] === presentShot && shotsArray[7] === presentShot && shotsArray[8] === presentShot) {
//   gameStart = true;
//   reset();
//   console.log ("Contester " + presentShot + " killed it!");
// } else if (shotsArray[0] === presentShot && shotsArray[4] === presentShot && shotsArray[8] === presentShot) {
//   gameStart = true;
//   reset();
//   console.log ("Contester " + presentShot + " killed it!");
// } else if (shotsArray[2] === presentShot && shotsArray[4] === presentShot && shotsArray[6] === presentShot) {
//   gameStart = true;
//   reset();
//   console.log ("Contester " + presentShot + " killed it!");
// } else {
//   gameStart = false;
// }
// $('.sq').onclick(function(){
//   let sthg = $(this).attr('id');
//   playerShot (shot,square )
// });
