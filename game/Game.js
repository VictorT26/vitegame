export class Game {
    constructor(board) {
        this.board = board
        this.player1 = 0
        this.status = 'not-set'
    }

    set setStatus(status) {
        this.status = status
    }
}