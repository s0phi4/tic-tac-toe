'use strict';
const config = require('../config');
const store = require('../store');
const ticStore = require('../tictacstore');

//get games
const index = function () {
  return $.ajax( {
    url:config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};
//create game
const createGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const showGame = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};
//Update
const updateGame = function(index, currentPlayer, over) {
  return $.ajax ({
    url: config.apiOrigin + '/games/' + ticStore.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
      "game": {
        "cell": {
          "index": index,
          "value": currentPlayer,
        },
        "over": over,
      }
    }
  });
};

module.exports = {
  index,
  createGame,
  showGame,
  updateGame,
};
