'use strict';
// const getFormFields = require(`../../../lib/get-form-fields`);

const api_game = require('./api_game');
const ui_game = require('./ui_game');
const ticStore = require('../tictacstore');

const onIndex = function (event) {
  event.preventDefault();
  api_game.index()
  .then(ui_game.success)
  .catch(ui_game.failure);
};

const onCreateGame = function (event) {
  event.preventDefault();
  api_game.createGame()
  .then ((response) =>{
   ticStore.game = response.game;
   return ticStore.game;
 })
 .then(ui_game.success)
 .catch(ui_game.failure);
 };

// const onShowGame = function (event) {
//   event.preventDefault();
//   // let id = parseInt($('#game-id').val());
//   api_game.showGame(id)
//   .then(ui_game.success)
//   .catch(ui_game.failure);
// };

const onUpdateGame = function (event) {
  event.preventDefault();
  api_game.index()
  .then((response) => {
    ticStore.games = response.games;
    $('#showGames').text('You killed time '+ ticStore.games.length + ' times!');
    return ticStore.games.length;
  })
  .then(ui_game.success)
  .catch(ui_game.failure);
};

const gameHandlers = function () {
  $('#getGames').on('click', onIndex);
  $('#reset ').on('click', onCreateGame);
  $('#getGames').on('click', onUpdateGame);
};
module.exports = {
  gameHandlers,
  onIndex,
  onUpdateGame,
  // onShowGame,
};
