let determineElement = 0;
let boardGame = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

function insert(id) {
    if(document.getElementById(id).innerHTML != "") {
        window.alert("This field is not empty! Please select a valid field.");
    }
    else {
        if(determineElement % 2 == 0) {
            document.getElementById(id).innerHTML = "X";
            addArray(id, 'X');
        } else {
            document.getElementById(id).innerHTML = "O";   
            addArray(id, 'O'); 
        }

        determineElement++;
    }
    
}

function addArray(id, symbol) {
    if(id <= 3) {
        boardGame[0][id - 1] = symbol;
    } else if(id > 3 && id <= 6) {
        boardGame[1][id - 4] = symbol;
    } else {
        boardGame[2][id - 7] = symbol;
    }

    console.log(boardGame);
}
