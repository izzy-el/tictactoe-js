let determineElement = 0;

function insert(id) {
    if(determineElement % 2 == 0) {
        document.getElementById(id).innerHTML = "x";
    } else {
        document.getElementById(id).innerHTML = "o";
    }
    determineElement++;
}