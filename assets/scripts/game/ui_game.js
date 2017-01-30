'use strict';

const success = (data) => {
  if (data) {
  console.log(data);}
};

const failure = (error) => {
  console.error(error);
};

const showGamesTotal = (data) => {
$('h2').text('You killed time '+ data.games.length + ' times!');
};

module.exports = {
  failure,
  success,
  showGamesTotal,
};
