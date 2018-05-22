// var globslScope = arguments[3];
(function main() {
    "use strict";
    class Book {
        constructor(name, price){
            this._name = name;
            this._price = price;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get price() {
            return this._price;
        }
        set price(value) {
            this._price = value;
        }
        static getInstance() {
            return new Book();
        }
        getInfo() {
            return `Book: ${this.name}. \nPrice: ${this.price}.`;
        }
    }

    let book1 = new Book("js", 100);
    book1.Name = "c#";
    let infoBook1 = book1.getInfo();

// Наследование в ES 5.1
    /*
    function Human() {
        this.name;
        this.age;

    }*/
    function outContext(val) {
        //"use strict";
        var context = "test";
        var test = 20;
        var test2;
        function innerContext() {
            var innerContext = 'innerContext';
            var contextTestOut = context;
        };

        return innerContext;
    }
    var closure = outContext();

})();
