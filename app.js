
// const gameStart = () => {
//     const newPlayer = prompt("Please enter your name here", "Your name");
//         if(newPlayer != null) {
//             document.getElementById("startGame").innerHTML =
//             `${newPlayer} vs. Sheldor of Azeroth!`;
//         }
//     }
// let gameStart = () => {
//     let newPlayer = prompt("Please enter your name here", "Your name");
//     let realPlayer = new Player(newPlayer, 0, ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']);
//         if(newPlayer != null) {
//             document.getElementById("startOfGame").innerHTML =
//             `${newPlayer} vs. Sheldor of Azeroth!`;
//             document.getElementById("playerScore").innerHTML =
//             `${newPlayer}'s Score = ${realPlayer.score}`;
//             document.getElementById("computerScore").innerHTML =
//             `${sheldor.name}'s Score = ${sheldor.score}`;
//             document.getElementById("makeYourChoice").innerHTML =
//             `${newPlayer}, Click on Your Weapon Below to Start Play!`
//         }
//         return realPlayer;
// }


class Player {
    constructor(name, score, choices, didWin = false, didLose = false){
        this.name = name;
        this.score = score;
        this.choices = choices;        
        this.didWin = didWin;
        this.didLose = didLose;
    }

gameStart() {
    // let newPlayer = prompt("Please enter your name here", "Your name");
    // let realPlayer = new Player(newPlayer, 0, ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']);
        if(realPlayer.name != null) {
            document.getElementById("startOfGame").innerHTML =
            `${realPlayer.name} vs. Sheldor of Azeroth!`;
            // document.getElementById("playerScore").innerHTML =
            // `${realPlayer.name}'s Score = ${realPlayer.score}`;
            // document.getElementById("computerScore").innerHTML =
            // `${sheldor.name}'s Score = ${sheldor.score}`;
            document.getElementById("makeYourChoice").innerHTML =
            `${realPlayer.name}, Click on Your Weapon Below to Start Play!`
        }
}
    
playerChoosesRock(computer) {
    let rock = document.getElementById("rock").value;
    let random = sheldor.sheldorChooses();
    let shellysScore = sheldor.sheldorsScore();
    let playerScore = realPlayer.score;
    console.log(document.getElementById("clickedChoice").innerHTML =
        `${realPlayer.name} you Chose ${rock} & Sheldor Chose ${random}`); 
    if(rock == random) {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} it\'s a draw! Choose Again.`);
    }else if (random == "Paper") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you lose! Paper covers Rock.`);
    }else if (random == "Scissors") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Win! Rock smashes Scissors.`);
        realPlayer.score += 1;
    }else if (random == "Lizard") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Win! Rock crushes Lizard.`);
        playerScore += 1;
    }else if (random == "Spock") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you lose! Spock vaporizes Rock.`);
        shellysScore += 1;
    }
}

playerChoosesPaper(computer) {
    let paper = document.getElementById("paper").value;
    let random = sheldor.sheldorChooses();
    console.log(document.getElementById("clickedChoice").innerHTML =
        `${realPlayer.name} you Chose ${paper} & Sheldor Chose ${random}`);
    if(paper == random) {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} it\'s a draw! Choose Again.`);
    }else if (random == "Rock") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Win! Paper covers Rock.`);
    }else if (random == "Scissors") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Lose! Scissors cuts Paper.`);
    }else if (random == "Lizard") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Lose! Lizard eats Paper.`);
    }else if (random == "Spock") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Win! Paper disproves Spock.`);
    }
}

playerChoosesScissors(computer) {
    let scissors = document.getElementById("scissors").value;
    let random = sheldor.sheldorChooses();
    console.log(document.getElementById("clickedChoice").innerHTML =
        `${realPlayer.name} you Chose ${scissors} & Sheldor Chose ${random}`); 
    if(scissors == random) {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} it\'s a draw! Choose Again.`);
    }else if (random == "Rock") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Lose! Rock crushes Scissors.`);
    }else if (random == "Paper") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Win! Scissors cuts Paper.`);
    }else if (random == "Lizard") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Win! Scissors decapitates Lizard.`);
    }else if (random == "Spock") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Lose! Spock smashes Scissors.`);
    }
}

playerChoosesLizard(computer) {
    let lizard = document.getElementById("lizard").value;
    let random = sheldor.sheldorChooses();
    console.log(document.getElementById("clickedChoice").innerHTML =
        `${realPlayer.name} you Chose ${lizard} & Sheldor Chose ${random}`); 
    if(lizard == random) {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} it\'s a draw! Choose Again.`);
    }else if (random == "Rock") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Lose! Rock crushes Lizard.`);
    }else if (random == "Paper") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Win! Lizard eats Paper.`);
    }else if (random == "Scissors") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Lose! Scissors decapitates Lizard.`);
    }else if (random == "Spock") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Win! Lizard poisons Spock.`);
    }
}

playerChoosesSpock(computer) {
    let spock = document.getElementById("spock").value;
    let random = sheldor.sheldorChooses();
    console.log(document.getElementById("clickedChoice").innerHTML =
        `${realPlayer.name} you Chose ${spock} & Sheldor Chose ${random}`); 
    if(spock == random) {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} it\'s a draw! Choose Again.`);
    }else if (random == "Rock") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Win! Spock vaporizes Rock.`);
    }else if (random == "Paper") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Lose! Paper disproves Spock.`);
    }else if (random == "Scissors") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Win! Spock smashes Scissors.`);
    }else if (random == "Lizard") {
        console.log(document.getElementById("choiceResult").innerHTML =
        `${realPlayer.name} you Lose! Lizard poisons Spock.`);
    }
}
}

let realPlayer = new Player('Rajesh', 0, ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']);

class Computer {
    constructor(name, score, choices, didWin = false, didLose = false){
        this.name = name;
        this.score = score;
        this.choices = choices;        
        this.didWin = didWin;
        this.didLose = didLose;
    }

sheldorChooses() {
    let sheldorsChoice = sheldor.choices[Math.floor(Math.random() * sheldor.choices.length)];
    return sheldorsChoice;
    }

sheldorsScore() {
    let sheldorScore = this.score;
    return sheldorScore;
}

}

const sheldor = new Computer('Sheldor', 0, ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']);

