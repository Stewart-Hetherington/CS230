//Call calculate function as soon as page is loaded
window.onload = calculate();

function calculate() {
  var table = document.getElementById("table");
  var row = table.rows;
  var unsubmitted = 0;

  for (var i = 1; i < row.length; i++) {
    var avg = 0;
    var cell = row[i].cells;
    for (var j = 2; j < cell.length - 1; j++) {
      //Check for unsubmitted '-' assignments
      if (cell[j].innerHTML === "-") {
        cell[j].className = "unsubmitted";
        unsubmitted++;
        avg += 0;
      }
      else
      {
        avg += parseInt(cell[j].innerHTML);
        cell[j].className = "pass";
      }
    }
    avg = Math.round(avg / 5);
    cell[j].innerHTML = avg;
    
    //Final Grades below the value of 40% should have a red background.
    avg < 40 ? (cell[j].className = "fail") : (cell[j].className = "pass");
  }
  
  //report unsubmitted assignments below table
document.getElementById("unsub").innerHTML =
    "Unsibmitted Assignemnets: " + unsubmitted;
}

//function to create and download csv file.
function download_csv() {
  var table = document.getElementById("table");
  var row = table.rows;
  var csv = "";
  
  for (var i = 0; i < row.length; i++) {
    var cell = row[i].cells;
    for (var j = 0; j < cell.length; j++) {
      csv += cell[j].innerHTML;
      csv += "\n";
    }
  }
  var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'studentData.csv';
    hiddenElement.click();
  console.log(csv);
}

