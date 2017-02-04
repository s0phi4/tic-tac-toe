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

const successSignIn = () => {
    $('.nextIn').text("Great! Let's kill some time!");
    $('#sign-up').val('');
    $('#sign-in').val('');
    // $('.play').hide();
    // $('#sign-up').hide();
    // $('#sign-in').hide();
    $('#reset').show();
    $('#getGames').show();
    // $('#change-password').show();
    $('#sign-out').show();
  };

const failureSignIn = (error) => {
if (error) {
  $('.nextIn').text('Nope, please use the right email and password');
  }
};

const successSignOut = () => {
    $('.out').on ('click', function (){
      $('.play').hide();
      $('.top').show();
     //  $('#getGames').on('click',onUpdateGame);
  });
};


module.exports = {
  failureSignUp,
  successSignUp,
  successSignIn,
  failureSignIn,
  successSignOut,
};
