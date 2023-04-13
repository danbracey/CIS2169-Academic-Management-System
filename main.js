function getDegreeProgramData() {
  const ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'data.json');
  ourRequest.onload = function(){
    console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    // Find a <table> element with id="myTable":
    var table = document.getElementById("degreePrograms");

    for(let i=0; i < ourData.length; i++) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      cell1.outerHTML = '<td><a href=course.html?id=' + i + '>' + ourData[i]["Name"] + '</a></td>';
      cell2.innerHTML = ourData[i]["Name"];
      cell3.innerHTML = ourData[i]["Modules"].length;
    }
  };
  ourRequest.send();
}

function getCourseData(courseID) {
  let ourRequest;
  ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'data.json');
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    let course = ourData[courseID];

    // Change title
    document.title = course["Course"] + " | Academic Management System";

    // Overview Information
    document.getElementById("timetabled_hours_overview").innerHTML = calculateCourseTimetableHours(courseID, ourData) + " hrs"

    var table = document.getElementById("degreePrograms");

    for(let i=0; i < ourData.length; i++) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      cell1.outerHTML = '<td><a href=' + i + '"course.html?id=">' + ourData[i]["Course"] + '</a></td>';
      cell2.innerHTML = ourData[i]["Name"];
      cell3.innerHTML = ourData[i]["Modules"].length;
    }
  };
  ourRequest.send();
}

function calculateCourseTimetableHours(courseID, data) {
  console.log("Calculating timetabled hours")
  console.log(data)

  let hours = 0;
  for(let m = 0; m < data[courseID]["Modules"].length; m++) {
    for(let i = 0; i < data[courseID]["Modules"][m]["Timetable"].length; i++) {
      let secondsPassed = data[courseID]["Modules"][m]["Timetable"][i]["Ends_at"] - data[courseID]["Modules"][m]["Timetable"][i]["Begins_at"]
      hours += Math.floor((secondsPassed % 86400) / 1440) + 1
    }
  }

  console.log("Calculated timetabled hours: " + hours);
  return hours;
}


