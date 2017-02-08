 'use strict';

const successSignUp = () => {
  $('#exampleModalUp').modal('hide');
  $('.signup-clean').val('');
  $('.next').text('');
};

const failureSignUp = (error) => {
if (error) {
  $('.next').text('Nope, you used this account already, try with a different account!');
  }
};

const successSignIn = () => {
    $('#sign-up').val('');
    $('.clean-signin').val('');
    // $('#sign-up').hide();
    // $('#sign-in').hide();
    $('#exampleModalIn').modal('hide');
    $('.play').show();
    $('.pass').show();
    $('#board').hide();
    $('.top').hide();
    $('h2').hide();
    $('#reset').show();
    $('#getGames').show();
    $('#change-password').show();
    $('#sign-out').show();
  };

const failureSignIn = (error) => {
if (error) {
  $('.nextIn').text('Nope, please use the right email and password');
  }
};

const succesChangePassword = () =>  {
$('#changeP').text('Great! Change is successful!');
};

const successSignOut = () => {
      $('.play').hide();
      $('.pass').hide();
      $('.top').show();
};

const failureSignOut = () => {
  $('.play').hide();
  $('.pass').hide();
  $('.top').show();

};


module.exports = {
  failureSignUp,
  successSignUp,
  successSignIn,
  failureSignIn,
  succesChangePassword,
  successSignOut,
  failureSignOut,
};
