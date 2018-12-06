// grab references to the input element and the output div
// @TODO: YOUR CODE HERE

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

var inputField = d3.select("#text")

// Function to handle input change
function handleChange() {
  
  // grab the value of the input field
  // @TODO: YOUR CODE HERE
  
  var newText = d3.event.target.value;

  // clear the existing output
  // @TODO: YOUR CODE HERE
  d3.select('.output').text("")

  // reverse the input string
  // @TODO: YOUR CODE HERE
  finaltext = reverseString(newText)

  // Set the output text to the reversed input string
  // @TODO: YOUR CODE HERE
  d3.select('.output').text(finaltext)
};

// Attach an event to detect changes to the input field.
// @TODO: YOUR CODE HERE

inputField.on("change", handleChange);