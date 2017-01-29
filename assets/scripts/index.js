'use strict';

// const getFormFields = require('../../lib/get-form-fields');

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');


$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
const authEvents = require('./auth/events.js');
const events_game = require('./game/events_game.js');
// use require without a reference to ensure a file is bundled
require('./example');



// On document ready
$(() => {
  authEvents.addHandlers();
  events_game.gameHandlers();

//Hides play section
 $('.play').hide();

 //After sign up-Hide sign up box
 $('.su').on('click', function() {
   $('.next').text('Great! Now exit this box, sign in and kill some time!');
 });
 //After sign in click-submit-> Show play section
 $('.signInNow').on ('click',function (){
    $('.play').show();
    $('.top').hide();
  });

 //After sign out click-> Hide play section
 $('.out').on ('click', function (){
   $('.play').hide();
   $('.top').show();
 });

});

//Game Logic starts here
//Declaring variables for board, and players
const board = ['','','','','','','','',''];
let player1 = 'X';
let player2 = 'O';
let currentPlayer = player1;
//Declaring a variable using jquery-referencing sq class from index.html to interact with browser
let squares = $('.sq');
// Turns function
let turns = function(index) {
  if (board[index] === '') {
    board[index]= currentPlayer;
  } if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
  currentPlayer = 'X';
}
};
//Reset function that returns empty board and empty message after game played
const resetGame = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    $('.sq').text('');
    $('.message').text ('');
  }
};
//Winning function- winning sets for X and O + draw
const checkWinning = function () {
  if(
      board[0]=== player1 && board[1]=== player1 && board[2]=== player1 ||
      board[3]=== player1 && board[4]=== player1 && board[5]=== player1 ||
      board[6]=== player1 && board[7]=== player1 && board[8]=== player1 ||
      board[0]=== player1 && board[4]=== player1 && board[8]=== player1 ||
      board[2]=== player1 && board[4]=== player1 && board[6]=== player1 ||
      board[0]=== player1 && board[3]=== player1 && board[6]=== player1 ||
      board[1]=== player1 && board[4]=== player1 && board[7]=== player1 ||
      board[2]=== player1 && board[5]=== player1 && board[8]=== player1) {

 $('.message').text ('X is the winner!');
 return true;
 } else if (
       board[0]=== player2 && board[1]=== player2 && board[2]=== player2 ||
       board[3]=== player2 && board[4]=== player2 && board[5]=== player2 ||
       board[6]=== player2 && board[7]=== player2 && board[8]=== player2 ||
       board[0]=== player2 && board[4]=== player2 && board[8]=== player2 ||
       board[2]=== player2 && board[4]=== player2 && board[6]=== player2 ||
       board[0]=== player2 && board[3]=== player2 && board[6]=== player2 ||
       board[1]=== player2 && board[4]=== player2 && board[7]=== player2 ||
       board[2]=== player2 && board[5]=== player2 && board[8]=== player2) {

  $('.message').text ('O is the winner!');
  return true;
} else if (board.includes ('') === false) {

   $('.message').text ('It is a draw!');
  }
 };
//Disable click function
 let dontClick = function (checkWinning) {
   if (checkWinning === true) {
     $(".sq").off('click');
   }
 };
 //Enable click function
 squares.on ('click', function (event) {
   if ($(event.target).text() === '') {
     let idNumber = (event.target.id);
     $(event.target).text(currentPlayer);
   turns (idNumber);
   checkWinning();
   dontClick(checkWinning());
   }
    // console.log(board);
 });
//reset button function to start new game
 $('#reset').on('click', function(){
   resetGame();
   squares.on ('click', function (event) {
     if ($(event.target).text() === '') {
       let idNumber = (event.target.id);
       $(event.target).text(currentPlayer);
     turns (idNumber);
     checkWinning();
     dontClick(checkWinning());
     }
      // console.log(board);
   });
 });

 module.exports ={ board,
   turns,
   resetGame,
   checkWinning,
   dontClick,
 };
