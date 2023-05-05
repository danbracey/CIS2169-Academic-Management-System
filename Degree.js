function getDegreeProgramData() {
    const ourRequest = new XMLHttpRequest();
    //Open JSON file containing degree programs
    ourRequest.open('GET', '/database/degree_programs.json');
    ourRequest.onload = function(){
        //Parse data and store it
        var ourData = JSON.parse(ourRequest.responseText);
        var table = document.getElementById("degreePrograms");

        for(let i=0; i < ourData.length; i++) {
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            cell1.outerHTML = '<td><a href=course.html?id=' + i + '>' + ourData[i]["name"] + '</a> (' + ourData[i]["id"] + ') </td>';
            cell2.innerHTML = ourData[i]["level"];
            cell3.innerHTML = ourData[i]["Modules"].length;
        }
    };
    ourRequest.send();
}