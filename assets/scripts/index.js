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
const events_game = require('./game/events_game.js');

// On document ready
$(() => {
 authEvents.addHandlers();
 events_game.gameHandlers();




});

const board = ['','','','','','','','',''];

let player1 = 'X';
let player2 = 'O';
let currentPlayer = player1;

let squares = $('.sq');

let turns = function(index) {
  if (board[index] === '') {
    board[index]= currentPlayer;
  } if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
  currentPlayer = 'X';
}
};

// let reset = $('#reset');
const resetGame = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    $('.sq').text('');
    $('.message').text ('');
  }
};

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
 console.log('X wins');
 $('.message').text ('X is the winner!');

 } else if (
       board[0]=== player2 && board[1]=== player2 && board[2]=== player2 ||
       board[3]=== player2 && board[4]=== player2 && board[5]=== player2 ||
       board[6]=== player2 && board[7]=== player2 && board[8]=== player2 ||
       board[0]=== player2 && board[4]=== player2 && board[8]=== player2 ||
       board[2]=== player2 && board[4]=== player2 && board[6]=== player2 ||
       board[0]=== player2 && board[3]=== player2 && board[6]=== player2 ||
       board[1]=== player2 && board[4]=== player2 && board[7]=== player2 ||
       board[2]=== player2 && board[5]=== player2 && board[8]=== player2) {
  console.log ('O wins');
  $('.message').text ('O is the winner!');

} else if (board.includes ('') === false) {
   console.log ('Draw');
   $('.message').text ('It is a draw!');
  }
 };

 squares.on ('click', function (event) {
   if ($(event.target).text() === '') {
     let idNumber = (event.target.id);
     $(event.target).text(currentPlayer);
   turns (idNumber);
   checkWinning();
   }
 console.log(board);

 });

 $('#reset').on('click', function(){
   resetGame();
 });

 module.exports ={ board,
   turns,
   checkWinning,
   resetGame
 };
