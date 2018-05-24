var person = {};

Object.defineProperty(person, "name", {
    configurable: true,
    enumerable: true,
    writable: false,
    value: "Pavel"
});
person.name = "Tolik";

let name = person.name;

let library = {
    length: 0,
    _books: []
};

Object.defineProperties(library, {
    book: {
        set: function (value) {
            this._books.push(value);
            this.length++;
        }
    },
    books: {
        get: function () {
            return this._books;
        }
    }

});
library.book = "Javascript";
library.book = "Java";
