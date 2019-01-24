var cards;
var cardsInPlay;
var cardOne;
var cardTwo;
var cardThree;
var cardFour;

var cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
cardOne = cards[0];
cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


if (cardsInPlay.length === 2) {
	console.log(checkforMatch);
} 
else if (cardsInPlay[0] === cardsInPlay [1]) {
	alert("You found a match!");
}
else (cardsInPlay [0] != cardsInPlay[1]) {
	alert("Sorry, try again.");
}
