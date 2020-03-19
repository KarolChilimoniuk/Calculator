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


// below is coded so basic logic - not final concept


const resultScreen = document.querySelector('.calculator__result--js');
const actionButtons = [...document.querySelectorAll('.button__action--js')];
const numberButtons = [...document.querySelectorAll('.button__number--js')]

let result = [0];
resultScreen.textContent = result.join("");

const getResult = () => {
  numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const buttonNumber = parseInt(button.textContent);
      if(result[0] === 0) {
        result.splice(0,1);
      }
      result.push(buttonNumber);
      console.log(typeof(buttonNumber));
      console.log(result);
      resultScreen.textContent = result.join("");
    })
  })
  actionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // console.log(typeof(button.textContent));
      if(typeof(button.textContent))
      switch(button.textContent) {
        case "ce":
          result = [0];
          break;
        case "+":
          result[0] != "0" ? result.push('+') : null;
          break;
        case "-":
          result[0] != "0" ? result.push('-') : null;
          break;
        case "del":
          if(result.length === 1) {
            result = [0];
          } else {
            result[0] != "0" ? result.pop() : null;
          }
          break;
        case "/":
          result[0] != "0" ? result.push('/') : null;
          break;
        case "*":
          result[0] != "0" ? result.push('*') : null;
          break;
        case ".":
          result[0] != "0" ? result.push('.') : null;
          break;
        case "=":
          const joinedResult = result.join("");
          console.log(joinedResult);
          break;
      }
      resultScreen.textContent = result.join("");
      console.log(result);
    })
  })
}

getResult();
console.log(`Hello world!`);


