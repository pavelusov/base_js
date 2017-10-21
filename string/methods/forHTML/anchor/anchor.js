// select article
var articles = [].slice.call(document.querySelectorAll('article')),
	list = document.querySelector('.list');
	console.log(list);
articles.forEach(function (elem, i) {
	"use strict";
	// create anchor
	var p = document.createElement('p'),
		title = elem.querySelector('.title').innerText,
		titleAnchor = 'an' + i;
	p.innerHTML = ''.anchor(titleAnchor);
	elem.insertBefore(p, elem.firstChild);

	// create element nav
	var li = document.createElement('li');
	li.innerHTML = '<a href="#' + titleAnchor + '">' + title + '</a>';
	list.appendChild(li);
});


