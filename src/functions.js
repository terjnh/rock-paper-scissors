import * as CONST from './util/constants';

const computerArray = ['Rock', 'Paper', 'Scissors']

export const testGameFunction = (playerOneChoice, playerTwoChoice) => {

    if (playerOneChoice === CONST.ROCK && playerTwoChoice === CONST.SCISSORS
        || playerOneChoice === CONST.SCISSORS && playerTwoChoice === CONST.PAPER
        || playerOneChoice === CONST.PAPER && playerTwoChoice === CONST.ROCK) {
        return ('Player 1 Wins')
    }
    else if (playerTwoChoice === CONST.ROCK && playerOneChoice === CONST.SCISSORS
        || playerTwoChoice === CONST.SCISSORS && playerOneChoice === CONST.PAPER
        || playerTwoChoice === CONST.PAPER && playerOneChoice === CONST.ROCK) {
        return ('Player 2 Wins')
    }
    else {
        return ('Both Players Draw')
    }
}