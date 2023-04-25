//Begin by loading all data. If the local storage does not have this information, get it from JSON.
window.onload = function() {
    localStorage.getItem('academics') ? JSON.parse(localStorage.getItem('academics')) : saveDataToLocalStorage('academics');
    localStorage.getItem('assessments') ? JSON.parse(localStorage.getItem('assessments')) : saveDataToLocalStorage('assessments');
    localStorage.getItem('degreePrograms') ? JSON.parse(localStorage.getItem('degreePrograms')) : saveDataToLocalStorage('degreePrograms');
    localStorage.getItem('learningObjectives') ? JSON.parse(localStorage.getItem('learningObjectives')) : saveDataToLocalStorage('learningObjectives');
    localStorage.getItem('modules') ? JSON.parse(localStorage.getItem('modules')) : saveDataToLocalStorage('modules');
    localStorage.getItem('timetable') ? JSON.parse(localStorage.getItem('timetable')) : saveDataToLocalStorage('timetable');
}

function getRelationships() {
    let degreePrograms = JSON.parse(localStorage.getItem('degreePrograms'));
    console.log(degreePrograms);
    //For each degree program...
    for(let i = 0; i < degreePrograms.length; i++) {
        //Attach each module
        //Save the current modules first
        console.info("Getting relationships for " + degreePrograms[i].Name + "(" + degreePrograms[i].id + ")");
        console.info("Getting Module information for " + degreePrograms[i].Name + "(" + degreePrograms[i].id + ")");
        let modules = degreePrograms[i]["Modules"];
        let expandedModules = [];
        for(let m = 0; m < modules.length; m++) {
            for (let i = 0; i < JSON.parse(localStorage.getItem('modules')).length; i++) {
                if (JSON.parse(localStorage.getItem('modules'))[i].id === modules[m]) {
                    expandedModules.push(JSON.parse(localStorage.getItem('modules'))[i]);
                }
            }
        }

        delete degreePrograms[i]["Modules"];
        degreePrograms[i]["Modules"] = expandedModules;
        localStorage.setItem('degreePrograms', degreePrograms);

        //For each module, replace learning objectives
        for(let m = 0; m <  degreePrograms[i]["Modules"].length; m++) {
            console.info("Finding learning objectives for " + degreePrograms[i]["Modules"][m].Name)
            let learning_objectives = degreePrograms[i]["Modules"][m]["Learning_objectives"];
            let expandedLOs = [];
            for(let lo = 0; lo < degreePrograms[i]["Modules"][m]["Learning_objectives"].length; lo++) {
                if (JSON.parse(localStorage.getItem('learningObjectives'))[i].id === learning_objectives[i]) {
                    expandedLOs.push(JSON.parse(localStorage.getItem('learningObjectives'))[i]);
                }
            }

            delete degreePrograms[i]["Modules"][m]["Learning_objectives"];
            degreePrograms[i]["Modules"][m]["Learning_objectives"] = expandedLOs;

            localStorage.setItem('degreePrograms', degreePrograms);

            console.info("Finding assessments for " + degreePrograms[i]["Modules"][m].Name)
            delete degreePrograms[i]["Modules"][m]["Assessments"];
            console.warn(getAssessments(degreePrograms[i]["Modules"][m].id));
            //degreePrograms[i]["Modules"][m]["Assessments"].push();
        }
    }

    return degreePrograms;
    //
}

function getModules(module) {
    console.log("Searching for Modules " + module)
    const toReturn = [];
    for(let m = 0; m < module.length; m++) {
        for (let i = 0; i < JSON.parse(localStorage.getItem('modules')).length; i++) {
            if (JSON.parse(localStorage.getItem('modules'))[i].id === m) {
                toReturn.push = JSON.parse(localStorage.getItem('modules'))[i];
            }
        }
    }

    return toReturn;
}

function getAssessments(module) {
    console.log("Searching for Assessments for modules " + module)
    console.warn(localStorage.getItem('modules'));
    const toReturn = [];
    for(let m = 0; m < module.length; m++) {
        //Loop through each module and see if we can match it to user input
        for (let i = 0; i < JSON.parse(localStorage.getItem('modules')).length; i++) {
            if (JSON.parse(localStorage.getItem('assessments'))[i].Name === m) {
                toReturn.push = JSON.parse(localStorage.getItem('assessments'))[i];
            }
        }
    }

    return toReturn;
}

function saveDataToLocalStorage(type) {
    const ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', type + '.json');
    ourRequest.onload = function () {
        localStorage.setItem(type, ourRequest.responseText)
    };
    ourRequest.send();
}

function reloadAllData() {
    saveDataToLocalStorage('academics');
    saveDataToLocalStorage('assessments');
    saveDataToLocalStorage('degreePrograms');
    saveDataToLocalStorage('learningObjectives');
    saveDataToLocalStorage('modules');
    saveDataToLocalStorage('timetable');
}