function getCourseData(courseID) {
    let ourRequest;
    ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://localhost:3000/degreePrograms?_embed=Modules&_embed=Assignments&_embed=Timetable&_embed=Learning_objectives');
    ourRequest.onload = function(){
        //console.log(ourRequest.responseText);
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData)
        let course = ourData[courseID];
        console.log(course);

        // Change title
        document.title = course["Course"] + " | Academic Management System";

        // Overview Information
        document.getElementById("module_count").innerHTML = ourData[courseID]["Modules"].length
        document.getElementById("timetabled_hours_overview").innerHTML = calculateCourseTimetableHours(courseID, ourData) + " hrs"

        var table = document.getElementById("courseModules");

        for(let i=0; i < ourData[courseID]["Modules"].length; i++) {
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            //Get LOs
            let LOs = [];
            try {
                for(let lo=0; lo < ourData[courseID]["Modules"][i]["Learning_objectives"].length; lo++) {
                    let objective = ourData[courseID]["Modules"][i]["Learning_objectives"][lo]
                    LOs.push('<td><span class="tooltip2" title="' + objective["Objective"] + '">' +
                        objective["Name"] + '</span>')
                }
            } catch(e) {
                console.warn("Unable to find learning objectives for " + ourData[courseID]["id"])
            }


            cell1.outerHTML = '<td><a href=' + i + '"course.html?id=">' + ourData[courseID]["Modules"][i]["Name"] + '</a></td>';
            //cell2.innerHTML = LOs;
            cell3.innerHTML = ourData[i]["Modules"][i]["Assessments"].length;
            cell4.innerHTML = calculateModuleTimetableHours(i, ourData[i]["Modules"][i]["Code"], ourData)
        }
    };
    ourRequest.send();
}

function calculateCourseTimetableHours(courseID, data) {
    console.log("Calculating timetabled hours for " + courseID)
    try {
        let hours = 0;
        for(let m = 0; m < data[courseID]["Modules"].length; m++) {
            for(let i = 0; i < data[courseID]["Modules"][m]["Timetable"].length; i++) {
                let secondsPassed = data[courseID]["Modules"][m]["Timetable"][i]["Ends_at"] -
                    data[courseID]["Modules"][m]["Timetable"][i]["Begins_at"]
                hours += Math.floor((secondsPassed % 86400) / 1440) + 1
            }
        }
        console.log("Calculated timetabled hours: " + hours);
        return hours;
    } catch(e) {
        console.error("Unable to calculate timetabled hours for " + courseID)
        return 0;
    }
}