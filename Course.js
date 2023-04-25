function getCourseData(courseID) {
    let course = getCourse(courseID);
    console.log(JSON.parse(localStorage.getItem('degreePrograms')));

    // Change title
    document.title = course["Name"] + " | Academic Management System";

    // Overview Information
    document.getElementById("module_count").innerHTML = course["Modules"].length
    document.getElementById("assessment_count").innerHTML = course["Assessments"].length
    //document.getElementById("timetabled_hours_overview").innerHTML = calculateCourseTimetableHours(course, ourData) + " hrs"

    var table = document.getElementById("courseModules");

    for(let i=0; i < course["Modules"].length; i++) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        //Get LOs
        let LOs = [];
        try {
            for(let lo=0; lo < course["Modules"][i]["Learning_objectives"].length; lo++) {
                let objective = course["Modules"][i]["Learning_objectives"][lo]
                LOs.push('<td><span class="tooltip" title="' + objective["Objective"] + '">' +
                    objective.id + '</span></td>')
            }
        } catch(e) {
            console.warn("Unable to find learning objectives for " + course["id"])
        }

        console.log(LOs);


        cell1.outerHTML = '<td><a href=' + i + '"course.html?id=">' + course["Modules"][i]["Name"] + '</a></td>';
        cell2.outerHTML = LOs;
        cell3.innerHTML = ourData[i]["Modules"][i]["Assessments"].length;
        cell4.innerHTML = calculateModuleTimetableHours(i, ourData[i]["Modules"][i]["Code"], ourData)
    }
}

/**function calculateCourseTimetableHours(course, data) {
    console.log("Calculating timetabled hours for " + course.id)
    console.log(course["Modules"]);
    try {
        let hours = 0;
        for(let i = 0; i < course["Timetable"].length; i++) {
            let secondsPassed = course["Timetable"][i]["Ends_at"] -
                course["Timetable"][i]["Begins_at"]
            hours += Math.floor((secondsPassed % 86400) / 1440) + 1
        }
        /**for(let m = 0; m < data["Modules"].length; m++) {
            for(let i = 0; i < data["Modules"][m]["Timetable"].length; i++) {
                let secondsPassed = data["Modules"][m]["Timetable"][i]["Ends_at"] -
                    data["Modules"][m]["Timetable"][i]["Begins_at"]
                hours += Math.floor((secondsPassed % 86400) / 1440) + 1
            }
        }
        console.log("Calculated timetabled hours: " + hours);
        return hours;
    } catch(e) {
        console.error("Unable to calculate timetabled hours for " + course.id)
        return 0;
    }
}**/

function getCourse(code) {
    for (let i = 0; i < JSON.parse(localStorage.getItem("degreePrograms")).length; i++) {
        if (JSON.parse(localStorage.getItem("degreePrograms"))[i].id === code) {
            return JSON.parse(localStorage.getItem("degreePrograms"))[i];
        }
    }
}