/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let heart = //Con esta variable estoy agregando la informacion de los iconos para luego agregarlas a la funcion ramdomCard
  '<i class="bi bi-suit-heart-fill" style="color: red; font-size: 50px;" ></i>'; // tambien he jugado con el estilo para hacerlas mas grande y rojas tanto diamantes como corazones

let club = '<i class="bi bi-suit-club-fill" style="font-size: 50px;"></i>';
let diamond =
  '<i class="bi bi-suit-diamond-fill" style="color: red; font-size: 50px;"></i>';
let spade = '<i class="bi bi-suit-spade-fill" style="font-size: 50px;"></i>';

window.onload = function() {
  //write your code here
  let generateCard = document.getElementById("generateCard"); // declaro la variable para crear un listener y darle una accion al boton
  generateCard.addEventListener("click", randomCard); // y cargue las cartas aleatoriamente.

  function randomCard() {
    let suits = [heart, club, diamond, spade];
    let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

    let randomSuit = suits[Math.floor(Math.random() * suits.length)];
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    document.getElementById("suitsTop").innerHTML = randomSuit; // union del HTML con JS
    document.getElementById("cardNumber").innerHTML = randomNumber;
    document.getElementById("suitsBtn").innerHTML = randomSuit;
  }

  randomCard();
};
