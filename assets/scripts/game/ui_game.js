'use strict';

const successCreateGame = () => {
  $('#board').show();
  $('h2').hide();
};

const showGamesTotal = (data) => {
$('h2').show();
$('h2').text('You killed time '+ data.games.length + ' times!');
};



module.exports = {
  showGamesTotal,
  successCreateGame,
};
