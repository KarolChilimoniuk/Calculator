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

// ---- create class for calculator
class Calculator {
  constructor(operators, numbers) {
      this.operators = operators,
      this.numbers = numbers,
      this.result = `0`
  }
  getResult(operators, numbers, result) {
     this.numbers.forEach(number => {
       number.addEventListener('click', () => {
        if(this.result === `0`) {
          this.result = number.textContent;
        } else {
          this.result = this.result + number.textContent;
        }
          resultScreen.textContent = this.result;
       });
     });
     this.operators.forEach(operator => {
       operator.addEventListener('click', () => {
        switch(operator.textContent) {
        case "ce":
          this.result = `0`;
          break;
        case "+":
          this.result = this.result + "+";
          break;
        case "-":
          this.result = this.result + "-";
          break;
        case "del":
          if(this.result !== `0`) {
            this.result = this.result.substring(0, this.result.length - 1)
          } 
          if(this.result === ``) {
            this.result = `0`;
          }
          break;
        case "/":
          this.result = this.result + "/";
          break;
        case "*":
          this.result = this.result + "*";
          break;
        case ".":
          this.result = this.result + ".";
          break;
      case "=":
          this.result = `${eval(this.result)}`;
          break;
        }
        resultScreen.textContent = this.result;
     })
    })
  }
}

// ---- get result

const resultScreen = document.querySelector('.calculator__result--js');
const calculator = new Calculator([...document.querySelectorAll('.button__action--js')], [...document.querySelectorAll('.button__number--js')]);
resultScreen.textContent = calculator.result;

calculator.getResult();

console.log(
  `   ▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄
░░░░░█░░░░ It works!!! ▀▀▄
░░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█
░░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░░█
░▄▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░░█
█░▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒░█
█░▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█
░█░▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█
░░█░░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█
░░░█░░░░██░░▀█▄▄▄█▄▄█▄▄██▄░█
░░░░█░░░░▀▀▄░█░░░█░█▀█▀█▀██░█
░░░░░▀▄░░░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█
░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░▒░░░█
░░▐▌░█░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░░░░█
░░░█▐▌░░░░░░█░▀▄▄▄▄▄░░░░░░░░█
░░███░░░░░▄▄█░▄▄░██▄▄▄▄▄▄▄▄▀
░▐████░░▄▀█▀█▄▄▄▄▄█▀▄▀▄
░░█░░▌░█░░░▀▄░█▀█░▄▀░░░█
░░█░░▌░█░░█░░█░▒░█░░█░░█
░░█░░▀▀░░██░░█░░░█░░█░░█
░░░▀▀▄▄▀▀░█░░░▀▄▀▀▀▀█░░█
░░░░░░░░░░█░░░░▄░░▄██▄▄▀
░░░░░░░░░░█░░░░▄░░████
░░░░░░░░░░█▄░░▄▄▄░░▄█
░░░░░░░░░░░█▀▀░▄░▀▀█
░░░░░░░░░░░█░░░█░░░█
░░░░░░░░░░░█░░░▐░░░█
░░░░░░░░░░░█░░░▐░░░█
░░░░░░░░░░░█░░░▐░░░█
░░░░░░░░░░░█░░░▐░░░█
░░░░░░░░░░░█░░░▐░░░█
░░░░░░░░░░█▄▄▄▄▐▄▄▄▄█
░░░░░░░▄▄▄▄▀▄▄▀█▀▄▄▀▄▄▄▄
░░░░░▄▀▄░▄░▄░░░█░░░▄░▄░▄▀▄
░░░░░█▄▄▄▄▄▄▄▄▄▀▄▄▄▄▄▄▄▄▄`)

