var descriptors = new Array;
readFile(descriptors, 'res/descriptors.txt');
console.log(descriptors);
var nouns = new Array;
readFile(nouns, 'res/nouns.txt');
const btn = document.querySelector('button');

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

$(document).ready(function() {
	console.log('jquery loaded');
});

//document.getElementById('gen').addEventListener('click', generateCharacter);
btn.onclick = generateCharacter;