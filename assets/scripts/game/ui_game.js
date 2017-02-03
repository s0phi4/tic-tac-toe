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

const successShowPlease = (data) => {
  if (data) {
  $('#reset').on('click'),function() {
     $('#board').show();
     $('.top').hide();
    }
  }
};

module.exports = {
  failure,
  success,
  showGamesTotal,
  successShowPlease,
};
