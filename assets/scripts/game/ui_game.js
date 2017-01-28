'use strict';

const success = (data) => {
  if (data) {
  console.log(data);}
};

const failure = (error) => {
  console.error(error);
};

const patching = (data) => {
  if (data) {
    console.log('It patched!!!'); }
};
module.exports = {
  failure,
  success,
  patching,
};
