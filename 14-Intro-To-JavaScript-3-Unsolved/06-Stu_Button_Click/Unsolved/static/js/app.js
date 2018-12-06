// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 8) + 1);

// Select the upvote and downvote buttons

var upvote = d3.select(".btn.btn-default.btn-lg.upvote");
var downvote = d3.select(".btn.btn-default.btn-lg.downvote");

// Select the counter h1 element
var counter = d3.select(".counter")
// Use D3 `.on` to attach a click handler for the upvote

upvote.on("click", function() {
  var currentCount = parseInt(counter.text());
  currentCount += 1;
  counter.text(currentCount);
  console.log("upvote");
});

// Use d3 `.on` to attach a click handler for the downvote
downvote.on("click", function() {
  var currentCount = parseInt(counter.text());
  currentCount -= 1;
  counter.text(currentCount);
  console.log("downvote");
});
