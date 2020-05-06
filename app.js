console.error("hi");

// Defines what category we're choosing and updates the webpage with this. Customize these with your own category and items!
let games = "Game";
document.querySelector("#games").innerText = games;

// Defines our options to choose from
let options = [
  "zelda breath  of  the wild ",
  "clash royale",
  "the last of us",
  "grand theft auto",
  "call of duty",
  "league of legends",
  "fornite"
];
const optionsList = document.querySelector("#options");

// ********************************
// 1. Alphabetize the options list (2 points)
// ********************************
// Your code here:
options.sort();
// ********************************
// 2. Make the options list use title case (4 points)
// ********************************
// The first letter of each word should be capitalized. Make it skip words like "and", "a", "the", "to", etc.
// Your code here:

for (let i = 0; i < options.length; i += 1) {
  let words = options[i].split(" ");
  for (let j = 0; j < words.length; j++) {
    words[j] = words[j].slice(0, 1).toUpperCase() + words[j].slice(1);
  }
  options[i] = words.join(" ");
}

// Don't code #2 past this point.
// This forEach loop renders our options in the webpage:
options.forEach((option, index) => {
  const listItem = document.createElement("li");
  listItem.innerText = option;
  listItem.id = `item-${index}`;
  listItem.classList.add("active");
  optionsList.append(listItem);
});

// Declares a variable equal to our button
const button = document.querySelector("button");

// ********************************
// 3. Write a function that accepts a max numbers as a parameter and returns a random number between 0 and that number. (2 points)
// ********************************
// Your code here:
function randomNum(max) {
  return Math.floor(Math.random() * max);
}

// ********************************
// 4. Make it so that when someone clicks the "choose" button, a random item in the list gets highlighted with a different background color. (4 points)
// ********************************
// Your code here:

let style = document.querySelector("#options");
function changeColor() {
  let randomColor = `hsl(${randomNum(271)}, 80%, 50%)`;
  return randomColor;
}
function randomItem(e) {
  let number = randomNum(options.length);
  const item = document.querySelector("#item-" + number);
  item.style.backgroundColor = changeColor();
}

button.addEventListener("click", randomItem);

// ********************************
// 5. (Optional Bonus) Oops! Refactor your code to not update the background color directly but to instead add/remove the class "choice" so that each time the button is clicked, the previously chosen item returns to normal, and a new item is selected (2 bonus points).
// ********************************
// Your code here:
