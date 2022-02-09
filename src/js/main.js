"use strict";

// service worker registration 

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("serviceworker.js").then(
      function (registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// app code below

// ---- create class for calculator

class Calculator {
  constructor(operators, numbers) {
    this.operators = operators;
    this.numbers = numbers;
    this.result = `0`;
  }

  getResult(operators, numbers, result) {

    this.numbers.forEach((number) => {
      number.addEventListener("click", () => {
        this.result === `0` ? this.result = number.textContent : this.result = this.result + number.textContent;
        resultScreen.textContent = this.result;
      });
    });

    this.operators.forEach((operator) => {
      const symbols = ["+", "-", "/", "*", "."];

      operator.addEventListener("click", () => {

        let splitResult = this.result.split("");
        let text = operator.textContent;

        if (text !== "=" && text !== "del" && text !== "ce") {
          symbols.includes(splitResult[splitResult.length - 1]) === false ? this.result = this.result + text : null;
        } else if (text === "ce") {
          this.result = `0`;
        } else if (text === "del") {
          this.result !== `0` ? this.result = this.result.substring(0, this.result.length - 1) : null;
          this.result === `` ? this.result = `0` : null;
        } else if (text === "=") {
          const dotValidator = splitResult.filter((el) => el === ".");
          symbols.includes(splitResult[splitResult.length - 1]) === false && dotValidator.length < 2 ? this.result = `${eval(this.result)}` : null;
        }
        resultScreen.textContent = this.result;
      });
    });
  }
}

// ---- get result

const resultScreen = document.querySelector(
  ".calculator__paragraph-result--js"
);
const calculator = new Calculator(
  [...document.querySelectorAll(".button__action--js")],
  [...document.querySelectorAll(".button__number--js")]
);
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
░░░░░█▄▄▄▄▄▄▄▄▄▀▄▄▄▄▄▄▄▄▄`
);
