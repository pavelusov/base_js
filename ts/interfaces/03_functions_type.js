var getSubString = function (src, sub) {
    var index = src.search(sub);
    return index != -1;
};
if (getSubString("typescript", "type")) {
    console.log("The substring was found");
}
else {
    console.log("The substring not found");
}
