function Singleton() {
    var name = "Pavel";
    this.getName = function () {
      return name;
    };
    this.setName = function (nameValue) {
        name = nameValue;
    };

    if (Singleton.instance) {
        return Singleton.instance;
    }
    return Singleton.instance = this;
}

var mySingleton = new Singleton;
var mySingleton2 = new Singleton;

console.log(mySingleton.getName()); // Pavel
mySingleton2.setName("Savely");
console.log(mySingleton.getName()); // Savely

