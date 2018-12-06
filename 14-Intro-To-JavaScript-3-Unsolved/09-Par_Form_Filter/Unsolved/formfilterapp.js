// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the submit button
var submit = d3.select("#submit");

inputField = d3.select(".form-control")
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});

// Complete the click handler for the form
submit.on("click", function() {

  // Prevent the page from refreshing

  // Select the input element and get the raw HTML node
  inputField = d3.select(".form-control")
  inputField.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
  });
  // Get the value property of the input element
  function BTfilter(x) {
    return x = newText;
  };
  // Use the form input to filter the data by blood type
  var filtered = data.filter(BTfilter)

  var list = d3.select(".summary") 
  list.append(filtered)
  
  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages

  // Finally, add the summary stats to the `ul` tag
});
