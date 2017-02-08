'use strict';

// const getFormFields = require('../../lib/get-form-fields');

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const apiGame = require('./game/api_game');
// const store = require('./store');
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
 // $('.play').hide();

 // //After sign up-Hide sign up box
 // $('.su').on('click', function() {
 //  //  $('.next').text('Great! Now exit this box, sign in and kill some time!');
 // });
 //After sign in click-submit-> Show play section
 // $('.signInNow').on ('click',function (){
 //    $('.play').show();
 //    $('.top').hide();
  // });

 //After sign out click-> Hide play section
 // $('.out').on ('click', function (){
 //   $('.play').hide();
 //   $('.top').show();
 //  //  $('#getGames').on('click',onUpdateGame);
 // });

});

//Game Logic starts here
//Declaring variables for board, and players
const board = ['','','','','','','','',''];
// let player1 = 'X';
// let player2 = 'O';
let currentPlayer = "X";
//Declaring a variable using jquery-referencing sq class from index.html to interact with browser
let squares = $('.sq');
//Disable click function
 let dontClick = function () {
     $(".sq").off('click');
 };

//Winning function- winning sets for X and O + draw
const checkWinning = function () {
  if(
      board[0]=== "X" && board[1]=== "X" && board[2]=== "X" ||
      board[3]=== "X" && board[4]=== "X" && board[5]=== "X" ||
      board[6]=== "X" && board[7]=== "X" && board[8]=== "X" ||
      board[0]=== "X" && board[4]=== "X" && board[8]=== "X" ||
      board[2]=== "X" && board[4]=== "X" && board[6]=== "X" ||
      board[0]=== "X" && board[3]=== "X" && board[6]=== "X" ||
      board[1]=== "X" && board[4]=== "X" && board[7]=== "X" ||
      board[2]=== "X" && board[5]=== "X" && board[8]=== "X") {

 $('.message').text ('X is the winner!');
 dontClick();
 return true;
 } else if (
       board[0]=== "O" && board[1]=== "O" && board[2]=== "O" ||
       board[3]=== "O" && board[4]=== "O" && board[5]=== "O" ||
       board[6]=== "O" && board[7]=== "O" && board[8]=== "O" ||
       board[0]=== "O" && board[4]=== "O" && board[8]=== "O" ||
       board[2]=== "O" && board[4]=== "O" && board[6]=== "O" ||
       board[0]=== "O" && board[3]=== "O" && board[6]=== "O" ||
       board[1]=== "O" && board[4]=== "O" && board[7]=== "O" ||
       board[2]=== "O" && board[5]=== "O" && board[8]=== "O") {

  $('.message').text ('O is the winner!');
  dontClick();
  return true;
} else if (board.includes ('') === false) {
   $('.message').text ('It is a draw!');
   dontClick();
   return true;
  }
 };
let over = false;
 // Turns function
 let turns = function(index) {
   if (board[index] === '') {
     board[index]= currentPlayer;
     over = checkWinning();
     apiGame.updateGame(index, currentPlayer, over);
   if (currentPlayer === "X") {
     currentPlayer = "O";
   } else if (currentPlayer === "O"){
     currentPlayer = "X";
    }
  }
 };

   //Enable click function and turns
   let playGame = function (){
   squares.on ('click', function (event) {
     if ($(event.target).text() === '') {
       $(event.target).text(currentPlayer);
    }
     turns (parseInt(event.target.id));
    });
 };

 //Reset function that returns empty board and empty message after game played
 const resetGame = function () {
   for (let i = 0; i < board.length; i++) {
     board[i] = '';
     $('.sq').text('');
     $('.message').text ('');
     currentPlayer = 'X';
   } playGame();
 };
 $('#reset').on('click', function() {
   resetGame();
 });





 module.exports ={ board,
   checkWinning,
   turns,
   dontClick,
   playGame,
   resetGame,

 };
