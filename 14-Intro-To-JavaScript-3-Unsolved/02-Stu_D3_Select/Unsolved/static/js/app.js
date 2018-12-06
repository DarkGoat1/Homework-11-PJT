// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table

var table = d3.select('table');

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped

var tableclass = d3.select('table').attr('class', 'table table-striped');
console.log(tableclass);

// Use D3 to select the table body

var tablebody = d3.select('tbody');

// Append one table row `tr` to the table body

var newrow = tablebody.append('tr');

// Append one cell for the student name

newrow.append('td').text(newGrade[0]);

// Append one cell for the student grade
newrow.append('td').text(newGrade[1]);