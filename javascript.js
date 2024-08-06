// step 2: Logic to get computer choice 

function getComputerChoice (){

    computerValue = Math.random();
    if (computerValue >= 0 && computerValue <0.33){
        console.log("Computer: rock");
        return "rock";
    }
    else if (computerValue >= 0.34 && computerValue <0.66){
        console.log("Computer: paper");
        return "paper";

    }
    else{
        console.log("Compter: scissors");
        return "scissors";
    }    
}

getComputerChoice()

// step 3: logic for getting human choice 
function getHumanChoice(){
    humanInput = prompt("rock, paper, or scissors?");

    // This trims and lowercases the user's input 
    finalHumanInput = humanInput.trim().toLowerCase();

    if (finalHumanInput ==="rock"){
        console.log("You: rock");
        return "rock";
    }
    else if (finalHumanInput ==="paper"){
        console.log("You: paper");
        return "paper";
    }
    else if (finalHumanInput ==="scissors"){
        console.log("You: scissors");
        return "scissors";
    }
    // If the user inputs anything other than rock paper or scissors, it goes back to the prompt (Credit: https://stackoverflow.com/questions/40606697/how-do-i-loop-back-to-the-prompt-if-answer-is-incorrect)
    else{
        getHumanChoice();
    }

}

// step 4: declaring player score variables
let humanScore = 0;
let computerScore = 0;

// step 5: Single round logic 