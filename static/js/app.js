var tbody = d3.select("tbody");

console.log(data);
data.forEach((alien) => {
  var row = tbody.append("tr");
  Object.entries(alien).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

$(document).ready( function () {
  $('#ufo-table').DataTable();
} );


