"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// app code below
const resultScreen = document.querySelector('.calculator__result--js');
const actionButtons = [...document.querySelectorAll('.button__action--js')];
const numberButtons = [...document.querySelectorAll('.button__number--js')]

console.log(`Hello world!`);


