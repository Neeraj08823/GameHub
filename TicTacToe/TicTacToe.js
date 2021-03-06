let turn = "X";
let isgameover = false;
var x = 0;
var y = 0;

// function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// function to check for a win
const checkWin = () => {
  var boxtext = document.getElementsByClassName("boxtext");
  var wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";

      if (boxtext[e[0]].innerText === "X") {
        x += 1;
        document.querySelector(".x").innerText =
          boxtext[e[0]].innerText + ": " + x;
      } else if (boxtext[e[0]].innerText === "0") {
        y += 1;
        document.querySelector(".y").innerText =
          boxtext[e[0]].innerText + ": " + y;
      }
      isgameover = true;
      document
        .querySelector(".image")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "20vw";
    }
  });
};

// CheckWin for mediaQuery trigered
const checkWinMob = () => {
  var boxtext = document.getElementsByClassName("boxtext");
  var wins = [
    [0, 1, 2, 8, 10, 0],
    [3, 4, 5, 8, 30, 0],
    [6, 7, 8, 8, 50, 0],
    [0, 3, 6, -12, 30, 90],
    [1, 4, 7, 8, 30, 90],
    [2, 5, 8, 28, 30, 90],
    [0, 4, 8, 8, 30, 45],
    [2, 4, 6, 8, 30, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      if (boxtext[e[0]].innerText === "X") {
        x += 1;
        document.querySelector(".x").innerText =
          boxtext[e[0]].innerText + ": " + x;
      } else if (boxtext[e[0]].innerText === "0") {
        y += 1;
        document.querySelector(".y").innerText =
          boxtext[e[0]].innerText + ": " + y;
      }
      isgameover = true;
      document
        .querySelector(".image")
        .getElementsByTagName("img")[0].style.width = "120px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "44vw";
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      let mediaQuery = window.matchMedia("(max-width: 950px)");
      if (mediaQuery.matches) {
        checkWinMob();
      } else {
        checkWin();
      }
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// reset logic
restart.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".image").getElementsByTagName("img")[0].style.width =
    "0px";
});

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  x = 0;
  y = 0;
  document.querySelector(".x").innerText = "X : ";
  document.querySelector(".y").innerText = "Y : ";
  isgameover = false;
  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".image").getElementsByTagName("img")[0].style.width =
    "0px";
});
