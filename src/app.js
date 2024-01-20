/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function randomCard() {
    let suits = [
      document.getElementById("heart").innerHTML,
      document.getElementById("club").innerHTML,
      document.getElementById("diamond").innerHTML,
      document.getElementById("spade").innerHTML
    ];
    let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

    let randomSuit = suits[Math.floor(Math.random() * suits.length)];
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    document.getElementById("suitsTop").innerHTML = randomSuit;
    document.getElementById("cardNumber").innerHTML = randomNumber;
    document.getElementById("suitsBtn").innerHTML = randomSuit;
  }

  randomCard();

  let generateCard = document.getElementById("generateCard");
  generateCard.addEventListener("click", randomCard);
};
