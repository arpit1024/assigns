//object => object
//function => global object
//function => undefined (strict mode)
//call , apply , bind
var obj = {
  title: "This keyword",
  arr: [1, 2, 3],
  getThis() {
    this.arr.forEach(function (ele) {
      console.log(this.title, ele);
    }, this);
  },
};

function getThis() {
  console.log(this);
}

obj.getThis();
