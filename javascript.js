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


