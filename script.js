var adjectives = ['Retarded', 'Pozzed', 'Gamer', 'Racist', 'Pedophile', 'Rapist', 'Incel', 'African', 'Trans'];
var nouns = ['Nick', 'Adam', 'Stav', 'Molestrios', 'Ian', 'Dasha', 'Day Laborer', 'Tony Soprano', 'Jeffrey Epstein'];

function generateCharacter(e) {
    document.getElementById('adj').innerHTML = adjectives[Math.floor(Math.random()*adjectives.length)];
    document.getElementById('noun').innerHTML = nouns[Math.floor(Math.random()*nouns.length)];
    
}

//addEventListener('click', generateCharacter);
document.getElementById('gen').addEventListener('click', generateCharacter);
