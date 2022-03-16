import { testGameFunction } from "./functions";
import * as CONST from './util/constants';

// Player 1 win scenarios
test('P1-Rock, P2-Scissors, P1 win expected', () => {
    expect(testGameFunction(CONST.ROCK, CONST.SCISSORS)).toBe("Player 1 Wins");
});
test('P1-Scissors, P2-Paper, P1 win expected', () => {
    expect(testGameFunction(CONST.SCISSORS, CONST.PAPER)).toBe("Player 1 Wins");
});
test('P1-Paper, P2-Rock, P1 win expected', () => {
    expect(testGameFunction(CONST.PAPER, CONST.ROCK)).toBe("Player 1 Wins");
});

// Player 2 win scenarios
test('P1-Scissors, P2-Rock, P2 win expected', () => {
    expect(testGameFunction(CONST.SCISSORS, CONST.ROCK)).toBe("Player 2 Wins");
});
test('P1-Paper, P2-Scissors, P2 win expected', () => {
    expect(testGameFunction(CONST.PAPER, CONST.SCISSORS)).toBe("Player 2 Wins");
});
test('P1-Rock, P2-Paper, P2 win expected', () => {
    expect(testGameFunction(CONST.ROCK, CONST.PAPER)).toBe("Player 2 Wins");
});

// Game Draw scenarios
test('P1-Rock, P2-Rock, Draw expected', () => {
    expect(testGameFunction(CONST.ROCK, CONST.ROCK)).toBe("Both Players Draw");
});
test('P1-Paper, P2-Paper, Draw expected', () => {
    expect(testGameFunction(CONST.PAPER, CONST.PAPER)).toBe("Both Players Draw");
});
test('P1-Scissors, P2-Scissors, Draw expected', () => {
    expect(testGameFunction(CONST.SCISSORS, CONST.SCISSORS)).toBe("Both Players Draw");
});