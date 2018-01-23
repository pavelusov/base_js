var user = {
    name: 'Pavel',
    showName: function () {
        console.log(this.name)
    }
};

// bind
setTimeout(user.showName.bind(user), 100);

function getName(message) {
    console.log(message + this.name);
}

var userSecond = {
  name: 'Pavel Usov'
};

// user.show = getName;
// user.show();

getName.call(userSecond, 'Hello ');
