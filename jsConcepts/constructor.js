// function constructor
//they just create a new func object. they execute in the global scope.

//camel case => nameOfConst
//pascal case => OneTwoThree

function Func(title) {
  this.title = title;
  this.func = () => {
    console.log("hello");
  };
}
var func = new Func("Func Constructor");
func.func();
