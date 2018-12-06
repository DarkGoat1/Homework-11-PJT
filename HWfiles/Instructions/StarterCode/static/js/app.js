// from data.js
var tbody = d3.select("tbody");

var defaultdata = data;

// YOUR CODE HERE!
DateinputField = d3.select(".form-control1");
StateinputField = d3.select(".form-control2");

DateinputField.on("change", function() {
    d3.selectAll("td").remove(); 
    var filterDate = String(d3.event.target.value);
    console.log(filterDate);
    function formfilter(x) {
        return x.datetime === filterDate;
    };
    var selecteddata = data.filter(formfilter);
    console.log(selecteddata);

    selecteddata.forEach(function(weather) {
        console.log(weather);
        var row = tbody.append('tr');
        Object.entries(weather).forEach(function([key, value]){
            console.log(key, value)
            var cell = row.append('td').text(value);
        })
    });
    
    selecteddata.forEach((weather) => {
        var row = tbody.append('tr');
        Object.entries(weather).forEach(([key, value]) => {
            console.log(key, value)
        });
    });

});


defaultdata.forEach(function(weather) {
    console.log(weather);
    var row = tbody.append('tr');
    Object.entries(weather).forEach(function([key, value]){
        console.log(key, value)
        var cell = row.append('td').text(value);
    })
});

defaultdata.forEach((weather) => {
    var row = tbody.append('tr');
    Object.entries(weather).forEach(([key, value]) => {
        console.log(key, value)
    });
});
