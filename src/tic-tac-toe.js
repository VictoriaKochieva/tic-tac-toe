const { ConcatenationScope } = require("webpack");

class TicTacToe {
    constructor() {
     this.step = 'x'
     this.board = [
         [null, null, null], 
         [null, null, null], 
         [null, null, null]
        ]
      
    }

    getCurrentPlayerSymbol() {
      return this.step
    }

    nextTurn(rowIndex, columnIndex) {
        
        if (this.board[rowIndex][columnIndex] == 'o' || this.board[rowIndex][columnIndex] == 'x') {
            return
        }
        this.board[rowIndex][columnIndex] = this.step;

        this.getCurrentPlayerSymbol()
        

        if ( this.step == 'x'){
            return  this.step = 'o'
          } else {
            return  this.step = 'x'
        }

      
    }

    isFinished() {
        return (this.getWinner() != null || this.isDraw())    
    }

    getWinner() {    
        for (let i =0; i < this.board.length; i++) {
           
            if (this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2]){
                return this.board[i][0]
            } else if (this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i]) {
                return this.board[0][i]
            } 
        } if ( this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2]) {
            return this.board[0][0]
        } else if ( this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0]) {
            return this.board[0][2]
        }
    
     return null

        // const winBoardInd =  [
        //     [[[0][0], [1][0], [2][0]]], 
        //     [[0,1], [1,1], [2,2]], 
        //     [[0,2], [1,2], [2,2]], 
        //     [[0,2], [1,2], [2,2]],
        //     [[0,0], [0,1], [0,2]],
        //     [[1,0], [1,1], [1,2]],
        //     [[2,0], [2,1], [2,2]],
        //     [[2,0], [2,1], [2,2]],
        //     [[0,0], [1,1], [2,2]],
        //     [[0,2], [1,1], [2,0]]
        //    ] 

        // for (const combination of winBoardInd) {
        //     for (const combWin of combination ) {
        //         for (const combWin2 of combWin ) {
        //             const [a,b,c] = combWin2;
        //             console.log(this.board[a])
        //             if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
        //                 return  this.board
        //             }
        //         }
               
        //     } 
         
        // //   console.log(a)
        // //   console.log(b)
        // //   console.log(c)
        // //   if (this.board[a][a] === this.board[b][b] && this.board[a][a] === this.board[c][c]) {
        // //     // console.log(this.board)
        // //     // console.log(combination)
        // //     console.log(combination)
                  
        // //   } 
        // } 
      
    }

    noMoreTurns() {
        return (this.board.every(el => el.every(el => el !== null)))         
    }

    isDraw() {
       return (this.noMoreTurns() && this.getWinner() === null)         
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex] || null
    }
}

module.exports = TicTacToe;
