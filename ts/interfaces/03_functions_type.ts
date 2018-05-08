interface SearchFoo {
    (source: string, substring: string): boolean;
}

let getSubString: SearchFoo = function (src, sub) {
    let index = src.search(sub);

    return index != -1;
};

if (getSubString("typescript", "type")) {
    console.log("The substring was found");
} else {
    console.log("The substring not found");
}
