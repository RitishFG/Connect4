// Creating New Players
let Player1 = prompt("Enter Player 1 Name");
let Player2 = prompt("Enter Player 2 Name");
// Setting board variable which will store the values entered by Players
let board = [];
// Turn will decide who will go next
let turn = 0;
// Display turn
let t = document.querySelector("#turn");
t.innerText = "Turn: " + Player1;
t.style.backgroundColor = "Orange";
// cHeight will give the depth of column initialized by 5 as last row will be populated first
let cHeight = [5, 5, 5, 5, 5, 5, 5];
// Loop to append div inside board
for (let i = 0; i < 6; i++) {
  let a = [];
  for (let j = 0; j < 7; j++) {
    a.push(0);
    let m = document.querySelector("#board");
    let div = document.createElement("div");
    div.classList = "spot";
    div.id = i + "-" + j;
    m.append(div);
  }
  board.push(a);
}
// PushValue will add token to the topmost div in column
let pushValue = (j) => {
  // j will have the column Number, temp will store vacant space in that column
  let temp = cHeight[j];
  let id = temp + "-" + j;
  //   id variable to get the div by id and change color according to turn
  if (temp < 0) {
    return;
  }
  if (turn == 0) {
    let div = document.getElementById(id);
    div.style.backgroundColor = "orange";
    if (temp == -1) {
      turn = 1;
      return;
    }
    board[temp][j] = "O";
    setTimeout(function () {
      checkWinner(temp, j);
    }, 100);
    // checkWinner is used in timeout because color was not changing for last entry and winner was being declared
    turn = 1;
    t.innerText = "Turn: " + Player2;
    t.style.backgroundColor = "Red";
  } else {
    let div = document.getElementById(id);
    div.style.backgroundColor = "red";
    if (temp == -1) {
      turn = 0;
      return;
    }
    board[temp][j] = "R";
    setTimeout(function () {
      checkWinner(temp, j);
    }, 100);
    turn = 0;
    t.innerText = "Turn: " + Player1;
    t.style.backgroundColor = "Orange";
  }
  //   height will be decreased by 1
  temp--;
  cHeight[j] = temp;
};

let checkWinner = (temp, j) => {
  temp++;
  //   temp++ because of timeout function temp has already been decreased
  let flag;
  let player;
  //   flag and player are incorrect because before timeout has occured, turn has changed
  if (turn == 1) {
    flag = "O";
    player = Player1;
  } else {
    flag = "R";
    player = Player2;
  }
  //   to check vertically downwards
  if (temp + 3 <= 5) {
    if (
      board[temp][j] == flag &&
      board[temp + 1][j] == flag &&
      board[temp + 2][j] == flag &&
      board[temp + 3][j] == flag
    ) {
      let res = [
        [temp, j],
        [temp + 1, j],
        [temp + 2, j],
        [temp + 3, j],
      ];
      highlight(res);
      setTimeout(function () {
        alert(player + " Wins!!\nNew Game?");
        location.reload();
      }, 200);
    }
  }
  //   to check right side
  if (j + 3 <= 6) {
    if (
      board[temp][j] == flag &&
      board[temp][j + 1] == flag &&
      board[temp][j + 2] == flag &&
      board[temp][j + 3] == flag
    ) {
      let res = [
        [temp, j],
        [temp, j + 1],
        [temp, j + 2],
        [temp, j + 3],
      ];
      highlight(res);
      setTimeout(function () {
        alert(player + " Wins!!\nNew Game?");
        location.reload();
      }, 200);
    }
  }
  //   to check left side
  if (j - 3 >= 0) {
    if (
      board[temp][j] == flag &&
      board[temp][j - 1] == flag &&
      board[temp][j - 2] == flag &&
      board[temp][j - 3] == flag
    ) {
      let res = [
        [temp, j],
        [temp, j - 1],
        [temp, j - 2],
        [temp, j - 3],
      ];
      highlight(res);
      setTimeout(function () {
        alert(player + " Wins!!\nNew Game?");
        location.reload();
      }, 200);
    }
  }
  //   to check diagnol
  if (temp - 3 >= 0 && j + 3 <= 6) {
    if (
      board[temp][j] == flag &&
      board[temp - 1][j + 1] == flag &&
      board[temp - 2][j + 2] == flag &&
      board[temp - 3][j + 3] == flag
    ) {
      let res = [
        [temp, j],
        [temp - 1, j + 1],
        [temp - 2, j + 2],
        [temp - 3, j + 3],
      ];
      highlight(res);
      setTimeout(function () {
        alert(player + " Wins!!\nNew Game?");
        location.reload();
      }, 200);
    }
  }
  //   to check diagnol
  if (temp + 3 <= 5 && j - 3 >= 0) {
    if (
      board[temp][j] == flag &&
      board[temp + 1][j - 1] == flag &&
      board[temp + 2][j - 2] == flag &&
      board[temp + 3][j - 3] == flag
    ) {
      let res = [
        [temp, j],
        [temp + 1, j - 1],
        [temp + 2, j - 2],
        [temp + 3, j - 3],
      ];
      highlight(res);
      setTimeout(function () {
        alert(player + " Wins!!\nNew Game?");
        location.reload();
      }, 200);
    }
  }
  //   to check diagnol
  if (temp + 3 <= 5 && j + 3 <= 6) {
    if (
      board[temp][j] == flag &&
      board[temp + 1][j + 1] == flag &&
      board[temp + 2][j + 2] == flag &&
      board[temp + 3][j + 3] == flag
    ) {
      let res = [
        [temp, j],
        [temp + 1, j + 1],
        [temp + 2, j + 2],
        [temp + 3, j + 3],
      ];
      highlight(res);
      setTimeout(function () {
        alert(player + " Wins!!\nNew Game?");
        location.reload();
      }, 200);
    }
  }
  //   to check diagnol
  if (temp - 3 >= 0 && j - 3 >= 0) {
    if (
      board[temp][j] == flag &&
      board[temp - 1][j - 1] == flag &&
      board[temp - 2][j - 2] == flag &&
      board[temp - 3][j - 3] == flag
    ) {
      let res = [
        [temp, j],
        [temp - 1, j - 1],
        [temp - 2, j - 2],
        [temp - 3, j - 3],
      ];
      highlight(res);
      setTimeout(function () {
        alert(player + " wins!!\nNew Game");
      }, 200);
    }
  }
};
// Loop to push token inside specified columns
for (let i = 0; i < 7; i++) {
  let m = document.querySelector("#push");
  let btn = document.createElement("button");
  btn.innerText = "Add to this column";
  btn.addEventListener("click", function () {
    // i will be the button number
    pushValue(i);
  });
  m.append(btn);
}
// to change border of winner Connect 4
function highlight(res) {
  //   console.log("in");
  for (let i = 0; i < res.length; i++) {
    let id = res[i][0] + "-" + res[i][1];
    let div = document.getElementById(id);
    div.classList = "result";
  }
}
// console.log(board);
