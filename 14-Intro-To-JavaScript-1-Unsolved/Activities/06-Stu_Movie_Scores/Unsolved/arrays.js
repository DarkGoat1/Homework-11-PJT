// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = 0;
var okMovieScores = 0;
var badMovieScores = 0;

for (var j = 0; j < movieScores.length; j++) {
  if (movieScores[j] > 7){
    goodMovieScores = goodMovieScores + 1
  }
  else if (movieScores[j] > 5){
    okMovieScores = okMovieScores + 1
  }
  else {
    badMovieScores = badMovieScores + 1
  }
}

console.log(`Number of good movies: ${goodMovieScores}`)
console.log(`Number of okay movies: ${okMovieScores}`)
console.log(`Number of bad movies: ${badMovieScores}`)
