//closures

function outer() {
  var a = 2;
  return function inner() {
    // forms closure with its lexical score
    console.log(a);
  };
}

var x = outer();
x(); // will get value of 'a' due to closures formation
const counter = (function () {
  var privateCounter = 0;
  function changeCounter(val) {
    privateCounter += val;
  }

  return {
    increaseCounter() {
      changeCounter(1);
    },
    getValue() {
      return privateCounter;
    },
  };
})();
counter.increaseCounter();
console.log(counter.getValue());
