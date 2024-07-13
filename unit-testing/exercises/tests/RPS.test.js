const whoWon = require("../RPS.js");

describe("whoWon tests", () => {
    test("return 'TIE!' when players choose the same option", () => {
        let output = whoWon("rock", "rock");
        expect(output).toBe('TIE!');
    });

    test("return 'Player 2 wins!' when player1 chooses rock and player2 chooses paper", () => {
        let output = whoWon("rock", "paper");
        expect(output).toBe('Player 2 wins!');
    });

    test("return 'Player 2 wins!' when player1 chooses paper and player2 chooses scissors", () => {
        let output = whoWon("paper", "scissors");
        expect(output).toBe('Player 2 wins!');
    });

    test("return 'Player 2 wins!' when player1 chooses scissors and player2 chooses rock", () => {
        let output = whoWon("scissors", "rock");
        expect(output).toBe('Player 2 wins!');
    });

    test("return 'Invalid entry' when player1 enters anything other than rock, paper, or scissors", () => {
        let output = whoWon("diapers", "rock");
        expect(output).toBe('Invalid entry');
    });

    test("return 'Invalid entry' when player2 enters anything other than rock, paper, or scissors", () => {
        let output = whoWon("rock", "diapers");
        expect(output).toBe('Invalid entry');
    });
});