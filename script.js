var descriptors = new Array;
readFile(descriptors, 'res/descriptors.txt');
var nouns = new Array;
readFile(nouns, 'res/nouns.txt');

function generateCharacter(e) {
	document.getElementById('des').innerHTML = descriptors[Math.floor(Math.random()*descriptors.length)];
	document.getElementById('noun').innerHTML = nouns[Math.floor(Math.random()*nouns.length)];
}

function readFile(array, fileName) {
	$.get(fileName, function(data) {
		newArray = data.split('\n');
		newArray.forEach(element => array.push(element));
	})
}

var clickEvent = (function() {
	if ('ontouchstart' in document.documentElement === true)
	  return 'touchstart';
	else
	  return 'click';
  })();


$(document).ready(function() {
	console.log('jquery loaded');
});

//document.getElementById('gen').addEventListener('click', generateCharacter);
document.getElementById('gen').addEventListener(clickEvent, generateCharacter);