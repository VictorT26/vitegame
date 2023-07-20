// Class Player will store Player logic for some class Game.js
export class Player {
    constructor(status, color) {
        this.status = status;
        this.color = color;
        //this.actions = [0, 0, 0,]
    }

    set status (status) {
        this.status = status;
    }

    set color (color) {
        this.color = color;
    }
}