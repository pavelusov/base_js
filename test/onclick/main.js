var vg = {
	controllers: {
		first: new Controller('firstCtrl')
	},
	directives: {
		myDrtv: new Directive('first')
	}
};

/* Directives */
/* -- myDrtv -- */

vg.directives.myDrtv.scope = function (e) {
	e.target.style.color = 'red';
	console.log('first');
};

/* -- end myDrtv -- */

function Controller(id) {
	this.ctrl = document.getElementById(id);
	this.click = function (e) {
		console.log('myClick');
		console.log(e);
	};
}

function Directive(name) {
	this.drtv = document.querySelectorAll('[data-directive=' + name + ']');
	var drtvLength = this.drtv.length;
	for (var i = 0; i < drtvLength; i++) {
		// console.log(this.drtv[i]);
	}
}

console.log(vg.directives.myDrtv);
console.log(window['firstCtrl']);
console.log(window.firstCtrl);