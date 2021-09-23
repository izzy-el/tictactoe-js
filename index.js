let determineElement = 0; //Used to determine if it is going to be a 'X' or a 'O' 
let boardGame = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; //Initial values for the array representing the board game
let isOver = false; //Inform if the game is over or not

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
        displayPlayersTurn();
    }

    checkWinner(boardGame);

}

function displayPlayersTurn() {
    if(determineElement % 2 == 0) {
        document.getElementById("players-turn").innerHTML = 1;
    } else {
        document.getElementById("players-turn").innerHTML = 2;
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

function checkWinner(array) {
    //It checks every possible way a player can win the game
    if(array[0][0] == 'X' && array[0][1] == 'X' && array[0][2] == 'X') {
        window.alert("Player 1 Won!");
        isOver = true;
    }
    else if(array[1][0] == 'X' && array[1][1] == 'X' && array[1][2] == 'X') {
        window.alert("Player 1 Won!");
        isOver = true;
    }
    else if(array[2][0] == 'X' && array[2][1] == 'X' && array[2][2] == 'X') {
        window.alert("Player 1 Won!");
        isOver = true;
    }
    else if(array[0][0] == 'X' && array[1][0] == 'X' && array[2][0] == 'X') {
        window.alert("Player 1 Won!");
        isOver = true;
    }
    else if(array[0][1] == 'X' && array[1][1] == 'X' && array[2][1] == 'X') {
        window.alert("Player 1 Won!");
        isOver = true;
    }
    else if(array[0][2] == 'X' && array[1][2] == 'X' && array[2][2] == 'X') {
        window.alert("Player 1 Won!");
        isOver = true;
    }
    else if(array[0][0] == 'X' && array[1][1] == 'X' && array[2][2] == 'X') {
        window.alert("Player 1 Won!");
        isOver = true;
    }
    else if(array[0][2] == 'X' && array[1][1] == 'X' && array[2][0] == 'X') {
        window.alert("Player 1 Won!");
        isOver = true;
    }
    else if(array[0][0] == 'O' && array[0][1] == 'O' && array[0][2] == 'O') {
        window.alert("Player 2 Won!");
        isOver = true;
    }
    else if(array[1][0] == 'O' && array[1][1] == 'O' && array[1][2] == 'O') {
        window.alert("Player 2 Won!");
        isOver = true;
    }
    else if(array[2][0] == 'O' && array[2][1] == 'O' && array[2][2] == 'O') {
        window.alert("Player 2 Won!");
        isOver = true;
    }
    else if(array[0][0] == 'O' && array[1][0] == 'O' && array[2][0] == 'O') {
        window.alert("Player 2 Won!");
        isOver = true;
    }
    else if(array[0][1] == 'O' && array[1][1] == 'O' && array[2][1] == 'O') {
        window.alert("Player 2 Won!");
        isOver = true;
    }
    else if(array[0][2] == 'O' && array[1][2] == 'O' && array[2][2] == 'O') {
        window.alert("Player 2 Won!");
        isOver = true;
    }
    else if(array[0][0] == 'O' && array[1][1] == 'O' && array[2][2] == 'O') {
        window.alert("Player 2 Won!");
        isOver = true;
    }
    else if(array[0][2] == 'O' && array[1][1] == 'O' && array[2][0] == 'O') {
        window.alert("Player 2 Won!");
        isOver = true;
    }
    else if(isOver == false && determineElement == 9) {
        isOver = true;
        window.alert("It is a TIE!");
    }

}

function resetBoard() {
    document.getElementById("players-turn").innerHTML = 1;
    determineElement = 0;
    isOver = false;
    boardGame = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    document.getElementById('1').innerHTML = "";
    document.getElementById('2').innerHTML = "";
    document.getElementById('3').innerHTML = "";
    document.getElementById('4').innerHTML = "";
    document.getElementById('5').innerHTML = "";
    document.getElementById('6').innerHTML = "";
    document.getElementById('7').innerHTML = "";
    document.getElementById('8').innerHTML = "";
    document.getElementById('9').innerHTML = "";
}