let btns = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let value = true;
let counter=0;
let winner=false;
let h1 = document.querySelector("h1");
let start=document.querySelector(".start");
const winArr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


  for (let btn of btns) {
    btn.addEventListener("click", function () {
        counter++;
      if (value) {
        btn.innerText = "X";
        value = false;
      } else {
        btn.innerText = "O";
        value = true;
      }
      btn.disabled = true;
      checkWinner();
      checkDraw();
    });
  }


function checkDraw() {
    if(winner!=true && counter==9){
     h1.innerHTML = `<big style="color: #510904ff">    Draw</big>`;
    }
}

function checkWinner() {
  for (let pattern of winArr) {
    let pos1 = btns[pattern[0]].innerText;
    let pos2 = btns[pattern[1]].innerText;
    let pos3 = btns[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos1 === pos3) {
        h1.innerHTML = `<big style="color: #510904ff">    Winner: ${pos1}</big>`;
        winner = true;
        callDis();
      }
    }
  }
}

function callDis(){
        for(let ele of btns){
        ele.disabled=true;
    }
}

reset.addEventListener("click", () => {
  for (text of btns) {
    text.innerText = "";
  }
  for(ele of btns){
    ele.disabled=false;
  }
  h1.innerText = "Tic Tac Toe Game";
  winner=false;
  value=true;
  counter=0;
});


