function getDegreeProgramData() {
    /**const ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://localhost:3000/degreePrograms?_embed=Modules');
    ourRequest.onload = function(){
        console.log(ourRequest.responseText);
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);
        // Find a <table> element with id="myTable":

    };
    ourRequest.send();**/

    var table = document.getElementById("degreePrograms");
    degreePrograms = JSON.parse(localStorage.getItem('degreePrograms'));
    console.log(degreePrograms);

    for(let i=0; i < degreePrograms.length; i++) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.outerHTML = '<td><a href=course.html?id=' + i + '>' + degreePrograms[i]["Name"] + '</a> (' + degreePrograms[i]["id"] + ') </td>';
        cell2.innerHTML = degreePrograms[i]["Level"];
        cell3.innerHTML = degreePrograms[i]["Modules"].length;
    }
}