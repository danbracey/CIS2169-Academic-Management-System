function getJSON(type) {
    const ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '/json/' + type + '.json', false);
    ourRequest.send();
    return ourRequest.responseText;
}

function mergePivotTables() {

}