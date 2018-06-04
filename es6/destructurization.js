// Деструктурирующее присваивание

let person = {
    name: "Pavel",
    age: 34
};

let {name, age} = person;

let showName = ({name}) => {
  console.log(`My name is ${name}`);
};
showName(person);

let [firstName] = ["pavel", "igor"];

// Расширения объектных литералов

let showName2 = () => {
    console.log(`My name2 is ${name}`);
};
let person2 = {name, age, showName2};
person2.showName2();

let mark = "Toyota";
let price = 20000;

let auto = {
    mark,
    price,
    go() {
       console.log(`go ${mark}`);
    }
};
auto.go();
