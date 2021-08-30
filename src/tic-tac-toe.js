class TicTacToe {
	
	constructor() {
	this.currentPlayer = 'x';
	
	this.gameField = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];
	}
	
    getCurrentPlayerSymbol() {
		return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
		if (this.gameField[rowIndex][columnIndex] === null) {
			this.gameField[rowIndex][columnIndex] = this.currentPlayer;
			this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
		}	else return null;
    }

    isFinished() {
		return (this.getWinner() != null || this.isDraw());
    }

    getWinner() {
		return checkWinner(this.gameField);		
    }

    noMoreTurns() {
		for (let i = 0; i < this.gameField.length; i++) {
			if (this.gameField[i].includes(null))
			return false;
		}
		return true;
    }

    isDraw() {
		return (this.noMoreTurns() && this.getWinner() == null);
    }

    getFieldValue(rowIndex, colIndex) {
		return this.gameField[rowIndex][colIndex];
    }
	

}

function checkWinner(arr) {
		for (let i = 0; i < arr.length; i++) {
				if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2])
					return arr[i][0];
				else if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i])
					return arr[0][i];				
			}
		if (arr[0][0] === arr[1][1] && arr[1][1] == arr[2][2])
				return arr[0][0];
		else if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0])
			return arr[0][2];
		else return null;
		}

module.exports = TicTacToe;
