const random1 = Math.floor(Math.random() * 12) + 1
const random2 = Math.floor(Math.random() * 12) + 1
const random3 = Math.floor(Math.random() * 12) + 1
const difficulty = ["easy","medium","hard"]

class Minesweeper {
    constructor(difficulty = "easy") {
        this.board = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"] 
        this.difficulty = difficulty              
    }

    addBombsToBoard() {
        if(this.difficulty === "easy") {
        this.board[random1 - 1] = "b"
        }

        if(this.difficulty === "medium") {
            if(random1 === random2 && random1 !== 12) {
                random2 += 1
            }
            if(random1 === random2 && random1 === 12) {
                random2 -= 1
            }
            this.board[random1 - 1] = "b"
            this.board[random2 - 1] = "b"
        }
        
        if(this.difficulty === "hard") {
            //logic here may be shite and can break game or only two bombs
            if(random1 === random2 && random2 !== 12) {
                random2 += 1
            }
            if(random1 === random2 && random2 === 12) {
                random2 -= 1
            
            if(random1 === random3 && random3 !== 12) {
                random3 += 1
            }
            if(random1 === random3 && random3 === 12) {
                random3 -= 1
            }
            if(random2 === random3 &&  random3 !== 12) {
                random3 += 1
            } 
            if(random2 === random3 &&  random3 === 12) {
                random3 -= 1
            }   

            this.board[random1 - 1] = "b"
            this.board[random2 - 1] = "b"
            this.board[random3 - 1] = "b"
            }
    }
}

    checkIfWin() {
    const chosenSquares = this.board.filter(box => box == "x").length 
    if(this.difficulty === "easy") {
        return chosenSquares === 11
    }
    if(this.difficulty === "medium") {
        return chosenSquares === 10
    }
    if(this.difficulty === "hard") {
        return chosenSquares === 9
    }
       
    }
}



window.onload = function() { 

//choosing difficulty
const difficulty = document.getElementById("difficulty")
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");

function newGame(difficultyLevel) {
    const game = new Minesweeper(difficultyLevel)
    game.addBombsToBoard()
    difficulty.style.display = "none"
    gameLogic(game)  
}

easy.onclick = function(){
    newGame("easy")
};

medium.onclick = function(){
    newGame("medium")
};

hard.onclick = function(){
    newGame("hard")
};


//playing game
function gameLogic(game) {
const userMessage = document.getElementById("user-message");

const boxOne = document.getElementById("1");
const boxTwo = document.getElementById("2");
const boxThree = document.getElementById("3");
const boxFour = document.getElementById("4");
const boxFive = document.getElementById("5");
const boxSix = document.getElementById("6");
const boxSeven = document.getElementById("7");
const boxEight = document.getElementById("8");
const boxNine = document.getElementById("9");
const boxTen = document.getElementById("10");
const boxEleven = document.getElementById("11");
const boxTwelve = document.getElementById("12");



function boxLogic(num, box) {
    if(game.board[num - 1] === "x") {
        userMessage.innerHTML = "Choose another box"
    }
    else {
        userMessage.innerHTML = " "

        if(game.board[num - 1] === "-") {
        game.board[num - 1] = "x"
        box.innerHTML = "X";
        }  
        
        if(game.checkIfWin()) {
            userMessage.innerHTML = `You win`
            endGame()
            }

        if(game.board[num - 1] === "b") {
            box.innerHTML = "B";
            userMessage.innerHTML = `You die`
            endGame()
            }   
        
}
}

function endGame() {
    boxOne.onclick = null
    boxTwo.onclick = null
    boxThree.onclick = null
    boxFour.onclick = null
    boxFive.onclick = null
    boxSix.onclick = null
    boxSeven.onclick = null
    boxEight.onclick = null
    boxNine.onclick = null
    boxTen.onclick = null
    boxEleven.onclick = null
    boxTwelve.onclick = null
    
    const newGame = document.getElementById("new-game");
    newGame.innerHTML = "New Game?"

    const refreshPage = () => {
        location.reload();
      }
      
    newGame.addEventListener('click', refreshPage)
}

boxOne.onclick = function(){
    boxLogic(1, boxOne)
};


boxTwo.onclick = function(){
    boxLogic(2, boxTwo)
};


boxThree.onclick = function(){
    boxLogic(3, boxThree)
};


boxFour.onclick = function(){
    boxLogic(4, boxFour)
};


boxFive.onclick = function(){
    boxLogic(5, boxFive)
};


boxSix.onclick = function(){
    boxLogic(6,boxSix)
};


boxSeven.onclick = function(){
    boxLogic(7,boxSeven)
};


boxEight.onclick = function(){
    boxLogic(8,boxEight)
};


boxNine.onclick = function(){
    boxLogic(9,boxNine)
};

boxTen.onclick = function(){
    boxLogic(10,boxTen)
};

boxEleven.onclick = function(){
    boxLogic(11,boxEleven)
};

boxTwelve.onclick = function(){
    boxLogic(12,boxTwelve)
};
}

}
