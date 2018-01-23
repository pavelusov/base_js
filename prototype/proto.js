function Parent(name) {
    this.name = name;
}

Parent.prototype.showName = function () {
  console.log('Parent ' + this.name);
};


function Child(name, childName) {
    Parent.apply(this, arguments);
    this.childName = childName;
    this.showChildName = function () {
        console.log('Child: ' + this.childName + '. Parent: ' + this.name);
    }
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

var childFirst = new Child('P.Alexandr', 'Ch.Igor');

childFirst.showName();
childFirst.showChildName();
