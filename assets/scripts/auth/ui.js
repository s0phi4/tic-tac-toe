 'use strict';

const successSignUp = (data) => {
if (data) {
  $('.next').text('Great! Now exit this box, sign in and kill some time!');
  }
};

const failureSignUp = (error) => {
if (error) {
  $('.next').text('Great! Now exit this box, sign in and kill some time!');
  }
};


module.exports = {
  failureSignUp,
  successSignUp,
};
