export function getBoard(gameStatus) {
    let board = [];
    let current;
    const status = gameStatus;
    let firstChar;
    let secondChar;

    if(status == 'empty') {
        firstChar = '';
        secondChar = '';
    } else {
        firstChar = 'O'
        secondChar = 'X'
    }


    for(let i = 0; i <= 8; i++) {
        current = Math.floor(Math.random() * 2);
        console.log(current)

            
        if(current == 0) {
            console.log("FUCKKKK")
            board.push(<div> {firstChar} </div>);
        } else {
            board.push(<div> {secondChar} </div>);
        }
    }
    console.log(board);
    return board;
}
