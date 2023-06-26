// All code should be written in this file.

// Global variable setup
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;


// Set variables based on input
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (!player || !moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return;
    }

    if (!validMoveType(moveOneType) || !validMoveType(moveTwoType) || !validMoveType(moveThreeType)) {
        return;
    }

    if (!validMoveValue(moveOneValue) || !validMoveValue(moveTwoValue) || !validMoveValue(moveThreeValue)) {
        return;
    }

    if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
        return;
    }

    if (player ==="Player One") {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === "Player Two") {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    } else {
        console.log("Player must be entered correctly - \"Player One\" or \"Player Two\"");
    }
}

// Helper function - test if moveType is valid
const validMoveType = (moveType) => {
    return  (moveType === "rock") ||
            (moveType === "paper") ||
            (moveType === "scissors");
}

// Helper function - test if moveValue is valid
const validMoveValue = (moveValue) => {
    return  (moveValue >= 1) && (moveValue <= 99);
}

// Return appropriate winner for a specific round
const getRoundWinner = (round) => {
    switch(round) {
        case 1:
            return (roundWinnerHelper(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue));
            break;
        case 2: 
            return (roundWinnerHelper(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue));
            break;
        case 3: 
            return (roundWinnerHelper(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue));
            break;
        default:
            return;
    }
}

// Helper function - determine winner of specific round
const roundWinnerHelper = (playerOneType, playerOneValue, playerTwoType, playerTwoValue) => {
    if (!playerOneType || !playerOneValue || !playerTwoType || !playerTwoValue) {
        return;
    }

    if (playerOneType === "rock") {

    } else if (playerOneType === "paper") {

    } else if (playerOneType === "scissors") {

    } else {
        return;
    }
}