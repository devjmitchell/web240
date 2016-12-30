//Rock, Paper, Scissors Game
function playGame() {

var userChoice = 0;

if (document.getElementById("rock").checked) {
    userChoice = "Rock";
} else if (document.getElementById("paper").checked) {
    userChoice = "Paper";
} else if (document.getElementById("scissors").checked) {
    userChoice = "Scissors";
};

var computerChoice = Math.floor(Math.random() * 3);

if (computerChoice === 0) {
    computerChoice = "Rock";
} else if (computerChoice === 1) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissors";
};

var compare = function(choice1, choice2) {
    if (choice1 === 0) {
        alert("I think you forgot something! Make a choice and hit 'Play' again.");
        return;
    } else if (choice1 === choice2) {
        return result = "IT'S A TIE!";
    } else if (choice1 === "Rock") {
        if (choice2 === "Scissors") {
            return result = "YOU WIN";
        } else {
            return result = "COMPUTER WINS";
        }
    } else if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            return result = "YOU WIN";
        } else {
            return result = "COMPUTER WINS";
        }
    } else {
        if (choice2 === "Rock") {
            return result = "COMPUTER WINS";
        } else {
            return result = "YOU WIN";
        }
    }
};

compare(userChoice, computerChoice);
alert("You chose: " + userChoice + "\nComputer chose: " + computerChoice + "\n" + result);
};


//onfocus & onblur for contact me page
function myFocus(element) {
    if (element.value == element.defaultValue) {
        element.value = '';
    };
};
function myBlur(element) {
    if (element.value == '') {
        element.value = element.defaultValue;
    };
};
