var adjectives = new Array;
readFile(adjectives, 'res/adjectives.txt');
var nouns = new Array;
readFile(nouns, 'res/nouns.txt');

function generateCharacter(e) {
	document.getElementById('adj').innerHTML = adjectives[Math.floor(Math.random()*adjectives.length)];
	document.getElementById('noun').innerHTML = nouns[Math.floor(Math.random()*nouns.length)];
}

function readFile(array, fileName) {
	$.get(fileName, function(data) {
		newArray = data.split('\n');
		newArray.forEach(element => array.push(element));
	})
}

$(document).ready(function() {
	console.log('jquery loaded');
});

document.getElementById('gen').addEventListener('click', generateCharacter);
