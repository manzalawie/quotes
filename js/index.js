// Public variables
var paraghraph = document.getElementById("paragraph");
var previousNumber = null;

function changeQuote() {
  // random var to choose a random number
  var randomNumber;
  // condition to return a random number from 1 to 10 again if randomNumber === previousNumber
  do {
    randomNumber = Math.floor(Math.random() * 10) + 1;
  } while (randomNumber === previousNumber);

  // equals the new randomNumber to the previousNumber
  previousNumber = randomNumber;

  if (randomNumber == 1) {
    paraghraph.innerHTML = `“Be yourself; everyone else is already taken.”
    <br /> <br /> ― Oscar Wilde`;
  } else if (randomNumber == 2) {
    paraghraph.innerHTML = `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
    <br /> <br /> ― Marilyn Monroe`;
  } else if (randomNumber == 3) {
    paraghraph.innerHTML = `“So many books, so little time.”
    <br /> <br /> ― Frank Zappa`;
  } else if (randomNumber == 4) {
    paraghraph.innerHTML = `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    <br /> <br /> ― Albert Einstein`;
  } else if (randomNumber == 5) {
    paraghraph.innerHTML = `“A room without books is like a body without a soul.”
    <br /> <br /> ― Marcus Tullius Cicero`;
  } else if (randomNumber == 6) {
    paraghraph.innerHTML = `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
    <br /> <br /> ― Bernard M. Baruch`;
  } else if (randomNumber == 7) {
    paraghraph.innerHTML = `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”
    <br /> <br /> ― William W. Purkey`;
  } else if (randomNumber == 8) {
    paraghraph.innerHTML = `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
    <br /> <br /> ― Dr. Seuss`;
  } else if (randomNumber == 9) {
    paraghraph.innerHTML = `“You only live once, but if you do it right, once is enough.”
    <br /> <br /> ― Mae West`;
  } else if (randomNumber == 10) {
    paraghraph.innerHTML = `“Be the change that you wish to see in the world.”
    <br /> <br /> ― Mahatma Gandhi`;
  }
}
