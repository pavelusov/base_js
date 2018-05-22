var text = "test";

var value = text.valueOf();

console.log(value);
var obj = {
  valueOf: function () {
      return "Hello";
  },
  num: 2
};

console.log(obj + " world");
