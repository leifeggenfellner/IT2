class Game {
    constructor() {
        this.ball = document.getElementById("ball");
        this.leftPaddle = document.getElementById("leftPaddle");
        this.rightPaddle = document.getElementById("rightPaddle");
        this.board = document.getElementById("myCanvas");
    }

    reset() {
        let ball_values = this.ball.getBoundingClientRect();
        let leftPaddle_values = this.leftPaddle.getBoundingClientRect();
        let rightPaddle_values = this.rightPaddle.getBoundingClientRect();
        let board_values = this.board.getBoundingClientRect();


    }
}