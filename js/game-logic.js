// Global variable setup
let playerOneMoveOneType,
    playerOneMoveOneValue,
    playerOneMoveTwoType,
    playerOneMoveTwoValue,
    playerOneMoveThreeType,
    playerOneMoveThreeValue,
    playerOneTotalWins,
    playerTwoMoveOneType,
    playerTwoMoveOneValue,
    playerTwoMoveTwoType,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeType,
    playerTwoMoveThreeValue,
    playerTwoTotalWins;


// Main function - set variables based on input
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (!player || !moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return null;
        console.log("All values must be filled in.");
    }

    if (!validMoveType(moveOneType) || !validMoveType(moveTwoType) || !validMoveType(moveThreeType)) {
        return null;
        console.log("One or more move types are not valid.");
    }

    if (!validMoveValue(moveOneValue) || !validMoveValue(moveTwoValue) || !validMoveValue(moveThreeValue)) {
        return null;
        console.log("One or more move values are not valid.");
    }

    if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
        return null;
        console.log("The values cannot sum to more than 99.");
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

// Main function - return appropriate winner for a specific round
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
            return null;
    }
}

// Helper function - determine winner of specific round
const roundWinnerHelper = (playerOneType, playerOneValue, playerTwoType, playerTwoValue) => {
    if (!playerOneType || !playerOneValue || !playerTwoType || !playerTwoValue) {
        return null;
    }

    if (playerOneType === "rock") {
        if (playerTwoType === "rock") {
            return tieBreaker(playerOneValue, playerTwoValue);
        } else if (playerTwoType === "paper") {
            return "Player Two";
        } else if (playerTwoType === "scissors") {
            return "Player One";
        } else {
            return null;
        }
    } else if (playerOneType === "paper") {
        if (playerTwoType === "rock") {
            return "Player One";
        } else if (playerTwoType === "paper") {
            return tieBreaker(playerOneValue, playerTwoValue);
        } else if (playerTwoType === "scissors") {
            return "Player Two";
        } else {
            return null;
        }
    } else if (playerOneType === "scissors") {
        if (playerTwoType === "rock") {
            return "Player Two";
        } else if (playerTwoType === "paper") {
            return "Player One";
        } else if (playerTwoType === "scissors") {
            return tieBreaker(playerOneValue, playerTwoValue);
        } else {
            return null;
        }
    } else {
        return null;
    }
}

// Helper function - determine winner when move types are the same
const tieBreaker = (playerOneValue, playerTwoValue) => {
    if (playerOneValue > playerTwoValue) {
        return "Player One";
    } else if (playerOneValue < playerTwoValue) {
        return "Player Two";
    } else if (playerOneValue == playerTwoValue) {
        return "Tie";
    } else {
        return null;
    }
}

// Main function - return appropriate winner after all three rounds
const getGameWinner = () => {
    if (!playerOneMoveOneType || !playerOneMoveOneValue || !playerOneMoveTwoType || !playerOneMoveTwoValue || !playerOneMoveThreeType || !playerOneMoveThreeValue || !playerTwoMoveOneType || !playerTwoMoveOneValue || !playerTwoMoveTwoType || !playerTwoMoveTwoValue || !playerTwoMoveThreeType || !playerTwoMoveThreeValue) {
        return null;
        console.log("One or more variables didn't set correctly.");
    }

    playerOneTotalWins = 0;
    playerTwoTotalWins = 0;

    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);

    winCalc(roundOneWinner);
    winCalc(roundTwoWinner);
    winCalc(roundThreeWinner);

    if (playerOneTotalWins > playerTwoTotalWins) {
        return "Player One";
    } else if (playerOneTotalWins < playerTwoTotalWins) {
        return "Player Two";
    } else if (playerOneTotalWins == playerTwoTotalWins) {
        return "Tie";
    } else {
        return;
    }
}

// Helper function - add wins after specific round
const winCalc = (winner) => {
    if (winner === "Player One") {
        playerOneTotalWins = playerOneTotalWins + 1;
    } if (winner === "Player Two") {
        playerTwoTotalWins = playerTwoTotalWins + 1;
    }
}