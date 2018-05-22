var obj = {
    name: "Pavel",
    age: 19
};
var arr = ['one', 'two'];

// console.info( {}+[] == 0);
console.info( {} + []);
// let a = {12};

let field = Symbol("field");
console.log(field);


for (var prop in obj) {

    console.log(prop, "=", obj[prop]);
}

for (var ind in arr) {
    console.log(arr[ind]);
}
