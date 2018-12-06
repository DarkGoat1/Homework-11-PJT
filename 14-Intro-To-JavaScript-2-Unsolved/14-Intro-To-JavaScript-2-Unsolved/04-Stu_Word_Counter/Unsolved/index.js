var wordstring = "I yam what I yam and will always be what I yam";
var wordarray = wordstring.split(' ');

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
};

var uniqueword = wordarray.filter( onlyUnique );

var words = [];
var counts = [];

function wordcount(w) {

}

console.log("---------");
console.log(`unique words ${uniqueword}`);
console.log("---------");