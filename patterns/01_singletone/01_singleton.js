var Singleton = /** @class */ (function () {
    function Singleton() {
        this.dbName = "mainDB";
    }
    Singleton.getInstance = function () {
        return Singleton.instance;
    };
    Singleton.prototype.speak = function () {
        console.log("I speak!");
        console.log(this);
    };
    Singleton.instance = new Singleton;
    return Singleton;
}());
var singletone1 = Singleton.getInstance();
var singletone2 = Singleton.getInstance();
