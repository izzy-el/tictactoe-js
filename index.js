let determineElement = 0;

function insert(id) {
    if(document.getElementById(id).innerHTML !== "") {
        window.alert("This field is not empty! Please select a valid field.");
    }
    else {
        if(determineElement % 2 == 0) {
            document.getElementById(id).innerHTML = "X";
        } else {
            document.getElementById(id).innerHTML = "O";
        }
    }    

    determineElement++;
}