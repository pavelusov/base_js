function createBook(bookValue) {
    var book = {
        name: bookValue.name,
        price: bookValue.price,
        desc: "This is a default book"
    };
    if (bookValue.desc) {
        book.desc = bookValue.desc;
    }
    return book;
}
var book1 = createBook({
    name: "TypeScript Handbook",
    price: 200
});
console.log(book1);
// Excess Property Checks
var Colors;
(function (Colors) {
    Colors["white"] = "white";
    Colors["black"] = "black";
})(Colors || (Colors = {}));
function createGood(good) {
    return good;
}
var good1 = createGood({
    name: "Milk",
    color: Colors.white,
    price: 50
});
console.log(good1);
