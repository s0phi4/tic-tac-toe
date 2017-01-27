'use strict';
const config = require('../config');
const store = require('../store');
//get game
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
  console.log('game is', index);
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};
//Show Game
const showGame = function (id) {
return $.ajax ({
  url:config.apiOrigin + '/games/:id' + id,
  method: 'GET',
  headers: {
    Authorization: `Token token=${store.user.token}`,
  },
});
};

const updateGame = function(data) {
  return $.ajax ({
    url: config.apiOrigin + '/games/:id',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

module.exports = {
  index,
  createGame,
  showGame,
  updateGame,
};
