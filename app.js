//Variables
let score = 0;
const score = document.querySelector("#totalPoints");
const diceContainer = document.querySelector("#dice-container");
const rollButton = document.querySelector("#roll-button");
const diceImage = document.querySelector("#diceImage");
const winLose = document.querySelector("#player-winlose");

diceContainer.style.display = "none";

//Start Button
rollButton.addEventListener("click", () => {
    let randomNumber = (Math.floor(Math.random() * 6 + 1));
    number(randomNumber);
})

//Dice Number
const number = (randomNumber) => {
    diceContainer.style.display = "block";
    diceImage.src = `dice${randomNumber}.png`;

if (randomNumber === 1) {
    score.textContent = 0;
    winLose.textContent = "Sorry! You rolled a 1! You Lose!"
}
 else {
     score += randomNumber;
     score.textContent = `${score}`;
     if (score >= 20) {
         winLose.textContent = "Hooray! You win!";
     }

 }
}
