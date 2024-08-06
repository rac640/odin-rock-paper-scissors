// Note: I re-did this project, since I messed up the git repository for the initial project. It was good practice though! 

// step 2: Logic to get computer choice 

function getComputerChoice (){

    computerValue = Math.random();
    if (computerValue >= 0 && computerValue <= 0.33){
        console.log("Computer: rock");
        return "rock";
    }
    else if (computerValue >= 0.34 && computerValue <= 0.66){
        console.log("Computer: paper");
        return "paper";

    }
    else {
        console.log("Computer: scissors");
        return "scissors";
    }    
}


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



// step 6: Writing logic to play entire game 

function playGame(){

    // step 4: declaring player score variables
    let humanScore = 0;
    let computerScore = 0;

    // step 5: Single round logic 

    function playRound(humanChoice, computerChoice){
        // For player to win
        if (humanChoice==="rock" && computerChoice==="scissors"){
            alert("You win! Rock beats scissors");
            humanScore++;
            console.log("Your Score: " + humanScore);
            console.log("Terminator's score: "+ computerScore);
            
        }
        else if (humanChoice==="paper" && computerChoice==="rock"){
            alert("You win! Paper beats rock");
            humanScore++;
            console.log("Your Score: " + humanScore);
            console.log("Terminator's score: "+ computerScore);
            
            
        }
        else if (humanChoice ==="scissors" && computerChoice==="paper"){
            alert("You win! scissors beats paper");
            humanScore++;
            console.log("Your Score: " + humanScore);
            console.log("Terminator's score: "+ computerScore);
            
        }
        // for computer to win
        else if (computerChoice==="rock" && humanChoice==="scissors"){
           alert("Terminator wins! Rock beats scissors");
           computerScore++;
            console.log("Your Score: " + humanScore);
            console.log("Terminator's score: "+ computerScore);
            
        }
        else if (computerChoice==="paper" && humanChoice==="rock"){
           alert("Terminator wins! Paper beats rock");
           computerScore++;
            console.log("Your Score: " + humanScore);
            console.log("Terminator's score: "+ computerScore);
            

        }
        else if (computerChoice==="scissors" && humanChoice==="paper"){
            alert("Terminator wins! Scissors beats paper");
            computerScore++;
            console.log("Your Score: " + humanScore);
            console.log("Terminator's score: "+ computerScore);
            
        }
        // for ties
        else {
            alert("Tie! Try again");
            console.log("Your Score: " + humanScore);
            console.log("Terminator's score: "+ computerScore);
            
        }

    }

    // round 1 
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

// round 2 
const humanSelection2 = getHumanChoice();
const computerSelection2 = getComputerChoice();
playRound(humanSelection2,computerSelection2);

// round 3
const humanSelection3 = getHumanChoice();
const computerSelection3 = getComputerChoice();
playRound(humanSelection3, computerSelection3);

// round 4
const humanSelection4 = getHumanChoice();
const computerSelection4 = getComputerChoice();
playRound(humanSelection4, computerSelection4);

// round 5

const humanSelection5 = getHumanChoice();
const computerSelection5 = getComputerChoice();
playRound(humanSelection5, computerSelection5);

if (computerScore > humanScore){
    console.log("Terminator Wins!");
}
else if (computerScore< humanScore){
    console.log("You win!");
}
else{
    console.log("Tie!");
}

}

playGame();


