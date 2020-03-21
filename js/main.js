!function(p){var i={};function l(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return p[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=p,l.c=i,l.d=function(p,i,a){l.o(p,i)||Object.defineProperty(p,i,{enumerable:!0,get:a})},l.r=function(p){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})},l.t=function(p,i){if(1&i&&(p=l(p)),8&i)return p;if(4&i&&"object"==typeof p&&p&&p.__esModule)return p;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:p}),2&i&&"string"!=typeof p)for(var e in p)l.d(a,e,function(i){return p[i]}.bind(null,e));return a},l.n=function(p){var i=p&&p.__esModule?function(){return p.default}:function(){return p};return l.d(i,"a",i),i},l.o=function(p,i){return Object.prototype.hasOwnProperty.call(p,i)},l.p="",l(l.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\n// service worker registration - remove if you\'re not going to use it\n\nif (\'serviceWorker\' in navigator) {\n  window.addEventListener(\'load\', function() {\n    navigator.serviceWorker.register(\'serviceworker.js\').then(function(registration) {\n      // Registration was successful\n      console.log(\'ServiceWorker registration successful with scope: \', registration.scope);\n    }, function(err) {\n      // registration failed :(\n      console.log(\'ServiceWorker registration failed: \', err);\n    });\n  });\n}\n\n// app code below\n\n// ---- create class for calculator\nclass Calculator {\n  constructor(operators, numbers) {\n      this.operators = operators,\n      this.numbers = numbers,\n      this.result = `0`\n  }\n  getResult(operators, numbers, result) {\n     this.numbers.forEach(number => {\n       number.addEventListener(\'click\', () => {\n        if(this.result === `0`) {\n          this.result = number.textContent;\n        } else {\n          this.result = this.result + number.textContent;\n        }\n          resultScreen.textContent = this.result;\n       });\n     });\n     this.operators.forEach(operator => {\n       operator.addEventListener(\'click\', () => {\n        switch(operator.textContent) {\n        case "ce":\n          this.result = `0`;\n          break;\n        case "+":\n          this.result = this.result + "+";\n          break;\n        case "-":\n          this.result = this.result + "-";\n          break;\n        case "del":\n          if(this.result !== `0`) {\n            this.result = this.result.substring(0, this.result.length - 1)\n          } \n          if(this.result === ``) {\n            this.result = `0`;\n          }\n          break;\n        case "/":\n          this.result = this.result + "/";\n          break;\n        case "*":\n          this.result = this.result + "*";\n          break;\n        case ".":\n          this.result = this.result + ".";\n          break;\n      case "=":\n          this.result = `${eval(this.result)}`;\n          break;\n        }\n        resultScreen.textContent = this.result;\n     })\n    })\n  }\n}\n\n// ---- get result\n\nconst resultScreen = document.querySelector(\'.calculator__result--js\');\nconst calculator = new Calculator([...document.querySelectorAll(\'.button__action--js\')], [...document.querySelectorAll(\'.button__number--js\')]);\nresultScreen.textContent = calculator.result;\n\ncalculator.getResult();\n\nconsole.log(\n  `   ▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄\n░░░░░█░░░░ It works!!! ▀▀▄\n░░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█\n░░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░░█\n░▄▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░░█\n█░▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒░█\n█░▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█\n░█░▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█\n░░█░░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█\n░░░█░░░░██░░▀█▄▄▄█▄▄█▄▄██▄░█\n░░░░█░░░░▀▀▄░█░░░█░█▀█▀█▀██░█\n░░░░░▀▄░░░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█\n░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░▒░░░█\n░░▐▌░█░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░░░░█\n░░░█▐▌░░░░░░█░▀▄▄▄▄▄░░░░░░░░█\n░░███░░░░░▄▄█░▄▄░██▄▄▄▄▄▄▄▄▀\n░▐████░░▄▀█▀█▄▄▄▄▄█▀▄▀▄\n░░█░░▌░█░░░▀▄░█▀█░▄▀░░░█\n░░█░░▌░█░░█░░█░▒░█░░█░░█\n░░█░░▀▀░░██░░█░░░█░░█░░█\n░░░▀▀▄▄▀▀░█░░░▀▄▀▀▀▀█░░█\n░░░░░░░░░░█░░░░▄░░▄██▄▄▀\n░░░░░░░░░░█░░░░▄░░████\n░░░░░░░░░░█▄░░▄▄▄░░▄█\n░░░░░░░░░░░█▀▀░▄░▀▀█\n░░░░░░░░░░░█░░░█░░░█\n░░░░░░░░░░░█░░░▐░░░█\n░░░░░░░░░░░█░░░▐░░░█\n░░░░░░░░░░░█░░░▐░░░█\n░░░░░░░░░░░█░░░▐░░░█\n░░░░░░░░░░░█░░░▐░░░█\n░░░░░░░░░░█▄▄▄▄▐▄▄▄▄█\n░░░░░░░▄▄▄▄▀▄▄▀█▀▄▄▀▄▄▄▄\n░░░░░▄▀▄░▄░▄░░░█░░░▄░▄░▄▀▄\n░░░░░█▄▄▄▄▄▄▄▄▄▀▄▄▄▄▄▄▄▄▄`)\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIGFwcCBjb2RlIGJlbG93XG5cbi8vIC0tLS0gY3JlYXRlIGNsYXNzIGZvciBjYWxjdWxhdG9yXG5jbGFzcyBDYWxjdWxhdG9yIHtcbiAgY29uc3RydWN0b3Iob3BlcmF0b3JzLCBudW1iZXJzKSB7XG4gICAgICB0aGlzLm9wZXJhdG9ycyA9IG9wZXJhdG9ycyxcbiAgICAgIHRoaXMubnVtYmVycyA9IG51bWJlcnMsXG4gICAgICB0aGlzLnJlc3VsdCA9IGAwYFxuICB9XG4gIGdldFJlc3VsdChvcGVyYXRvcnMsIG51bWJlcnMsIHJlc3VsdCkge1xuICAgICB0aGlzLm51bWJlcnMuZm9yRWFjaChudW1iZXIgPT4ge1xuICAgICAgIG51bWJlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYodGhpcy5yZXN1bHQgPT09IGAwYCkge1xuICAgICAgICAgIHRoaXMucmVzdWx0ID0gbnVtYmVyLnRleHRDb250ZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5yZXN1bHQgKyBudW1iZXIudGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgICByZXN1bHRTY3JlZW4udGV4dENvbnRlbnQgPSB0aGlzLnJlc3VsdDtcbiAgICAgICB9KTtcbiAgICAgfSk7XG4gICAgIHRoaXMub3BlcmF0b3JzLmZvckVhY2gob3BlcmF0b3IgPT4ge1xuICAgICAgIG9wZXJhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzd2l0Y2gob3BlcmF0b3IudGV4dENvbnRlbnQpIHtcbiAgICAgICAgY2FzZSBcImNlXCI6XG4gICAgICAgICAgdGhpcy5yZXN1bHQgPSBgMGA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIrXCI6XG4gICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLnJlc3VsdCArIFwiK1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiLVwiOlxuICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5yZXN1bHQgKyBcIi1cIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRlbFwiOlxuICAgICAgICAgIGlmKHRoaXMucmVzdWx0ICE9PSBgMGApIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5yZXN1bHQuc3Vic3RyaW5nKDAsIHRoaXMucmVzdWx0Lmxlbmd0aCAtIDEpXG4gICAgICAgICAgfSBcbiAgICAgICAgICBpZih0aGlzLnJlc3VsdCA9PT0gYGApIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gYDBgO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIi9cIjpcbiAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMucmVzdWx0ICsgXCIvXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLnJlc3VsdCArIFwiKlwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiLlwiOlxuICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5yZXN1bHQgKyBcIi5cIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCI9XCI6XG4gICAgICAgICAgdGhpcy5yZXN1bHQgPSBgJHtldmFsKHRoaXMucmVzdWx0KX1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFNjcmVlbi50ZXh0Q29udGVudCA9IHRoaXMucmVzdWx0O1xuICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuLy8gLS0tLSBnZXQgcmVzdWx0XG5cbmNvbnN0IHJlc3VsdFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdG9yX19yZXN1bHQtLWpzJyk7XG5jb25zdCBjYWxjdWxhdG9yID0gbmV3IENhbGN1bGF0b3IoWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b25fX2FjdGlvbi0tanMnKV0sIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uX19udW1iZXItLWpzJyldKTtcbnJlc3VsdFNjcmVlbi50ZXh0Q29udGVudCA9IGNhbGN1bGF0b3IucmVzdWx0O1xuXG5jYWxjdWxhdG9yLmdldFJlc3VsdCgpO1xuXG5jb25zb2xlLmxvZyhcbiAgYCAgIOKWhOKWhOKWhOKWgOKWgOKWgOKWgOKWgOKWgOKWgOKWgOKWhOKWhOKWhOKWhOKWhOKWhFxu4paR4paR4paR4paR4paR4paI4paR4paR4paR4paRIEl0IHdvcmtzISEhIOKWgOKWgOKWhFxu4paR4paR4paR4paR4paI4paR4paR4paR4paS4paS4paS4paS4paS4paS4paR4paR4paR4paR4paR4paR4paR4paR4paS4paS4paS4paR4paR4paIXG7ilpHilpHilpHilojilpHilpHilpHilpHilpHilpHiloTilojilojiloDiloTiloTilpHilpHilpHilpHilpHiloTiloTiloTilpHilpHilpHilpHilohcbuKWkeKWhOKWgOKWkuKWhOKWhOKWhOKWkuKWkeKWiOKWgOKWgOKWgOKWgOKWhOKWhOKWiOKWkeKWkeKWkeKWiOKWiOKWhOKWhOKWiOKWkeKWkeKWkeKWkeKWiFxu4paI4paR4paS4paI4paS4paE4paR4paA4paE4paE4paE4paA4paR4paR4paR4paR4paR4paR4paR4paR4paI4paR4paR4paR4paS4paS4paS4paS4paS4paR4paIXG7ilojilpHilpLilojilpHilojiloDiloTiloTilpHilpHilpHilpHilpHilojiloDilpHilpHilpHilpHiloDiloTilpHilpHiloTiloDiloDiloDiloTilpLilohcbuKWkeKWiOKWkeKWgOKWhOKWkeKWiOKWhOKWkeKWiOKWgOKWhOKWhOKWkeKWgOKWkeKWgOKWgOKWkeKWhOKWhOKWgOKWkeKWkeKWkeKWkeKWiOKWkeKWkeKWiFxu4paR4paR4paI4paR4paR4paR4paA4paE4paA4paI4paE4paE4paR4paI4paA4paA4paA4paE4paE4paE4paE4paA4paA4paI4paA4paI4paI4paR4paIXG7ilpHilpHilpHilojilpHilpHilpHilpHilojilojilpHilpHiloDilojiloTiloTiloTilojiloTiloTilojiloTiloTilojilojiloTilpHilohcbuKWkeKWkeKWkeKWkeKWiOKWkeKWkeKWkeKWkeKWgOKWgOKWhOKWkeKWiOKWkeKWkeKWkeKWiOKWkeKWiOKWgOKWiOKWgOKWiOKWgOKWiOKWiOKWkeKWiFxu4paR4paR4paR4paR4paR4paA4paE4paR4paR4paR4paR4paR4paA4paA4paE4paE4paE4paI4paE4paI4paE4paI4paE4paI4paE4paA4paR4paR4paIXG7ilpHilpHilpHilpHilpHilpHilpHiloDiloTiloTilpHilpLilpLilpLilpLilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpLilpHilpHilpHilohcbuKWkeKWkeKWkOKWjOKWkeKWiOKWkeKWkeKWkeKWkeKWgOKWgOKWhOKWhOKWkeKWkuKWkuKWkuKWkuKWkuKWkuKWkuKWkuKWkuKWkuKWkeKWkeKWkeKWkeKWiFxu4paR4paR4paR4paI4paQ4paM4paR4paR4paR4paR4paR4paR4paI4paR4paA4paE4paE4paE4paE4paE4paR4paR4paR4paR4paR4paR4paR4paR4paIXG7ilpHilpHilojilojilojilpHilpHilpHilpHilpHiloTiloTilojilpHiloTiloTilpHilojilojiloTiloTiloTiloTiloTiloTiloTiloTiloBcbuKWkeKWkOKWiOKWiOKWiOKWiOKWkeKWkeKWhOKWgOKWiOKWgOKWiOKWhOKWhOKWhOKWhOKWhOKWiOKWgOKWhOKWgOKWhFxu4paR4paR4paI4paR4paR4paM4paR4paI4paR4paR4paR4paA4paE4paR4paI4paA4paI4paR4paE4paA4paR4paR4paR4paIXG7ilpHilpHilojilpHilpHilozilpHilojilpHilpHilojilpHilpHilojilpHilpLilpHilojilpHilpHilojilpHilpHilohcbuKWkeKWkeKWiOKWkeKWkeKWgOKWgOKWkeKWkeKWiOKWiOKWkeKWkeKWiOKWkeKWkeKWkeKWiOKWkeKWkeKWiOKWkeKWkeKWiFxu4paR4paR4paR4paA4paA4paE4paE4paA4paA4paR4paI4paR4paR4paR4paA4paE4paA4paA4paA4paA4paI4paR4paR4paIXG7ilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilojilpHilpHilpHilpHiloTilpHilpHiloTilojilojiloTiloTiloBcbuKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWiOKWkeKWkeKWkeKWkeKWhOKWkeKWkeKWiOKWiOKWiOKWiFxu4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paI4paE4paR4paR4paE4paE4paE4paR4paR4paE4paIXG7ilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilojiloDiloDilpHiloTilpHiloDiloDilohcbuKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWiOKWkeKWkeKWkeKWiOKWkeKWkeKWkeKWiFxu4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paI4paR4paR4paR4paQ4paR4paR4paR4paIXG7ilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilojilpHilpHilpHilpDilpHilpHilpHilohcbuKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWiOKWkeKWkeKWkeKWkOKWkeKWkeKWkeKWiFxu4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paI4paR4paR4paR4paQ4paR4paR4paR4paIXG7ilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilojilpHilpHilpHilpDilpHilpHilpHilohcbuKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWiOKWhOKWhOKWhOKWhOKWkOKWhOKWhOKWhOKWhOKWiFxu4paR4paR4paR4paR4paR4paR4paR4paE4paE4paE4paE4paA4paE4paE4paA4paI4paA4paE4paE4paA4paE4paE4paE4paEXG7ilpHilpHilpHilpHilpHiloTiloDiloTilpHiloTilpHiloTilpHilpHilpHilojilpHilpHilpHiloTilpHiloTilpHiloTiloDiloRcbuKWkeKWkeKWkeKWkeKWkeKWiOKWhOKWhOKWhOKWhOKWhOKWhOKWhOKWhOKWhOKWgOKWhOKWhOKWhOKWhOKWhOKWhOKWhOKWhOKWhGApXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);