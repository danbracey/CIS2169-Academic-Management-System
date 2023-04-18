function calculateModuleTimetableHours(courseID, moduleCode, data) {
    console.log("Calculating timetabled hours for " + moduleCode)
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
}

function verify(moduleCode) {
    return undefined;
}

function createModule(course, moduleCode, moduleTitle) {
    let moduleCode_verified = verify(moduleCode)
    let moduleTitle_verified = verify(moduleTitle)

    fetch("localhost:3000", {
        method: "POST",
        body: JSON.stringify({
            id: moduleCode_verified,
            title: moduleTitle_verified
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}

window.addEventListener("load", () => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var paramValue = url.searchParams.get("code");
});