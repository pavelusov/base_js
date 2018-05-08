interface StringArray {
    [key: string]: string;
    x: string;
    y: string;
}

let myArray: StringArray;
myArray = {x:"Pavel", y:"Savely"};

console.log(myArray['x']);

