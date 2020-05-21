// from data.js
var tableData = data;

// YOUR CODE HERE!


var tbody = d3.select("tbody");

console.log(data);

data.forEach((sighting) => {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


function filterFunc() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("datetime");
  filter = input.value;
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
