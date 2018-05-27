class RegExpInfo {
    constructor() {
        this.input = RegExp.input;
        this.leftContext = RegExp.leftContext;
        this.rightContext = RegExp.rightContext;
        this.lastMatch = RegExp.lastMatch;
        this.lastParen = RegExp.lastParen;
    }
}

let pattern1 = /\{.*\}/;
let pattern2 = /\[(.*)\]/;
let pattern3 = /\((.*)\)/;



const text1 = "{({})}{}";
const text2 = "{}()[]";
const text3 = "()[]";
const text4 = "{}{}";
const text5 = "{{{{text}}}}";

// let result1 = pattern1.test(text1);
// let input1 = new RegExpInfo();

let exp = searchPattern(pattern1, text5);


function searchPattern(pattern, text) {
    let res = pattern.test(text);
    // let state = pattern.exec(text);
    if (!res) {
        return;
    }

    // if (state === null) {
    //     return;
    // }
    // pattern.test(text);
    return searchPattern(pattern, RegExp.lastParen);
}
