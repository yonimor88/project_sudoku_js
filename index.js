//~~~~~~~~~~~~~~~~~~~~~~~~Project Sudoku!!!~~~~~~~~~~~~~~~~~~~~~~
// Function that validates when if the user entered the correct username and password
const nextPage = () => {
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    if (user != 'abcd' && pass != '1234') {
        document.getElementById('register_error').innerHTML = 'your username or password are incorrect'
        document.getElementById('register_error').style.color= "red"
    } else {
        window.location.href = 'level.html'
    }
}

// Sudoku matrices to be later used in the game function
let sudoku1 = [
    [8, 2, 7, 1, 5, 4, 3, 9, 6],
    [9, 6, 5, 3, 2, 7, 1, 4, 8],
    [3, 4, 1, 6, 8, 9, 7, 5, 2],
    [5, 9, 3, 4, 6, 8, 2, 7, 1],
    [4, 7, 2, 5, 1, 3, 6, 8, 9],
    [6, 1, 8, 9, 7, 2, 4, 3, 5],
    [7, 8, 6, 2, 3, 5, 9, 1, 4],
    [1, 5, 4, 7, 9, 6, 8, 2, 3],
    [2, 3, 9, 8, 4, 1, 5, 6, 7]];
let sudoku2 = [
    [7, 3, 5, 6, 1, 4, 8, 9, 2],
    [8, 4, 2, 9, 7, 3, 5, 6, 1],
    [9, 6, 1, 2, 8, 5, 3, 7, 4],
    [2, 8, 6, 3, 4, 9, 1, 5, 7],
    [4, 1, 3, 8, 5, 7, 9, 2, 6],
    [5, 7, 9, 1, 2, 6, 4, 3, 8],
    [1, 5, 7, 4, 9, 2, 6, 8, 3],
    [6, 9, 4, 7, 3, 8, 2, 1, 5],
    [3, 2, 8, 5, 6, 1, 7, 4, 9]]
let sudoku3 = [
    [4, 8, 9, 3, 1, 5, 2, 6, 7],
    [1, 6, 2, 4, 9, 7, 3, 5, 8],
    [3, 5, 7, 2, 8, 6, 9, 1, 4],
    [8, 9, 5, 6, 3, 1, 4, 7, 2],
    [6, 2, 1, 7, 4, 8, 5, 9, 3],
    [7, 4, 3, 5, 2, 9, 1, 8, 6],
    [9, 1, 4, 8, 7, 3, 6, 2, 5],
    [2, 7, 6, 1, 5, 4, 8, 3, 9],
    [5, 3, 8, 9, 6, 2, 7, 4, 1]]
let sudoku4 = [
    [1, 8, 4, 9, 6, 3, 7, 2, 5],
    [5, 6, 2, 7, 4, 8, 3, 1, 9],
    [3, 9, 7, 5, 1, 2, 8, 6, 4],
    [2, 3, 9, 6, 5, 7, 1, 4, 8],
    [7, 5, 6, 1, 8, 4, 2, 9, 3],
    [4, 1, 8, 2, 3, 9, 6, 5, 7],
    [9, 4, 1, 3, 7, 6, 5, 8, 2],
    [6, 2, 3, 8, 9, 5, 4, 7, 1],
    [8, 7, 5, 4, 2, 1, 9, 3, 6]]

// Variable that stores all the sudoku boards
let allSudokus = [sudoku1, sudoku2, sudoku3, sudoku4]
// Variable that takes all the board and save one inside it at random
let randomSudoku = allSudokus[Math.floor(Math.random() * allSudokus.length)]


// Function that reloads the page and resets the board when pressing the "Again" button
const again = () => {
    location.reload()
}

// Function that checks if the user inputed numbers within the board matches the Solved Sudoku matrix
// by pressing on the "Finish" button and gives an error if the inputed data does not match the 
// existing Matrix.
let gameValid = document.getElementById('game_valid')
const finishBoard = () => {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let cellid = document.getElementById(`r${r}c${c}`);
            try { var cellValue = document.getElementById(`input_r${r}c${c}`).value } catch (e) { }   
            if (cellValue == randomSudoku[r][c] || cellid.innerHTML == randomSudoku[r][c]) {
                gameValid.style.color = "lightgreen"
                gameValid.innerHTML = 'congratualtions, you win!!!'
            } else {
                gameValid.style.color = "red"
                gameValid.innerHTML = 'Sorry, the puzzle is not correct'
                break;
            }
        }
        break;
    }
}

// Function that checks if the inputed number is correct or not
const checkBoard = () => {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let cellid = document.getElementById(`r${r}c${c}`);
            try { var cellValue = document.getElementById(`input_r${r}c${c}`).value } catch (e) { }   
            if (cellValue == randomSudoku[r][c] || cellid.innerHTML == randomSudoku[r][c]) {
                cellid.style.backgroundColor = "lightgreen"
            } else {
                cellid.style.backgroundColor = "red"

            }
        }
    }
}

// Function that solves the board when the user press the "Solve" button
const solveBoard = () => {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let cellid = document.getElementById(`r${r}c${c}`);
            cellid.innerHTML = randomSudoku[r][c]
        }
    }
}