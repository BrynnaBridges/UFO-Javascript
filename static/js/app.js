// Make a variable for the data  
var aliens = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(aliens);

// Putting the table in
aliens.forEach((aliens) => {
    var row = tbody.append("tr");
    Object.entries(aliens).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(aliens);

  var UFOReport = aliens.filter(person => person.datetime === inputValue);

  console.log(UFOReport);
  
  document.getElementById("body").innerHTML="";
// // Step 5: Use d3 to update each cell's text with
 //weather report values (weekday, date, high, low)
 UFOReport.forEach(function(UFOReport) {
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});
}

