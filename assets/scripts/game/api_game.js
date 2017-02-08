'use strict';
const config = require('../config');
const store = require('../store');

//get games
const index = function () {
  return $.ajax( {
    url:config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    }
  });
};
//create game
const createGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data
  });
};

const showGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    }
  });
};
//Update
const updateGame = function( index, currentPlayer,status) {
  return $.ajax ({
    url: `${config.apiOrigin}/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
      game: {
        cell: {
          index: index,
          value: currentPlayer
        },
        over: status
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
