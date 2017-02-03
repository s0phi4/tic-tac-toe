 'use strict';

const successSignUp = (data) => {
if (data) {
  $('.next').text('Great! Now exit this box, sign in and kill some time!');
  }
};

const failureSignUp = (error) => {
if (error) {
  $('.next').text('Nope, you used this account already, try with a different account!');
  }
};

const successSignIn = (data) => {
if (data) {
    $('.nextIn').text("Great! Let's kill some time!");
    $('#reset').show();
    $('#getGames').show();
  }
};

const failureSignIn = (error) => {
if (error) {
  $('.nextIn').text('Nope, please use the right email and password');
  }
};


module.exports = {
  failureSignUp,
  successSignUp,
  successSignIn,
  failureSignIn,
};
