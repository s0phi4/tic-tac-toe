'use strict';
const getFormFields = require(`../../../lib/get-form-fields`);
const api_game = require('./api_game');
const ui_game = require('./ui_game');
// const store = require('../store');

const onGetGames = function (event) {
  event.preventDefault();
  api_game.index()
  .then(ui_game.success)
  .catch(ui_game.failure);
};

const onCreateGame = function (event) {
  event.preventDefault();
  let gameData = getFormFields (event.target);
  api_game.createGame(gameData)
  .then(ui_game.success)
  .catch(ui_game.failure);
};

const onUpdateGame = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api_game.updateGame(data)
  .then(ui_game.success)
  .catch(ui_game.failure);
};


// const onShowGame = function (event) {
//   event.preventDefault();
//
// };

const gameHandlers = function () {
  $('#getGame').on('click', onGetGames);
  $('#reset ').on('click', onCreateGame);


};
module.exports = {
  gameHandlers,
  onUpdateGame,
};
